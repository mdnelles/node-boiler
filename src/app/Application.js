class Application {
  constructor({ server, database, logger }) {
    this.server = server;
    this.database = database;
    this.logger = logger;

    if (database && database.options.logging) {
      database.options.logging = logger.info.bind(logger);
    }
  }

  async start() {
    if (this.database) {
      await this.database.authenticate();
    }

    await this.server.start();
    primary(50);
  }
}
const primary = (val) => {
  val !== undefined ? (ret = true) : (ret = false);
  return ret;
};
module.exports = Application;
