import Rented from "../models/rented-model.js";

export const store = async (req, res) => {
  try {
    const rented = await Rented.create(req.body);
    res.status(201).json(rented);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const rentedList = await Rented.find()
    .populate("rented_by", "name email")
    .populate("movie_rented", "name director")
    .exec();
    res.json(rentedList);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const rented = await Rented.findById(req.params.id)
    .populate("rented_by","name email")
    .populate("movie_rented", "name director")
    .exec();
    res.json(rented);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const rented = await Rented.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec();
    res.json(rented);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const rented = await Rented.findByIdAndDelete(req.params.id).exec();
    res.json(rented);
  } catch (error) {
    res.status(400).send(error);
  }
};
