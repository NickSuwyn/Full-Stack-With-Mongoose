namespace database.Services {

  export class HouseService {
    private HOUSE_RESOURCE = this.$resource('/api/houses/:id', null,
      {
          'update': { method:'PUT' }
      });

    static $inject = ['$resource'];

    constructor(private $resource) {}

    public getAllHouses() {
      return this.HOUSE_RESOURCE.query();
    }

    public getHouse(id) {
      return this.HOUSE_RESOURCE.get({id: id});
    }

    public deleteHouse(id) {
      return this.HOUSE_RESOURCE.delete({id: id}).$promise;
    }

    public createHouse(house) {
      return this.HOUSE_RESOURCE.save(house).$promise;
    }

    public updateHouse(id, house) {
      return this.HOUSE_RESOURCE.update({id: id}, house).$promise;
    }
  }

angular.module('database').service('houseService', HouseService);
}
