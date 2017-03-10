namespace database.Controllers {

  export class HousesController {
    public houses; //array of house objects, each house has an array of rooms

    static $inject = ['houseService'];

    constructor(private houseService) {
      this.houses = houseService.getAllHouses();
    }
  }

}
