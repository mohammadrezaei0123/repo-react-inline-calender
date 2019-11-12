"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./InlineCalender.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var YearCalender =
/*#__PURE__*/
function (_React$Component) {
  _inherits(YearCalender, _React$Component);

  function YearCalender(props) {
    var _this;

    _classCallCheck(this, YearCalender);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(YearCalender).call(this, props));
    _this.state = {
      startYear: -1,
      selectedMonthName: "",
      totalMainRow: _this.props.isThreeRow ? 3 : 4,
      totalMainCol: _this.props.isThreeRow ? 4 : 3,
      moveAction: {
        action: "",
        step: 1,
        useJump: false,
        jump: {}
      },
      defFormat: "YYYY-M-",
      startDayMoment: null,
      changeAnim: true,
      currYear: "",
      today: "",
      todayYear: "",
      selectedYear: "",
      selectedMonth: "",
      selectedDay: "",
      currMonth: "",
      momentObject: null,
      sDay: 0,
      inputValue: "",
      lastSelectedNode: null,
      lastSelectedNodeClass: ""
    };
    _this.styleCellCal1 = _this.styleCellCal1.bind(_assertThisInitialized(_this));
    _this.changeMonth = _this.changeMonth.bind(_assertThisInitialized(_this));
    _this.nextMonth = _this.nextMonth.bind(_assertThisInitialized(_this));
    _this.perMonth = _this.perMonth.bind(_assertThisInitialized(_this));
    _this.selecValues = _this.selecValues.bind(_assertThisInitialized(_this));
    _this.goToday = _this.goToday.bind(_assertThisInitialized(_this));
    _this.setDater = _this.setDater.bind(_assertThisInitialized(_this));
    _this.conv = _this.conv.bind(_assertThisInitialized(_this));
    _this.setStators = _this.setStators.bind(_assertThisInitialized(_this));
    _this.watchMoveAction = _this.watchMoveAction.bind(_assertThisInitialized(_this));
    _this.styleStter = _this.styleStter.bind(_assertThisInitialized(_this));
    _this.clearStter = _this.clearStter.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(YearCalender, [{
    key: "setStators",
    value: function setStators(newVal) {
      var actionMethod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var paramAc = arguments.length > 2 ? arguments[2] : undefined;
      this.setState(function () {
        return _objectSpread({}, newVal);
      }, function () {
        if (actionMethod !== null) {
          actionMethod(paramAc);
        }
      });
    }
  }, {
    key: "mCreator",
    value: function mCreator(styleH, statttt) {
      var _this2 = this;

      var parentNode = [];

      var _loop = function _loop(j) {
        var innerNode = [];

        var _loop2 = function _loop2(i) {
          innerNode.push(_react.default.createElement("div", {
            className: "col position-relative",
            key: 'h' + i
          }, _react.default.createElement("div", {
            onClick: function onClick($event) {
              return _this2.selecValues((j - 1) * _this2.state.totalMainCol + i + _this2.state.startYear - 2, $event);
            },
            className: "ratio-child",
            style: _objectSpread({}, _this2.styleCellCal1((j - 1) * _this2.state.totalMainCol + i + _this2.state.startYear - 2), {}, _this2.props.calenderCellWithTextStyle)
          }, _react.default.createElement("div", {
            className: "d-flex justify-content-center align-items-center h-100 w-100"
          }, (j - 1) * _this2.state.totalMainCol + i + _this2.state.startYear - 2))));
        };

        for (var i = 1; i <= _this2.state.totalMainCol; i++) {
          _loop2(i);
        }

        parentNode.push(_react.default.createElement("div", {
          className: "row no-gutters flex-nowrap",
          key: 'jj' + j,
          style: _objectSpread({}, _this2.props.rowCalenderStyle, {}, styleH)
        }, innerNode));
      };

      for (var j = 1; j <= this.state.totalMainRow; j++) {
        _loop(j);
      }

      return parentNode;
    }
  }, {
    key: "watchMoveAction",
    value: function watchMoveAction(val) {
      if (_typeof(val) === "object" && val !== null && typeof val.action !== "undefined" && val.action !== null && (typeof val.useJump === "undefined" || val.useJump === null || !val.useJump)) {
        var v = val.action.toLowerCase();

        if (v == "n" || v == "ne" || v == "nex" || v == "next" || v.indexOf("n") == 0 || v.indexOf("ne") == 0 || v.indexOf("nex") == 0 || v.indexOf("next") == 0) {
          this.nextMonth();
          this.setStators({
            moveAction: val
          });
        } else if (v == "previous" || v == "previou" || v == "previo" || v == "previ" || v == "prev" || v == "pre" || v == "pr" || v == "p" || v.indexOf("previous") == 0 || v.indexOf("previou") == 0 || v.indexOf("previo") == 0 || v.indexOf("previ") == 0 || v.indexOf("prev") == 0 || v.indexOf("pre") == 0 || v.indexOf("pr") == 0 || v.indexOf("p") == 0) {
          this.perMonth();
          this.setStators({
            moveAction: val
          });
        } else if (v == "today" || v == "toda" || v == "tod" || v == "to" || v == "t" || v.indexOf("today") == 0 || v.indexOf("toda") == 0 || v.indexOf("tod") == 0 || v.indexOf("to") == 0 || v.indexOf("t") == 0) {
          this.goToday();
          this.setStators({
            moveAction: val
          });
        }
      } else {
        if (typeof val.useJump !== "undefined" && val.useJump !== null && val.useJump && _typeof(val.jump) === "object" && val.jump !== null) {
          var momentObject = this.state.momentObject;

          if (typeof val.jump.year !== "undefined" && val.jump.year !== null) {
            momentObject.add(val.jump.year, "year");
          }

          if (typeof val.jump.month !== "undefined" && val.jump.month !== null) {
            momentObject.add(val.jump.month, "month");
          }

          if (typeof val.jump.day !== "undefined" && val.jump.day !== null) {
            momentObject.add(val.jump.day, "day");
          }

          this.setStators({
            moveAction: val,
            momentObject: momentObject
          }, this.changeMonth, false);
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var momentObject = (0, _moment.default)();
      var todayYear = momentObject.format("YYYY");

      if (typeof this.props.value !== "undefined" && this.props.value.length > 0) {
        var text = this.props.value;
        var ns = "۰۱۲۳۴۵۶۷۸۹";
        var out = "";
        var length = text.length;

        for (var i = 0; i < length; i++) {
          var c = ns.indexOf(text.charAt(i));
          var nump = parseInt(c);

          if (nump >= 0) {
            out += c;
          } else {
            out += text.charAt(i);
          }
        }

        var ddd = (0, _moment.default)();
        ddd.year(parseInt(out));
        momentObject = ddd;
        var selectedYear = ddd.format("YYYY");
        this.setStators({
          selectedYear: selectedYear
        });
      }

      if (typeof this.props.defYear !== "undefined" && this.props.defYear + "".length > 0 && !!parseInt(this.props.defYear) && parseInt(this.props.defYear) >= 0) {
        momentObject.year(parseInt(this.props.defYear));
        this.setStators({
          currYear: momentObject.format("YYYY")
        });
        this.props.getCurrentYear(momentObject.format("YYYY"));
      }

      this.setStators({
        momentObject: momentObject,
        todayYear: todayYear
      }, this.changeMonth, true);
    }
  }, {
    key: "styleCellCal1",
    value: function styleCellCal1(index) {
      if (index == this.state.selectedYear) {
        return this.props.selectStyle;
      } else {
        if (this.conv(this.state.todayYear) == index) {
          return this.props.todayStyle;
        } else if (this.conv(this.state.todayYear) > index) {
          return this.props.beforeTodayStyle;
        } else {
          return this.props.afterTodayStyle;
        }
      }
    }
  }, {
    key: "changeMonth",
    value: function changeMonth() {
      var isMounted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!isMounted) {
        this.setStators({
          changeAnim: false
        });
        var self = this;
        setTimeout(function () {
          self.setStators({
            changeAnim: true
          });
        }, 500);

        if (this.state.lastSelectedNode != null) {
          this.clearStter(this.state.lastSelectedNode);

          if (this.conv(this.state.selectedYear) == this.conv(this.state.momentObject.format("YYYY"))) {
            this.styleStter(this.state.lastSelectedNode);
          } else {
            this.clearStter(this.state.lastSelectedNode);
          }
        }
      }

      var momentObject = this.state.momentObject;
      momentObject.startOf("month");
      var startDayMoment = momentObject;
      momentObject.endOf("month");
      var currYear = momentObject.format("YYYY");
      var cuurYearString = this.conv(currYear.substr(0, currYear.length - 1));
      var startYear = parseInt(cuurYearString + "0");
      this.setState({
        momentObject: momentObject,
        startDayMoment: startDayMoment,
        cuurYearString: cuurYearString,
        startYear: startYear,
        currYear: currYear
      });
      this.props.getCurrentYear(currYear);
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      var momentObject = this.state.momentObject;
      momentObject.add(10, "year");
      this.setState({
        momentObject: momentObject
      }, this.changeMonth, false);
    }
  }, {
    key: "perMonth",
    value: function perMonth() {
      var momentObject = this.state.momentObject;
      momentObject.add(-10, "year");
      this.setState({
        momentObject: momentObject
      }, this.changeMonth, false);
    }
  }, {
    key: "styleStter",
    value: function styleStter(e) {
      var ob = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _objectSpread({}, this.props.selectStyle);
      Object.keys(ob).forEach(function (v) {
        e.style[v] = ob[v];
      });
    }
  }, {
    key: "clearStter",
    value: function clearStter(e) {
      Object.keys(this.props.selectStyle).forEach(function (v) {
        e.style[v] = '';
      });
    }
  }, {
    key: "selecValues",
    value: function selecValues(index, e) {
      var lastSelectedNode = e.target;

      if (this.state.lastSelectedNode == null) {
        this.setStators({
          lastSelectedNode: lastSelectedNode,
          inputValue: index,
          selectedYear: index
        }, this.props.input, index);
      } else {
        this.clearStter(this.state.lastSelectedNode);
        this.setStators({
          lastSelectedNode: lastSelectedNode,
          inputValue: index,
          selectedYear: index
        }, this.props.input, index);
      }

      this.styleStter(lastSelectedNode);
    }
  }, {
    key: "goToday",
    value: function goToday() {
      var momentObject = (0, _moment.default)();
      this.setStators({
        momentObject: momentObject
      }, this.changeMonth, false);
    }
  }, {
    key: "setDater",
    value: function setDater() {
      this.sDay = this.sDay + 1;
      return this.sDay;
    }
  }, {
    key: "conv",
    value: function conv(val) {
      var text = val + "";

      if (text.length == 0) {
        return "";
      }

      var ns = "۰۱۲۳۴۵۶۷۸۹";
      var out = "";
      var length = text.length;

      for (var i = 0; i < length; i++) {
        var c = text.charAt(i);
        var nump = ns.indexOf(c + "");

        if (nump >= 0) {
          out += nump;
        } else {
          out += c;
        }
      }

      return out;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // You don't have to do this check first, but it can help prevent an unneeded render
      if (this.state.moveAction !== nextProps.moveAction) {
        this.watchMoveAction(nextProps.moveAction);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.props.useRaitoSizing) {
        return _react.default.createElement("div", {
          className: "ratio-parent my-font-calender"
        }, _react.default.createElement("div", {
          className: "ratio-child"
        }, _react.default.createElement("div", {
          className: "container-fluid w-100 h-100",
          style: this.props.mainBodyStyle
        }, this.props.showTitle && _react.default.createElement("div", {
          className: "row no-gutters",
          style: _objectSpread({}, this.props.titleStyle, {}, {
            "height": this.props.raitoTitle * 10 + '%'
          })
        }, _react.default.createElement("div", {
          className: "d-flex justify-content-center align-items-center w-100 h-100"
        }, _react.default.createElement("div", {
          className: "btn btn-small",
          style: {
            cursor: "pointer"
          },
          onClick: this.perMonth
        }, _react.default.createElement("svg", {
          id: "i-chevron-left",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 32",
          width: "18",
          height: "16",
          fill: "none",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          style: this.props.arrowLeftStyle,
          strokeWidth: "7.8125%"
        }, _react.default.createElement("path", {
          d: "M20 30 L8 16 20 2"
        }))), _react.default.createElement("div", {
          className: "d-flex justify-content-around",
          onClick: function onClick() {
            return _this3.props.clickTitle();
          },
          style: _objectSpread({}, {
            minWidth: '20%'
          }, {}, this.props.clickableStyle)
        }, _react.default.createElement("div", null, this.state.startYear - 1 + " - " + (this.state.startYear + 10))), _react.default.createElement("div", {
          className: "btn btn-small danger",
          style: {
            cursor: "pointer"
          },
          onClick: this.nextMonth
        }, _react.default.createElement("svg", {
          id: "i-chevron-right",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 32",
          width: "18",
          height: "16",
          fill: "none",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          style: this.props.arrowRightStyle,
          strokeWidth: "7.8125%"
        }, _react.default.createElement("path", {
          d: "M12 30 L24 16 12 2"
        }))))), this.mCreator({
          height: this.props.raitoBody / this.state.totalMainRow * 10 + '%'
        }), this.props.showFooter && _react.default.createElement("div", {
          className: "row no-gutters",
          style: _objectSpread({}, this.props.footerStyle, {}, {
            height: this.props.raitoFooter * 10 + '%'
          })
        }, _react.default.createElement("div", {
          className: "d-flex justify-content-center w-100"
        }, this.props.showButtonToday && _react.default.createElement("div", {
          className: "btn btn-small d-flex justify-content-center align-items-center",
          style: _objectSpread({}, this.props.todayButtonStyle, {}, {
            cursor: 'pointer'
          }),
          onClick: this.goToday
        }, this.props.todayButtonTitle), this.props.showSelectedValue && _react.default.createElement("div", {
          style: this.props.showSelectedValueStyle
        }, this.state.inputValue))))));
      } else {
        return _react.default.createElement("div", {
          className: "container-fluid my-font-calender",
          style: this.props.mainBodyStyle
        }, this.props.showTitle && _react.default.createElement("div", {
          className: "row no-gutters",
          style: this.props.titleStyle
        }, _react.default.createElement("div", {
          className: "d-flex justify-content-center align-items-center w-100 h-100"
        }, _react.default.createElement("div", {
          className: "btn btn-small",
          style: {
            cursor: "pointer"
          },
          onClick: this.perMonth
        }, _react.default.createElement("svg", {
          id: "i-chevron-left",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 32",
          width: "18",
          height: "16",
          fill: "none",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          style: this.props.arrowLeftStyle,
          strokeWidth: "7.8125%"
        }, _react.default.createElement("path", {
          d: "M20 30 L8 16 20 2"
        }))), _react.default.createElement("div", {
          className: "d-flex justify-content-around",
          onClick: function onClick() {
            return _this3.props.clickTitle();
          },
          style: _objectSpread({}, {
            minWidth: '20%'
          }, {}, this.props.clickableStyle)
        }, _react.default.createElement("div", null, this.state.startYear - 1 + " - " + (this.state.startYear + 10))), _react.default.createElement("div", {
          className: "btn btn-small danger",
          style: {
            cursor: "pointer"
          },
          onClick: this.nextMonth
        }, _react.default.createElement("svg", {
          id: "i-chevron-right",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 32",
          width: "18",
          height: "16",
          fill: "none",
          stroke: "currentcolor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          style: this.props.arrowRightStyle,
          strokeWidth: "7.8125%"
        }, _react.default.createElement("path", {
          d: "M12 30 L24 16 12 2"
        }))))), this.mCreator({}), this.props.showFooter && _react.default.createElement("div", {
          className: "row no-gutters",
          style: this.props.footerStyle
        }, _react.default.createElement("div", {
          className: "d-flex justify-content-center w-100"
        }, this.props.showButtonToday && _react.default.createElement("div", {
          className: "btn btn-small d-flex justify-content-center align-items-center",
          style: _objectSpread({}, this.props.todayButtonStyle, {}, {
            cursor: 'pointer'
          }),
          onClick: this.goToday
        }, this.props.todayButtonTitle), this.props.showSelectedValue && _react.default.createElement("div", {
          style: this.props.showSelectedValueStyle
        }, this.state.inputValue))));
      }
    }
  }]);

  return YearCalender;
}(_react.default.Component);

YearCalender.propTypes = {
  defYear: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  input: _propTypes.default.func,
  getCurrentYear: _propTypes.default.func,
  clickTitle: _propTypes.default.func,
  actionStep: _propTypes.default.number,
  moveAction: _propTypes.default.object,
  isThreeRow: _propTypes.default.bool,
  value: _propTypes.default.string,
  selectedClassName: _propTypes.default.string,
  todayStyle: _propTypes.default.object,
  afterTodayStyle: _propTypes.default.object,
  beforeTodayStyle: _propTypes.default.object,
  selectStyle: _propTypes.default.object,
  calenderCellBodyStyle: _propTypes.default.object,
  calenderCellWithTextStyle: _propTypes.default.object,
  calenderCellNoTextStyle: _propTypes.default.object,
  rowCalenderItemStyle: _propTypes.default.object,
  rowCalenderStyle: _propTypes.default.object,
  headerCalenderItemStyle: _propTypes.default.object,
  mainBodyStyle: _propTypes.default.object,
  arrowRightStyle: _propTypes.default.object,
  arrowLeftStyle: _propTypes.default.object,
  clickableStyle: _propTypes.default.object,
  titleStyle: _propTypes.default.object,
  headerCalenderStyle: _propTypes.default.object,
  footerStyle: _propTypes.default.object,
  todayButtonStyle: _propTypes.default.object,
  showSelectedValueStyle: _propTypes.default.object,
  customFormat: _propTypes.default.string,
  useRaitoSizing: _propTypes.default.bool,
  raitoTitle: _propTypes.default.number,
  raitoTableHedear: _propTypes.default.number,
  raitoBody: _propTypes.default.number,
  raitoFooter: _propTypes.default.number,
  showTitle: _propTypes.default.bool,
  showFooter: _propTypes.default.bool,
  showButtonToday: _propTypes.default.bool,
  showSelectedValue: _propTypes.default.bool,
  calenderItemAnim: _propTypes.default.string,
  monthAnim: _propTypes.default.string,
  todayButtonTitle: _propTypes.default.string
};
YearCalender.defaultProps = {
  input: function input(val) {},
  getCurrentYear: function getCurrentYear(val) {},
  clickTitle: function clickTitle() {},
  defYear: "",
  actionStep: 1,
  moveAction: {
    action: "",
    step: 1,
    useJump: false,
    jump: {}
  },
  isThreeRow: false,
  value: "",
  selectedClassName: "selected",
  todayStyle: {
    color: "#e84545",
    background: "#00adb5",
    boxShadow: "0 0 5px #e84545",
    transition: " all 1s"
  },
  afterTodayStyle: {
    color: "#eeeeee",
    boxShadow: "inset 0 0 10px #eeeeee",
    background: "#222831",
    transition: "all 1s"
  },
  beforeTodayStyle: {
    background: "#eeeeee",
    boxShadow: "inset 0 0 10px #222831",
    color: "#222831",
    transition: "all 1s"
  },
  selectStyle: {
    background: "orangered",
    transition: "all 1s"
  },
  calenderCellBodyStyle: {},
  calenderCellWithTextStyle: {
    userSelect: "none",
    margin: "2px",
    "WebkitUserSelect": "none",
    "MozUserSelect": "none",
    "msUserSelect": "none",
    cursor: "pointer",
    transition: "all 1s"
  },
  calenderCellNoTextStyle: {
    background: "#000",
    color: "#fff",
    margin: "auto"
  },
  rowCalenderItemStyle: {},
  rowCalenderStyle: {
    margin: "0 -14px"
  },
  headerCalenderItemStyle: {
    color: "#eeeeee",
    margin: "auto"
  },
  mainBodyStyle: {
    background: "#393e46",
    border: "2px solid #eee",
    borderRadius: "15px",
    padding: "15px"
  },
  arrowRightStyle: {
    color: "#eeeeee"
  },
  arrowLeftStyle: {
    color: "#eeeeee"
  },
  clickableStyle: {
    cursor: "pointer",
    userSelect: "none",
    "WebkitUserSelect": "none",
    "MozUserSelect": "none",
    "msUserSelect": "none"
  },
  titleStyle: {
    marginTop: "-10px",
    background: "#393e46",
    color: "#eeeeee"
  },
  headerCalenderStyle: {
    background: "#222831",
    margin: "0 -14px"
  },
  footerStyle: {
    marginTop: "14px"
  },
  todayButtonStyle: {
    color: "#eeeeee",
    outline: "none !important"
  },
  showSelectedValueStyle: {
    color: "#eeeeee",
    display: "flex",
    alignItems: "center"
  },
  customFormat: "YYYY/M/D",
  useRaitoSizing: true,
  raitoTitle: 1,
  raitoTableHedear: 1,
  raitoBody: 8,
  raitoFooter: 1,
  showTitle: true,
  showFooter: true,
  showButtonToday: true,
  showSelectedValue: true,
  calenderItemAnim: "slide-fade",
  monthAnim: "fade",
  todayButtonTitle: "Current year"
};
var _default = YearCalender;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb25lbnQvWWVhckNhbGVuZGVyLmpzeCJdLCJuYW1lcyI6WyJZZWFyQ2FsZW5kZXIiLCJwcm9wcyIsInN0YXRlIiwic3RhcnRZZWFyIiwic2VsZWN0ZWRNb250aE5hbWUiLCJ0b3RhbE1haW5Sb3ciLCJpc1RocmVlUm93IiwidG90YWxNYWluQ29sIiwibW92ZUFjdGlvbiIsImFjdGlvbiIsInN0ZXAiLCJ1c2VKdW1wIiwianVtcCIsImRlZkZvcm1hdCIsInN0YXJ0RGF5TW9tZW50IiwiY2hhbmdlQW5pbSIsImN1cnJZZWFyIiwidG9kYXkiLCJ0b2RheVllYXIiLCJzZWxlY3RlZFllYXIiLCJzZWxlY3RlZE1vbnRoIiwic2VsZWN0ZWREYXkiLCJjdXJyTW9udGgiLCJtb21lbnRPYmplY3QiLCJzRGF5IiwiaW5wdXRWYWx1ZSIsImxhc3RTZWxlY3RlZE5vZGUiLCJsYXN0U2VsZWN0ZWROb2RlQ2xhc3MiLCJzdHlsZUNlbGxDYWwxIiwiYmluZCIsImNoYW5nZU1vbnRoIiwibmV4dE1vbnRoIiwicGVyTW9udGgiLCJzZWxlY1ZhbHVlcyIsImdvVG9kYXkiLCJzZXREYXRlciIsImNvbnYiLCJzZXRTdGF0b3JzIiwid2F0Y2hNb3ZlQWN0aW9uIiwic3R5bGVTdHRlciIsImNsZWFyU3R0ZXIiLCJuZXdWYWwiLCJhY3Rpb25NZXRob2QiLCJwYXJhbUFjIiwic2V0U3RhdGUiLCJzdHlsZUgiLCJzdGF0dHR0IiwicGFyZW50Tm9kZSIsImoiLCJpbm5lck5vZGUiLCJpIiwicHVzaCIsIiRldmVudCIsImNhbGVuZGVyQ2VsbFdpdGhUZXh0U3R5bGUiLCJyb3dDYWxlbmRlclN0eWxlIiwidmFsIiwidiIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInllYXIiLCJhZGQiLCJtb250aCIsImRheSIsImZvcm1hdCIsInZhbHVlIiwibGVuZ3RoIiwidGV4dCIsIm5zIiwib3V0IiwiYyIsImNoYXJBdCIsIm51bXAiLCJwYXJzZUludCIsImRkZCIsImRlZlllYXIiLCJnZXRDdXJyZW50WWVhciIsImluZGV4Iiwic2VsZWN0U3R5bGUiLCJ0b2RheVN0eWxlIiwiYmVmb3JlVG9kYXlTdHlsZSIsImFmdGVyVG9kYXlTdHlsZSIsImlzTW91bnRlZCIsInNlbGYiLCJzZXRUaW1lb3V0Iiwic3RhcnRPZiIsImVuZE9mIiwiY3V1clllYXJTdHJpbmciLCJzdWJzdHIiLCJlIiwib2IiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInN0eWxlIiwidGFyZ2V0IiwiaW5wdXQiLCJuZXh0UHJvcHMiLCJ1c2VSYWl0b1NpemluZyIsIm1haW5Cb2R5U3R5bGUiLCJzaG93VGl0bGUiLCJ0aXRsZVN0eWxlIiwicmFpdG9UaXRsZSIsImN1cnNvciIsImFycm93TGVmdFN0eWxlIiwiY2xpY2tUaXRsZSIsIm1pbldpZHRoIiwiY2xpY2thYmxlU3R5bGUiLCJhcnJvd1JpZ2h0U3R5bGUiLCJtQ3JlYXRvciIsImhlaWdodCIsInJhaXRvQm9keSIsInNob3dGb290ZXIiLCJmb290ZXJTdHlsZSIsInJhaXRvRm9vdGVyIiwic2hvd0J1dHRvblRvZGF5IiwidG9kYXlCdXR0b25TdHlsZSIsInRvZGF5QnV0dG9uVGl0bGUiLCJzaG93U2VsZWN0ZWRWYWx1ZSIsInNob3dTZWxlY3RlZFZhbHVlU3R5bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiLCJhY3Rpb25TdGVwIiwib2JqZWN0IiwiYm9vbCIsInNlbGVjdGVkQ2xhc3NOYW1lIiwiY2FsZW5kZXJDZWxsQm9keVN0eWxlIiwiY2FsZW5kZXJDZWxsTm9UZXh0U3R5bGUiLCJyb3dDYWxlbmRlckl0ZW1TdHlsZSIsImhlYWRlckNhbGVuZGVySXRlbVN0eWxlIiwiaGVhZGVyQ2FsZW5kZXJTdHlsZSIsImN1c3RvbUZvcm1hdCIsInJhaXRvVGFibGVIZWRlYXIiLCJjYWxlbmRlckl0ZW1BbmltIiwibW9udGhBbmltIiwiZGVmYXVsdFByb3BzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsInVzZXJTZWxlY3QiLCJtYXJnaW4iLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwib3V0bGluZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsWTs7Ozs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixzRkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxTQUFTLEVBQUMsQ0FBQyxDQURBO0FBRVhDLE1BQUFBLGlCQUFpQixFQUFDLEVBRlA7QUFHWEMsTUFBQUEsWUFBWSxFQUFHLE1BQUtKLEtBQUwsQ0FBV0ssVUFBWixHQUEwQixDQUExQixHQUE4QixDQUhqQztBQUlYQyxNQUFBQSxZQUFZLEVBQUcsTUFBS04sS0FBTCxDQUFXSyxVQUFaLEdBQTBCLENBQTFCLEdBQThCLENBSmpDO0FBS1hFLE1BQUFBLFVBQVUsRUFBRTtBQUNWQyxRQUFBQSxNQUFNLEVBQUUsRUFERTtBQUVWQyxRQUFBQSxJQUFJLEVBQUUsQ0FGSTtBQUdWQyxRQUFBQSxPQUFPLEVBQUUsS0FIQztBQUlWQyxRQUFBQSxJQUFJLEVBQUU7QUFKSSxPQUxEO0FBV1hDLE1BQUFBLFNBQVMsRUFBRSxTQVhBO0FBWVhDLE1BQUFBLGNBQWMsRUFBRSxJQVpMO0FBYVhDLE1BQUFBLFVBQVUsRUFBRSxJQWJEO0FBY1hDLE1BQUFBLFFBQVEsRUFBRSxFQWRDO0FBZVhDLE1BQUFBLEtBQUssRUFBRSxFQWZJO0FBZ0JYQyxNQUFBQSxTQUFTLEVBQUUsRUFoQkE7QUFpQlhDLE1BQUFBLFlBQVksRUFBRSxFQWpCSDtBQWtCWEMsTUFBQUEsYUFBYSxFQUFFLEVBbEJKO0FBbUJYQyxNQUFBQSxXQUFXLEVBQUUsRUFuQkY7QUFvQlhDLE1BQUFBLFNB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QUEsVUFBVSxFQUFFO0FBSFUsR0F6R0U7QUE4RzFCakIsRUFBQUEsWUFBWSxFQUFFLFVBOUdZO0FBK0cxQnZDLEVBQUFBLGNBQWMsRUFBRSxJQS9HVTtBQWdIMUJJLEVBQUFBLFVBQVUsRUFBRSxDQWhIYztBQWlIMUJvQyxFQUFBQSxnQkFBZ0IsRUFBRSxDQWpIUTtBQWtIMUIzQixFQUFBQSxTQUFTLEVBQUUsQ0FsSGU7QUFtSDFCRyxFQUFBQSxXQUFXLEVBQUUsQ0FuSGE7QUFvSDFCZCxFQUFBQSxTQUFTLEVBQUUsSUFwSGU7QUFxSDFCWSxFQUFBQSxVQUFVLEVBQUUsSUFySGM7QUFzSDFCRyxFQUFBQSxlQUFlLEVBQUUsSUF0SFM7QUF1SDFCRyxFQUFBQSxpQkFBaUIsRUFBRSxJQXZITztBQXdIMUJxQixFQUFBQSxnQkFBZ0IsRUFBRSxZQXhIUTtBQXlIMUJDLEVBQUFBLFNBQVMsRUFBRSxNQXpIZTtBQTBIMUJ2QixFQUFBQSxnQkFBZ0IsRUFBRTtBQTFIUSxDQUE1QjtlQThIZXBILFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0ICcuL0lubGluZUNhbGVuZGVyLmNzcyc7XHJcblxyXG5jbGFzcyBZZWFyQ2FsZW5kZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzdGFydFllYXI6LTEsXHJcbiAgICAgIHNlbGVjdGVkTW9udGhOYW1lOlwiXCIsXHJcbiAgICAgIHRvdGFsTWFpblJvdzogKHRoaXMucHJvcHMuaXNUaHJlZVJvdykgPyAzIDogNCxcclxuICAgICAgdG90YWxNYWluQ29sOiAodGhpcy5wcm9wcy5pc1RocmVlUm93KSA/IDQgOiAzLFxyXG4gICAgICBtb3ZlQWN0aW9uOiB7XHJcbiAgICAgICAgYWN0aW9uOiBcIlwiLFxyXG4gICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgdXNlSnVtcDogZmFsc2UsXHJcbiAgICAgICAganVtcDoge31cclxuICAgICAgfSxcclxuICAgICAgZGVmRm9ybWF0OiBcIllZWVktTS1cIixcclxuICAgICAgc3RhcnREYXlNb21lbnQ6IG51bGwsXHJcbiAgICAgIGNoYW5nZUFuaW06IHRydWUsXHJcbiAgICAgIGN1cnJZZWFyOiBcIlwiLFxyXG4gICAgICB0b2RheTogXCJcIixcclxuICAgICAgdG9kYXlZZWFyOiBcIlwiLFxyXG4gICAgICBzZWxlY3RlZFllYXI6IFwiXCIsXHJcbiAgICAgIHNlbGVjdGVkTW9udGg6IFwiXCIsXHJcbiAgICAgIHNlbGVjdGVkRGF5OiBcIlwiLFxyXG4gICAgICBjdXJyTW9udGg6IFwiXCIsXHJcbiAgICAgIG1vbWVudE9iamVjdDogbnVsbCxcclxuICAgICAgc0RheTogMCxcclxuICAgICAgaW5wdXRWYWx1ZTogXCJcIixcclxuICAgICAgbGFzdFNlbGVjdGVkTm9kZTogbnVsbCxcclxuICAgICAgbGFzdFNlbGVjdGVkTm9kZUNsYXNzOiBcIlwiXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zdHlsZUNlbGxDYWwxID0gdGhpcy5zdHlsZUNlbGxDYWwxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNoYW5nZU1vbnRoID0gdGhpcy5jaGFuZ2VNb250aC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5uZXh0TW9udGggPSB0aGlzLm5leHRNb250aC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5wZXJNb250aCA9IHRoaXMucGVyTW9udGguYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2VsZWNWYWx1ZXMgPSB0aGlzLnNlbGVjVmFsdWVzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdvVG9kYXkgPSB0aGlzLmdvVG9kYXkuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0RGF0ZXIgPSB0aGlzLnNldERhdGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvbnYgPSB0aGlzLmNvbnYuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0U3RhdG9ycyA9IHRoaXMuc2V0U3RhdG9ycy5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLndhdGNoTW92ZUFjdGlvbiA9IHRoaXMud2F0Y2hNb3ZlQWN0aW9uLmJpbmQodGhpcylcclxuICAgIFxyXG4gICAgdGhpcy5zdHlsZVN0dGVyID0gdGhpcy5zdHlsZVN0dGVyLmJpbmQodGhpcyk7XHJcbiAgICBcclxuICAgIHRoaXMuY2xlYXJTdHRlciA9IHRoaXMuY2xlYXJTdHRlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBzZXRTdGF0b3JzKG5ld1ZhbCwgYWN0aW9uTWV0aG9kID0gbnVsbCwgcGFyYW1BYykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiB7XHJcbiAgICAgIHJldHVybiAoe1xyXG4gICAgICAgIC4uLm5ld1ZhbFxyXG5cclxuICAgICAgfSlcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgaWYgKGFjdGlvbk1ldGhvZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGFjdGlvbk1ldGhvZChwYXJhbUFjKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBtQ3JlYXRvcihzdHlsZUgsIHN0YXR0dHQpIHtcclxuICAgIGxldCBwYXJlbnROb2RlID0gW11cclxuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IHRoaXMuc3RhdGUudG90YWxNYWluUm93OyBqKyspIHtcclxuICAgICAgbGV0IGlubmVyTm9kZSA9IFtdXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMuc3RhdGUudG90YWxNYWluQ29sOyBpKyspIHtcclxuICAgICAgICBpbm5lck5vZGUucHVzaChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBvc2l0aW9uLXJlbGF0aXZlXCIga2V5PXsnaCcgKyBpfT5cclxuICAgICAgICAgICAgey8qIDx0cmFuc2l0aW9uIG5hbWU9XCJjYWxlbmRlckl0ZW1BbmltXCI+ICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoJGV2ZW50KT0+dGhpcy5zZWxlY1ZhbHVlcygoKCgoai0xKSp0aGlzLnN0YXRlLnRvdGFsTWFpbkNvbCkraSkrdGhpcy5zdGF0ZS5zdGFydFllYXItMiksJGV2ZW50KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhdGlvLWNoaWxkXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Li4udGhpcy5zdHlsZUNlbGxDYWwxKCgoKGotMSkqdGhpcy5zdGF0ZS50b3RhbE1haW5Db2wpK2kpK3RoaXMuc3RhdGUuc3RhcnRZZWFyLTIpLC4uLnRoaXMucHJvcHMuY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZX19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDAgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgPntcclxuICAgICAgICAgICAgICAgICAgKCgoKGotMSkqdGhpcy5zdGF0ZS50b3RhbE1haW5Db2wpK2kpK3RoaXMuc3RhdGUuc3RhcnRZZWFyLTIpXHJcbiAgICAgICAgICAgICAgICB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8L3RyYW5zaXRpb24+ICovfVxyXG4gICAgICAgICAgPC9kaXY+KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwYXJlbnROb2RlLnB1c2goPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIGZsZXgtbm93cmFwXCJcclxuICAgICAgICBrZXk9eydqaicgKyBqfVxyXG4gICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgIHsgLi4udGhpcy5wcm9wcy5yb3dDYWxlbmRlclN0eWxlLCAuLi5zdHlsZUggfVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtpbm5lck5vZGV9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudE5vZGVcclxuICB9XHJcbiAgd2F0Y2hNb3ZlQWN0aW9uKHZhbCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgIHZhbCAhPT0gbnVsbCAmJlxyXG4gICAgICB0eXBlb2YgdmFsLmFjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICB2YWwuYWN0aW9uICE9PSBudWxsICYmXHJcbiAgICAgICh0eXBlb2YgdmFsLnVzZUp1bXAgPT09IFwidW5kZWZpbmVkXCIgfHxcclxuICAgICAgICB2YWwudXNlSnVtcCA9PT0gbnVsbCB8fFxyXG4gICAgICAgICF2YWwudXNlSnVtcClcclxuICAgICkge1xyXG4gICAgICBsZXQgdiA9IHZhbC5hY3Rpb24udG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHYgPT0gXCJuXCIgfHxcclxuICAgICAgICB2ID09IFwibmVcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJuZXhcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJuZXh0XCIgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJuXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJuZVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwibmV4XCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJuZXh0XCIpID09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0TW9udGgoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgICAgbW92ZUFjdGlvbjogdmFsLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgdiA9PSBcInByZXZpb3VzXCIgfHxcclxuICAgICAgICB2ID09IFwicHJldmlvdVwiIHx8XHJcbiAgICAgICAgdiA9PSBcInByZXZpb1wiIHx8XHJcbiAgICAgICAgdiA9PSBcInByZXZpXCIgfHxcclxuICAgICAgICB2ID09IFwicHJldlwiIHx8XHJcbiAgICAgICAgdiA9PSBcInByZVwiIHx8XHJcbiAgICAgICAgdiA9PSBcInByXCIgfHxcclxuICAgICAgICB2ID09IFwicFwiIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJldmlvdXNcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZXZpb3VcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZXZpb1wiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJldmlcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZXZcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInBcIikgPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnBlck1vbnRoKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICAgIG1vdmVBY3Rpb246IHZhbCxcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHYgPT0gXCJ0b2RheVwiIHx8XHJcbiAgICAgICAgdiA9PSBcInRvZGFcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJ0b2RcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJ0b1wiIHx8XHJcbiAgICAgICAgdiA9PSBcInRcIiB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInRvZGF5XCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJ0b2RhXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJ0b2RcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInRvXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJ0XCIpID09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5nb1RvZGF5KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICAgIG1vdmVBY3Rpb246IHZhbCxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdHlwZW9mIHZhbC51c2VKdW1wICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgICAgdmFsLnVzZUp1bXAgIT09IG51bGwgJiZcclxuICAgICAgICB2YWwudXNlSnVtcCAmJlxyXG4gICAgICAgIHR5cGVvZiB2YWwuanVtcCA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgIHZhbC5qdW1wICE9PSBudWxsXHJcbiAgICAgICkge1xyXG4gICAgICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsLmp1bXAueWVhciAhPT0gXCJ1bmRlZmluZWRcIiAmJiB2YWwuanVtcC55ZWFyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBtb21lbnRPYmplY3QuYWRkKHZhbC5qdW1wLnllYXIsIFwieWVhclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdHlwZW9mIHZhbC5qdW1wLm1vbnRoICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgICAgICB2YWwuanVtcC5tb250aCAhPT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgbW9tZW50T2JqZWN0LmFkZCh2YWwuanVtcC5tb250aCwgXCJtb250aFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwuanVtcC5kYXkgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsLmp1bXAuZGF5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBtb21lbnRPYmplY3QuYWRkKHZhbC5qdW1wLmRheSwgXCJkYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgICBtb3ZlQWN0aW9uOiB2YWwsXHJcbiAgICAgICAgICBtb21lbnRPYmplY3RcclxuICAgICAgICB9LCB0aGlzLmNoYW5nZU1vbnRoLCBmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSBtb21lbnQoKTtcclxuICAgIGxldCB0b2RheVllYXIgPSBtb21lbnRPYmplY3QuZm9ybWF0KFwiWVlZWVwiKTtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLnByb3BzLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHRleHQgPSB0aGlzLnByb3BzLnZhbHVlO1xyXG4gICAgICB2YXIgbnMgPSBcItuw27Hbstuz27Tbtdu227fbuNu5XCI7XHJcbiAgICAgIGxldCBvdXQgPSBcIlwiO1xyXG4gICAgICBsZXQgbGVuZ3RoID0gdGV4dC5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYyA9IG5zLmluZGV4T2YodGV4dC5jaGFyQXQoaSkpO1xyXG4gICAgICAgIGxldCBudW1wID0gcGFyc2VJbnQoYyk7XHJcbiAgICAgICAgaWYgKG51bXAgPj0gMCkge1xyXG4gICAgICAgICAgb3V0ICs9IGM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG91dCArPSB0ZXh0LmNoYXJBdChpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgbGV0IGRkZD1tb21lbnQoKVxyXG4gICBkZGQueWVhcihwYXJzZUludChvdXQpKVxyXG4gICBtb21lbnRPYmplY3Q9ZGRkXHJcbiAgICAgICAgIGxldCBzZWxlY3RlZFllYXIgPSBkZGQuZm9ybWF0KFwiWVlZWVwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBzZWxlY3RlZFllYXIsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2YgdGhpcy5wcm9wcy5kZWZZZWFyICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgIHRoaXMucHJvcHMuZGVmWWVhciArIFwiXCIubGVuZ3RoID4gMCAmJlxyXG4gICAgICAoISFwYXJzZUludCh0aGlzLnByb3BzLmRlZlllYXIpICYmIHBhcnNlSW50KHRoaXMucHJvcHMuZGVmWWVhcikgPj0gMClcclxuICAgICkge1xyXG4gICAgICBtb21lbnRPYmplY3QueWVhcihwYXJzZUludCh0aGlzLnByb3BzLmRlZlllYXIpKTtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHsgY3VyclllYXI6IG1vbWVudE9iamVjdC5mb3JtYXQoXCJZWVlZXCIpIH0pXHJcbiAgICAgIFxyXG4gICAgdGhpcy5wcm9wcy5nZXRDdXJyZW50WWVhcihtb21lbnRPYmplY3QuZm9ybWF0KFwiWVlZWVwiKSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgbW9tZW50T2JqZWN0LFxyXG4gICAgICB0b2RheVllYXJcclxuXHJcbiAgICB9LCB0aGlzLmNoYW5nZU1vbnRoLCB0cnVlKVxyXG4gIH1cclxuICBzdHlsZUNlbGxDYWwxKGluZGV4KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGluZGV4PT10aGlzLnN0YXRlLnNlbGVjdGVkWWVhclxyXG4gICAgKXtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0U3R5bGVcclxuICAgIH1lbHNle1xyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5jb252KHRoaXMuc3RhdGUudG9kYXlZZWFyKT09aW5kZXgpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy50b2RheVN0eWxlO1xyXG4gICAgICB9ZWxzZSBpZih0aGlzLmNvbnYodGhpcy5zdGF0ZS50b2RheVllYXIpPmluZGV4KXtcclxuICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYmVmb3JlVG9kYXlTdHlsZTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWZ0ZXJUb2RheVN0eWxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VNb250aChpc01vdW50ZWQgPSBmYWxzZSkge1xyXG4gICAgaWYgKCFpc01vdW50ZWQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHsgY2hhbmdlQW5pbTogZmFsc2UgfSlcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWxmLnNldFN0YXRvcnMoeyBjaGFuZ2VBbmltOiB0cnVlIH0pXHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUgIT0gbnVsbCkge1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMuY29udih0aGlzLnN0YXRlLnNlbGVjdGVkWWVhcikgPT0gXHJcbiAgICAgICAgICB0aGlzLmNvbnYodGhpcy5zdGF0ZS5tb21lbnRPYmplY3QuZm9ybWF0KFwiWVlZWVwiKSApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnN0eWxlU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFyU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LnN0YXJ0T2YoXCJtb250aFwiKTtcclxuICAgIGxldCBzdGFydERheU1vbWVudCA9IG1vbWVudE9iamVjdDtcclxuICAgIG1vbWVudE9iamVjdC5lbmRPZihcIm1vbnRoXCIpO1xyXG5cclxuXHJcbiAgICBsZXQgY3VyclllYXIgPSBtb21lbnRPYmplY3QuZm9ybWF0KFwiWVlZWVwiKTtcclxuICAgIGxldCBjdXVyWWVhclN0cmluZz10aGlzLmNvbnYoY3VyclllYXIuc3Vic3RyKDAsY3VyclllYXIubGVuZ3RoLTEpKVxyXG4gICAgXHJcbiAgICBsZXQgc3RhcnRZZWFyPXBhcnNlSW50KGN1dXJZZWFyU3RyaW5nK1wiMFwiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtb21lbnRPYmplY3QsXHJcbiAgICAgIHN0YXJ0RGF5TW9tZW50LFxyXG4gICAgICBjdXVyWWVhclN0cmluZyxcclxuICAgICAgc3RhcnRZZWFyLFxyXG4gICAgICBjdXJyWWVhclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmdldEN1cnJlbnRZZWFyKGN1cnJZZWFyKVxyXG4gICAgXHJcbiAgfVxyXG4gIG5leHRNb250aCgpIHtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LmFkZCgxMCwgXCJ5ZWFyXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vbWVudE9iamVjdFxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpO1xyXG4gIH1cclxuICBwZXJNb250aCgpIHtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LmFkZCgtMTAsIFwieWVhclwiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtb21lbnRPYmplY3RcclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIGZhbHNlKTtcclxuICB9XHJcbiAgc3R5bGVTdHRlcihlLG9iPXtcclxuICAgIC4uLnRoaXMucHJvcHMuc2VsZWN0U3R5bGV9KXtcclxuICAgIE9iamVjdC5rZXlzKG9iKS5mb3JFYWNoKHY9PntcclxuXHJcbiAgICAgIGUuc3R5bGVbdl09b2Jbdl1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGNsZWFyU3R0ZXIoZSl7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdFN0eWxlKS5mb3JFYWNoKHY9PntcclxuICAgICAgZS5zdHlsZVt2XT0nJ1xyXG4gICAgfSlcclxuICB9XHJcbiAgc2VsZWNWYWx1ZXMoaW5kZXgsIGUpIHtcclxuICAgIFxyXG4gICAgbGV0IGxhc3RTZWxlY3RlZE5vZGUgPSBlLnRhcmdldDtcclxuICAgIGlmICh0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgIGxhc3RTZWxlY3RlZE5vZGUsXHJcbiAgICAgICAgaW5wdXRWYWx1ZTppbmRleCxcclxuICAgICAgICBzZWxlY3RlZFllYXI6aW5kZXgsXHJcbiAgICAgIH0sIHRoaXMucHJvcHMuaW5wdXQsIGluZGV4KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbGVhclN0dGVyKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSlcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBsYXN0U2VsZWN0ZWROb2RlLFxyXG4gICAgICAgIGlucHV0VmFsdWU6aW5kZXgsXHJcbiAgICAgICAgc2VsZWN0ZWRZZWFyOmluZGV4LFxyXG4gICAgICB9LCB0aGlzLnByb3BzLmlucHV0LFxyXG4gICAgICBpbmRleClcclxuICAgIH1cclxuICAgIHRoaXMuc3R5bGVTdHRlcihsYXN0U2VsZWN0ZWROb2RlKVxyXG4gIH1cclxuICBnb1RvZGF5KCkge1xyXG4gICAgbGV0IG1vbWVudE9iamVjdCA9IG1vbWVudCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgbW9tZW50T2JqZWN0XHJcbiAgICB9LCB0aGlzLmNoYW5nZU1vbnRoLCBmYWxzZSlcclxuICB9XHJcblxyXG4gIHNldERhdGVyKCkge1xyXG4gICAgdGhpcy5zRGF5ID0gdGhpcy5zRGF5ICsgMTtcclxuICAgIHJldHVybiB0aGlzLnNEYXk7XHJcbiAgfVxyXG4gIGNvbnYodmFsKSB7XHJcbiAgICBsZXQgdGV4dCA9IHZhbCArIFwiXCI7XHJcbiAgICBpZiAodGV4dC5sZW5ndGggPT0gMCkge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIHZhciBucyA9IFwi27Dbsduy27PbtNu127bbt9u427lcIjtcclxuICAgIGxldCBvdXQgPSBcIlwiO1xyXG4gICAgbGV0IGxlbmd0aCA9IHRleHQubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgYyA9IHRleHQuY2hhckF0KGkpO1xyXG4gICAgICBsZXQgbnVtcCA9IG5zLmluZGV4T2YoYyArIFwiXCIpO1xyXG4gICAgICBpZiAobnVtcCA+PSAwKSB7XHJcbiAgICAgICAgb3V0ICs9IG51bXA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3V0ICs9IGM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQ7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgLy8gWW91IGRvbid0IGhhdmUgdG8gZG8gdGhpcyBjaGVjayBmaXJzdCwgYnV0IGl0IGNhbiBoZWxwIHByZXZlbnQgYW4gdW5uZWVkZWQgcmVuZGVyXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tb3ZlQWN0aW9uICE9PSBuZXh0UHJvcHMubW92ZUFjdGlvbikge1xyXG4gICAgICB0aGlzLndhdGNoTW92ZUFjdGlvbihuZXh0UHJvcHMubW92ZUFjdGlvbilcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMudXNlUmFpdG9TaXppbmcpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGlvLXBhcmVudCBteS1mb250LWNhbGVuZGVyXCIgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpby1jaGlsZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB3LTEwMCBoLTEwMFwiIHN0eWxlPXt0aGlzLnByb3BzLm1haW5Cb2R5U3R5bGV9PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dUaXRsZSAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy50aXRsZVN0eWxlLCAuLi4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogKHRoaXMucHJvcHMucmFpdG9UaXRsZSAqIDEwICsgJyUnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucGVyTW9udGh9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImktY2hldnJvbi1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5hcnJvd0xlZnRTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI3LjgxMjUlXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMCAzMCBMOCAxNiAyMCAyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY2xpY2tUaXRsZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4ueyBtaW5XaWR0aDogJzIwJScgfSwgLi4udGhpcy5wcm9wcy5jbGlja2FibGVTdHlsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eygoKHRoaXMuc3RhdGUuc3RhcnRZZWFyLTEpK1wiIC0gXCIrKHRoaXMuc3RhdGUuc3RhcnRZZWFyKzEwKSkpfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsIGRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRNb250aH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5hcnJvd1JpZ2h0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNy44MTI1JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMzAgTDI0IDE2IDEyIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubUNyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICh0aGlzLnByb3BzLnJhaXRvQm9keSAvIHRoaXMuc3RhdGUudG90YWxNYWluUm93KSAqIDEwICsgJyUnXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93Rm9vdGVyICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4udGhpcy5wcm9wcy5mb290ZXJTdHlsZSwgLi4ueyBoZWlnaHQ6IHRoaXMucHJvcHMucmFpdG9Gb290ZXIgKiAxMCArICclJyB9IH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0J1dHRvblRvZGF5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGwgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4udGhpcy5wcm9wcy50b2RheUJ1dHRvblN0eWxlLCAuLi57IGN1cnNvcjogJ3BvaW50ZXInIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nb1RvZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHRoaXMucHJvcHMudG9kYXlCdXR0b25UaXRsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWVTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5pbnB1dFZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG15LWZvbnQtY2FsZW5kZXJcIiBzdHlsZT17dGhpcy5wcm9wcy5tYWluQm9keVN0eWxlfSA+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93VGl0bGUgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIHN0eWxlPXt0aGlzLnByb3BzLnRpdGxlU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGxcIiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9e3RoaXMucGVyTW9udGh9PlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJpLWNoZXZyb24tbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMiAzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Y29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuYXJyb3dMZWZ0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI3LjgxMjUlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgMzAgTDggMTYgMjAgMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jbGlja1RpdGxlKCl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnsgbWluV2lkdGg6ICcyMCUnIH0sIC4uLnRoaXMucHJvcHMuY2xpY2thYmxlU3R5bGUgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdj57KCgodGhpcy5zdGF0ZS5zdGFydFllYXItMSkrXCIgLSBcIisodGhpcy5zdGF0ZS5zdGFydFllYXIrMTApKSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGwgZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRNb250aH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5hcnJvd1JpZ2h0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI3LjgxMjUlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMzAgTDI0IDE2IDEyIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB7dGhpcy5tQ3JlYXRvcih7fSl9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93Rm9vdGVyICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIiBzdHlsZT17dGhpcy5wcm9wcy5mb290ZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0J1dHRvblRvZGF5ICYmIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi50aGlzLnByb3BzLnRvZGF5QnV0dG9uU3R5bGUsIC4uLiB7IGN1cnNvcjogJ3BvaW50ZXInIH0gfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nb1RvZGF5fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7KHRoaXMucHJvcHMudG9kYXlCdXR0b25UaXRsZSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dTZWxlY3RlZFZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWVTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmlucHV0VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5ZZWFyQ2FsZW5kZXIucHJvcFR5cGVzID0ge2RlZlllYXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcclxuICBcclxuICBpbnB1dDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZ2V0Q3VycmVudFllYXI6UHJvcFR5cGVzLmZ1bmMsXHJcbiAgY2xpY2tUaXRsZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgYWN0aW9uU3RlcDogUHJvcFR5cGVzLm51bWJlcixcclxuICBtb3ZlQWN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGlzVGhyZWVSb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHNlbGVjdGVkQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRvZGF5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYWZ0ZXJUb2RheVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGJlZm9yZVRvZGF5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2VsZWN0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2FsZW5kZXJDZWxsQm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNhbGVuZGVyQ2VsbFdpdGhUZXh0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2FsZW5kZXJDZWxsTm9UZXh0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgcm93Q2FsZW5kZXJJdGVtU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgcm93Q2FsZW5kZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBoZWFkZXJDYWxlbmRlckl0ZW1TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBtYWluQm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGFycm93UmlnaHRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBhcnJvd0xlZnRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjbGlja2FibGVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICB0aXRsZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGhlYWRlckNhbGVuZGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgZm9vdGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgdG9kYXlCdXR0b25TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGN1c3RvbUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB1c2VSYWl0b1NpemluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcmFpdG9UaXRsZTogUHJvcFR5cGVzLm51bWJlcixcclxuICByYWl0b1RhYmxlSGVkZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJhaXRvQm9keTogUHJvcFR5cGVzLm51bWJlcixcclxuICByYWl0b0Zvb3RlcjogUHJvcFR5cGVzLm51bWJlcixcclxuICBzaG93VGl0bGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNob3dGb290ZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNob3dCdXR0b25Ub2RheTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2hvd1NlbGVjdGVkVmFsdWU6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNhbGVuZGVySXRlbUFuaW06IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbW9udGhBbmltOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRvZGF5QnV0dG9uVGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcblllYXJDYWxlbmRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaW5wdXQodmFsKSB7IH0sXHJcbiAgXHJcbiAgZ2V0Q3VycmVudFllYXIodmFsKSB7IH0sXHJcbiAgY2xpY2tUaXRsZSgpIHtcclxuXHJcbiAgfSxcclxuICBkZWZZZWFyOiBcIlwiLFxyXG4gIFxyXG4gIGFjdGlvblN0ZXA6IDEsXHJcbiAgbW92ZUFjdGlvbjoge1xyXG4gICAgYWN0aW9uOiBcIlwiLFxyXG4gICAgc3RlcDogMSxcclxuICAgIHVzZUp1bXA6IGZhbHNlLFxyXG4gICAganVtcDoge31cclxuICB9LFxyXG4gIGlzVGhyZWVSb3c6IGZhbHNlLFxyXG4gIHZhbHVlOiBcIlwiLFxyXG4gIHNlbGVjdGVkQ2xhc3NOYW1lOiBcInNlbGVjdGVkXCIsXHJcbiAgdG9kYXlTdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2U4NDU0NVwiLFxyXG4gICAgYmFja2dyb3VuZDogXCIjMDBhZGI1XCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBcIjAgMCA1cHggI2U4NDU0NVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCIgYWxsIDFzXCJcclxuICB9LFxyXG4gIGFmdGVyVG9kYXlTdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiLFxyXG5cclxuICAgIGJveFNoYWRvdzogXCJpbnNldCAwIDAgMTBweCAjZWVlZWVlXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyMjI4MzFcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIGJlZm9yZVRvZGF5U3R5bGU6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiI2VlZWVlZVwiLFxyXG5cclxuICAgIGJveFNoYWRvdzogXCJpbnNldCAwIDAgMTBweCAjMjIyODMxXCIsXHJcbiAgICBjb2xvcjogXCIjMjIyODMxXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxc1wiXHJcbiAgfSxcclxuICBzZWxlY3RTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCJvcmFuZ2VyZWRcIixcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxc1wiXHJcbiAgfSxcclxuICBjYWxlbmRlckNlbGxCb2R5U3R5bGU6IHtcclxuICB9LFxyXG4gIGNhbGVuZGVyQ2VsbFdpdGhUZXh0U3R5bGU6IHtcclxuICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxyXG4gICAgbWFyZ2luOiBcIjJweFwiLFxyXG4gICAgXCJXZWJraXRVc2VyU2VsZWN0XCI6IFwibm9uZVwiLFxyXG4gICAgXCJNb3pVc2VyU2VsZWN0XCI6IFwibm9uZVwiLFxyXG4gICAgXCJtc1VzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMXNcIlxyXG4gIH0sXHJcbiAgY2FsZW5kZXJDZWxsTm9UZXh0U3R5bGU6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiIzAwMFwiLFxyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIlxyXG4gIH0sXHJcbiAgcm93Q2FsZW5kZXJJdGVtU3R5bGU6IHtcclxuICB9LFxyXG4gIHJvd0NhbGVuZGVyU3R5bGU6IHtcclxuICAgIG1hcmdpbjogXCIwIC0xNHB4XCJcclxuICB9LFxyXG4gIGhlYWRlckNhbGVuZGVySXRlbVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiXHJcbiAgfSxcclxuICBtYWluQm9keVN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMzOTNlNDZcIixcclxuICAgIGJvcmRlcjogXCIycHggc29saWQgI2VlZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcclxuICAgIHBhZGRpbmc6IFwiMTVweFwiXHJcbiAgfSxcclxuICBhcnJvd1JpZ2h0U3R5bGU6IHtcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIlxyXG4gIH0sXHJcbiAgYXJyb3dMZWZ0U3R5bGU6IHtcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIlxyXG4gIH0sXHJcbiAgY2xpY2thYmxlU3R5bGU6IHtcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcclxuICAgIFwiV2Via2l0VXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICAgIFwiTW96VXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICAgIFwibXNVc2VyU2VsZWN0XCI6IFwibm9uZVwiLFxyXG4gIH0sXHJcbiAgdGl0bGVTdHlsZToge1xyXG4gICAgbWFyZ2luVG9wOiBcIi0xMHB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMzOTNlNDZcIixcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIlxyXG4gIH0sXHJcbiAgaGVhZGVyQ2FsZW5kZXJTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMjIyODMxXCIsXHJcbiAgICBtYXJnaW46IFwiMCAtMTRweFwiXHJcbiAgfSxcclxuICBmb290ZXJTdHlsZToge1xyXG4gICAgbWFyZ2luVG9wOiBcIjE0cHhcIlxyXG4gIH0sXHJcbiAgdG9kYXlCdXR0b25TdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiLFxyXG4gICAgb3V0bGluZTogXCJub25lICFpbXBvcnRhbnRcIlxyXG4gIH0sXHJcbiAgc2hvd1NlbGVjdGVkVmFsdWVTdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXHJcbiAgfSxcclxuICBjdXN0b21Gb3JtYXQ6IFwiWVlZWS9NL0RcIixcclxuICB1c2VSYWl0b1NpemluZzogdHJ1ZSxcclxuICByYWl0b1RpdGxlOiAxLFxyXG4gIHJhaXRvVGFibGVIZWRlYXI6IDEsXHJcbiAgcmFpdG9Cb2R5OiA4LFxyXG4gIHJhaXRvRm9vdGVyOiAxLFxyXG4gIHNob3dUaXRsZTogdHJ1ZSxcclxuICBzaG93Rm9vdGVyOiB0cnVlLFxyXG4gIHNob3dCdXR0b25Ub2RheTogdHJ1ZSxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZTogdHJ1ZSxcclxuICBjYWxlbmRlckl0ZW1BbmltOiBcInNsaWRlLWZhZGVcIixcclxuICBtb250aEFuaW06IFwiZmFkZVwiLFxyXG4gIHRvZGF5QnV0dG9uVGl0bGU6IFwiQ3VycmVudCB5ZWFyXCJcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBZZWFyQ2FsZW5kZXI7XHJcbiJdfQ==