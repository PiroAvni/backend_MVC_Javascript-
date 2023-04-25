const Bear = require("../models/BearModel");

const index = async (req, res) => {
  const bears = await Bear.all;
  res.send(bears);
};

const show = async (req, res) => {
  try {
    const bearId = parseInt(req.params.id);
    // console.log("l10, controller/bears:", bearId);
    const bear = await Bear.findById(bearId);
    res.send(bear);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
};

const create = async (req, res) => {
	try {
		const newBear = await Bear.create(req.body);
		res.status(201).send(newBear);
	} catch (err) {
		res.status(422).json({ err });
	}
};

const destroy = async (req, res) => {
	try {
		const bearId = parseInt(req.params.id);
		const bear = await Bear.findById(bearId);
		const result = await bear.destroy();
		res.send(result);
	} catch (err) {
		res.status(404).send({ error: err.message });
	}
};

module.exports = { index, show, create, destroy };
