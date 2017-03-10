namespace database.Controllers {

  export class UpdateHouseController {
    public house;
    public room;

    static $inject = ['houseService', '$state', '$stateParams']

    constructor(private houseService, private $state, private $stateParams) {
      this.house = houseService.getHouse($stateParams.id);
    }

    public addRoom() {
      let newRoom = {name:'', area: 0};
      newRoom.name = this.room.name;
      newRoom.area = this.room.area;
      this.house.rooms.unshift(newRoom);
      this.room.name = '';
      this.room.area = '';
    }

    public cancel() {
      this.$state.go('house', {id: this.house._id});
    }

    public saveHouse() {
      this.houseService.updateHouse(this.house._id, this.house)
        .then(() => this.$state.go('house', {id: this.house._id}))
        .catch((err) => console.error(err));
    }
  }

}
