var database;
(function (database) {
    var Controllers;
    (function (Controllers) {
        var NewHouseController = (function () {
            function NewHouseController(houseService, $state) {
                this.houseService = houseService;
                this.$state = $state;
                this.house = {};
                this.house.rooms = [];
            }
            NewHouseController.prototype.addRoom = function () {
                var newRoom = { name: '', area: 0 };
                newRoom.name = this.room.name;
                newRoom.area = this.room.area;
                this.house.rooms.unshift(newRoom);
                this.room.name = '';
                this.room.area = '';
            };
            NewHouseController.prototype.saveHouse = function () {
                var _this = this;
                this.houseService.createHouse(this.house)
                    .then(function () { return _this.$state.go('houses'); })
                    .catch(function (err) { return console.error(err); });
            };
            NewHouseController.$inject = ['houseService', '$state'];
            return NewHouseController;
        }());
        Controllers.NewHouseController = NewHouseController;
    })(Controllers = database.Controllers || (database.Controllers = {}));
})(database || (database = {}));
