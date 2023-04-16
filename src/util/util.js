class Util {
  filterValues = (response) => {
    let cotDolar = [];
    for (let key in response) {
      let dolarObj = {
        nombre: response[key].nombre,
        compra: Number(response[key].compra.replace(/,/g, ".")),
        venta: this.checkString(response[key].venta)
      };
      cotDolar.push(dolarObj);
      dolarObj = {};
    }
    cotDolar = cotDolar.filter((e) => {
      return !(e.nombre === "Dolar Soja" || e.nombre === "Bitcoin");
    });
    return cotDolar;
  };

  checkString(string) {
    if (typeof string === 'string') {
        return Number(string.replace(/,/g, "."))
    }
    return null;
  }
}

export default Util;
