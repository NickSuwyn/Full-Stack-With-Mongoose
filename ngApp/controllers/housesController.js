var database;
(function (database) {
    var Controllers;
    (function (Controllers) {
        var HousesController = (function () {
            function HousesController(houseService, $state) {
                this.houseService = houseService;
                this.$state = $state;
                this.houses = houseService.getAllHouses();
            }
            HousesController.prototype.createNewHouse = function () {
                this.$state.go('newHouse');
            };
            HousesController.prototype.getHouse = function (id) {
                this.$state.go('house', { id: id });
            };
            HousesController.$inject = ['houseService', '$state'];
            return HousesController;
        }());
        Controllers.HousesController = HousesController;
    })(Controllers = database.Controllers || (database.Controllers = {}));
})(database || (database = {}));
