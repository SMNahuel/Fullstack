let usuario = {
  email: "nahuelsan@gmail.com",
  password: "123456",
  saldoPesos: 200000,
  saldoDolares: 2000,
  consultaSaldoPesos: function () {
    alert(`$${usuario.saldoPesos}`);
  },
  consultaSaldoDolares: function () {
    alert(`$${usuario.saldoDolares}`);
  },
  extraccionPesos: function (monto) {
    if (monto < this.saldoPesos) {
      this.saldoPesos = this.saldoPesos - monto;
    }
    alert("Extaccion exitosa", usuario.saldoPesos);
  },
  extraccionDolares: function (monto) {
    if (monto < this.saldoDolares) {
      this.saldoDolares = this.saldoDolares - monto;
    }
    alert("Extaccion exitosa", usuario.saldoDolares);
  },
};
