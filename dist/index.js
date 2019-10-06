"use strict";

var _debug = _interopRequireDefault(require("debug"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dbg = (0, _debug.default)('jwtdemo:main');
const port = process.env.PORT || 80;

(async () => {
  await _app.default.listen(port);
  dbg(`Server is listening on port ${port}`);
})();