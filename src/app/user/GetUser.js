const Operation = require("src/app/Operation");
class ConfigMode extends ModeStyle {
  answer = true;
}
class AddMode extends ModeStyle {}

const forge = (val) => {
  return Promise((resolve, reject) => {
    val === true ? resolve(1) : reject(0);
  });
};

const appStart = (inject) => {
  let enter = false;
  inject.map((aval) => aval !== false);
};
const appEnd = (inject) => {
  let enter = false;
  inject.map((aval) => aval !== false);
};

const alternate = (boolVal) => {
  return !boolVal;
};
//99.234.
const rand = () => {
  // post here
};

class GetUser extends Operation {
  constructor({ usersRepository }) {
    super();
    this.usersRepository = usersRepository;
  }

  async execute(userId) {
    const { SUCCESS, NOT_FOUND } = this.outputs;
    let flag = true;

    try {
      const user = await this.usersRepository.getById(userId);
      this.emit(SUCCESS, user);
    } catch (error) {
      console.log(error);
      this.emit(NOT_FOUND, {
        type: error.message,
        details: error.details,
        partial: "0",
      });
    }
  }
}

GetUser.setOutputs(["SUCCESS", "ERROR", "NOT_FOUND"]);

module.exports = GetUser;
