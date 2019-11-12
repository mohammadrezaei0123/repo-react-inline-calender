"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./InlineCalender.css");

var _MonthCalender$defaul;

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

var MonthCalender =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MonthCalender, _React$Component);

  function MonthCalender(props) {
    var _this;

    _classCallCheck(this, MonthCalender);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MonthCalender).call(this, props));
    _this.state = {
      selectedMonthName: "",
      totalMainRow: _this.props.isThreeRow ? 3 : 4,
      totalMainCol: _this.props.isThreeRow ? 4 : 3,
      moveAction: {
        action: "",
        step: 1,
        useJump: false,
        jump: {}
      },
      monthHeader: {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
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

  _createClass(MonthCalender, [{
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
              return _this2.selecValues((j - 1) * _this2.state.totalMainCol + i, $event);
            },
            className: "ratio-child",
            key: i + 'ggg',
            style: _objectSpread({}, _this2.styleCellCal1((j - 1) * _this2.state.totalMainCol + i), {}, _this2.props.calenderCellWithTextStyle)
          }, _react.default.createElement("div", {
            className: "d-flex justify-content-center align-items-center h-100 w-100"
          }, _this2.state.monthHeader[(j - 1) * _this2.state.totalMainCol + i]))));
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
      var today = this.conv(momentObject.format("YYYY-M-D"));
      var defFormat = momentObject.format("YYYY/M/");
      var todayDay = parseInt(this.conv(momentObject.format("D")));
      var todayMonth = this.conv(momentObject.format("M"));
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
        var selectedMonth = this.conv(ddd.format("M"));
        var selectedMonthName = this.state.monthHeader[selectedMonth];
        var selectedYear = ddd.format("YYYY");
        var selectedDay = ddd.format("D");
        this.setStators({
          selectedMonthName: selectedMonthName,
          selectedMonth: selectedMonth,
          selectedYear: selectedYear,
          selectedDay: selectedDay
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

      if (typeof this.props.defMonth !== "undefined" && this.props.defMonth + "".length > 0 && !!parseInt(this.props.defMonth) && parseInt(this.props.defMonth) >= 0) {
        momentObject.month(parseInt(this.props.defMonth - 1));
        this.setStators({
          currMonth: this.conv(momentObject.format("M"))
        });
      }

      this.setStators({
        momentObject: momentObject,
        today: today,
        defFormat: defFormat,
        todayDay: todayDay,
        todayMonth: todayMonth,
        todayYear: todayYear
      }, this.changeMonth, true);
    }
  }, {
    key: "styleCellCal1",
    value: function styleCellCal1(index) {
      if (this.state.selectedYear == this.conv(this.state.currYear) && index == this.state.selectedMonth && index != this.state.todayMonth) {
        return this.props.selectStyle;
      } else {
        if (this.state.currYear == this.state.todayYear) {
          if (index == this.state.todayMonth) {
            return this.props.todayStyle;
          } else if (index > parseInt(this.state.todayMonth)) {
            return this.props.afterTodayStyle;
          } else {
            return this.props.beforeTodayStyle;
          }
        } else if (this.state.currYear < this.state.todayYear) {
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

          if (this.state.selectedYear == this.state.momentObject.format("YYYY") && this.state.selectedMonthName == this.state.monthHeader[this.conv(this.state.momentObject.format("M"))]) {
            this.styleStter(this.state.lastSelectedNode, _objectSpread({}, this.props.selectStyle));
          } else {
            this.clearStter(this.state.lastSelectedNode);
          }
        }
      }

      var momentObject = this.state.momentObject;
      momentObject.startOf("month");
      var startDayMoment = momentObject;
      momentObject.endOf("month");
      var currMonth = this.conv(momentObject.format("M"));
      var currYear = momentObject.format("YYYY");
      this.setState({
        momentObject: momentObject,
        startDayMoment: startDayMoment,
        currMonth: currMonth,
        currYear: currYear
      });
      this.props.getCurrentYear(currYear);
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      var momentObject = this.state.momentObject;
      momentObject.add(1, "year");
      this.setState({
        momentObject: momentObject
      }, this.changeMonth, false);
    }
  }, {
    key: "perMonth",
    value: function perMonth() {
      var momentObject = this.state.momentObject;
      momentObject.add(-1, "year");
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
        var inputValue = this.state.startDayMoment.startOf("month").add(index - 1, "day").format(this.props.customFormat);
        var selectedMonth = this.conv(this.state.startDayMoment.format("M"));
        var selectedMonthName = this.state.monthHeader[selectedMonth];
        var selectedYear = this.state.startDayMoment.format("YYYY");
        var selectedDay = this.state.startDayMoment.format("D");
        inputValue = this.conv(selectedYear) + "-" + index;
        this.props.sYear(this.conv(selectedYear));
        this.props.sMonth(index);
        this.setStators({
          selectedMonthName: selectedMonthName,
          lastSelectedNode: lastSelectedNode,
          inputValue: inputValue,
          selectedMonth: selectedMonth,
          selectedYear: selectedYear,
          selectedDay: selectedDay
        }, this.props.input, inputValue);
      } else {
        this.clearStter(this.state.lastSelectedNode);

        var _inputValue = this.state.startDayMoment.startOf("month").add(index - 1, "day").format(this.props.customFormat);

        var _selectedMonth = this.conv(this.state.startDayMoment.format("M"));

        var _selectedMonthName = this.state.monthHeader[_selectedMonth];

        var _selectedYear = this.state.startDayMoment.format("YYYY");

        var _selectedDay = this.state.startDayMoment.format("D");

        _inputValue = this.conv(_selectedYear) + "-" + index;
        this.props.sYear(this.conv(_selectedYear));
        this.props.sMonth(index);
        this.setStators({
          lastSelectedNode: lastSelectedNode,
          selectedMonthName: _selectedMonthName,
          inputValue: _inputValue,
          selectedMonth: _selectedMonth,
          selectedYear: _selectedYear,
          selectedDay: _selectedDay
        }, this.props.input, _inputValue);
      }

      this.styleStter(lastSelectedNode, _objectSpread({}, this.props.selectStyle));
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
        }, _react.default.createElement("div", null, this.state.currYear)), _react.default.createElement("div", {
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
          className: "btn btn-small justify-content-center align-items-center",
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
        }, _react.default.createElement("div", null, this.state.currYear)), _react.default.createElement("div", {
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
          className: "btn btn-small justify-content-center align-items-center",
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

  return MonthCalender;
}(_react.default.Component);

MonthCalender.propTypes = {
  defYear: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  defMonth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  input: _propTypes.default.func,
  getCurrentYear: _propTypes.default.func,
  sYear: _propTypes.default.func,
  sMonth: _propTypes.default.func,
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
MonthCalender.defaultProps = (_MonthCalender$defaul = {
  input: function input(val) {},
  getCurrentYear: function getCurrentYear(val) {},
  sYear: function sYear(val) {},
  sMonth: function sMonth(val) {}
}, _defineProperty(_MonthCalender$defaul, "getCurrentYear", function getCurrentYear(val) {}), _defineProperty(_MonthCalender$defaul, "clickTitle", function clickTitle() {}), _defineProperty(_MonthCalender$defaul, "defYear", ""), _defineProperty(_MonthCalender$defaul, "defMonth", ""), _defineProperty(_MonthCalender$defaul, "actionStep", 1), _defineProperty(_MonthCalender$defaul, "moveAction", {
  action: "",
  step: 1,
  useJump: false,
  jump: {}
}), _defineProperty(_MonthCalender$defaul, "isThreeRow", false), _defineProperty(_MonthCalender$defaul, "value", ""), _defineProperty(_MonthCalender$defaul, "selectedClassName", "selected"), _defineProperty(_MonthCalender$defaul, "todayStyle", {
  color: "#e84545",
  background: "#00adb5",
  boxShadow: "0 0 5px #e84545",
  transition: " all 1s"
}), _defineProperty(_MonthCalender$defaul, "afterTodayStyle", {
  color: "#eeeeee",
  boxShadow: "inset 0 0 10px #eeeeee",
  background: "#222831",
  transition: "all 1s"
}), _defineProperty(_MonthCalender$defaul, "beforeTodayStyle", {
  background: "#eeeeee",
  boxShadow: "inset 0 0 10px #222831",
  color: "#222831",
  transition: "all 1s"
}), _defineProperty(_MonthCalender$defaul, "selectStyle", {
  background: "orangered",
  transition: "all 1s"
}), _defineProperty(_MonthCalender$defaul, "calenderCellBodyStyle", {}), _defineProperty(_MonthCalender$defaul, "calenderCellWithTextStyle", {
  // borderRadius: "50%",
  userSelect: "none",
  margin: "2px",
  "WebkitUserSelect": "none",
  "MozUserSelect": "none",
  "msUserSelect": "none",
  cursor: "pointer",
  transition: "all 1s"
}), _defineProperty(_MonthCalender$defaul, "calenderCellNoTextStyle", {
  background: "#000",
  color: "#fff",
  margin: "auto"
}), _defineProperty(_MonthCalender$defaul, "rowCalenderItemStyle", {}), _defineProperty(_MonthCalender$defaul, "rowCalenderStyle", {
  margin: "0 -14px"
}), _defineProperty(_MonthCalender$defaul, "headerCalenderItemStyle", {
  color: "#eeeeee",
  margin: "auto"
}), _defineProperty(_MonthCalender$defaul, "mainBodyStyle", {
  background: "#393e46",
  border: "2px solid #eee",
  borderRadius: "15px",
  padding: "15px"
}), _defineProperty(_MonthCalender$defaul, "arrowRightStyle", {
  color: "#eeeeee"
}), _defineProperty(_MonthCalender$defaul, "arrowLeftStyle", {
  color: "#eeeeee"
}), _defineProperty(_MonthCalender$defaul, "clickableStyle", {
  cursor: "pointer",
  userSelect: "none",
  "WebkitUserSelect": "none",
  "MozUserSelect": "none",
  "msUserSelect": "none"
}), _defineProperty(_MonthCalender$defaul, "titleStyle", {
  marginTop: "-10px",
  background: "#393e46",
  color: "#eeeeee"
}), _defineProperty(_MonthCalender$defaul, "headerCalenderStyle", {
  background: "#222831",
  margin: "0 -14px"
}), _defineProperty(_MonthCalender$defaul, "footerStyle", {
  marginTop: "14px"
}), _defineProperty(_MonthCalender$defaul, "todayButtonStyle", {
  color: "#eeeeee",
  outline: "none !important"
}), _defineProperty(_MonthCalender$defaul, "showSelectedValueStyle", {
  color: "#eeeeee",
  display: "flex",
  alignItems: "center"
}), _defineProperty(_MonthCalender$defaul, "customFormat", "YYYY/M/D"), _defineProperty(_MonthCalender$defaul, "useRaitoSizing", true), _defineProperty(_MonthCalender$defaul, "raitoTitle", 1), _defineProperty(_MonthCalender$defaul, "raitoTableHedear", 1), _defineProperty(_MonthCalender$defaul, "raitoBody", 8), _defineProperty(_MonthCalender$defaul, "raitoFooter", 1), _defineProperty(_MonthCalender$defaul, "showTitle", true), _defineProperty(_MonthCalender$defaul, "showFooter", true), _defineProperty(_MonthCalender$defaul, "showButtonToday", true), _defineProperty(_MonthCalender$defaul, "showSelectedValue", true), _defineProperty(_MonthCalender$defaul, "calenderItemAnim", "slide-fade"), _defineProperty(_MonthCalender$defaul, "monthAnim", "fade"), _defineProperty(_MonthCalender$defaul, "todayButtonTitle", "Current month"), _MonthCalender$defaul);
var _default = MonthCalender;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb25lbnQvTW9udGhDYWxlbmRlci5qc3giXSwibmFtZXMiOlsiTW9udGhDYWxlbmRlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZE1vbnRoTmFtZSIsInRvdGFsTWFpblJvdyIsImlzVGhyZWVSb3ciLCJ0b3RhbE1haW5Db2wiLCJtb3ZlQWN0aW9uIiwiYWN0aW9uIiwic3RlcCIsInVzZUp1bXAiLCJqdW1wIiwibW9udGhIZWFkZXIiLCJkZWZGb3JtYXQiLCJzdGFydERheU1vbWVudCIsImNoYW5nZUFuaW0iLCJjdXJyWWVhciIsInRvZGF5IiwidG9kYXlEYXkiLCJ0b2RheU1vbnRoIiwidG9kYXlZZWFyIiwic2VsZWN0ZWRZZWFyIiwic2VsZWN0ZWRNb250aCIsInNlbGVjdGVkRGF5IiwiY3Vyck1vbnRoIiwibW9tZW50T2JqZWN0Iiwic0RheSIsImlucHV0VmFsdWUiLCJsYXN0U2VsZWN0ZWROb2RlIiwibGFzdFNlbGVjdGVkTm9kZUNsYXNzIiwic3R5bGVDZWxsQ2FsMSIsImJpbmQiLCJjaGFuZ2VNb250aCIsIm5leHRNb250aCIsInBlck1vbnRoIiwic2VsZWNWYWx1ZXMiLCJnb1RvZGF5Iiwic2V0RGF0ZXIiLCJjb252Iiwic2V0U3RhdG9ycyIsIndhdGNoTW92ZUFjdGlvbiIsInN0eWxlU3R0ZXIiLCJjbGVhclN0dGVyIiwibmV3VmFsIiwiYWN0aW9uTWV0aG9kIiwicGFyYW1BYyIsInNldFN0YXRlIiwic3R5bGVIIiwic3RhdHR0dCIsInBhcmVudE5vZGUiLCJqIiwiaW5uZXJOb2RlIiwiaSIsInB1c2giLCIkZXZlbnQiLCJjYWxlbmRlckNlbGxXaXRoVGV4dFN0eWxlIiwicm93Q2FsZW5kZXJTdHlsZSIsInZhbCIsInYiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ5ZWFyIiwiYWRkIiwibW9udGgiLCJkYXkiLCJmb3JtYXQiLCJwYXJzZUludCIsInZhbHVlIiwibGVuZ3RoIiwidGV4dCIsIm5zIiwib3V0IiwiYyIsImNoYXJBdCIsIm51bXAiLCJkZGQiLCJkZWZZZWFyIiwiZ2V0Q3VycmVudFllYXIiLCJkZWZNb250aCIsImluZGV4Iiwic2VsZWN0U3R5bGUiLCJ0b2RheVN0eWxlIiwiYWZ0ZXJUb2RheVN0eWxlIiwiYmVmb3JlVG9kYXlTdHlsZSIsImlzTW91bnRlZCIsInNlbGYiLCJzZXRUaW1lb3V0Iiwic3RhcnRPZiIsImVuZE9mIiwiZSIsIm9iIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzdHlsZSIsInRhcmdldCIsImN1c3RvbUZvcm1hdCIsInNZZWFyIiwic01vbnRoIiwiaW5wdXQiLCJuZXh0UHJvcHMiLCJ1c2VSYWl0b1NpemluZyIsIm1haW5Cb2R5U3R5bGUiLCJzaG93VGl0bGUiLCJ0aXRsZVN0eWxlIiwicmFpdG9UaXRsZSIsImN1cnNvciIsImFycm93TGVmdFN0eWxlIiwiY2xpY2tUaXRsZSIsIm1pbldpZHRoIiwiY2xpY2thYmxlU3R5bGUiLCJhcnJvd1JpZ2h0U3R5bGUiLCJtQ3JlYXRvciIsImhlaWdodCIsInJhaXRvQm9keSIsInNob3dGb290ZXIiLCJmb290ZXJTdHlsZSIsInJhaXRvRm9vdGVyIiwic2hvd0J1dHRvblRvZGF5IiwidG9kYXlCdXR0b25TdHlsZSIsInRvZGF5QnV0dG9uVGl0bGUiLCJzaG93U2VsZWN0ZWRWYWx1ZSIsInNob3dTZWxlY3RlZFZhbHVlU3R5bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiLCJhY3Rpb25TdGVwIiwib2JqZWN0IiwiYm9vbCIsInNlbGVjdGVkQ2xhc3NOYW1lIiwiY2FsZW5kZXJDZWxsQm9keVN0eWxlIiwiY2FsZW5kZXJDZWxsTm9UZXh0U3R5bGUiLCJyb3dDYWxlbmRlckl0ZW1TdHlsZSIsImhlYWRlckNhbGVuZGVySXRlbVN0eWxlIiwiaGVhZGVyQ2FsZW5kZXJTdHlsZSIsInJhaXRvVGFibGVIZWRlYXIiLCJjYWxlbmRlckl0ZW1BbmltIiwibW9udGhBbmltIiwiZGVmYXVsdFByb3BzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsInVzZXJTZWxlY3QiLCJtYXJnaW4iLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwib3V0bGluZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7OztBQUNKLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLHVGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLGlCQUFpQixFQUFDLEVBRFA7QUFFWEMsTUFBQUEsWUFBWSxFQUFHLE1BQUtILEtBQUwsQ0FBV0ksVUFBWixHQUEwQixDQUExQixHQUE4QixDQUZqQztBQUdYQyxNQUFBQSxZQUFZLEVBQUcsTUFBS0wsS0FBTCxDQUFXSSxVQUFaLEdBQTBCLENBQTFCLEdBQThCLENBSGpDO0FBSVhFLE1BQUFBLFVBQVUsRUFBRTtBQUNWQyxRQUFBQSxNQUFNLEVBQUUsRUFERTtBQUVWQyxRQUFBQSxJQUFJLEVBQUUsQ0FGSTtBQUdWQyxRQUFBQSxPQUFPLEVBQUUsS0FIQztBQUlWQyxRQUFBQSxJQUFJLEVBQUU7QUFKSSxPQUpEO0FBVVhDLE1BQUFBLFdBQVcsRUFBRTtBQUNYLFdBQUcsU0FEUTtBQUVYLFdBQUcsVUFGUTtBQUdYLFdBQUcsT0FIUTtBQUlYLFdBQUcsT0FKUTtBQUtYLFdBQUcsS0FMUTtBQU1YLFdBQUcsTUFOUTtBQU9YLFdBQUcsTUFQUTtBQVFYLFdBQUcsUUFSUTtBQVNYLFdBQUcsV0FUUTtBQVVYLFlBQUksU0FWTztBQVdYLFlBQUksVUFYTztBQVlYLFlBQUk7QUFaTyxPQVZGO0FBd0JYQyxNQUFBQSxTQUFTLEVBQUUsU0F4QkE7QUF5QlhDLE1BQUFBLGNBQWMsRUFBRSxJQXpCTDtB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Q0E5RmQsaUVBbUd1QjtBQUNuQkMsRUFBQUEsVUFBVSxFQUFFLFNBRE87QUFFbkJJLEVBQUFBLE1BQU0sRUFBRTtBQUZXLENBbkd2Qix5REF1R2U7QUFDWEksRUFBQUEsU0FBUyxFQUFFO0FBREEsQ0F2R2YsOERBMEdvQjtBQUNoQlQsRUFBQUEsS0FBSyxFQUFFLFNBRFM7QUFFaEJVLEVBQUFBLE9BQU8sRUFBRTtBQUZPLENBMUdwQixvRUE4RzBCO0FBQ3RCVixFQUFBQSxLQUFLLEVBQUUsU0FEZTtBQUV0QlcsRUFBQUEsT0FBTyxFQUFFLE1BRmE7QUFHdEJDLEVBQUFBLFVBQVUsRUFBRTtBQUhVLENBOUcxQiwwREFtSGdCLFVBbkhoQiw0REFvSGtCLElBcEhsQix3REFxSGMsQ0FySGQsOERBc0hvQixDQXRIcEIsdURBdUhhLENBdkhiLHlEQXdIZSxDQXhIZix1REF5SGEsSUF6SGIsd0RBMEhjLElBMUhkLDZEQTJIbUIsSUEzSG5CLCtEQTRIcUIsSUE1SHJCLDhEQTZIb0IsWUE3SHBCLHVEQThIYSxNQTlIYiw4REErSG9CLGVBL0hwQjtlQW1JZTVKLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgJy4vSW5saW5lQ2FsZW5kZXIuY3NzJztcclxuXHJcbmNsYXNzIE1vbnRoQ2FsZW5kZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzZWxlY3RlZE1vbnRoTmFtZTpcIlwiLFxyXG4gICAgICB0b3RhbE1haW5Sb3c6ICh0aGlzLnByb3BzLmlzVGhyZWVSb3cpID8gMyA6IDQsXHJcbiAgICAgIHRvdGFsTWFpbkNvbDogKHRoaXMucHJvcHMuaXNUaHJlZVJvdykgPyA0IDogMyxcclxuICAgICAgbW92ZUFjdGlvbjoge1xyXG4gICAgICAgIGFjdGlvbjogXCJcIixcclxuICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgIHVzZUp1bXA6IGZhbHNlLFxyXG4gICAgICAgIGp1bXA6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vbnRoSGVhZGVyOiB7XHJcbiAgICAgICAgMTogXCJKYW51YXJ5XCIsXHJcbiAgICAgICAgMjogXCJGZWJydWFyeVwiLFxyXG4gICAgICAgIDM6IFwiTWFyY2hcIixcclxuICAgICAgICA0OiBcIkFwcmlsXCIsXHJcbiAgICAgICAgNTogXCJNYXlcIixcclxuICAgICAgICA2OiBcIkp1bmVcIixcclxuICAgICAgICA3OiBcIkp1bHlcIixcclxuICAgICAgICA4OiBcIkF1Z3VzdFwiLFxyXG4gICAgICAgIDk6IFwiU2VwdGVtYmVyXCIsXHJcbiAgICAgICAgMTA6IFwiT2N0b2JlclwiLFxyXG4gICAgICAgIDExOiBcIk5vdmVtYmVyXCIsXHJcbiAgICAgICAgMTI6IFwiRGVjZW1iZXJcIlxyXG4gICAgICB9LFxyXG4gICAgICBkZWZGb3JtYXQ6IFwiWVlZWS1NLVwiLFxyXG4gICAgICBzdGFydERheU1vbWVudDogbnVsbCxcclxuICAgICAgY2hhbmdlQW5pbTogdHJ1ZSxcclxuICAgICAgY3VyclllYXI6IFwiXCIsXHJcbiAgICAgIHRvZGF5OiBcIlwiLFxyXG4gICAgICB0b2RheURheTogMSxcclxuICAgICAgdG9kYXlNb250aDogXCJcIixcclxuICAgICAgdG9kYXlZZWFyOiBcIlwiLFxyXG4gICAgICBzZWxlY3RlZFllYXI6IFwiXCIsXHJcbiAgICAgIHNlbGVjdGVkTW9udGg6IFwiXCIsXHJcbiAgICAgIHNlbGVjdGVkRGF5OiBcIlwiLFxyXG4gICAgICBjdXJyTW9udGg6IFwiXCIsXHJcbiAgICAgIG1vbWVudE9iamVjdDogbnVsbCxcclxuICAgICAgc0RheTogMCxcclxuICAgICAgaW5wdXRWYWx1ZTogXCJcIixcclxuICAgICAgbGFzdFNlbGVjdGVkTm9kZTogbnVsbCxcclxuICAgICAgbGFzdFNlbGVjdGVkTm9kZUNsYXNzOiBcIlwiXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zdHlsZUNlbGxDYWwxID0gdGhpcy5zdHlsZUNlbGxDYWwxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNoYW5nZU1vbnRoID0gdGhpcy5jaGFuZ2VNb250aC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5uZXh0TW9udGggPSB0aGlzLm5leHRNb250aC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5wZXJNb250aCA9IHRoaXMucGVyTW9udGguYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2VsZWNWYWx1ZXMgPSB0aGlzLnNlbGVjVmFsdWVzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdvVG9kYXkgPSB0aGlzLmdvVG9kYXkuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0RGF0ZXIgPSB0aGlzLnNldERhdGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvbnYgPSB0aGlzLmNvbnYuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0U3RhdG9ycyA9IHRoaXMuc2V0U3RhdG9ycy5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLndhdGNoTW92ZUFjdGlvbiA9IHRoaXMud2F0Y2hNb3ZlQWN0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuc3R5bGVTdHRlciA9IHRoaXMuc3R5bGVTdHRlci5iaW5kKHRoaXMpO1xyXG4gICAgXHJcbiAgICB0aGlzLmNsZWFyU3R0ZXIgPSB0aGlzLmNsZWFyU3R0ZXIuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgc2V0U3RhdG9ycyhuZXdWYWwsIGFjdGlvbk1ldGhvZCA9IG51bGwsIHBhcmFtQWMpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gKHtcclxuICAgICAgICAuLi5uZXdWYWxcclxuXHJcbiAgICAgIH0pXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGlmIChhY3Rpb25NZXRob2QgIT09IG51bGwpIHtcclxuICAgICAgICBhY3Rpb25NZXRob2QocGFyYW1BYylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgbUNyZWF0b3Ioc3R5bGVILCBzdGF0dHR0KSB7XHJcbiAgICBsZXQgcGFyZW50Tm9kZSA9IFtdXHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSB0aGlzLnN0YXRlLnRvdGFsTWFpblJvdzsgaisrKSB7XHJcbiAgICAgIGxldCBpbm5lck5vZGUgPSBbXVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnN0YXRlLnRvdGFsTWFpbkNvbDsgaSsrKSB7XHJcbiAgICAgICAgaW5uZXJOb2RlLnB1c2goXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGtleT17J2gnICsgaX0+XHJcbiAgICAgICAgICAgIHsvKiA8dHJhbnNpdGlvbiBuYW1lPVwiY2FsZW5kZXJJdGVtQW5pbVwiPiAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygkZXZlbnQpID0+IHRoaXMuc2VsZWNWYWx1ZXMoKCgoaiAtIDEpICogdGhpcy5zdGF0ZS50b3RhbE1haW5Db2wpICsgaSksICRldmVudCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmF0aW8tY2hpbGRcIlxyXG4gICAgICAgICAgICAgIGtleT17aSArICdnZ2cnfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0eWxlQ2VsbENhbDEoKChqIC0gMSkgKiB0aGlzLnN0YXRlLnRvdGFsTWFpbkNvbCkgKyBpKSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDAgdy0xMDBcIlxyXG4gICAgICAgICAgICAgID57XHJcbiAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm1vbnRoSGVhZGVyW1xyXG4gICAgICAgICAgICAgICAgICAgICgoaiAtIDEpICogdGhpcy5zdGF0ZS50b3RhbE1haW5Db2wpICsgaVxyXG4gICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwvdHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBhcmVudE5vZGUucHVzaCg8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMgZmxleC1ub3dyYXBcIlxyXG4gICAgICAgIGtleT17J2pqJyArIGp9XHJcbiAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgeyAuLi50aGlzLnByb3BzLnJvd0NhbGVuZGVyU3R5bGUsIC4uLnN0eWxlSCB9XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lubmVyTm9kZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyZW50Tm9kZVxyXG4gIH1cclxuICB3YXRjaE1vdmVBY3Rpb24odmFsKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgdmFsICE9PSBudWxsICYmXHJcbiAgICAgIHR5cGVvZiB2YWwuYWN0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgIHZhbC5hY3Rpb24gIT09IG51bGwgJiZcclxuICAgICAgKHR5cGVvZiB2YWwudXNlSnVtcCA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgIHZhbC51c2VKdW1wID09PSBudWxsIHx8XHJcbiAgICAgICAgIXZhbC51c2VKdW1wKVxyXG4gICAgKSB7XHJcbiAgICAgIGxldCB2ID0gdmFsLmFjdGlvbi50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdiA9PSBcIm5cIiB8fFxyXG4gICAgICAgIHYgPT0gXCJuZVwiIHx8XHJcbiAgICAgICAgdiA9PSBcIm5leFwiIHx8XHJcbiAgICAgICAgdiA9PSBcIm5leHRcIiB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcIm5cIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcIm5lXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJuZXhcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcIm5leHRcIikgPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLm5leHRNb250aCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgICBtb3ZlQWN0aW9uOiB2YWwsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB2ID09IFwicHJldmlvdXNcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aW91XCIgfHxcclxuICAgICAgICB2ID09IFwicHJldmlvXCIgfHxcclxuICAgICAgICB2ID09IFwicHJldmlcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmV2XCIgfHxcclxuICAgICAgICB2ID09IFwicHJlXCIgfHxcclxuICAgICAgICB2ID09IFwicHJcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwXCIgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2aW91c1wiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJldmlvdVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJldmlvXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2aVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJldlwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicHJlXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwclwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwicFwiKSA9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMucGVyTW9udGgoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgICAgbW92ZUFjdGlvbjogdmFsLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgdiA9PSBcInRvZGF5XCIgfHxcclxuICAgICAgICB2ID09IFwidG9kYVwiIHx8XHJcbiAgICAgICAgdiA9PSBcInRvZFwiIHx8XHJcbiAgICAgICAgdiA9PSBcInRvXCIgfHxcclxuICAgICAgICB2ID09IFwidFwiIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidG9kYXlcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInRvZGFcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInRvZFwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidG9cIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInRcIikgPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmdvVG9kYXkoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgICAgbW92ZUFjdGlvbjogdmFsLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0eXBlb2YgdmFsLnVzZUp1bXAgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICB2YWwudXNlSnVtcCAhPT0gbnVsbCAmJlxyXG4gICAgICAgIHZhbC51c2VKdW1wICYmXHJcbiAgICAgICAgdHlwZW9mIHZhbC5qdW1wID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgdmFsLmp1bXAgIT09IG51bGxcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IG1vbWVudE9iamVjdCA9IHRoaXMuc3RhdGUubW9tZW50T2JqZWN0XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwuanVtcC55ZWFyICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbC5qdW1wLnllYXIgIT09IG51bGwpIHtcclxuICAgICAgICAgIG1vbWVudE9iamVjdC5hZGQodmFsLmp1bXAueWVhciwgXCJ5ZWFyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0eXBlb2YgdmFsLmp1bXAubW9udGggIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICAgIHZhbC5qdW1wLm1vbnRoICE9PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBtb21lbnRPYmplY3QuYWRkKHZhbC5qdW1wLm1vbnRoLCBcIm1vbnRoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHZhbC5qdW1wLmRheSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB2YWwuanVtcC5kYXkgIT09IG51bGwpIHtcclxuICAgICAgICAgIG1vbWVudE9iamVjdC5hZGQodmFsLmp1bXAuZGF5LCBcImRheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICAgIG1vdmVBY3Rpb246IHZhbCxcclxuICAgICAgICAgIG1vbWVudE9iamVjdFxyXG4gICAgICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgbGV0IG1vbWVudE9iamVjdCA9IG1vbWVudCgpO1xyXG4gICAgbGV0IHRvZGF5ID0gdGhpcy5jb252KG1vbWVudE9iamVjdC5mb3JtYXQoXCJZWVlZLU0tRFwiKSk7XHJcbiAgICBsZXQgZGVmRm9ybWF0ID0gbW9tZW50T2JqZWN0LmZvcm1hdChcIllZWVkvTS9cIik7XHJcbiAgICBsZXQgdG9kYXlEYXkgPSBwYXJzZUludCh0aGlzLmNvbnYobW9tZW50T2JqZWN0LmZvcm1hdChcIkRcIikpKTtcclxuICAgIGxldCB0b2RheU1vbnRoID0gdGhpcy5jb252KG1vbWVudE9iamVjdC5mb3JtYXQoXCJNXCIpKVxyXG4gICAgbGV0IHRvZGF5WWVhciA9IG1vbWVudE9iamVjdC5mb3JtYXQoXCJZWVlZXCIpO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHRoaXMucHJvcHMudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgdGV4dCA9IHRoaXMucHJvcHMudmFsdWU7XHJcbiAgICAgIHZhciBucyA9IFwi27Dbsduy27PbtNu127bbt9u427lcIjtcclxuICAgICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICAgIGxldCBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjID0gbnMuaW5kZXhPZih0ZXh0LmNoYXJBdChpKSk7XHJcbiAgICAgICAgbGV0IG51bXAgPSBwYXJzZUludChjKTtcclxuICAgICAgICBpZiAobnVtcCA+PSAwKSB7XHJcbiAgICAgICAgICBvdXQgKz0gYztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb3V0ICs9IHRleHQuY2hhckF0KGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICBsZXQgZGRkPW1vbWVudCgpXHJcbiAgIGRkZC55ZWFyKHBhcnNlSW50KG91dCkpXHJcbiAgIG1vbWVudE9iamVjdD1kZGRcclxuICAgXHJcbiAgICAgICAgIGxldCBzZWxlY3RlZE1vbnRoPXRoaXMuY29udihkZGQuZm9ybWF0KFwiTVwiKSlcclxuICAgICAgICAgbGV0IHNlbGVjdGVkTW9udGhOYW1lID0gIHRoaXMuc3RhdGUubW9udGhIZWFkZXJbXHJcbiAgICAgICAgICBzZWxlY3RlZE1vbnRoXHJcbiAgICAgICBdO1xyXG4gICAgICAgICBcclxuICAgICAgICAgbGV0IHNlbGVjdGVkWWVhciA9IGRkZC5mb3JtYXQoXCJZWVlZXCIpO1xyXG4gICAgICAgICBsZXQgc2VsZWN0ZWREYXkgPSBkZGQuZm9ybWF0KFwiRFwiKVxyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgIHNlbGVjdGVkTW9udGhOYW1lLFxyXG4gICAgICAgIHNlbGVjdGVkTW9udGgsXHJcbiAgICAgICAgc2VsZWN0ZWRZZWFyLFxyXG4gICAgICAgIHNlbGVjdGVkRGF5LFxyXG4gICAgICB9KVxyXG4gICAgICBtb21lbnRPYmplY3QgPSBkZGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2YgdGhpcy5wcm9wcy5kZWZZZWFyICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgIHRoaXMucHJvcHMuZGVmWWVhciArIFwiXCIubGVuZ3RoID4gMCAmJlxyXG4gICAgICAoISFwYXJzZUludCh0aGlzLnByb3BzLmRlZlllYXIpICYmIHBhcnNlSW50KHRoaXMucHJvcHMuZGVmWWVhcikgPj0gMClcclxuICAgICkge1xyXG4gICAgICBtb21lbnRPYmplY3QueWVhcihwYXJzZUludCh0aGlzLnByb3BzLmRlZlllYXIpKTtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHsgY3VyclllYXI6IG1vbWVudE9iamVjdC5mb3JtYXQoXCJZWVlZXCIpIH0pXHJcbiAgICAgIFxyXG4gICAgdGhpcy5wcm9wcy5nZXRDdXJyZW50WWVhcihtb21lbnRPYmplY3QuZm9ybWF0KFwiWVlZWVwiKSlcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHRoaXMucHJvcHMuZGVmTW9udGggIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgdGhpcy5wcm9wcy5kZWZNb250aCArIFwiXCIubGVuZ3RoID4gMCAmJlxyXG4gICAgICAoISFwYXJzZUludCh0aGlzLnByb3BzLmRlZk1vbnRoKSAmJiBwYXJzZUludCh0aGlzLnByb3BzLmRlZk1vbnRoKSA+PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIG1vbWVudE9iamVjdC5tb250aChwYXJzZUludCh0aGlzLnByb3BzLmRlZk1vbnRoIC0gMSkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgIGN1cnJNb250aDogdGhpcy5jb252KG1vbWVudE9iamVjdC5mb3JtYXQoXCJNXCIpKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgbW9tZW50T2JqZWN0LFxyXG4gICAgICB0b2RheSxcclxuICAgICAgZGVmRm9ybWF0LFxyXG4gICAgICB0b2RheURheSxcclxuICAgICAgdG9kYXlNb250aCxcclxuICAgICAgdG9kYXlZZWFyXHJcblxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgdHJ1ZSlcclxuICB9XHJcbiAgc3R5bGVDZWxsQ2FsMShpbmRleCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkWWVhciA9PSB0aGlzLmNvbnYodGhpcy5zdGF0ZS5jdXJyWWVhcikgJiZcclxuICAgICAgaW5kZXggPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZE1vbnRoICYmXHJcbiAgICAgIGluZGV4IT10aGlzLnN0YXRlLnRvZGF5TW9udGhcclxuICAgICl7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdFN0eWxlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuc3RhdGUuY3VyclllYXIgPT0gdGhpcy5zdGF0ZS50b2RheVllYXIgXHJcbiAgICApIHtcclxuICAgICAgICBpZihpbmRleD09dGhpcy5zdGF0ZS50b2RheU1vbnRoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudG9kYXlTdHlsZTtcclxuICAgICAgICB9ZWxzZSBpZihpbmRleD5wYXJzZUludCh0aGlzLnN0YXRlLnRvZGF5TW9udGgpKXtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWZ0ZXJUb2RheVN0eWxlO1xyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYmVmb3JlVG9kYXlTdHlsZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VyclllYXIgPCB0aGlzLnN0YXRlLnRvZGF5WWVhcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5iZWZvcmVUb2RheVN0eWxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWZ0ZXJUb2RheVN0eWxlO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiBcclxuICBjaGFuZ2VNb250aChpc01vdW50ZWQgPSBmYWxzZSkge1xyXG4gICAgaWYgKCFpc01vdW50ZWQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHsgY2hhbmdlQW5pbTogZmFsc2UgfSlcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWxmLnNldFN0YXRvcnMoeyBjaGFuZ2VBbmltOiB0cnVlIH0pXHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2xlYXJTdHRlcih0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUpXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFllYXIgPT0gXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLm1vbWVudE9iamVjdC5mb3JtYXQoXCJZWVlZXCIpICYmXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkTW9udGhOYW1lID09XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLm1vbnRoSGVhZGVyW1xyXG4gICAgICAgICAgICB0aGlzLmNvbnYodGhpcy5zdGF0ZS5tb21lbnRPYmplY3QuZm9ybWF0KFwiTVwiKSlcclxuICAgICAgICAgIF1cclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuc3R5bGVTdHRlcih0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUse1xyXG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLnNlbGVjdFN0eWxlfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jbGVhclN0dGVyKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gdGhpcy5zdGF0ZS5tb21lbnRPYmplY3RcclxuICAgIG1vbWVudE9iamVjdC5zdGFydE9mKFwibW9udGhcIik7XHJcbiAgICBsZXQgc3RhcnREYXlNb21lbnQgPSBtb21lbnRPYmplY3Q7XHJcbiAgICBtb21lbnRPYmplY3QuZW5kT2YoXCJtb250aFwiKTtcclxuICAgIGxldCBjdXJyTW9udGggPSB0aGlzLmNvbnYobW9tZW50T2JqZWN0LmZvcm1hdChcIk1cIikpXHJcblxyXG5cclxuICAgIGxldCBjdXJyWWVhciA9IG1vbWVudE9iamVjdC5mb3JtYXQoXCJZWVlZXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vbWVudE9iamVjdCxcclxuICAgICAgc3RhcnREYXlNb21lbnQsXHJcbiAgICAgIGN1cnJNb250aCxcclxuICAgICAgY3VyclllYXJcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB0aGlzLnByb3BzLmdldEN1cnJlbnRZZWFyKGN1cnJZZWFyKVxyXG4gIH1cclxuICBuZXh0TW9udGgoKSB7XHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gdGhpcy5zdGF0ZS5tb21lbnRPYmplY3RcclxuICAgIG1vbWVudE9iamVjdC5hZGQoMSwgXCJ5ZWFyXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vbWVudE9iamVjdFxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpO1xyXG4gIH1cclxuICBwZXJNb250aCgpIHtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LmFkZCgtMSwgXCJ5ZWFyXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vbWVudE9iamVjdFxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpO1xyXG4gIH1cclxuICBzdHlsZVN0dGVyKGUsb2I9e1xyXG4gICAgLi4udGhpcy5wcm9wcy5zZWxlY3RTdHlsZX0pe1xyXG4gICAgT2JqZWN0LmtleXMob2IpLmZvckVhY2godj0+e1xyXG5cclxuICAgICAgZS5zdHlsZVt2XT1vYlt2XVxyXG4gICAgfSlcclxuICB9XHJcbiAgY2xlYXJTdHRlcihlKXtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0U3R5bGUpLmZvckVhY2godj0+e1xyXG4gICAgICBlLnN0eWxlW3ZdPScnXHJcbiAgICB9KVxyXG4gIH1cclxuICBzZWxlY1ZhbHVlcyhpbmRleCwgZSkge1xyXG4gICAgbGV0IGxhc3RTZWxlY3RlZE5vZGUgPSBlLnRhcmdldDtcclxuICAgIGlmICh0aGlzLnN0YXRlLmxhc3RTZWxlY3RlZE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICBsZXQgaW5wdXRWYWx1ZSA9IHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnRcclxuICAgICAgICAuc3RhcnRPZihcIm1vbnRoXCIpXHJcbiAgICAgICAgLmFkZChpbmRleCAtIDEsIFwiZGF5XCIpXHJcbiAgICAgICAgLmZvcm1hdCh0aGlzLnByb3BzLmN1c3RvbUZvcm1hdCk7XHJcbiAgICAgIGxldCBzZWxlY3RlZE1vbnRoID0gdGhpcy5jb252KHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnQuZm9ybWF0KFwiTVwiKSlcclxuICAgICAgbGV0IHNlbGVjdGVkTW9udGhOYW1lID0gIHRoaXMuc3RhdGUubW9udGhIZWFkZXJbXHJcbiAgICAgICAgc2VsZWN0ZWRNb250aFxyXG4gICAgXTtcclxuICAgICAgbGV0IHNlbGVjdGVkWWVhciA9IHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnQuZm9ybWF0KFwiWVlZWVwiKTtcclxuICAgICAgbGV0IHNlbGVjdGVkRGF5ID0gdGhpcy5zdGF0ZS5zdGFydERheU1vbWVudC5mb3JtYXQoXCJEXCIpO1xyXG4gICAgICBpbnB1dFZhbHVlPXRoaXMuY29udihzZWxlY3RlZFllYXIpK1wiLVwiKyBpbmRleFxyXG4gICAgICBcclxuICAgIHRoaXMucHJvcHMuc1llYXIodGhpcy5jb252KHNlbGVjdGVkWWVhcikpXHJcbiAgICB0aGlzLnByb3BzLnNNb250aChpbmRleClcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBzZWxlY3RlZE1vbnRoTmFtZSxcclxuICAgICAgICBsYXN0U2VsZWN0ZWROb2RlLFxyXG4gICAgICAgIGlucHV0VmFsdWUsXHJcbiAgICAgICAgc2VsZWN0ZWRNb250aCxcclxuICAgICAgICBzZWxlY3RlZFllYXIsXHJcbiAgICAgICAgc2VsZWN0ZWREYXlcclxuICAgICAgfSwgdGhpcy5wcm9wcy5pbnB1dCwgaW5wdXRWYWx1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNsZWFyU3R0ZXIodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlKVxyXG4gICAgICBsZXQgaW5wdXRWYWx1ZSA9IHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnRcclxuICAgICAgICAuc3RhcnRPZihcIm1vbnRoXCIpXHJcbiAgICAgICAgLmFkZChpbmRleCAtIDEsIFwiZGF5XCIpXHJcbiAgICAgICAgLmZvcm1hdCh0aGlzLnByb3BzLmN1c3RvbUZvcm1hdCk7XHJcbiAgICAgIGxldCBzZWxlY3RlZE1vbnRoID0gdGhpcy5jb252KHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnQuZm9ybWF0KFwiTVwiKSlcclxuICAgICAgbGV0IHNlbGVjdGVkTW9udGhOYW1lID0gIHRoaXMuc3RhdGUubW9udGhIZWFkZXJbc2VsZWN0ZWRNb250aF07XHJcbiAgICAgIGxldCBzZWxlY3RlZFllYXIgPSB0aGlzLnN0YXRlLnN0YXJ0RGF5TW9tZW50LmZvcm1hdChcIllZWVlcIik7XHJcblxyXG4gICAgICBsZXQgc2VsZWN0ZWREYXkgPSB0aGlzLnN0YXRlLnN0YXJ0RGF5TW9tZW50LmZvcm1hdChcIkRcIik7XHJcbiAgICAgIGlucHV0VmFsdWU9dGhpcy5jb252KHNlbGVjdGVkWWVhcikrXCItXCIrIGluZGV4XHJcbiAgICAgIFxyXG4gICAgdGhpcy5wcm9wcy5zWWVhcih0aGlzLmNvbnYoc2VsZWN0ZWRZZWFyKSlcclxuICAgIHRoaXMucHJvcHMuc01vbnRoKGluZGV4KVxyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgIGxhc3RTZWxlY3RlZE5vZGUsXHJcbiAgICAgICAgc2VsZWN0ZWRNb250aE5hbWUsXHJcbiAgICAgICAgaW5wdXRWYWx1ZSxcclxuICAgICAgICBzZWxlY3RlZE1vbnRoLFxyXG4gICAgICAgIHNlbGVjdGVkWWVhcixcclxuICAgICAgICBzZWxlY3RlZERheVxyXG4gICAgICB9LCB0aGlzLnByb3BzLmlucHV0LFxyXG4gICAgICAgIGlucHV0VmFsdWUpXHJcbiAgICB9XHJcbiAgICB0aGlzLnN0eWxlU3R0ZXIobGFzdFNlbGVjdGVkTm9kZSx7XHJcbiAgICAgIC4uLnRoaXMucHJvcHMuc2VsZWN0U3R5bGV9KTtcclxuICB9XHJcbiAgZ29Ub2RheSgpIHtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSBtb21lbnQoKTtcclxuICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgIG1vbWVudE9iamVjdFxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpXHJcbiAgfVxyXG5cclxuICBzZXREYXRlcigpIHtcclxuICAgIHRoaXMuc0RheSA9IHRoaXMuc0RheSArIDE7XHJcbiAgICByZXR1cm4gdGhpcy5zRGF5O1xyXG4gIH1cclxuICBjb252KHZhbCkge1xyXG4gICAgbGV0IHRleHQgPSB2YWwgKyBcIlwiO1xyXG4gICAgaWYgKHRleHQubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICB2YXIgbnMgPSBcItuw27Hbstuz27Tbtdu227fbuNu5XCI7XHJcbiAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgIGxldCBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGMgPSB0ZXh0LmNoYXJBdChpKTtcclxuICAgICAgbGV0IG51bXAgPSBucy5pbmRleE9mKGMgKyBcIlwiKTtcclxuICAgICAgaWYgKG51bXAgPj0gMCkge1xyXG4gICAgICAgIG91dCArPSBudW1wO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG91dCArPSBjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIC8vIFlvdSBkb24ndCBoYXZlIHRvIGRvIHRoaXMgY2hlY2sgZmlyc3QsIGJ1dCBpdCBjYW4gaGVscCBwcmV2ZW50IGFuIHVubmVlZGVkIHJlbmRlclxyXG4gICAgaWYgKHRoaXMuc3RhdGUubW92ZUFjdGlvbiAhPT0gbmV4dFByb3BzLm1vdmVBY3Rpb24pIHtcclxuICAgICAgdGhpcy53YXRjaE1vdmVBY3Rpb24obmV4dFByb3BzLm1vdmVBY3Rpb24pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLnVzZVJhaXRvU2l6aW5nKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpby1wYXJlbnQgbXktZm9udC1jYWxlbmRlclwiID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW8tY2hpbGRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdy0xMDAgaC0xMDBcIiBzdHlsZT17dGhpcy5wcm9wcy5tYWluQm9keVN0eWxlfT5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93VGl0bGUgJiZcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMudGl0bGVTdHlsZSwgLi4uIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6ICh0aGlzLnByb3BzLnJhaXRvVGl0bGUgKiAxMCArICclJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnBlck1vbnRofVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpLWNoZXZyb24tbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Y29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuYXJyb3dMZWZ0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNy44MTI1JVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgMzAgTDggMTYgMjAgMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmNsaWNrVGl0bGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnsgbWluV2lkdGg6ICcyMCUnIH0sIC4uLnRoaXMucHJvcHMuY2xpY2thYmxlU3R5bGUgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnsodGhpcy5zdGF0ZS5jdXJyWWVhcil9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGwgZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV4dE1vbnRofVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpLWNoZXZyb24tcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMiAzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmFycm93UmlnaHRTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI3LjgxMjUlXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAzMCBMMjQgMTYgMTIgMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tQ3JlYXRvcih7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogKHRoaXMucHJvcHMucmFpdG9Cb2R5IC8gdGhpcy5zdGF0ZS50b3RhbE1haW5Sb3cpICogMTAgKyAnJSdcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dGb290ZXIgJiZcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi50aGlzLnByb3BzLmZvb3RlclN0eWxlLCAuLi57IGhlaWdodDogdGhpcy5wcm9wcy5yYWl0b0Zvb3RlciAqIDEwICsgJyUnIH0gfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93QnV0dG9uVG9kYXkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnRoaXMucHJvcHMudG9kYXlCdXR0b25TdHlsZSwgLi4ueyBjdXJzb3I6ICdwb2ludGVyJyB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ29Ub2RheX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnByb3BzLnRvZGF5QnV0dG9uVGl0bGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dTZWxlY3RlZFZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnNob3dTZWxlY3RlZFZhbHVlU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBteS1mb250LWNhbGVuZGVyXCIgc3R5bGU9e3RoaXMucHJvcHMubWFpbkJvZHlTdHlsZX0gPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuc2hvd1RpdGxlICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIiBzdHlsZT17dGhpcy5wcm9wcy50aXRsZVN0eWxlfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsXCIgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fSBvbkNsaWNrPXt0aGlzLnBlck1vbnRofT5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmFycm93TGVmdFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNy44MTI1JVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwIDMwIEw4IDE2IDIwIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY2xpY2tUaXRsZSgpfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi57IG1pbldpZHRoOiAnMjAlJyB9LCAuLi50aGlzLnByb3BzLmNsaWNrYWJsZVN0eWxlIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+eyh0aGlzLnN0YXRlLmN1cnJZZWFyKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbCBkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV4dE1vbnRofVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJpLWNoZXZyb24tcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmFycm93UmlnaHRTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjcuODEyNSVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAzMCBMMjQgMTYgMTIgMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHt0aGlzLm1DcmVhdG9yKHt9KX1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dGb290ZXIgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIHN0eWxlPXt0aGlzLnByb3BzLmZvb3RlclN0eWxlfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93QnV0dG9uVG9kYXkgJiYgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4udGhpcy5wcm9wcy50b2RheUJ1dHRvblN0eWxlLCAuLi4geyBjdXJzb3I6ICdwb2ludGVyJyB9IH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ29Ub2RheX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgeyh0aGlzLnByb3BzLnRvZGF5QnV0dG9uVGl0bGUpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93U2VsZWN0ZWRWYWx1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnNob3dTZWxlY3RlZFZhbHVlU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5pbnB1dFZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuTW9udGhDYWxlbmRlci5wcm9wVHlwZXMgPSB7ZGVmWWVhcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gIGRlZk1vbnRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgaW5wdXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGdldEN1cnJlbnRZZWFyOlByb3BUeXBlcy5mdW5jLFxyXG4gIHNZZWFyOlByb3BUeXBlcy5mdW5jLFxyXG4gIHNNb250aDpQcm9wVHlwZXMuZnVuYyxcclxuICBjbGlja1RpdGxlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBhY3Rpb25TdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIG1vdmVBY3Rpb246IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgaXNUaHJlZVJvdzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc2VsZWN0ZWRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdG9kYXlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBhZnRlclRvZGF5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYmVmb3JlVG9kYXlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzZWxlY3RTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjYWxlbmRlckNlbGxCb2R5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjYWxlbmRlckNlbGxOb1RleHRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICByb3dDYWxlbmRlckl0ZW1TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICByb3dDYWxlbmRlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGhlYWRlckNhbGVuZGVySXRlbVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIG1haW5Cb2R5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYXJyb3dSaWdodFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGFycm93TGVmdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNsaWNrYWJsZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHRpdGxlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgaGVhZGVyQ2FsZW5kZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBmb290ZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICB0b2RheUJ1dHRvblN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNob3dTZWxlY3RlZFZhbHVlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY3VzdG9tRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHVzZVJhaXRvU2l6aW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICByYWl0b1RpdGxlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJhaXRvVGFibGVIZWRlYXI6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgcmFpdG9Cb2R5OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJhaXRvRm9vdGVyOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHNob3dUaXRsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2hvd0Zvb3RlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2hvd0J1dHRvblRvZGF5OiBQcm9wVHlwZXMuYm9vbCxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2FsZW5kZXJJdGVtQW5pbTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBtb250aEFuaW06IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdG9kYXlCdXR0b25UaXRsZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuTW9udGhDYWxlbmRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaW5wdXQodmFsKSB7IH0sXHJcbiAgZ2V0Q3VycmVudFllYXIodmFsKSB7IH0sXHJcbiAgXHJcbiAgc1llYXIodmFsKSB7IH0sXHJcbiAgc01vbnRoKHZhbCkgeyB9LFxyXG4gIGdldEN1cnJlbnRZZWFyKHZhbCkgeyB9LFxyXG4gIGNsaWNrVGl0bGUoKSB7XHJcblxyXG4gIH0sXHJcbiAgZGVmWWVhcjogXCJcIixcclxuICBkZWZNb250aDogXCJcIixcclxuICBhY3Rpb25TdGVwOiAxLFxyXG4gIG1vdmVBY3Rpb246IHtcclxuICAgIGFjdGlvbjogXCJcIixcclxuICAgIHN0ZXA6IDEsXHJcbiAgICB1c2VKdW1wOiBmYWxzZSxcclxuICAgIGp1bXA6IHt9XHJcbiAgfSxcclxuICBpc1RocmVlUm93OiBmYWxzZSxcclxuICB2YWx1ZTogXCJcIixcclxuICBzZWxlY3RlZENsYXNzTmFtZTogXCJzZWxlY3RlZFwiLFxyXG4gIHRvZGF5U3R5bGU6IHtcclxuICAgIGNvbG9yOiBcIiNlODQ1NDVcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzAwYWRiNVwiLFxyXG5cclxuICAgIGJveFNoYWRvdzogXCIwIDAgNXB4ICNlODQ1NDVcIixcclxuICAgIHRyYW5zaXRpb246IFwiIGFsbCAxc1wiXHJcbiAgfSxcclxuICBhZnRlclRvZGF5U3R5bGU6IHtcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIixcclxuXHJcbiAgICBib3hTaGFkb3c6IFwiaW5zZXQgMCAwIDEwcHggI2VlZWVlZVwiLFxyXG4gICAgYmFja2dyb3VuZDogXCIjMjIyODMxXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxc1wiXHJcbiAgfSxcclxuICBiZWZvcmVUb2RheVN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiNlZWVlZWVcIixcclxuXHJcbiAgICBib3hTaGFkb3c6IFwiaW5zZXQgMCAwIDEwcHggIzIyMjgzMVwiLFxyXG4gICAgY29sb3I6IFwiIzIyMjgzMVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMXNcIlxyXG4gIH0sXHJcbiAgc2VsZWN0U3R5bGU6IHtcclxuICAgIGJhY2tncm91bmQ6IFwib3JhbmdlcmVkXCIsXHJcblxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMXNcIlxyXG4gIH0sXHJcbiAgY2FsZW5kZXJDZWxsQm9keVN0eWxlOiB7XHJcbiAgfSxcclxuICBjYWxlbmRlckNlbGxXaXRoVGV4dFN0eWxlOiB7XHJcbiAgICAvLyBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcclxuICAgIG1hcmdpbjogXCIycHhcIixcclxuICAgIFwiV2Via2l0VXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICAgIFwiTW96VXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICAgIFwibXNVc2VyU2VsZWN0XCI6IFwibm9uZVwiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIGNhbGVuZGVyQ2VsbE5vVGV4dFN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMwMDBcIixcclxuICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgIG1hcmdpbjogXCJhdXRvXCJcclxuICB9LFxyXG4gIHJvd0NhbGVuZGVySXRlbVN0eWxlOiB7XHJcbiAgfSxcclxuICByb3dDYWxlbmRlclN0eWxlOiB7XHJcbiAgICBtYXJnaW46IFwiMCAtMTRweFwiXHJcbiAgfSxcclxuICBoZWFkZXJDYWxlbmRlckl0ZW1TdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiLFxyXG4gICAgbWFyZ2luOiBcImF1dG9cIlxyXG4gIH0sXHJcbiAgbWFpbkJvZHlTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMzkzZTQ2XCIsXHJcbiAgICBcclxuICAgIGJvcmRlcjogXCIycHggc29saWQgI2VlZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcclxuICAgIHBhZGRpbmc6IFwiMTVweFwiXHJcbiAgfSxcclxuICBhcnJvd1JpZ2h0U3R5bGU6IHtcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIlxyXG4gIH0sXHJcbiAgYXJyb3dMZWZ0U3R5bGU6IHtcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIlxyXG4gIH0sXHJcbiAgY2xpY2thYmxlU3R5bGU6IHtcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcclxuICAgIFwiV2Via2l0VXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICAgIFwiTW96VXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICAgIFwibXNVc2VyU2VsZWN0XCI6IFwibm9uZVwiLFxyXG4gIH0sXHJcbiAgdGl0bGVTdHlsZToge1xyXG4gICAgbWFyZ2luVG9wOiBcIi0xMHB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMzOTNlNDZcIixcclxuICAgIGNvbG9yOiBcIiNlZWVlZWVcIlxyXG4gIH0sXHJcbiAgaGVhZGVyQ2FsZW5kZXJTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMjIyODMxXCIsXHJcbiAgICBtYXJnaW46IFwiMCAtMTRweFwiXHJcbiAgfSxcclxuICBmb290ZXJTdHlsZToge1xyXG4gICAgbWFyZ2luVG9wOiBcIjE0cHhcIlxyXG4gIH0sXHJcbiAgdG9kYXlCdXR0b25TdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiLFxyXG4gICAgb3V0bGluZTogXCJub25lICFpbXBvcnRhbnRcIlxyXG4gIH0sXHJcbiAgc2hvd1NlbGVjdGVkVmFsdWVTdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXHJcbiAgfSxcclxuICBjdXN0b21Gb3JtYXQ6IFwiWVlZWS9NL0RcIixcclxuICB1c2VSYWl0b1NpemluZzogdHJ1ZSxcclxuICByYWl0b1RpdGxlOiAxLFxyXG4gIHJhaXRvVGFibGVIZWRlYXI6IDEsXHJcbiAgcmFpdG9Cb2R5OiA4LFxyXG4gIHJhaXRvRm9vdGVyOiAxLFxyXG4gIHNob3dUaXRsZTogdHJ1ZSxcclxuICBzaG93Rm9vdGVyOiB0cnVlLFxyXG4gIHNob3dCdXR0b25Ub2RheTogdHJ1ZSxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZTogdHJ1ZSxcclxuICBjYWxlbmRlckl0ZW1BbmltOiBcInNsaWRlLWZhZGVcIixcclxuICBtb250aEFuaW06IFwiZmFkZVwiLFxyXG4gIHRvZGF5QnV0dG9uVGl0bGU6IFwiQ3VycmVudCBtb250aFwiXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9udGhDYWxlbmRlcjtcclxuIl19