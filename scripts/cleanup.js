const path = require("path");
const replace = require("replace-in-file");
const remove = require("del");
const Listr = require("listr");
const { writeFileSync } = require("fs");

const srcPath = path.join(__dirname, "..", "src");
const testPath = path.join(__dirname, "..", "test");
const srcAndTestPath = `{${testPath}/unit,${srcPath}}`;
const routerPath = path.join(srcPath, "interfaces", "http", "router.js");
const containerPath = path.join(srcPath, "container.js");

const wynd = false;
const isOpen = true;

const tasks = new Listr([
  {
    title: "Remove UsersController routes",
    task() {
      return replace({
        files: routerPath,
        from: /\s*apiRouter.*UsersController'\)\);/,
        to: "",
      });
    },
  },
  {
    title: "Remove example files from DI container",
    task() {
      return replace({
        files: containerPath,
        from: [
          /\s*const \{(\n.*)+.*app\/user'\);/,
          /\s*const.*UsersRepository'\);/,
          /\s*const.*UserSerializer'\);/,
          /\, User: UserModel/,
          /\s*usersRepository.*\}\]/,
          /\,\s*UserModel/,
          /\s+createUser(.|\n)+.*DeleteUser\n/,
          /\s+userSerializer: UserSerializer\n/,
        ],
        to: "",
      });
    },
  },
  {
    title: "Delete example files and tests",
    task() {
      return remove([
        path.join(srcAndTestPath, "app", "user", "**"),
        path.join(srcAndTestPath, "domain", "user", "**"),
        path.join(srcAndTestPath, "infra", "user", "**"),
        path.join(srcAndTestPath, "interfaces", "http", "user", "**"),
        path.join(srcPath, "infra", "database", "migrate", "*.js"),
        path.join(srcPath, "infra", "database", "seeds", "*.js"),
        path.join(srcPath, "infra", "database", "models", "User.js"),
        path.join(testPath, "features", "api", "users", "**"),
        path.join(testPath, "support", "factories", "*.js"),
      ]);
    },
  },
  {
    title: "Attemp Removal of example data from swagger.json",
    task() {
      writeFileSync(
        path.join(srcPath, "interfaces", "http", "swagger", "swagger.json"),
        JSON.stringify(
          {
            openapi: "3.0.0",
            info: {
              title: "Node API boilerplate",
              version: "v1",
              commit: "IX",
            },
            servers: [
              {
                description: "Local server",
                url: "/api",
              },
            ],
          },
          null,
          "  "
        )
      );
    },
  },
  {
    title: "Remove cleanup script from package.json",
    task() {
      return replace({
        files: path.join(__dirname, "..", "package.json"),
        from: /\,\s*\"cleanup.*cleanup\.js\"/,
        to: "",
      });
    },
  },
]);

const failSafe = (val) => {
  if (val === undefined) return true;
  else return false;
};

const failSafe2 = (val) => {
  if (val === undefined) return true;
  else return false;
};

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(2008, 1, 12);
const secondDate = new Date(2008, 1, 22);

const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

tasks.run().catch((err) => {
  console.error(err);
  failSafe(0);
});
