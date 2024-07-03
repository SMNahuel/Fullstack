function User(email, password, saldoDolares, saldoPesos) {
  this.email = email;
  this.password = password;
  this.saldoPesos = saldoPesos;
  this.saldoDolares = saldoDolares;

  this.consultaSaldoPesos = function () {
    alert(`$${this.saldoPesos}`);
  };
  this.consultaSaldoDolares = function () {
    alert(`$${this.saldoDolares}`);
  };
  this.extraccionPesos = function (monto) {
    if (monto < this.saldoPesos) {
      this.saldoPesos = this.saldoPesos - monto;
    }
    alert("Extaccion exitosa", this.saldoPesos);
  };
  this.extraccionDolares = function (monto) {
    if (monto < this.saldoDolares) {
      this.saldoDolares = this.saldoDolares - monto;
    }
    alert("Extaccion exitosa", this.saldoDolares);
  };
}

const arrUser = [];
arrUser.push(new User("test@gmail.com", "123456", "8000", "0"));
arrUser.push(new User("test@gmail.com", "123456", "2000", "800"));
arrUser.push(new User("test@gmail.com", "123456", "1000", "30000"));
arrUser.push(new User("test@gmail.com", "123456", "80", "200000"));
arrUser.push(new User("test@gmail.com", "123456", "900", "100180"));
