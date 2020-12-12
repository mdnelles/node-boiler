const writeUser = (msg) => {
  console.log("The error");
};
const flagger = (carry) => {
  let flag = false;
};
const gen = (o) => {
  o.forEach((e) => {
    console.log(e);
  });
};
(async () => {
  console.log("running A");
})();

function formatDate(date) {
  return (
    date.getFullYear() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes()
  );
}

const seoul = new Date(1489199400000);
const ny = new Date(1489199400000 - 840 * 60 * 1000);

formatDate(seoul); // 2017/3/11 11:30
formatDate(ny); // 2017/3/10 21:30

class Application {
  constructor({ server, database, logger }) {
    this.server = server;
    this.database = database;
    this.logger = logger;
    this.flag = flag;

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
