const SchedulingModel = require("../model/scheduling.model");

class Scheduling {
  async index(req, res) {
    const schedulings = await SchedulingModel.find();
    res.send({ schedulings });
  }

  async store(req, res) {
    const body = req.body;
    const scheduling = await SchedulingModel.create(body);
    res.send({ scheduling });
  }

  async getOne(req, res) {
    const { id } = req.params;
    try {
      const scheduling = await SchedulingModel.findById(id);
      res.send({ data: scheduling });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async remove(req, res) {
    const { id } = req.params;
    try {
      const scheduling = await SchedulingModel.findById(id);
      if (!scheduling) {
        return res.send({ message: "O Agendamento não existe no banco." });
      }
      await scheduling.remove();
      res.send({ message: "Agendamento removido com sucesso." });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = new Scheduling();
