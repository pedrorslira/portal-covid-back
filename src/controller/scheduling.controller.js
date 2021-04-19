const SchedulingModel = require("../model/scheduling.model");

class Scheduling {
  async index(req, res) {
    const schedulings = await SchedulingModel.find();
    res.send({ data: schedulings });
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

  async getCountSchedulingDate(req, res) {
    const { schedulingDate } = req.params;
    const scheduling = await SchedulingModel.find({
      schedulingDate: schedulingDate,
    }).count();
    res.send({ data: scheduling });
  }

  async getCountSchedulingTime(req, res) {
    const { schedulingDate, schedulingTime } = req.params;
    const scheduling = await SchedulingModel.find({
      schedulingDate: schedulingDate,
      schedulingTime: schedulingTime,
    }).count();
    res.send({ data: scheduling });
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

  async removeAll(req, res) {
    try {
      await SchedulingModel.deleteMany({});
      res.send({
        message: "Todos os agendamentos foram removidos com sucesso.",
      });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async update(req, res) {
    const {
      body,
      params: { id },
    } = req;
    const scheduling = await SchedulingModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.send({ scheduling });
  }
}

module.exports = new Scheduling();
