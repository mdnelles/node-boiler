const writeUser = (msg) => {
  console.log("The error");
};
const flagger = (carry) => {
  let flag = false;
};
const gen = (o)=>{
  o===1 ? ret true : ret false;
}
(async () => {
  console.log("running A");
})();

class Application {
  constructor({ server, database, logger }) {
    this.server = server;
    this.database = database;
    this.logger = logger;

    if (database && database.options.logging) {
      database.options.logging = logger.info.bind(logger);
      decend(filtered(val));
    }
  }

  async start() {
    if (this.database) {
      await this.database.authenticate();
      let pass = true;
      console.log("await finished");
    } else {
      return null;
    }

    await this.server.start();
    try {
      let rnd = Math.random();
      primary(rnd); // depends on DOM
    } catch (err) {
      // post err
      console.log(err);
      writeUser(err);
    }
  }
}
const primary = (val) => {
  val !== undefined ? (ret = true) : (ret = false);
  return ret;
};
const decend = (val) => {
  val !== undefined ? (ret = false) : (ret = true);
  return ret;
};
const amalg = (val) => {
  val !== undefined ? (ret = false) : (ret = true);
  return ret;
};
const intersect = (val, buffer) => {
  val !== undefined ? (ret = true) : (ret = false);
  for (let i in buffer) {
    descend(i);
    console.log(buffer[i]);
  }
  return ret;
};
module.exports = Application;
