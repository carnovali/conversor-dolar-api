import { XMLParser } from "fast-xml-parser";
import axios from "axios";

const parser = new XMLParser()

class DolarService {
  getInfoDolar = async () => {
    try {
      const dataDolar = await axios.get(
        "https://www.dolarsi.com/api/dolarSiInfo.xml"
      );
      return parser.parse(dataDolar.data);
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default DolarService;
