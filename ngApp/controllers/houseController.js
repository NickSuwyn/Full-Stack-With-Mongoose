var database;
(function (database) {
    var Controllers;
    (function (Controllers) {
        var HouseController = (function () {
            function HouseController(houseService, $stateParams, $state) {
                this.houseService = houseService;
                this.$state = $state;
                this.house = houseService.getHouse($stateParams.id);
            }
            HouseController.prototype.deleteHouse = function () {
                var _this = this;
                this.houseService.deleteHouse(this.house._id)
                    .then(function () { return _this.$state.go('houses'); })
                    .catch(function (err) { return console.error(err); });
            };
            HouseController.prototype.updateHouse = function () {
                this.$state.go('updateHouse', { id: this.house._id });
            };
            HouseController.$inject = ['houseService', '$stateParams', '$state'];
            return HouseController;
        }());
        Controllers.HouseController = HouseController;
    })(Controllers = database.Controllers || (database.Controllers = {}));
})(database || (database = {}));
