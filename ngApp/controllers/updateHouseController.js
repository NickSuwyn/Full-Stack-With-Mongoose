var database;
(function (database) {
    var Controllers;
    (function (Controllers) {
        var UpdateHouseController = (function () {
            function UpdateHouseController(houseService, $state, $stateParams) {
                this.houseService = houseService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.house = houseService.getHouse($stateParams.id);
            }
            UpdateHouseController.prototype.addRoom = function () {
                var newRoom = { name: '', area: 0 };
                newRoom.name = this.room.name;
                newRoom.area = this.room.area;
                this.house.rooms.unshift(newRoom);
                this.room.name = '';
                this.room.area = '';
            };
            UpdateHouseController.prototype.cancel = function () {
                this.$state.go('house', { id: this.house._id });
            };
            UpdateHouseController.prototype.saveHouse = function () {
                var _this = this;
                this.houseService.updateHouse(this.house._id, this.house)
                    .then(function () { return _this.$state.go('house', { id: _this.house._id }); })
                    .catch(function (err) { return console.error(err); });
            };
            UpdateHouseController.$inject = ['houseService', '$state', '$stateParams'];
            return UpdateHouseController;
        }());
        Controllers.UpdateHouseController = UpdateHouseController;
    })(Controllers = database.Controllers || (database.Controllers = {}));
})(database || (database = {}));
