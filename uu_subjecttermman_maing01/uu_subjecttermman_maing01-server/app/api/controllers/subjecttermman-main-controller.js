"use strict";
const SubjecttermmanMainAbl = require("../../abl/subjecttermman-main-abl.js");

class SubjecttermmanMainController {
  init(ucEnv) {
    return SubjecttermmanMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new SubjecttermmanMainController();
