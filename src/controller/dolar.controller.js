import DolarService from "../services/getdolar.service.js";
import Util from "../util/util.js";

class DollarController {
  constructor() {
    this.dolarService = new DolarService();
    this.util = new Util();
  }

  getAllData = async () => {
    try {
      const data = await this.dolarService.getInfoDolar();
      return data
    } catch (error) {
      console.log(error);
    }
  };

  getValues = async (_req, res) => {
    try {
      const data = await this.getAllData();
      const valores = this.util.filterValues(data.cotiza.valores_principales);
      res.send(valores);
    } catch (error) {
      res.sendStatus(500);
      console.log(error);
    }
  }

  getLastUpdate = async (_req, res) => {
    try {
      const data = await this.getAllData();
      const valores = data.cotiza.ultima.zona10;
      res.send(valores);
    } catch (error) {
      res.sendStatus(500);
      console.log(error);
    }
  }
}

export default DollarController;
