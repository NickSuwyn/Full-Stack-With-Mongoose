import * as express from 'express';
import House from '../models/house';

let router = express.Router();

router.get('/', (req, res) => {
  House.find()
    .then((houses) => res.json(houses))
    .catch((err) => res.json(err));
});

router.get('/:id', (req, res) => {
  House.findOne({_id: req.params.id})
    .then((house) => res.json(house))
    .catch((err) => res.json(err));
})

router.post('/', (req, res) => {
  let house = new House();
  house.name = req.body.name;
  house.rooms = req.body.rooms;
  house.save()
    .then((newHouse) => res.json(newHouse))
    .catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
  House.findOne({_id: req.params.id})
    .then((house) => {
      house.name = req.body.name;
      house.rooms = req.body.rooms;
      house.save()
        .then((house) => res.json(house))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  House.remove({_id: req.params.id})
    .then((house) => res.json(house))
    .catch((err) => res.json(err));
});

export default router;
