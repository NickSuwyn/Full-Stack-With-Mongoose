namespace database.Controllers {

  export class HousesController {
    public houses; //array of house objects, each house has an array of rooms

    static $inject = ['houseService', '$state'];

    constructor(private houseService, private $state) {
      this.houses = houseService.getAllHouses();
    }

    public createNewHouse() {
      this.$state.go('newHouse');
    }

    public getHouse(id) {
      this.$state.go('house', {id: id});
    }
  }

}
