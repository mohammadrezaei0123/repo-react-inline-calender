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

var TenYearCalender =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TenYearCalender, _React$Component);

  function TenYearCalender(props) {
    var _this;

    _classCallCheck(this, TenYearCalender);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TenYearCalender).call(this, props));
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
      todayDay: 1,
      todayMonth: "",
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

  _createClass(TenYearCalender, [{
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
              return _this2.selecValues((j - 1) * _this2.state.totalMainCol + i + _this2.state.startYear - 21 + ((j - 1) * _this2.state.totalMainCol + i) * 10 - ((j - 1) * _this2.state.totalMainCol + i) + 1, $event);
            },
            className: "ratio-child",
            style: _objectSpread({}, _this2.styleCellCal1((j - 1) * _this2.state.totalMainCol + i + _this2.state.startYear - 21 + ((j - 1) * _this2.state.totalMainCol + i) * 10 - ((j - 1) * _this2.state.totalMainCol + i) + 1), {}, _this2.props.calenderCellWithTextStyle)
          }, _react.default.createElement("div", {
            className: "d-flex justify-content-center align-items-center h-100 w-100"
          }, (j - 1) * _this2.state.totalMainCol + i + _this2.state.startYear - 21 + ((j - 1) * _this2.state.totalMainCol + i) * 10 - ((j - 1) * _this2.state.totalMainCol + i) + "-" + ((j - 1) * _this2.state.totalMainCol + i + _this2.state.startYear - 20 + ((j - 1) * _this2.state.totalMainCol + i) * 10 + 10 - ((j - 1) * _this2.state.totalMainCol + i))))));
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
        momentObject = ddd;
      }

      if (typeof this.props.defYear !== "undefined" && this.props.defYear + "".length > 0 && !!parseInt(this.props.defYear) && parseInt(this.props.defYear) >= 0) {
        momentObject.year(parseInt(this.props.defYear));
        this.setStators({
          currYear: momentObject.format("YYYY")
        });
        this.props.getCurrentYear(momentObject.format("YYYY"));
      }

      var b = this.conv(todayYear.substr(0, todayYear.length - 1));
      todayYear = b + "0";
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
        if (index == this.conv(this.state.todayYear)) {
          return this.props.todayStyle;
        } else if (index < parseInt(this.conv(this.state.todayYear))) {
          return this.props.beforeTodayStyle;
        } else {
          return this.props.afterTodayStyle;
        }
      }
    }
  }, {
    key: "styleCellCal",
    value: function styleCellCal(index) {
      if (this.state.currYear == this.state.todayYear && this.state.currMonth == this.state.todayMonth) {
        if (this.state.todayDay == index) {
          return "ratio-parent base today";
        } else if (this.state.todayDay >= index) {
          return "ratio-parent base before-today";
        } else {
          return "ratio-parent base after-today";
        }
      } else if (this.state.startDayisBeforeToday) {
        return "ratio-parent base before-today";
      } else {
        return "ratio-parent base after-today";
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
      var cuurYearString = this.conv(currYear.substr(0, currYear.length - 2));
      var startYear = parseInt(cuurYearString + "00");
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
      if (this.state.startYear < 3000) {
        var momentObject = this.state.momentObject;
        momentObject.add(100, "year");
        this.setState({
          momentObject: momentObject
        }, this.changeMonth, false);
      }
    }
  }, {
    key: "perMonth",
    value: function perMonth() {
      if (this.state.startYear > 150) {
        var momentObject = this.state.momentObject;
        momentObject.add(-100, "year");
        this.setState({
          momentObject: momentObject
        }, this.changeMonth, false);
      }
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
        }, _react.default.createElement("div", null, this.state.startYear - 11 + " - " + (this.state.startYear + 110))), _react.default.createElement("div", {
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
        }, _react.default.createElement("div", null, this.state.startYear - 11 + " - " + (this.state.startYear + 110))), _react.default.createElement("div", {
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

  return TenYearCalender;
}(_react.default.Component);

TenYearCalender.propTypes = {
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
TenYearCalender.defaultProps = {
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
    // borderRadius: "50%",
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
var _default = TenYearCalender;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb25lbnQvVGVuWWVhckNhbGVuZGVyLmpzeCJdLCJuYW1lcyI6WyJUZW5ZZWFyQ2FsZW5kZXIiLCJwcm9wcyIsInN0YXRlIiwic3RhcnRZZWFyIiwic2VsZWN0ZWRNb250aE5hbWUiLCJ0b3RhbE1haW5Sb3ciLCJpc1RocmVlUm93IiwidG90YWxNYWluQ29sIiwibW92ZUFjdGlvbiIsImFjdGlvbiIsInN0ZXAiLCJ1c2VKdW1wIiwianVtcCIsImRlZkZvcm1hdCIsInN0YXJ0RGF5TW9tZW50IiwiY2hhbmdlQW5pbSIsImN1cnJZZWFyIiwidG9kYXkiLCJ0b2RheURheSIsInRvZGF5TW9udGgiLCJ0b2RheVllYXIiLCJzZWxlY3RlZFllYXIiLCJzZWxlY3RlZE1vbnRoIiwic2VsZWN0ZWREYXkiLCJjdXJyTW9udGgiLCJtb21lbnRPYmplY3QiLCJzRGF5IiwiaW5wdXRWYWx1ZSIsImxhc3RTZWxlY3RlZE5vZGUiLCJsYXN0U2VsZWN0ZWROb2RlQ2xhc3MiLCJzdHlsZUNlbGxDYWwxIiwiYmluZCIsImNoYW5nZU1vbnRoIiwibmV4dE1vbnRoIiwicGVyTW9udGgiLCJzZWxlY1ZhbHVlcyIsImdvVG9kYXkiLCJzZXREYXRlciIsImNvbnYiLCJzZXRTdGF0b3JzIiwid2F0Y2hNb3ZlQWN0aW9uIiwic3R5bGVTdHRlciIsImNsZWFyU3R0ZXIiLCJuZXdWYWwiLCJhY3Rpb25NZXRob2QiLCJwYXJhbUFjIiwic2V0U3RhdGUiLCJzdHlsZUgiLCJzdGF0dHR0IiwicGFyZW50Tm9kZSIsImoiLCJpbm5lck5vZGUiLCJpIiwicHVzaCIsIiRldmVudCIsImNhbGVuZGVyQ2VsbFdpdGhUZXh0U3R5bGUiLCJyb3dDYWxlbmRlclN0eWxlIiwidmFsIiwidiIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInllYXIiLCJhZGQiLCJtb250aCIsImRheSIsImZvcm1hdCIsInZhbHVlIiwibGVuZ3RoIiwidGV4dCIsIm5zIiwib3V0IiwiYyIsImNoYXJBdCIsIm51bXAiLCJwYXJzZUludCIsImRkZCIsImRlZlllYXIiLCJnZXRDdXJyZW50WWVhciIsImIiLCJzdWJzdHIiLCJpbmRleCIsInNlbGVjdFN0eWxlIiwidG9kYXlTdHlsZSIsImJlZm9yZVRvZGF5U3R5bGUiLCJhZnRlclRvZGF5U3R5bGUiLCJzdGFydERheWlzQmVmb3JlVG9kYXkiLCJpc01vdW50ZWQiLCJzZWxmIiwic2V0VGltZW91dCIsInN0YXJ0T2YiLCJlbmRPZiIsImN1dXJZZWFyU3RyaW5nIiwiZSIsIm9iIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzdHlsZSIsInRhcmdldCIsImlucHV0IiwibmV4dFByb3BzIiwidXNlUmFpdG9TaXppbmciLCJtYWluQm9keVN0eWxlIiwic2hvd1RpdGxlIiwidGl0bGVTdHlsZSIsInJhaXRvVGl0bGUiLCJjdXJzb3IiLCJhcnJvd0xlZnRTdHlsZSIsImNsaWNrVGl0bGUiLCJtaW5XaWR0aCIsImNsaWNrYWJsZVN0eWxlIiwiYXJyb3dSaWdodFN0eWxlIiwibUNyZWF0b3IiLCJoZWlnaHQiLCJyYWl0b0JvZHkiLCJzaG93Rm9vdGVyIiwiZm9vdGVyU3R5bGUiLCJyYWl0b0Zvb3RlciIsInNob3dCdXR0b25Ub2RheSIsInRvZGF5QnV0dG9uU3R5bGUiLCJ0b2RheUJ1dHRvblRpdGxlIiwic2hvd1NlbGVjdGVkVmFsdWUiLCJzaG93U2VsZWN0ZWRWYWx1ZVN0eWxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJmdW5jIiwiYWN0aW9uU3RlcCIsIm9iamVjdCIsImJvb2wiLCJzZWxlY3RlZENsYXNzTmFtZSIsImNhbGVuZGVyQ2VsbEJvZHlTdHlsZSIsImNhbGVuZGVyQ2VsbE5vVGV4dFN0eWxlIiwicm93Q2FsZW5kZXJJdGVtU3R5bGUiLCJoZWFkZXJDYWxlbmRlckl0ZW1TdHlsZSIsImhlYWRlckNhbGVuZGVyU3R5bGUiLCJjdXN0b21Gb3JtYXQiLCJyYWl0b1RhYmxlSGVkZWFyIiwiY2FsZW5kZXJJdGVtQW5pbSIsIm1vbnRoQW5pbSIsImRlZmF1bHRQcm9wcyIsImNvbG9yIiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJ1c2VyU2VsZWN0IiwibWFyZ2luIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpblRvcCIsIm91dGxpbmUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGU7Ozs7O0FBQ0osMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIseUZBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsU0FBUyxFQUFDLENBQUMsQ0FEQTtBQUVYQyxNQUFBQSxpQkFBaUIsRUFBQyxFQUZQO0FBR1hDLE1BQUFBLFlBQVksRUFBRyxNQUFLSixLQUFMLENBQVdLLFVBQVosR0FBMEIsQ0FBMUIsR0FBOEIsQ0FIakM7QUFJWEMsTUFBQUEsWUFBWSxFQUFHLE1BQUtOLEtBQUwsQ0FBV0ssVUFBWixHQUEwQixDQUExQixHQUE4QixDQUpqQztBQUtYRSxNQUFBQSxVQUFVLEVBQUU7QUFDVkMsUUFBQUEsTUFBTSxFQUFFLEVBREU7QUFFVkMsUUFBQUEsSUFBSSxFQUFFLENBRkk7QUFHVkMsUUFBQUEsT0FBTyxFQUFFLEtBSEM7QUFJVkMsUUFBQUEsSUFBSSxFQUFFO0FBSkksT0FMRDtBQVdYQyxNQUFBQSxTQUFTLEVBQUUsU0FYQTtBQVlYQyxNQUFBQSxjQUFjLEVBQUUsSUFaTDtBQWFYQyxNQUFBQSxVQUFVLEVBQUUsSUFiRDtBQWNYQyxNQUFBQSxRQUFRLEVBQUUsRUFkQztBQWVYQyxNQUFBQSxLQUFLLEVBQUUsRUFmSTtBQWdCWEMsTUFBQUEsUUFBUSxFQUFFLENBaEJDO0FBaUJYQyxNQUFBQSxVQUFVLEVBQUUsRUFqQkQ7QUFrQlhDLE1BQUFBLFNB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RUFBQUEsWUFBWSxFQUFFLFVBL0dlO0FBZ0g3QnZDLEVBQUFBLGNBQWMsRUFBRSxJQWhIYTtBQWlIN0JJLEVBQUFBLFVBQVUsRUFBRSxDQWpIaUI7QUFrSDdCb0MsRUFBQUEsZ0JBQWdCLEVBQUUsQ0FsSFc7QUFtSDdCM0IsRUFBQUEsU0FBUyxFQUFFLENBbkhrQjtBQW9IN0JHLEVBQUFBLFdBQVcsRUFBRSxDQXBIZ0I7QUFxSDdCZCxFQUFBQSxTQUFTLEVBQUUsSUFySGtCO0FBc0g3QlksRUFBQUEsVUFBVSxFQUFFLElBdEhpQjtBQXVIN0JHLEVBQUFBLGVBQWUsRUFBRSxJQXZIWTtBQXdIN0JHLEVBQUFBLGlCQUFpQixFQUFFLElBeEhVO0FBeUg3QnFCLEVBQUFBLGdCQUFnQixFQUFFLFlBekhXO0FBMEg3QkMsRUFBQUEsU0FBUyxFQUFFLE1BMUhrQjtBQTJIN0J2QixFQUFBQSxnQkFBZ0IsRUFBRTtBQTNIVyxDQUEvQjtlQStIZXhILGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0ICcuL0lubGluZUNhbGVuZGVyLmNzcyc7XHJcblxyXG5jbGFzcyBUZW5ZZWFyQ2FsZW5kZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzdGFydFllYXI6LTEsXHJcbiAgICAgIHNlbGVjdGVkTW9udGhOYW1lOlwiXCIsXHJcbiAgICAgIHRvdGFsTWFpblJvdzogKHRoaXMucHJvcHMuaXNUaHJlZVJvdykgPyAzIDogNCxcclxuICAgICAgdG90YWxNYWluQ29sOiAodGhpcy5wcm9wcy5pc1RocmVlUm93KSA/IDQgOiAzLFxyXG4gICAgICBtb3ZlQWN0aW9uOiB7XHJcbiAgICAgICAgYWN0aW9uOiBcIlwiLFxyXG4gICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgdXNlSnVtcDogZmFsc2UsXHJcbiAgICAgICAganVtcDoge31cclxuICAgICAgfSxcclxuICAgICAgZGVmRm9ybWF0OiBcIllZWVktTS1cIixcclxuICAgICAgc3RhcnREYXlNb21lbnQ6IG51bGwsXHJcbiAgICAgIGNoYW5nZUFuaW06IHRydWUsXHJcbiAgICAgIGN1cnJZZWFyOiBcIlwiLFxyXG4gICAgICB0b2RheTogXCJcIixcclxuICAgICAgdG9kYXlEYXk6IDEsXHJcbiAgICAgIHRvZGF5TW9udGg6IFwiXCIsXHJcbiAgICAgIHRvZGF5WWVhcjogXCJcIixcclxuICAgICAgc2VsZWN0ZWRZZWFyOiBcIlwiLFxyXG4gICAgICBzZWxlY3RlZE1vbnRoOiBcIlwiLFxyXG4gICAgICBzZWxlY3RlZERheTogXCJcIixcclxuICAgICAgY3Vyck1vbnRoOiBcIlwiLFxyXG4gICAgICBtb21lbnRPYmplY3Q6IG51bGwsXHJcbiAgICAgIHNEYXk6IDAsXHJcbiAgICAgIGlucHV0VmFsdWU6IFwiXCIsXHJcbiAgICAgIGxhc3RTZWxlY3RlZE5vZGU6IG51bGwsXHJcbiAgICAgIGxhc3RTZWxlY3RlZE5vZGVDbGFzczogXCJcIlxyXG4gICAgfTtcclxuICAgIHRoaXMuc3R5bGVDZWxsQ2FsMSA9IHRoaXMuc3R5bGVDZWxsQ2FsMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jaGFuZ2VNb250aCA9IHRoaXMuY2hhbmdlTW9udGguYmluZCh0aGlzKTtcclxuICAgIHRoaXMubmV4dE1vbnRoID0gdGhpcy5uZXh0TW9udGguYmluZCh0aGlzKTtcclxuICAgIHRoaXMucGVyTW9udGggPSB0aGlzLnBlck1vbnRoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNlbGVjVmFsdWVzID0gdGhpcy5zZWxlY1ZhbHVlcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5nb1RvZGF5ID0gdGhpcy5nb1RvZGF5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldERhdGVyID0gdGhpcy5zZXREYXRlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb252ID0gdGhpcy5jb252LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldFN0YXRvcnMgPSB0aGlzLnNldFN0YXRvcnMuYmluZCh0aGlzKVxyXG4gICAgdGhpcy53YXRjaE1vdmVBY3Rpb24gPSB0aGlzLndhdGNoTW92ZUFjdGlvbi5iaW5kKHRoaXMpXHJcbiAgICBcclxuICAgIHRoaXMuc3R5bGVTdHRlciA9IHRoaXMuc3R5bGVTdHRlci5iaW5kKHRoaXMpO1xyXG4gICAgXHJcbiAgICB0aGlzLmNsZWFyU3R0ZXIgPSB0aGlzLmNsZWFyU3R0ZXIuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgc2V0U3RhdG9ycyhuZXdWYWwsIGFjdGlvbk1ldGhvZCA9IG51bGwsIHBhcmFtQWMpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gKHtcclxuICAgICAgICAuLi5uZXdWYWxcclxuXHJcbiAgICAgIH0pXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGlmIChhY3Rpb25NZXRob2QgIT09IG51bGwpIHtcclxuICAgICAgICBhY3Rpb25NZXRob2QocGFyYW1BYylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgbUNyZWF0b3Ioc3R5bGVILCBzdGF0dHR0KSB7XHJcbiAgICBsZXQgcGFyZW50Tm9kZSA9IFtdXHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSB0aGlzLnN0YXRlLnRvdGFsTWFpblJvdzsgaisrKSB7XHJcbiAgICAgIGxldCBpbm5lck5vZGUgPSBbXVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnN0YXRlLnRvdGFsTWFpbkNvbDsgaSsrKSB7XHJcbiAgICAgICAgaW5uZXJOb2RlLnB1c2goXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGtleT17J2gnK2l9PlxyXG4gICAgICAgICAgICB7LyogIDx0cmFuc2l0aW9uIDpuYW1lPVwiY2FsZW5kZXJJdGVtQW5pbVwiPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoJGV2ZW50KT0+dGhpcy5zZWxlY1ZhbHVlcygoKCgoKChqLTEpKnRoaXMuc3RhdGUudG90YWxNYWluQ29sKStpKSt0aGlzLnN0YXRlLnN0YXJ0WWVhci0yMSkrKCgoKGotMSkqdGhpcy5zdGF0ZS50b3RhbE1haW5Db2wpK2kpKjEwKS0oKChqLTEpKnRoaXMuc3RhdGUudG90YWxNYWluQ29sKStpKSkrMSksJGV2ZW50KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhdGlvLWNoaWxkXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Li4udGhpcy5zdHlsZUNlbGxDYWwxKCgoKCgoKGotMSkqdGhpcy5zdGF0ZS50b3RhbE1haW5Db2wpK2kpK3RoaXMuc3RhdGUuc3RhcnRZZWFyLTIxKSsoKCgoai0xKSp0aGlzLnN0YXRlLnRvdGFsTWFpbkNvbCkraSkqMTApLSgoKGotMSkqdGhpcy5zdGF0ZS50b3RhbE1haW5Db2wpK2kpKSsxKSksLi4udGhpcy5wcm9wcy5jYWxlbmRlckNlbGxXaXRoVGV4dFN0eWxlfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMCB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICA+e1xyXG4gICAgICAgICAgICAgICAgICAoKCgoKChqLTEpKnRoaXMuc3RhdGUudG90YWxNYWluQ29sKStpKSt0aGlzLnN0YXRlLnN0YXJ0WWVhci0yMSkrKCgoKGotMSkqdGhpcy5zdGF0ZS50b3RhbE1haW5Db2wpK2kpKjEwKS0oKChqLTEpKnRoaXMuc3RhdGUudG90YWxNYWluQ29sKStpKSkrXCItXCIrKCgoKCgoai0xKSp0aGlzLnN0YXRlLnRvdGFsTWFpbkNvbCkraSkrdGhpcy5zdGF0ZS5zdGFydFllYXItMjApKygoKChqLTEpKnRoaXMuc3RhdGUudG90YWxNYWluQ29sKStpKSoxMCkrMTApLSgoKGotMSkqdGhpcy5zdGF0ZS50b3RhbE1haW5Db2wpK2kpKSlcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiAgPC90cmFuc2l0aW9uPiAqL31cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgfVxyXG5cclxuICAgICAgcGFyZW50Tm9kZS5wdXNoKDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVycyBmbGV4LW5vd3JhcFwiXHJcbiAgICAgICAga2V5PXsnamonICsgan1cclxuICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICB7IC4uLnRoaXMucHJvcHMucm93Q2FsZW5kZXJTdHlsZSwgLi4uc3R5bGVIIH1cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7aW5uZXJOb2RlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnROb2RlXHJcbiAgfVxyXG4gIHdhdGNoTW92ZUFjdGlvbih2YWwpIHtcclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICB2YWwgIT09IG51bGwgJiZcclxuICAgICAgdHlwZW9mIHZhbC5hY3Rpb24gIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgdmFsLmFjdGlvbiAhPT0gbnVsbCAmJlxyXG4gICAgICAodHlwZW9mIHZhbC51c2VKdW1wID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgdmFsLnVzZUp1bXAgPT09IG51bGwgfHxcclxuICAgICAgICAhdmFsLnVzZUp1bXApXHJcbiAgICApIHtcclxuICAgICAgbGV0IHYgPSB2YWwuYWN0aW9uLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB2ID09IFwiblwiIHx8XHJcbiAgICAgICAgdiA9PSBcIm5lXCIgfHxcclxuICAgICAgICB2ID09IFwibmV4XCIgfHxcclxuICAgICAgICB2ID09IFwibmV4dFwiIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwiblwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwibmVcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcIm5leFwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwibmV4dFwiKSA9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMubmV4dE1vbnRoKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICAgIG1vdmVBY3Rpb246IHZhbCxcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aW91c1wiIHx8XHJcbiAgICAgICAgdiA9PSBcInByZXZpb3VcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aW9cIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aVwiIHx8XHJcbiAgICAgICAgdiA9PSBcInByZXZcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmVcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwclwiIHx8XHJcbiAgICAgICAgdiA9PSBcInBcIiB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZXZpb3VzXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2aW91XCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2aW9cIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZXZpXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2XCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmVcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwXCIpID09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5wZXJNb250aCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgICBtb3ZlQWN0aW9uOiB2YWwsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB2ID09IFwidG9kYXlcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJ0b2RhXCIgfHxcclxuICAgICAgICB2ID09IFwidG9kXCIgfHxcclxuICAgICAgICB2ID09IFwidG9cIiB8fFxyXG4gICAgICAgIHYgPT0gXCJ0XCIgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJ0b2RheVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidG9kYVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidG9kXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJ0b1wiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidFwiKSA9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuZ29Ub2RheSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgICBtb3ZlQWN0aW9uOiB2YWwsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHR5cGVvZiB2YWwudXNlSnVtcCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICAgIHZhbC51c2VKdW1wICE9PSBudWxsICYmXHJcbiAgICAgICAgdmFsLnVzZUp1bXAgJiZcclxuICAgICAgICB0eXBlb2YgdmFsLmp1bXAgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICB2YWwuanVtcCAhPT0gbnVsbFxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgbW9tZW50T2JqZWN0ID0gdGhpcy5zdGF0ZS5tb21lbnRPYmplY3RcclxuICAgICAgICBpZiAodHlwZW9mIHZhbC5qdW1wLnllYXIgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsLmp1bXAueWVhciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgbW9tZW50T2JqZWN0LmFkZCh2YWwuanVtcC55ZWFyLCBcInllYXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHR5cGVvZiB2YWwuanVtcC5tb250aCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICAgICAgdmFsLmp1bXAubW9udGggIT09IG51bGxcclxuICAgICAgICApIHtcclxuICAgICAgICAgIG1vbWVudE9iamVjdC5hZGQodmFsLmp1bXAubW9udGgsIFwibW9udGhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsLmp1bXAuZGF5ICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbC5qdW1wLmRheSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgbW9tZW50T2JqZWN0LmFkZCh2YWwuanVtcC5kYXksIFwiZGF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgICAgbW92ZUFjdGlvbjogdmFsLFxyXG4gICAgICAgICAgbW9tZW50T2JqZWN0XHJcbiAgICAgICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gbW9tZW50KCk7XHJcbiAgICBsZXQgdG9kYXlZZWFyID0gbW9tZW50T2JqZWN0LmZvcm1hdChcIllZWVlcIik7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5wcm9wcy52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCB0ZXh0ID0gdGhpcy5wcm9wcy52YWx1ZTtcclxuICAgICAgdmFyIG5zID0gXCLbsNux27Lbs9u027Xbttu327jbuVwiO1xyXG4gICAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgICAgbGV0IGxlbmd0aCA9IHRleHQubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGMgPSBucy5pbmRleE9mKHRleHQuY2hhckF0KGkpKTtcclxuICAgICAgICBsZXQgbnVtcCA9IHBhcnNlSW50KGMpO1xyXG4gICAgICAgIGlmIChudW1wID49IDApIHtcclxuICAgICAgICAgIG91dCArPSBjO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvdXQgKz0gdGV4dC5jaGFyQXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIGxldCBkZGQ9bW9tZW50KClcclxuICAgZGRkLnllYXIocGFyc2VJbnQob3V0KSlcclxuICAgbW9tZW50T2JqZWN0PWRkZFxyXG4gICAgICAgICBsZXQgc2VsZWN0ZWRZZWFyID0gZGRkLmZvcm1hdChcIllZWVlcIik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgc2VsZWN0ZWRZZWFyLFxyXG4gICAgICB9KVxyXG4gICAgICBtb21lbnRPYmplY3QgPSBkZGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2YgdGhpcy5wcm9wcy5kZWZZZWFyICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgIHRoaXMucHJvcHMuZGVmWWVhciArIFwiXCIubGVuZ3RoID4gMCAmJlxyXG4gICAgICAoISFwYXJzZUludCh0aGlzLnByb3BzLmRlZlllYXIpICYmIHBhcnNlSW50KHRoaXMucHJvcHMuZGVmWWVhcikgPj0gMClcclxuICAgICkge1xyXG4gICAgICBtb21lbnRPYmplY3QueWVhcihwYXJzZUludCh0aGlzLnByb3BzLmRlZlllYXIpKTtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHsgY3VyclllYXI6IG1vbWVudE9iamVjdC5mb3JtYXQoXCJZWVlZXCIpIH0pXHJcbiAgICAgIFxyXG4gICAgdGhpcy5wcm9wcy5nZXRDdXJyZW50WWVhcihtb21lbnRPYmplY3QuZm9ybWF0KFwiWVlZWVwiKSApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBiPXRoaXMuY29udih0b2RheVllYXIuc3Vic3RyKDAsdG9kYXlZZWFyLmxlbmd0aC0xKSlcclxuICAgIHRvZGF5WWVhcj1iK1wiMFwiXHJcbiAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICBtb21lbnRPYmplY3QsXHJcbiAgICAgIHRvZGF5WWVhclxyXG5cclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIHRydWUpXHJcbiAgfVxyXG4gIHN0eWxlQ2VsbENhbDEoaW5kZXgpIHtcclxuICAgIGlmIChcclxuICAgICAgaW5kZXg9PXRoaXMuc3RhdGUuc2VsZWN0ZWRZZWFyXHJcbiAgICApe1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RTdHlsZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgXHJcbiAgICAgIGlmIChcclxuICAgICAgICBpbmRleCA9PSB0aGlzLmNvbnYodGhpcy5zdGF0ZS50b2RheVllYXIpIFxyXG4gICAgICApIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy50b2RheVN0eWxlO1xyXG4gICAgICB9IGVsc2UgaWYgKGluZGV4IDwgcGFyc2VJbnQodGhpcy5jb252KHRoaXMuc3RhdGUudG9kYXlZZWFyKSkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5iZWZvcmVUb2RheVN0eWxlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmFmdGVyVG9kYXlTdHlsZTtcclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBzdHlsZUNlbGxDYWwoaW5kZXgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJZZWFyID09IHRoaXMuc3RhdGUudG9kYXlZZWFyICYmIHRoaXMuc3RhdGUuY3Vyck1vbnRoID09IHRoaXMuc3RhdGUudG9kYXlNb250aCkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS50b2RheURheSA9PSBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBcInJhdGlvLXBhcmVudCBiYXNlIHRvZGF5XCI7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50b2RheURheSA+PSBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBcInJhdGlvLXBhcmVudCBiYXNlIGJlZm9yZS10b2RheVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcInJhdGlvLXBhcmVudCBiYXNlIGFmdGVyLXRvZGF5XCI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zdGFydERheWlzQmVmb3JlVG9kYXkpIHtcclxuICAgICAgcmV0dXJuIFwicmF0aW8tcGFyZW50IGJhc2UgYmVmb3JlLXRvZGF5XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJyYXRpby1wYXJlbnQgYmFzZSBhZnRlci10b2RheVwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBjaGFuZ2VNb250aChpc01vdW50ZWQgPSBmYWxzZSkge1xyXG4gICAgaWYgKCFpc01vdW50ZWQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHsgY2hhbmdlQW5pbTogZmFsc2UgfSlcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWxmLnNldFN0YXRvcnMoeyBjaGFuZ2VBbmltOiB0cnVlIH0pXHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUgIT0gbnVsbCkge1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMuY29udih0aGlzLnN0YXRlLnNlbGVjdGVkWWVhcikgPT0gXHJcbiAgICAgICAgICB0aGlzLmNvbnYodGhpcy5zdGF0ZS5tb21lbnRPYmplY3QuZm9ybWF0KFwiWVlZWVwiKSApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnN0eWxlU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFyU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LnN0YXJ0T2YoXCJtb250aFwiKTtcclxuICAgIGxldCBzdGFydERheU1vbWVudCA9IG1vbWVudE9iamVjdDtcclxuICAgIG1vbWVudE9iamVjdC5lbmRPZihcIm1vbnRoXCIpO1xyXG5cclxuXHJcbiAgICBsZXQgY3VyclllYXIgPSBtb21lbnRPYmplY3QuZm9ybWF0KFwiWVlZWVwiKTtcclxuICAgIGxldCBjdXVyWWVhclN0cmluZz10aGlzLmNvbnYoY3VyclllYXIuc3Vic3RyKDAsY3VyclllYXIubGVuZ3RoLTIpKVxyXG4gICAgbGV0IHN0YXJ0WWVhcj1wYXJzZUludChjdXVyWWVhclN0cmluZytcIjAwXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vbWVudE9iamVjdCxcclxuICAgICAgc3RhcnREYXlNb21lbnQsXHJcbiAgICAgIGN1dXJZZWFyU3RyaW5nLFxyXG4gICAgICBzdGFydFllYXIsXHJcbiAgICAgIGN1cnJZZWFyXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMuZ2V0Q3VycmVudFllYXIoY3VyclllYXIpXHJcbiAgfVxyXG4gIG5leHRNb250aCgpIHtcclxuICAgIGlmKHRoaXMuc3RhdGUuc3RhcnRZZWFyPDMwMDApe1xyXG4gICAgbGV0IG1vbWVudE9iamVjdCA9IHRoaXMuc3RhdGUubW9tZW50T2JqZWN0XHJcbiAgICBtb21lbnRPYmplY3QuYWRkKDEwMCwgXCJ5ZWFyXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vbWVudE9iamVjdFxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpO1xyXG4gIH1cclxuICB9XHJcbiAgcGVyTW9udGgoKSB7XHJcbiAgICBpZih0aGlzLnN0YXRlLnN0YXJ0WWVhcj4xNTApe1xyXG4gICAgbGV0IG1vbWVudE9iamVjdCA9IHRoaXMuc3RhdGUubW9tZW50T2JqZWN0XHJcbiAgICBtb21lbnRPYmplY3QuYWRkKC0xMDAsIFwieWVhclwiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtb21lbnRPYmplY3RcclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIGZhbHNlKTtcclxuICB9XHJcbiAgfVxyXG4gIHN0eWxlU3R0ZXIoZSxvYj17XHJcbiAgICAuLi50aGlzLnByb3BzLnNlbGVjdFN0eWxlfSl7XHJcbiAgICBPYmplY3Qua2V5cyhvYikuZm9yRWFjaCh2PT57XHJcblxyXG4gICAgICBlLnN0eWxlW3ZdPW9iW3ZdXHJcbiAgICB9KVxyXG4gIH1cclxuICBjbGVhclN0dGVyKGUpe1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RTdHlsZSkuZm9yRWFjaCh2PT57XHJcbiAgICAgIGUuc3R5bGVbdl09JydcclxuICAgIH0pXHJcbiAgfVxyXG4gIHNlbGVjVmFsdWVzKGluZGV4LCBlKSB7XHJcbiAgICBsZXQgbGFzdFNlbGVjdGVkTm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgbGFzdFNlbGVjdGVkTm9kZSxcclxuICAgICAgICBpbnB1dFZhbHVlOmluZGV4LFxyXG4gICAgICAgIHNlbGVjdGVkWWVhcjppbmRleCxcclxuICAgICAgfSwgdGhpcy5wcm9wcy5pbnB1dCwgaW5kZXgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsZWFyU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgIGxhc3RTZWxlY3RlZE5vZGUsXHJcbiAgICAgICAgaW5wdXRWYWx1ZTppbmRleCxcclxuICAgICAgICBzZWxlY3RlZFllYXI6aW5kZXgsXHJcbiAgICAgIH0sIHRoaXMucHJvcHMuaW5wdXQsXHJcbiAgICAgIGluZGV4KVxyXG4gICAgfVxyXG4gICAgdGhpcy5zdHlsZVN0dGVyKGxhc3RTZWxlY3RlZE5vZGUpXHJcbiAgfVxyXG4gIGdvVG9kYXkoKSB7XHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gbW9tZW50KCk7XHJcbiAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICBtb21lbnRPYmplY3RcclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgc2V0RGF0ZXIoKSB7XHJcbiAgICB0aGlzLnNEYXkgPSB0aGlzLnNEYXkgKyAxO1xyXG4gICAgcmV0dXJuIHRoaXMuc0RheTtcclxuICB9XHJcbiAgY29udih2YWwpIHtcclxuICAgIGxldCB0ZXh0ID0gdmFsICsgXCJcIjtcclxuICAgIGlmICh0ZXh0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgdmFyIG5zID0gXCLbsNux27Lbs9u027Xbttu327jbuVwiO1xyXG4gICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICBsZXQgbGVuZ3RoID0gdGV4dC5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjID0gdGV4dC5jaGFyQXQoaSk7XHJcbiAgICAgIGxldCBudW1wID0gbnMuaW5kZXhPZihjICsgXCJcIik7XHJcbiAgICAgIGlmIChudW1wID49IDApIHtcclxuICAgICAgICBvdXQgKz0gbnVtcDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvdXQgKz0gYztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAvLyBZb3UgZG9uJ3QgaGF2ZSB0byBkbyB0aGlzIGNoZWNrIGZpcnN0LCBidXQgaXQgY2FuIGhlbHAgcHJldmVudCBhbiB1bm5lZWRlZCByZW5kZXJcclxuICAgIGlmICh0aGlzLnN0YXRlLm1vdmVBY3Rpb24gIT09IG5leHRQcm9wcy5tb3ZlQWN0aW9uKSB7XHJcbiAgICAgIHRoaXMud2F0Y2hNb3ZlQWN0aW9uKG5leHRQcm9wcy5tb3ZlQWN0aW9uKVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy51c2VSYWl0b1NpemluZykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW8tcGFyZW50IG15LWZvbnQtY2FsZW5kZXJcIiA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGlvLWNoaWxkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHctMTAwIGgtMTAwXCIgc3R5bGU9e3RoaXMucHJvcHMubWFpbkJvZHlTdHlsZX0+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd1RpdGxlICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnRpdGxlU3R5bGUsIC4uLiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAodGhpcy5wcm9wcy5yYWl0b1RpdGxlICogMTAgKyAnJScpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wZXJNb250aH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMiAzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmFycm93TGVmdFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjcuODEyNSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwIDMwIEw4IDE2IDIwIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jbGlja1RpdGxlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi57IG1pbldpZHRoOiAnMjAlJyB9LCAuLi50aGlzLnByb3BzLmNsaWNrYWJsZVN0eWxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj57KCgodGhpcy5zdGF0ZS5zdGFydFllYXItMTEpK1wiIC0gXCIrKHRoaXMuc3RhdGUuc3RhcnRZZWFyKzExMCkpKX08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbCBkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5uZXh0TW9udGh9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImktY2hldnJvbi1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Y29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuYXJyb3dSaWdodFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjcuODEyNSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDMwIEwyNCAxNiAxMiAyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1DcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAodGhpcy5wcm9wcy5yYWl0b0JvZHkgLyB0aGlzLnN0YXRlLnRvdGFsTWFpblJvdykgKiAxMCArICclJ1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0Zvb3RlciAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnRoaXMucHJvcHMuZm9vdGVyU3R5bGUsIC4uLnsgaGVpZ2h0OiB0aGlzLnByb3BzLnJhaXRvRm9vdGVyICogMTAgKyAnJScgfSB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dCdXR0b25Ub2RheSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnRoaXMucHJvcHMudG9kYXlCdXR0b25TdHlsZSwgLi4ueyBjdXJzb3I6ICdwb2ludGVyJyB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ29Ub2RheX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnByb3BzLnRvZGF5QnV0dG9uVGl0bGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dTZWxlY3RlZFZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnNob3dTZWxlY3RlZFZhbHVlU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBteS1mb250LWNhbGVuZGVyXCIgc3R5bGU9e3RoaXMucHJvcHMubWFpbkJvZHlTdHlsZX0gPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuc2hvd1RpdGxlICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIiBzdHlsZT17dGhpcy5wcm9wcy50aXRsZVN0eWxlfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsXCIgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fSBvbkNsaWNrPXt0aGlzLnBlck1vbnRofT5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmFycm93TGVmdFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNy44MTI1JVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwIDMwIEw4IDE2IDIwIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY2xpY2tUaXRsZSgpfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi57IG1pbldpZHRoOiAnMjAlJyB9LCAuLi50aGlzLnByb3BzLmNsaWNrYWJsZVN0eWxlIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+eygoKHRoaXMuc3RhdGUuc3RhcnRZZWFyLTExKStcIiAtIFwiKyh0aGlzLnN0YXRlLnN0YXJ0WWVhcisxMTApKSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGwgZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRNb250aH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5hcnJvd1JpZ2h0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI3LjgxMjUlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMzAgTDI0IDE2IDEyIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB7dGhpcy5tQ3JlYXRvcih7fSl9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93Rm9vdGVyICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIiBzdHlsZT17dGhpcy5wcm9wcy5mb290ZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0J1dHRvblRvZGF5ICYmIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi50aGlzLnByb3BzLnRvZGF5QnV0dG9uU3R5bGUsIC4uLiB7IGN1cnNvcjogJ3BvaW50ZXInIH0gfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nb1RvZGF5fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7KHRoaXMucHJvcHMudG9kYXlCdXR0b25UaXRsZSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dTZWxlY3RlZFZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWVTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmlucHV0VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5UZW5ZZWFyQ2FsZW5kZXIucHJvcFR5cGVzID0ge2RlZlllYXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcclxuICBcclxuICBpbnB1dDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZ2V0Q3VycmVudFllYXI6UHJvcFR5cGVzLmZ1bmMsXHJcbiAgY2xpY2tUaXRsZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgYWN0aW9uU3RlcDogUHJvcFR5cGVzLm51bWJlcixcclxuICBtb3ZlQWN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGlzVGhyZWVSb3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHNlbGVjdGVkQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRvZGF5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYWZ0ZXJUb2RheVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGJlZm9yZVRvZGF5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2VsZWN0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2FsZW5kZXJDZWxsQm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNhbGVuZGVyQ2VsbFdpdGhUZXh0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2FsZW5kZXJDZWxsTm9UZXh0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgcm93Q2FsZW5kZXJJdGVtU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgcm93Q2FsZW5kZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBoZWFkZXJDYWxlbmRlckl0ZW1TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBtYWluQm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGFycm93UmlnaHRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBhcnJvd0xlZnRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjbGlja2FibGVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICB0aXRsZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGhlYWRlckNhbGVuZGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgZm9vdGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgdG9kYXlCdXR0b25TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGN1c3RvbUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB1c2VSYWl0b1NpemluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcmFpdG9UaXRsZTogUHJvcFR5cGVzLm51bWJlcixcclxuICByYWl0b1RhYmxlSGVkZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJhaXRvQm9keTogUHJvcFR5cGVzLm51bWJlcixcclxuICByYWl0b0Zvb3RlcjogUHJvcFR5cGVzLm51bWJlcixcclxuICBzaG93VGl0bGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNob3dGb290ZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNob3dCdXR0b25Ub2RheTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2hvd1NlbGVjdGVkVmFsdWU6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNhbGVuZGVySXRlbUFuaW06IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbW9udGhBbmltOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRvZGF5QnV0dG9uVGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcblRlblllYXJDYWxlbmRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaW5wdXQodmFsKSB7IH0sXHJcbiAgXHJcbiAgZ2V0Q3VycmVudFllYXIodmFsKSB7IH0sXHJcbiAgY2xpY2tUaXRsZSgpIHtcclxuXHJcbiAgfSxcclxuICBkZWZZZWFyOiBcIlwiLFxyXG4gIFxyXG4gIGFjdGlvblN0ZXA6IDEsXHJcbiAgbW92ZUFjdGlvbjoge1xyXG4gICAgYWN0aW9uOiBcIlwiLFxyXG4gICAgc3RlcDogMSxcclxuICAgIHVzZUp1bXA6IGZhbHNlLFxyXG4gICAganVtcDoge31cclxuICB9LFxyXG4gIGlzVGhyZWVSb3c6IGZhbHNlLFxyXG4gIHZhbHVlOiBcIlwiLFxyXG4gIHNlbGVjdGVkQ2xhc3NOYW1lOiBcInNlbGVjdGVkXCIsXHJcbiAgdG9kYXlTdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2U4NDU0NVwiLFxyXG4gICAgYmFja2dyb3VuZDogXCIjMDBhZGI1XCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBcIjAgMCA1cHggI2U4NDU0NVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCIgYWxsIDFzXCJcclxuICB9LFxyXG4gIGFmdGVyVG9kYXlTdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiLFxyXG5cclxuICAgIGJveFNoYWRvdzogXCJpbnNldCAwIDAgMTBweCAjZWVlZWVlXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyMjI4MzFcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIGJlZm9yZVRvZGF5U3R5bGU6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiI2VlZWVlZVwiLFxyXG5cclxuICAgIGJveFNoYWRvdzogXCJpbnNldCAwIDAgMTBweCAjMjIyODMxXCIsXHJcbiAgICBjb2xvcjogXCIjMjIyODMxXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxc1wiXHJcbiAgfSxcclxuICBzZWxlY3RTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCJvcmFuZ2VyZWRcIixcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxc1wiXHJcbiAgfSxcclxuICBjYWxlbmRlckNlbGxCb2R5U3R5bGU6IHtcclxuICB9LFxyXG4gIGNhbGVuZGVyQ2VsbFdpdGhUZXh0U3R5bGU6IHtcclxuICAgIC8vIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxyXG4gICAgbWFyZ2luOiBcIjJweFwiLFxyXG4gICAgXCJXZWJraXRVc2VyU2VsZWN0XCI6IFwibm9uZVwiLFxyXG4gICAgXCJNb3pVc2VyU2VsZWN0XCI6IFwibm9uZVwiLFxyXG4gICAgXCJtc1VzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMXNcIlxyXG4gIH0sXHJcbiAgY2FsZW5kZXJDZWxsTm9UZXh0U3R5bGU6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiIzAwMFwiLFxyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIlxyXG4gIH0sXHJcbiAgcm93Q2FsZW5kZXJJdGVtU3R5bGU6IHtcclxuICB9LFxyXG4gIHJvd0NhbGVuZGVyU3R5bGU6IHtcclxuICAgIG1hcmdpbjogXCIwIC0xNHB4XCJcclxuICB9LFxyXG4gIGhlYWRlckNhbGVuZGVySXRlbVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiXHJcbiAgfSxcclxuICBtYWluQm9keVN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMzOTNlNDZcIixcclxuICAgIGJvcmRlcjogXCIycHggc29saWQgI2VlZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcclxuICAgIHBhZGRpbmc6IFwiMTVweFwiXHJcbiAgfSxcclxuICBhcnJvd1JpZ2h0U3R5bGU6IHtcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIlxyXG4gIH0sXHJcbiAgYXJyb3dMZWZ0U3R5bGU6IHtcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIlxyXG4gIH0sXHJcbiAgY2xpY2thYmxlU3R5bGU6IHtcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcclxuICAgIFwiV2Via2l0VXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICAgIFwiTW96VXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICAgIFwibXNVc2VyU2VsZWN0XCI6IFwibm9uZVwiLFxyXG4gIH0sXHJcbiAgdGl0bGVTdHlsZToge1xyXG4gICAgbWFyZ2luVG9wOiBcIi0xMHB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMzOTNlNDZcIixcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIlxyXG4gIH0sXHJcbiAgaGVhZGVyQ2FsZW5kZXJTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMjIyODMxXCIsXHJcbiAgICBtYXJnaW46IFwiMCAtMTRweFwiXHJcbiAgfSxcclxuICBmb290ZXJTdHlsZToge1xyXG4gICAgbWFyZ2luVG9wOiBcIjE0cHhcIlxyXG4gIH0sXHJcbiAgdG9kYXlCdXR0b25TdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiLFxyXG4gICAgb3V0bGluZTogXCJub25lICFpbXBvcnRhbnRcIlxyXG4gIH0sXHJcbiAgc2hvd1NlbGVjdGVkVmFsdWVTdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXHJcbiAgfSxcclxuICBjdXN0b21Gb3JtYXQ6IFwiWVlZWS9NL0RcIixcclxuICB1c2VSYWl0b1NpemluZzogdHJ1ZSxcclxuICByYWl0b1RpdGxlOiAxLFxyXG4gIHJhaXRvVGFibGVIZWRlYXI6IDEsXHJcbiAgcmFpdG9Cb2R5OiA4LFxyXG4gIHJhaXRvRm9vdGVyOiAxLFxyXG4gIHNob3dUaXRsZTogdHJ1ZSxcclxuICBzaG93Rm9vdGVyOiB0cnVlLFxyXG4gIHNob3dCdXR0b25Ub2RheTogdHJ1ZSxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZTogdHJ1ZSxcclxuICBjYWxlbmRlckl0ZW1BbmltOiBcInNsaWRlLWZhZGVcIixcclxuICBtb250aEFuaW06IFwiZmFkZVwiLFxyXG4gIHRvZGF5QnV0dG9uVGl0bGU6IFwiQ3VycmVudCB5ZWFyXCJcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZW5ZZWFyQ2FsZW5kZXI7XHJcbiJdfQ==