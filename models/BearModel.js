const bearsData = require("../database/index");

class Bear {
  constructor(data) {
    this.name = data.name;
    this.age = data.age;
    this.id = data.id;
  }
  static get all() {
    return bearsData.map((bearData) => new Bear(bearData));
  }

  static async findById(bearId) {
    try {
      const bear = bearsData.filter((bear) => bear.id === bearId)[0]; // change filter to find
      console.log("model - line 15:", bear);
      return new Bear(bear);
    } catch (error) {
      throw new Error("Bear not found");
    }
  }

  static async create(data) {
    try {
      let nextId;
      bearsData.length
        ? nextId =
            bearsData.reduce((b1, b2) => b1.id > b2.id ? b1 : b2).id + 1
        : nextId = 1;

      if (!data.name || !data.age) {
        throw new Error("you need both a name and an age");
      }
console.log(data)
      const newBear = new Bear({ id: nextId, ...data });
      bearsData.push(newBear);
      return newBear;
    } catch (err) {
      throw ("models l36", err.message);
    }
  }

  async destroy() {
    const bear = bearsData.find((b) => b.id === this.id);

    if (bear) {
      const bearIdx = bearsData.indexOf(bear);
      bearsData.splice(bearIdx, 1);
    } else {
      throw new Error("Bear not found");
    }
  }
}

module.exports = Bear;
