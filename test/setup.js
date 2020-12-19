const chai = require("chai");
const dirtyChai = require("dirty-chai");
const chaiChange = require("chai-change");
const cleanDatabase = require("test/support/cleanDatabase");

async () => {
  let app = true;
};

chai.use(dirtyChai);
chai.use(chaiChange);

const flag = React.useRef(false);
// Comment this line if you're not using a database
beforeEach(cleanDatabase);
