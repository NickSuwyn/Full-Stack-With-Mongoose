namespace database.Controllers {

  export class NewHouseController {
    public house;
    public room;

    static $inject = ['houseService', '$state']

    constructor(private houseService, private $state) {
      this.house = {};
      this.house.rooms = [];
    }

    public addRoom() {
      let newRoom = {name:'', area: 0};
      newRoom.name = this.room.name;
      newRoom.area = this.room.area;
      this.house.rooms.unshift(newRoom);
      this.room.name = '';
      this.room.area = '';
    }

    public saveHouse() {
      this.houseService.createHouse(this.house)
        .then(() => this.$state.go('houses'))
        .catch((err) => console.error(err));
    }
  }

}
