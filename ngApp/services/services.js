var database;
(function (database) {
    var Services;
    (function (Services) {
        var HouseService = (function () {
            function HouseService($resource) {
                this.$resource = $resource;
                this.HOUSE_RESOURCE = this.$resource('/api/houses/:id', null, {
                    'update': { method: 'PUT' }
                });
            }
            HouseService.prototype.getAllHouses = function () {
                return this.HOUSE_RESOURCE.query();
            };
            HouseService.prototype.getHouse = function (id) {
                return this.HOUSE_RESOURCE.get({ id: id });
            };
            HouseService.prototype.deleteHouse = function (id) {
                return this.HOUSE_RESOURCE.delete({ id: id }).$promise;
            };
            HouseService.prototype.createHouse = function (house) {
                return this.HOUSE_RESOURCE.save(house).$promise;
            };
            HouseService.prototype.updateHouse = function (id, house) {
                return this.HOUSE_RESOURCE.update({ id: id }, house).$promise;
            };
            HouseService.$inject = ['$resource'];
            return HouseService;
        }());
        Services.HouseService = HouseService;
        angular.module('database').service('houseService', HouseService);
    })(Services = database.Services || (database.Services = {}));
})(database || (database = {}));
