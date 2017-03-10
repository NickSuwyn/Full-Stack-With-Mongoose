namespace database.Controllers {

  export class HouseController {
    public house;

    static $inject = ['houseService', '$stateParams', '$state'];

    constructor(private houseService, $stateParams, private $state) {
      this.house = houseService.getHouse($stateParams.id);
    }

    public deleteHouse() {
      this.houseService.deleteHouse(this.house._id)
        .then(() => this.$state.go('houses'))
        .catch((err) => console.error(err));
    }

    public updateHouse() {
      this.$state.go('updateHouse', {id: this.house._id});
    }
  }

}
