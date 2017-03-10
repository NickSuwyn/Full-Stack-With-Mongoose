import * as mongoose from 'mongoose';
import {Room} from './room';
import roomSchema from './room';

export interface House extends mongoose.Document {
  name: string;
  rooms: Room[];
}

let houseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rooms: {
    type: [roomSchema]
  }
});

export default mongoose.model<House>('House', houseSchema);
