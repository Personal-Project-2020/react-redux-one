//const studentSchema = require('./schema.js');

class Model {
  constructor(schema) {
    this.schema = schema;
  }
  async create(data) {
    try {
      let result = new this.schema(data);
      console.log('result from model', result);
      return await result.save();
    } catch (error) {
      console.error(error);
    }
  }
  async read(_id) {
    let result = await this.schema.findById(_id);
    return result;
  }
  async readByQuery(data) {
    let result = await this.schema.find(data);
    return result;
  }
  async update(_id, record) {
    let result = await this.schema.findByIdAndUpdate(_id, record);
    return result;
  }
  async delete(_id) {
    let result = await this.schema.findByIdAndDelete(_id);
    return result;
  }
}

module.exports = Model;
