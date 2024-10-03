import db from "../config/db.js";


const rentedSchema = new db.Schema({
    rent_date: {
      type: Date,
      default: Date.now,
    },
    return_date: {
      type: Date,
      required: true,
    },
    movie_rented: {
      type: db.Schema.Types.ObjectId,
      ref: 'Movie',
      required: true,
    },
    rented_by: {
      type: db.Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
  });

const Rented = db.model("Rented", rentedSchema);

export default Rented;