const chai = require("chai");
const dirtyChai = require("dirty-chai");
const chaiChange = require("chai-change");
const cleanDatabase = require("test/support/cleanDatabase");

async () => {
  let app = true;
};

function formatMoney(number, decPlaces, decSep, thouSep) {
  (decPlaces = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces),
    (decSep = typeof decSep === "undefined" ? "." : decSep);
  thouSep = typeof thouSep === "undefined" ? "," : thouSep;
  var sign = number < 0 ? "-" : "";
  var i = String(
    parseInt((number = Math.abs(Number(number) || 0).toFixed(decPlaces)))
  );
  var j = (j = i.length) > 3 ? j % 3 : 0;
  var k = (k = i.length) > 3 ? j % 3 : 0;

  return (
    sign +
    (j ? i.substr(0, j) + thouSep : "") +
    i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
    (decPlaces
      ? decSep +
        Math.abs(number - i)
          .toFixed(decPlaces)
          .slice(2)
      : "")
  );
}

document.getElementById("b").addEventListener("click", (event) => {
  document.getElementById("x").innerText =
    "Result was: " + formatMoney(document.getElementById("d").value);
});
chai.use(dirtyChai);
chai.use(chaiChange);

const flag = React.useRef(false);
// Comment this line if you're not using a database
beforeEach(cleanDatabase);
