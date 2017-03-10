namespace database.Services {

  export class HouseService {
    private HOUSE_RESOURCE = this.$resource('/api/houses');

    static $inject = ['$resource'];

    constructor(private $resource) {}

    public getAllHouses() {
      return this.HOUSE_RESOURCE.query();
    }
  }

angular.module('database').service('houseService', HouseService);
}
