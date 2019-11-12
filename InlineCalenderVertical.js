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

var InlineCalenderVertical =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InlineCalenderVertical, _React$Component);

  function InlineCalenderVertical(props) {
    var _this;

    _classCallCheck(this, InlineCalenderVertical);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InlineCalenderVertical).call(this, props));
    _this.state = {
      totalMainRow: _this.props.isFiveRow ? 5 : 6,
      firstRowLastDays: 29,
      moveAction: {
        action: "",
        step: 1,
        useJump: false,
        jump: {}
      },
      header: {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
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
      startDayisBeforeToday: false,
      momentObject: null,
      startDay: 1,
      endDay: 29,
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

  _createClass(InlineCalenderVertical, [{
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
          if (j == 1 && _this2.state.endDay >= _this2.state.firstRowLastDays && _this2.state.firstRowLastDays + i <= _this2.state.endDay && _this2.props.isFiveRow) {
            innerNode.push(_react.default.createElement("div", {
              className: "col position-relative",
              key: 'h' + i
            }, _react.default.createElement("div", {
              onClick: function onClick($event) {
                return _this2.selecValues(_this2.state.firstRowLastDays + i, $event);
              },
              className: "ratio-child",
              style: _objectSpread({}, _this2.styleCellCal1(_this2.state.firstRowLastDays + i), {}, _this2.props.calenderCellWithTextStyle)
            }, _react.default.createElement("div", {
              className: "d-flex justify-content-center align-items-center h-100 w-100"
            }, _this2.state.firstRowLastDays + i))));
          } else if (j == 1 && i - 1 >= _this2.state.startDay) {
            innerNode.push(_react.default.createElement("div", {
              className: "col position-relative",
              key: 'h' + i
            }, _react.default.createElement("div", {
              onClick: function onClick($event) {
                return _this2.selecValues(i - _this2.state.startDay, $event);
              },
              className: "ratio-child",
              style: _objectSpread({}, _this2.styleCellCal1(i - _this2.state.startDay), {}, _this2.props.calenderCellWithTextStyle)
            }, _react.default.createElement("div", {
              className: "d-flex justify-content-center align-items-center h-100 w-100"
            }, i - _this2.state.startDay))));
          } else if (j == 1) {
            innerNode.push(_react.default.createElement("div", {
              className: "col position-relative",
              key: 'h' + i
            }, _react.default.createElement("div", {
              style: _this2.props.calenderCellNoTextStyle
            })));
          } else if (j > 1 && (j - 1) * 7 + i - _this2.state.startDay <= _this2.state.endDay) {
            innerNode.push(_react.default.createElement("div", {
              className: "col position-relative",
              key: 'h' + i
            }, _react.default.createElement("div", {
              onClick: function onClick($event) {
                return _this2.selecValues((j - 1) * 7 + i - _this2.state.startDay, $event);
              },
              className: "ratio-child",
              style: _objectSpread({}, _this2.styleCellCal1((j - 1) * 7 + i - _this2.state.startDay), {}, _this2.props.calenderCellWithTextStyle)
            }, _react.default.createElement("div", {
              className: "d-flex justify-content-center align-items-center h-100 w-100"
            }, (j - 1) * 7 + i - _this2.state.startDay))));
          } else {
            innerNode.push(_react.default.createElement("div", {
              className: "col position-relative",
              key: 'h' + i
            }, _react.default.createElement("div", {
              style: _this2.props.calenderCellNoTextStyle
            })));
          }
        };

        for (var i = 1; i <= 7; i++) {
          _loop2(i);
        }

        parentNode.push(_react.default.createElement("div", {
          className: "d-flex flex-column  flex-nowrap ",
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
      var todayMonth = this.state.monthHeader[this.conv(momentObject.format("M"))];
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

        var ddd = (0, _moment.default)(out, "YYYY/M/D");
        var selectedMonth = this.state.monthHeader[this.conv(ddd.format("M"))];
        var selectedYear = ddd.format("YYYY");
        var selectedDay = ddd.format("D");
        this.setStators({
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

      if (typeof this.props.defDay !== "undefined" && this.props.defDay + "".length > 0 && !!parseInt(this.props.defDay) && parseInt(this.props.defDay) >= 0) {
        momentObject.day(parseInt(this.props.defDay));
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
      if (this.state.selectedYear == this.conv(this.state.currYear) && this.state.currMonth == this.state.selectedMonth && this.state.selectedDay == index) {
        return this.props.selectStyle;
      } else {
        if (this.state.currYear == this.state.todayYear && this.state.currMonth == this.state.todayMonth) {
          if (this.state.todayDay == index) {
            return this.props.todayStyle;
          } else if (this.state.todayDay >= index) {
            return this.props.beforeTodayStyle;
          } else {
            return this.props.afterTodayStyle;
          }
        } else if (this.state.startDayisBeforeToday) {
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

          if (this.state.selectedYear == this.state.momentObject.format("YYYY") && this.state.selectedMonth == this.state.monthHeader[this.conv(this.state.momentObject.format("M"))]) {
            this.styleStter(this.state.lastSelectedNode);
          } else {
            this.clearStter(this.state.lastSelectedNode);
          }
        }
      }

      var startDayisBeforeToday = (0, _moment.default)(this.state.today).isAfter(this.conv(this.state.momentObject.format("YYYY/M/D")));
      var momentObject = this.state.momentObject;
      momentObject.startOf("month");
      var startDayMoment = momentObject;
      var startDay = parseInt(this.conv(momentObject.format("e"))); // if(startDay>=7){
      //   startDay=0
      // }

      var firstRowLastDays = 4 * 7 + (7 - startDay);
      momentObject.endOf("month");
      var endDay = parseInt(this.conv(momentObject.format("D")));
      var currMonth = this.state.monthHeader[this.conv(momentObject.format("M"))];
      var currYear = momentObject.format("YYYY");
      var totalMainRow = 5;

      if (!this.isFiveRow) {
        if (this.endDay > firstRowLastDays) {
          totalMainRow = 6;
        } else {
          totalMainRow = 5;
        }
      }

      this.setState({
        totalMainRow: totalMainRow,
        firstRowLastDays: firstRowLastDays,
        momentObject: momentObject,
        startDayisBeforeToday: startDayisBeforeToday,
        startDayMoment: startDayMoment,
        startDay: startDay,
        endDay: endDay,
        currMonth: currMonth,
        currYear: currYear
      });
      this.props.getCurrentYear(currYear);
    }
  }, {
    key: "nextMonth",
    value: function nextMonth() {
      var momentObject = this.state.momentObject;
      momentObject.add(1, "month");
      this.setState({
        momentObject: momentObject
      }, this.changeMonth, false);
    }
  }, {
    key: "perMonth",
    value: function perMonth() {
      var momentObject = this.state.momentObject;
      momentObject.add(-1, "month");
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
        var selectedMonth = this.state.monthHeader[this.conv(this.state.startDayMoment.format("M"))];
        var selectedYear = this.state.startDayMoment.format("YYYY");
        var selectedDay = this.state.startDayMoment.format("D");
        this.setStators({
          lastSelectedNode: lastSelectedNode,
          inputValue: inputValue,
          selectedMonth: selectedMonth,
          selectedYear: selectedYear,
          selectedDay: selectedDay
        }, this.props.input, inputValue);
      } else {
        this.clearStter(this.state.lastSelectedNode);

        var _inputValue = this.state.startDayMoment.startOf("month").add(index - 1, "day").format(this.props.customFormat);

        var _selectedMonth = this.state.monthHeader[this.conv(this.state.startDayMoment.format("M"))];

        var _selectedYear = this.state.startDayMoment.format("YYYY");

        var _selectedDay = this.state.startDayMoment.format("D");

        this.setStators({
          lastSelectedNode: lastSelectedNode,
          inputValue: _inputValue,
          selectedMonth: _selectedMonth,
          selectedYear: _selectedYear,
          selectedDay: _selectedDay
        }, this.props.input, _inputValue);
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
        }, _react.default.createElement("div", null, this.state.currYear, " -"), this.state.changeAnim && _react.default.createElement("div", null, this.state.currMonth)), _react.default.createElement("div", {
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
        }))))), _react.default.createElement("div", {
          className: "d-flex w-100 flex-row-reverse overflow-hidden",
          style: {
            height: this.props.raitoBody * 10 + '%'
          }
        }, _react.default.createElement("div", {
          className: "d-flex flex-column justify-content-between  flex-nowrap  overflow-hidden",
          style: this.props.headerCalenderStyle
        }, Object.keys(this.state.header).map(function (k) {
          return _react.default.createElement("div", {
            className: "d-flex justify-content-end  align-items-center",
            style: _this3.props.headerCalenderItemStyle,
            key: k + 100 + 100 + ';'
          }, _this3.state.header[k]);
        })), this.mCreator({}, this.state.startDay)), this.props.showFooter && _react.default.createElement("div", {
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
        }, _react.default.createElement("div", null, this.state.currYear, " -"), this.state.changeAnim && _react.default.createElement("div", null, this.state.currMonth)), _react.default.createElement("div", {
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
        }))))), _react.default.createElement("div", {
          className: "d-flex flex-column justify-content-between  flex-nowrap  overflow-hidden",
          style: this.props.headerCalenderStyle
        }, Object.keys(this.state.header).map(function (k) {
          return _react.default.createElement("div", {
            className: "d-flex justify-content-end  align-items-center",
            style: _this3.props.headerCalenderItemStyle,
            key: k + 100 + 100 + ';'
          }, _this3.state.header[k]);
        })), this.mCreator({}, this.state.startDay), this.props.showFooter && _react.default.createElement("div", {
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

  return InlineCalenderVertical;
}(_react.default.Component);

InlineCalenderVertical.propTypes = {
  defDay: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  defYear: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  defMonth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  input: _propTypes.default.func,
  getCurrentYear: _propTypes.default.func,
  clickTitle: _propTypes.default.func,
  actionStep: _propTypes.default.number,
  moveAction: _propTypes.default.object,
  isFiveRow: _propTypes.default.bool,
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
InlineCalenderVertical.defaultProps = {
  input: function input(val) {},
  getCurrentYear: function getCurrentYear(val) {},
  clickTitle: function clickTitle() {},
  defDay: "",
  defYear: "",
  defMonth: "",
  actionStep: 1,
  moveAction: {
    action: "",
    step: 1,
    useJump: false,
    jump: {}
  },
  isFiveRow: false,
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
    flexGrow: '1' // margin: "0 -14px"

  },
  headerCalenderItemStyle: {
    color: "#eeeeee" // margin: "auto"

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
    // marginTop: "-10px",
    background: "#393e46",
    color: "#eeeeee"
  },
  headerCalenderStyle: {
    background: "#222831",
    padding: '0 5px',
    // flexGrow: '1',
    margin: "0px 2px"
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
  todayButtonTitle: "Today"
};
var _default = InlineCalenderVertical;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb25lbnQvSW5saW5lQ2FsZW5kZXJWZXJ0aWNhbC5qc3giXSwibmFtZXMiOlsiSW5saW5lQ2FsZW5kZXJWZXJ0aWNhbCIsInByb3BzIiwic3RhdGUiLCJ0b3RhbE1haW5Sb3ciLCJpc0ZpdmVSb3ciLCJmaXJzdFJvd0xhc3REYXlzIiwibW92ZUFjdGlvbiIsImFjdGlvbiIsInN0ZXAiLCJ1c2VKdW1wIiwianVtcCIsImhlYWRlciIsIm1vbnRoSGVhZGVyIiwiZGVmRm9ybWF0Iiwic3RhcnREYXlNb21lbnQiLCJjaGFuZ2VBbmltIiwiY3VyclllYXIiLCJ0b2RheSIsInRvZGF5RGF5IiwidG9kYXlNb250aCIsInRvZGF5WWVhciIsInNlbGVjdGVkWWVhciIsInNlbGVjdGVkTW9udGgiLCJzZWxlY3RlZERheSIsImN1cnJNb250aCIsInN0YXJ0RGF5aXNCZWZvcmVUb2RheSIsIm1vbWVudE9iamVjdCIsInN0YXJ0RGF5IiwiZW5kRGF5Iiwic0RheSIsImlucHV0VmFsdWUiLCJsYXN0U2VsZWN0ZWROb2RlIiwibGFzdFNlbGVjdGVkTm9kZUNsYXNzIiwic3R5bGVDZWxsQ2FsMSIsImJpbmQiLCJjaGFuZ2VNb250aCIsIm5leHRNb250aCIsInBlck1vbnRoIiwic2VsZWNWYWx1ZXMiLCJnb1RvZGF5Iiwic2V0RGF0ZXIiLCJjb252Iiwic2V0U3RhdG9ycyIsIndhdGNoTW92ZUFjdGlvbiIsInN0eWxlU3R0ZXIiLCJjbGVhclN0dGVyIiwibmV3VmFsIiwiYWN0aW9uTWV0aG9kIiwicGFyYW1BYyIsInNldFN0YXRlIiwic3R5bGVIIiwic3RhdHR0dCIsInBhcmVudE5vZGUiLCJqIiwiaW5uZXJOb2RlIiwiaSIsInB1c2giLCIkZXZlbnQiLCJjYWxlbmRlckNlbGxXaXRoVGV4dFN0eWxlIiwiY2FsZW5kZXJDZWxsTm9UZXh0U3R5bGUiLCJyb3dDYWxlbmRlclN0eWxlIiwidmFsIiwidiIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInllYXIiLCJhZGQiLCJtb250aCIsImRheSIsImZvcm1hdCIsInBhcnNlSW50IiwidmFsdWUiLCJsZW5ndGgiLCJ0ZXh0IiwibnMiLCJvdXQiLCJjIiwiY2hhckF0IiwibnVtcCIsImRkZCIsImRlZlllYXIiLCJnZXRDdXJyZW50WWVhciIsImRlZk1vbnRoIiwiZGVmRGF5IiwiaW5kZXgiLCJzZWxlY3RTdHlsZSIsInRvZGF5U3R5bGUiLCJiZWZvcmVUb2RheVN0eWxlIiwiYWZ0ZXJUb2RheVN0eWxlIiwiaXNNb3VudGVkIiwic2VsZiIsInNldFRpbWVvdXQiLCJpc0FmdGVyIiwic3RhcnRPZiIsImVuZE9mIiwiZSIsIm9iIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzdHlsZSIsInRhcmdldCIsImN1c3RvbUZvcm1hdCIsImlucHV0IiwibmV4dFByb3BzIiwidXNlUmFpdG9TaXppbmciLCJtYWluQm9keVN0eWxlIiwic2hvd1RpdGxlIiwidGl0bGVTdHlsZSIsInJhaXRvVGl0bGUiLCJjdXJzb3IiLCJhcnJvd0xlZnRTdHlsZSIsImNsaWNrVGl0bGUiLCJtaW5XaWR0aCIsImNsaWNrYWJsZVN0eWxlIiwiYXJyb3dSaWdodFN0eWxlIiwiaGVpZ2h0IiwicmFpdG9Cb2R5IiwiaGVhZGVyQ2FsZW5kZXJTdHlsZSIsIm1hcCIsImsiLCJoZWFkZXJDYWxlbmRlckl0ZW1TdHlsZSIsIm1DcmVhdG9yIiwic2hvd0Zvb3RlciIsImZvb3RlclN0eWxlIiwicmFpdG9Gb290ZXIiLCJzaG93QnV0dG9uVG9kYXkiLCJ0b2RheUJ1dHRvblN0eWxlIiwidG9kYXlCdXR0b25UaXRsZSIsInNob3dTZWxlY3RlZFZhbHVlIiwic2hvd1NlbGVjdGVkVmFsdWVTdHlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyIsImFjdGlvblN0ZXAiLCJvYmplY3QiLCJib29sIiwic2VsZWN0ZWRDbGFzc05hbWUiLCJjYWxlbmRlckNlbGxCb2R5U3R5bGUiLCJyb3dDYWxlbmRlckl0ZW1TdHlsZSIsInJhaXRvVGFibGVIZWRlYXIiLCJjYWxlbmRlckl0ZW1BbmltIiwibW9udGhBbmltIiwiZGVmYXVsdFByb3BzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsInVzZXJTZWxlY3QiLCJtYXJnaW4iLCJmbGV4R3JvdyIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJvdXRsaW5lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxzQjs7Ozs7QUFDSixrQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixnR0FBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxZQUFZLEVBQUUsTUFBS0YsS0FBTCxDQUFXRyxTQUFYLEdBQXVCLENBQXZCLEdBQTJCLENBRDlCO0FBRVhDLE1BQUFBLGdCQUFnQixFQUFFLEVBRlA7QUFHWEMsTUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLFFBQUFBLE1BQU0sRUFBRSxFQURFO0FBRVZDLFFBQUFBLElBQUksRUFBRSxDQUZJO0FBR1ZDLFFBQUFBLE9BQU8sRUFBRSxLQUhDO0FBSVZDLFFBQUFBLElBQUksRUFBRTtBQUpJLE9BSEQ7QUFTWEMsTUFBQUEsTUFBTSxFQUFFO0FBQ04sV0FBRyxRQURHO0FBRU4sV0FBRyxRQUZHO0FBR04sV0FBRyxTQUhHO0FBSU4sV0FBRyxXQUpHO0FBS04sV0FBRyxVQUxHO0FBTU4sV0FBRyxRQU5HO0FBT04sV0FBRztBQVBHLE9BVEc7QUFrQlhDLE1BQUFBLFdBQVcsRUFBRTtBQUNYLFdBQUcsU0FEUTtBQUVYLFdBQUcsVUFGUTtBQUdYLFdBQUcsT0FIUTtBQUlYLFdBQUcsT0FKUTtBQUtYLFdBQUcsS0FMUTtBQU1YLFdBQUcsTUFOUTtBQU9YLFdBQUcsTUFQ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O0FBREEsR0F2R3VCO0FBMEdwQ2hDLEVBQUFBLGdCQUFnQixFQUFFO0FBQ2hCc0IsSUFBQUEsS0FBSyxFQUFFLFNBRFM7QUFFaEJXLElBQUFBLE9BQU8sRUFBRTtBQUZPLEdBMUdrQjtBQThHcEM5QixFQUFBQSxzQkFBc0IsRUFBRTtBQUN0Qm1CLElBQUFBLEtBQUssRUFBRSxTQURlO0FBRXRCWSxJQUFBQSxPQUFPLEVBQUUsTUFGYTtBQUd0QkMsSUFBQUEsVUFBVSxFQUFFO0FBSFUsR0E5R1k7QUFtSHBDNUQsRUFBQUEsWUFBWSxFQUFFLFVBbkhzQjtBQW9IcENHLEVBQUFBLGNBQWMsRUFBRSxJQXBIb0I7QUFxSHBDSSxFQUFBQSxVQUFVLEVBQUUsQ0FySHdCO0FBc0hwQ29DLEVBQUFBLGdCQUFnQixFQUFFLENBdEhrQjtBQXVIcEM1QixFQUFBQSxTQUFTLEVBQUUsQ0F2SHlCO0FBd0hwQ1EsRUFBQUEsV0FBVyxFQUFFLENBeEh1QjtBQXlIcENsQixFQUFBQSxTQUFTLEVBQUUsSUF6SHlCO0FBMEhwQ2dCLEVBQUFBLFVBQVUsRUFBRSxJQTFId0I7QUEySHBDRyxFQUFBQSxlQUFlLEVBQUUsSUEzSG1CO0FBNEhwQ0csRUFBQUEsaUJBQWlCLEVBQUUsSUE1SGlCO0FBNkhwQ2lCLEVBQUFBLGdCQUFnQixFQUFFLFlBN0hrQjtBQThIcENDLEVBQUFBLFNBQVMsRUFBRSxNQTlIeUI7QUErSHBDbkIsRUFBQUEsZ0JBQWdCLEVBQUU7QUEvSGtCLENBQXRDO2VBa0llaEksc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0ICcuL0lubGluZUNhbGVuZGVyLmNzcyc7XHJcblxyXG5jbGFzcyBJbmxpbmVDYWxlbmRlclZlcnRpY2FsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdG90YWxNYWluUm93OiB0aGlzLnByb3BzLmlzRml2ZVJvdyA/IDUgOiA2LFxyXG4gICAgICBmaXJzdFJvd0xhc3REYXlzOiAyOSxcclxuICAgICAgbW92ZUFjdGlvbjoge1xyXG4gICAgICAgIGFjdGlvbjogXCJcIixcclxuICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgIHVzZUp1bXA6IGZhbHNlLFxyXG4gICAgICAgIGp1bXA6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgIDA6IFwiU3VuZGF5XCIsXHJcbiAgICAgICAgMTogXCJNb25kYXlcIixcclxuICAgICAgICAyOiBcIlR1ZXNkYXlcIixcclxuICAgICAgICAzOiBcIldlZG5lc2RheVwiLFxyXG4gICAgICAgIDQ6IFwiVGh1cnNkYXlcIixcclxuICAgICAgICA1OiBcIkZyaWRheVwiLFxyXG4gICAgICAgIDY6IFwiU2F0dXJkYXlcIlxyXG4gICAgICB9LFxyXG4gICAgICBtb250aEhlYWRlcjoge1xyXG4gICAgICAgIDE6IFwiSmFudWFyeVwiLFxyXG4gICAgICAgIDI6IFwiRmVicnVhcnlcIixcclxuICAgICAgICAzOiBcIk1hcmNoXCIsXHJcbiAgICAgICAgNDogXCJBcHJpbFwiLFxyXG4gICAgICAgIDU6IFwiTWF5XCIsXHJcbiAgICAgICAgNjogXCJKdW5lXCIsXHJcbiAgICAgICAgNzogXCJKdWx5XCIsXHJcbiAgICAgICAgODogXCJBdWd1c3RcIixcclxuICAgICAgICA5OiBcIlNlcHRlbWJlclwiLFxyXG4gICAgICAgIDEwOiBcIk9jdG9iZXJcIixcclxuICAgICAgICAxMTogXCJOb3ZlbWJlclwiLFxyXG4gICAgICAgIDEyOiBcIkRlY2VtYmVyXCJcclxuICAgICAgfSxcclxuICAgICAgZGVmRm9ybWF0OiBcIllZWVktTS1cIixcclxuICAgICAgc3RhcnREYXlNb21lbnQ6IG51bGwsXHJcbiAgICAgIGNoYW5nZUFuaW06IHRydWUsXHJcbiAgICAgIGN1cnJZZWFyOiBcIlwiLFxyXG4gICAgICB0b2RheTogXCJcIixcclxuICAgICAgdG9kYXlEYXk6IDEsXHJcbiAgICAgIHRvZGF5TW9udGg6IFwiXCIsXHJcbiAgICAgIHRvZGF5WWVhcjogXCJcIixcclxuICAgICAgc2VsZWN0ZWRZZWFyOiBcIlwiLFxyXG4gICAgICBzZWxlY3RlZE1vbnRoOiBcIlwiLFxyXG4gICAgICBzZWxlY3RlZERheTogXCJcIixcclxuICAgICAgY3Vyck1vbnRoOiBcIlwiLFxyXG4gICAgICBzdGFydERheWlzQmVmb3JlVG9kYXk6IGZhbHNlLFxyXG4gICAgICBtb21lbnRPYmplY3Q6IG51bGwsXHJcbiAgICAgIHN0YXJ0RGF5OiAxLFxyXG4gICAgICBlbmREYXk6IDI5LFxyXG4gICAgICBzRGF5OiAwLFxyXG4gICAgICBpbnB1dFZhbHVlOiBcIlwiLFxyXG4gICAgICBsYXN0U2VsZWN0ZWROb2RlOiBudWxsLFxyXG4gICAgICBsYXN0U2VsZWN0ZWROb2RlQ2xhc3M6IFwiXCJcclxuICAgIH07XHJcbiAgICB0aGlzLnN0eWxlQ2VsbENhbDEgPSB0aGlzLnN0eWxlQ2VsbENhbDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2hhbmdlTW9udGggPSB0aGlzLmNoYW5nZU1vbnRoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm5leHRNb250aCA9IHRoaXMubmV4dE1vbnRoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnBlck1vbnRoID0gdGhpcy5wZXJNb250aC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZWxlY1ZhbHVlcyA9IHRoaXMuc2VsZWNWYWx1ZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ29Ub2RheSA9IHRoaXMuZ29Ub2RheS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXREYXRlciA9IHRoaXMuc2V0RGF0ZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY29udiA9IHRoaXMuY29udi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRTdGF0b3JzID0gdGhpcy5zZXRTdGF0b3JzLmJpbmQodGhpcylcclxuICAgIHRoaXMud2F0Y2hNb3ZlQWN0aW9uID0gdGhpcy53YXRjaE1vdmVBY3Rpb24uYmluZCh0aGlzKVxyXG4gICAgXHJcbiAgICB0aGlzLnN0eWxlU3R0ZXIgPSB0aGlzLnN0eWxlU3R0ZXIuYmluZCh0aGlzKTtcclxuICAgIFxyXG4gICAgdGhpcy5jbGVhclN0dGVyID0gdGhpcy5jbGVhclN0dGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIHNldFN0YXRvcnMobmV3VmFsLCBhY3Rpb25NZXRob2QgPSBudWxsLCBwYXJhbUFjKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcclxuICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgLi4ubmV3VmFsXHJcblxyXG4gICAgICB9KVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBpZiAoYWN0aW9uTWV0aG9kICE9PSBudWxsKSB7XHJcbiAgICAgICAgYWN0aW9uTWV0aG9kKHBhcmFtQWMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIG1DcmVhdG9yKHN0eWxlSCwgc3RhdHR0dCkge1xyXG4gICAgbGV0IHBhcmVudE5vZGUgPSBbXVxyXG4gICAgXHJcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSB0aGlzLnN0YXRlLnRvdGFsTWFpblJvdzsgaisrKSB7XHJcblxyXG4gICAgICBsZXQgaW5uZXJOb2RlID0gW11cclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgaiA9PSAxICYmXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmVuZERheSA+PSB0aGlzLnN0YXRlLmZpcnN0Um93TGFzdERheXMgJiZcclxuICAgICAgICAgIHRoaXMuc3RhdGUuZmlyc3RSb3dMYXN0RGF5cyArIGkgPD0gdGhpcy5zdGF0ZS5lbmREYXkgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMuaXNGaXZlUm93XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpbm5lck5vZGUucHVzaCg8ZGl2IGNsYXNzTmFtZT1cImNvbCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGtleT17J2gnICsgaX0+XHJcbiAgICAgICAgICAgIHsvKiA8dHJhbnNpdGlvbiBuYW1lPXt0aGlzLnByb3BzLmNhbGVuZGVySXRlbUFuaW19PiAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygkZXZlbnQpID0+IHRoaXMuc2VsZWNWYWx1ZXModGhpcy5zdGF0ZS5maXJzdFJvd0xhc3REYXlzICsgaSwgJGV2ZW50KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYXRpby1jaGlsZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3R5bGVDZWxsQ2FsMSh0aGlzLnN0YXRlLmZpcnN0Um93TGFzdERheXMgKyBpKSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDAgdy0xMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5maXJzdFJvd0xhc3REYXlzICsgaSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPC90cmFuc2l0aW9uPiAqL31cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9IGVsc2UgaWYgKGogPT0gMSAmJiBpIC0gMSA+PSB0aGlzLnN0YXRlLnN0YXJ0RGF5KSB7XHJcbiAgICAgICAgICBpbm5lck5vZGUucHVzaCg8ZGl2IGNsYXNzTmFtZT1cImNvbCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGtleT17J2gnICsgaX0+XHJcbiAgICAgICAgICAgIHsvKiA8dHJhbnNpdGlvbiBuYW1lPXt0aGlzLnByb3BzLmNhbGVuZGVySXRlbUFuaW19PiAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygkZXZlbnQpID0+IHRoaXMuc2VsZWNWYWx1ZXMoaSAtIHRoaXMuc3RhdGUuc3RhcnREYXksICRldmVudCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmF0aW8tY2hpbGRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0eWxlQ2VsbENhbDEoaSAtIHRoaXMuc3RhdGUuc3RhcnREYXkpLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5jYWxlbmRlckNlbGxXaXRoVGV4dFN0eWxlXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMCB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyhpIC0gdGhpcy5zdGF0ZS5zdGFydERheSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogXHJcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfSBlbHNlIGlmIChqID09IDEpIHtcclxuICAgICAgICAgIGlubmVyTm9kZS5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiY29sIHBvc2l0aW9uLXJlbGF0aXZlXCIga2V5PXsnaCcgKyBpfT5cclxuICAgICAgICAgICAgey8qIDx0cmFuc2l0aW9uIG5hbWU9e3RoaXMucHJvcHMuY2FsZW5kZXJJdGVtQW5pbX0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLmNhbGVuZGVyQ2VsbE5vVGV4dFN0eWxlfT48L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwvdHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfSBlbHNlIGlmIChqID4gMSAmJiAoaiAtIDEpICogNyArIGkgLSB0aGlzLnN0YXRlLnN0YXJ0RGF5IDw9IHRoaXMuc3RhdGUuZW5kRGF5KSB7XHJcbiAgICAgICAgICBpbm5lck5vZGUucHVzaCg8ZGl2IGNsYXNzTmFtZT1cImNvbCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGtleT17J2gnICsgaX0+XHJcbiAgICAgICAgICAgIHsvKiA8dHJhbnNpdGlvbiBuYW1lPXt0aGlzLnByb3BzLmNhbGVuZGVySXRlbUFuaW19PiAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygkZXZlbnQpID0+IHRoaXMuc2VsZWNWYWx1ZXMoKGogLSAxKSAqIDcgKyBpIC0gdGhpcy5zdGF0ZS5zdGFydERheSwgJGV2ZW50KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYXRpby1jaGlsZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3R5bGVDZWxsQ2FsMSgoaiAtIDEpICogNyArIGkgLSB0aGlzLnN0YXRlLnN0YXJ0RGF5KSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDAgdy0xMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsoKGogLSAxKSAqIDcgKyBpIC0gdGhpcy5zdGF0ZS5zdGFydERheSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIDwvdHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpbm5lck5vZGUucHVzaCg8ZGl2IGNsYXNzTmFtZT1cImNvbCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGtleT17J2gnICsgaX0+XHJcbiAgICAgICAgICAgIHsvKiA8dHJhbnNpdGlvbiBuYW1lPXt0aGlzLnByb3BzLmNhbGVuZGVySXRlbUFuaW19PiAqL31cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5jYWxlbmRlckNlbGxOb1RleHRTdHlsZX0+PC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8L3RyYW5zaXRpb24+ICovfVxyXG4gICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcGFyZW50Tm9kZS5wdXNoKDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gIGZsZXgtbm93cmFwIFwiXHJcbiAgICAgICAga2V5PXsnamonICsgan1cclxuICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICB7IC4uLnRoaXMucHJvcHMucm93Q2FsZW5kZXJTdHlsZSwgLi4uc3R5bGVIIH1cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7aW5uZXJOb2RlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnROb2RlXHJcbiAgfVxyXG4gIHdhdGNoTW92ZUFjdGlvbih2YWwpIHtcclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICB2YWwgIT09IG51bGwgJiZcclxuICAgICAgdHlwZW9mIHZhbC5hY3Rpb24gIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgdmFsLmFjdGlvbiAhPT0gbnVsbCAmJlxyXG4gICAgICAodHlwZW9mIHZhbC51c2VKdW1wID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgdmFsLnVzZUp1bXAgPT09IG51bGwgfHxcclxuICAgICAgICAhdmFsLnVzZUp1bXApXHJcbiAgICApIHtcclxuICAgICAgbGV0IHYgPSB2YWwuYWN0aW9uLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB2ID09IFwiblwiIHx8XHJcbiAgICAgICAgdiA9PSBcIm5lXCIgfHxcclxuICAgICAgICB2ID09IFwibmV4XCIgfHxcclxuICAgICAgICB2ID09IFwibmV4dFwiIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwiblwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwibmVcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcIm5leFwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwibmV4dFwiKSA9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMubmV4dE1vbnRoKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICAgIG1vdmVBY3Rpb246IHZhbCxcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aW91c1wiIHx8XHJcbiAgICAgICAgdiA9PSBcInByZXZpb3VcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aW9cIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmV2aVwiIHx8XHJcbiAgICAgICAgdiA9PSBcInByZXZcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwcmVcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJwclwiIHx8XHJcbiAgICAgICAgdiA9PSBcInBcIiB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZXZpb3VzXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2aW91XCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2aW9cIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByZXZpXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmV2XCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwcmVcIikgPT0gMCB8fFxyXG4gICAgICAgIHYuaW5kZXhPZihcInByXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJwXCIpID09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5wZXJNb250aCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgICBtb3ZlQWN0aW9uOiB2YWwsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB2ID09IFwidG9kYXlcIiB8fFxyXG4gICAgICAgIHYgPT0gXCJ0b2RhXCIgfHxcclxuICAgICAgICB2ID09IFwidG9kXCIgfHxcclxuICAgICAgICB2ID09IFwidG9cIiB8fFxyXG4gICAgICAgIHYgPT0gXCJ0XCIgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJ0b2RheVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidG9kYVwiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidG9kXCIpID09IDAgfHxcclxuICAgICAgICB2LmluZGV4T2YoXCJ0b1wiKSA9PSAwIHx8XHJcbiAgICAgICAgdi5pbmRleE9mKFwidFwiKSA9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuZ29Ub2RheSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdG9ycyh7XHJcbiAgICAgICAgICBtb3ZlQWN0aW9uOiB2YWwsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHR5cGVvZiB2YWwudXNlSnVtcCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICAgIHZhbC51c2VKdW1wICE9PSBudWxsICYmXHJcbiAgICAgICAgdmFsLnVzZUp1bXAgJiZcclxuICAgICAgICB0eXBlb2YgdmFsLmp1bXAgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICB2YWwuanVtcCAhPT0gbnVsbFxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgbW9tZW50T2JqZWN0ID0gdGhpcy5zdGF0ZS5tb21lbnRPYmplY3RcclxuICAgICAgICBpZiAodHlwZW9mIHZhbC5qdW1wLnllYXIgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsLmp1bXAueWVhciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgbW9tZW50T2JqZWN0LmFkZCh2YWwuanVtcC55ZWFyLCBcInllYXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHR5cGVvZiB2YWwuanVtcC5tb250aCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICAgICAgdmFsLmp1bXAubW9udGggIT09IG51bGxcclxuICAgICAgICApIHtcclxuICAgICAgICAgIG1vbWVudE9iamVjdC5hZGQodmFsLmp1bXAubW9udGgsIFwibW9udGhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsLmp1bXAuZGF5ICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbC5qdW1wLmRheSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgbW9tZW50T2JqZWN0LmFkZCh2YWwuanVtcC5kYXksIFwiZGF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgICAgbW92ZUFjdGlvbjogdmFsLFxyXG4gICAgICAgICAgbW9tZW50T2JqZWN0XHJcbiAgICAgICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gbW9tZW50KCk7XHJcbiAgICBsZXQgdG9kYXkgPSB0aGlzLmNvbnYobW9tZW50T2JqZWN0LmZvcm1hdChcIllZWVktTS1EXCIpKTtcclxuICAgIGxldCBkZWZGb3JtYXQgPSBtb21lbnRPYmplY3QuZm9ybWF0KFwiWVlZWS9NL1wiKTtcclxuICAgIGxldCB0b2RheURheSA9IHBhcnNlSW50KHRoaXMuY29udihtb21lbnRPYmplY3QuZm9ybWF0KFwiRFwiKSkpO1xyXG4gICAgbGV0IHRvZGF5TW9udGggPSB0aGlzLnN0YXRlLm1vbnRoSGVhZGVyW1xyXG4gICAgICB0aGlzLmNvbnYobW9tZW50T2JqZWN0LmZvcm1hdChcIk1cIikpXHJcbiAgICBdO1xyXG4gICAgbGV0IHRvZGF5WWVhciA9IG1vbWVudE9iamVjdC5mb3JtYXQoXCJZWVlZXCIpO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHRoaXMucHJvcHMudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgdGV4dCA9IHRoaXMucHJvcHMudmFsdWU7XHJcbiAgICAgIHZhciBucyA9IFwi27Dbsduy27PbtNu127bbt9u427lcIjtcclxuICAgICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICAgIGxldCBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjID0gbnMuaW5kZXhPZih0ZXh0LmNoYXJBdChpKSk7XHJcbiAgICAgICAgbGV0IG51bXAgPSBwYXJzZUludChjKTtcclxuICAgICAgICBpZiAobnVtcCA+PSAwKSB7XHJcbiAgICAgICAgICBvdXQgKz0gYztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb3V0ICs9IHRleHQuY2hhckF0KGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgZGRkID0gbW9tZW50KG91dCwgXCJZWVlZL00vRFwiKTtcclxuICAgICAgbGV0IHNlbGVjdGVkTW9udGggPSB0aGlzLnN0YXRlLm1vbnRoSGVhZGVyW3RoaXMuY29udihkZGQuZm9ybWF0KFwiTVwiKSldO1xyXG4gICAgICBsZXQgc2VsZWN0ZWRZZWFyID0gZGRkLmZvcm1hdChcIllZWVlcIik7XHJcblxyXG4gICAgICBsZXQgc2VsZWN0ZWREYXkgPSBkZGQuZm9ybWF0KFwiRFwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBzZWxlY3RlZE1vbnRoLFxyXG4gICAgICAgIHNlbGVjdGVkWWVhcixcclxuICAgICAgICBzZWxlY3RlZERheSxcclxuICAgICAgfSlcclxuICAgICAgbW9tZW50T2JqZWN0ID0gZGRkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHRoaXMucHJvcHMuZGVmWWVhciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICB0aGlzLnByb3BzLmRlZlllYXIgKyBcIlwiLmxlbmd0aCA+IDAgJiZcclxuICAgICAgKCEhcGFyc2VJbnQodGhpcy5wcm9wcy5kZWZZZWFyKSAmJiBwYXJzZUludCh0aGlzLnByb3BzLmRlZlllYXIpID49IDApXHJcbiAgICApIHtcclxuICAgICAgbW9tZW50T2JqZWN0LnllYXIocGFyc2VJbnQodGhpcy5wcm9wcy5kZWZZZWFyKSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdG9ycyh7IGN1cnJZZWFyOiBtb21lbnRPYmplY3QuZm9ybWF0KFwiWVlZWVwiKSB9KVxyXG4gICAgICBcclxuICAgIHRoaXMucHJvcHMuZ2V0Q3VycmVudFllYXIobW9tZW50T2JqZWN0LmZvcm1hdChcIllZWVlcIikpXHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiB0aGlzLnByb3BzLmRlZk1vbnRoICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgIHRoaXMucHJvcHMuZGVmTW9udGggKyBcIlwiLmxlbmd0aCA+IDAgJiZcclxuICAgICAgKCEhcGFyc2VJbnQodGhpcy5wcm9wcy5kZWZNb250aCkgJiYgcGFyc2VJbnQodGhpcy5wcm9wcy5kZWZNb250aCkgPj0gMClcclxuICAgICkge1xyXG4gICAgICBtb21lbnRPYmplY3QubW9udGgocGFyc2VJbnQodGhpcy5wcm9wcy5kZWZNb250aCAtIDEpKTtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBjdXJyTW9udGg6IHRoaXMuY29udihtb21lbnRPYmplY3QuZm9ybWF0KFwiTVwiKSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHRoaXMucHJvcHMuZGVmRGF5ICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgICAgIHRoaXMucHJvcHMuZGVmRGF5ICsgXCJcIi5sZW5ndGggPiAwICYmXHJcbiAgICAgICghIXBhcnNlSW50KHRoaXMucHJvcHMuZGVmRGF5KSAmJiBwYXJzZUludCh0aGlzLnByb3BzLmRlZkRheSkgPj0gMClcclxuICAgICkge1xyXG4gICAgICBtb21lbnRPYmplY3QuZGF5KHBhcnNlSW50KHRoaXMucHJvcHMuZGVmRGF5KSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICBtb21lbnRPYmplY3QsXHJcbiAgICAgIHRvZGF5LFxyXG4gICAgICBkZWZGb3JtYXQsXHJcbiAgICAgIHRvZGF5RGF5LFxyXG4gICAgICB0b2RheU1vbnRoLFxyXG4gICAgICB0b2RheVllYXJcclxuXHJcbiAgICB9LCB0aGlzLmNoYW5nZU1vbnRoLCB0cnVlKVxyXG4gIH1cclxuICBzdHlsZUNlbGxDYWwxKGluZGV4KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRZZWFyID09IHRoaXMuY29udih0aGlzLnN0YXRlLmN1cnJZZWFyKSAmJlxyXG4gICAgICB0aGlzLnN0YXRlLmN1cnJNb250aCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkTW9udGggJiZcclxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZERheSA9PSBpbmRleFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdFN0eWxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuc3RhdGUuY3VyclllYXIgPT0gdGhpcy5zdGF0ZS50b2RheVllYXIgJiZcclxuICAgICAgICB0aGlzLnN0YXRlLmN1cnJNb250aCA9PSB0aGlzLnN0YXRlLnRvZGF5TW9udGhcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9kYXlEYXkgPT0gaW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnRvZGF5U3R5bGU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnRvZGF5RGF5ID49IGluZGV4KSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5iZWZvcmVUb2RheVN0eWxlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5hZnRlclRvZGF5U3R5bGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc3RhcnREYXlpc0JlZm9yZVRvZGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYmVmb3JlVG9kYXlTdHlsZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5hZnRlclRvZGF5U3R5bGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0eWxlQ2VsbENhbChpbmRleCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VyclllYXIgPT0gdGhpcy5zdGF0ZS50b2RheVllYXIgJiYgdGhpcy5zdGF0ZS5jdXJyTW9udGggPT0gdGhpcy5zdGF0ZS50b2RheU1vbnRoKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnRvZGF5RGF5ID09IGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIFwicmF0aW8tcGFyZW50IGJhc2UgdG9kYXlcIjtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnRvZGF5RGF5ID49IGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIFwicmF0aW8tcGFyZW50IGJhc2UgYmVmb3JlLXRvZGF5XCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwicmF0aW8tcGFyZW50IGJhc2UgYWZ0ZXItdG9kYXlcIjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnN0YXJ0RGF5aXNCZWZvcmVUb2RheSkge1xyXG4gICAgICByZXR1cm4gXCJyYXRpby1wYXJlbnQgYmFzZSBiZWZvcmUtdG9kYXlcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcInJhdGlvLXBhcmVudCBiYXNlIGFmdGVyLXRvZGF5XCI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoYW5nZU1vbnRoKGlzTW91bnRlZCA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIWlzTW91bnRlZCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoeyBjaGFuZ2VBbmltOiBmYWxzZSB9KVxyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYuc2V0U3RhdG9ycyh7IGNoYW5nZUFuaW06IHRydWUgfSlcclxuICAgICAgfSwgNTAwKTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jbGVhclN0dGVyKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSlcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkWWVhciA9PSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdC5mb3JtYXQoXCJZWVlZXCIpICYmXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkTW9udGggPT1cclxuICAgICAgICAgIHRoaXMuc3RhdGUubW9udGhIZWFkZXJbdGhpcy5jb252KHRoaXMuc3RhdGUubW9tZW50T2JqZWN0LmZvcm1hdChcIk1cIikpXVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5zdHlsZVN0dGVyKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jbGVhclN0dGVyKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBzdGFydERheWlzQmVmb3JlVG9kYXkgPSBtb21lbnQodGhpcy5zdGF0ZS50b2RheSkuaXNBZnRlcihcclxuICAgICAgdGhpcy5jb252KHRoaXMuc3RhdGUubW9tZW50T2JqZWN0LmZvcm1hdChcIllZWVkvTS9EXCIpKVxyXG4gICAgKTtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LnN0YXJ0T2YoXCJtb250aFwiKTtcclxuICAgIGxldCBzdGFydERheU1vbWVudCA9IG1vbWVudE9iamVjdDtcclxuICAgIGxldCBzdGFydERheSA9IHBhcnNlSW50KHRoaXMuY29udihtb21lbnRPYmplY3QuZm9ybWF0KFwiZVwiKSkpO1xyXG4gICAgLy8gaWYoc3RhcnREYXk+PTcpe1xyXG4gICAgLy8gICBzdGFydERheT0wXHJcbiAgICAvLyB9XHJcbiAgICBsZXQgZmlyc3RSb3dMYXN0RGF5cyA9IDQgKiA3ICsgKDcgLSBzdGFydERheSlcclxuICAgIG1vbWVudE9iamVjdC5lbmRPZihcIm1vbnRoXCIpO1xyXG4gICAgbGV0IGVuZERheSA9IHBhcnNlSW50KHRoaXMuY29udihtb21lbnRPYmplY3QuZm9ybWF0KFwiRFwiKSkpO1xyXG4gICAgbGV0IGN1cnJNb250aCA9IHRoaXMuc3RhdGUubW9udGhIZWFkZXJbXHJcbiAgICAgIHRoaXMuY29udihtb21lbnRPYmplY3QuZm9ybWF0KFwiTVwiKSlcclxuICAgIF07XHJcblxyXG4gICAgbGV0IGN1cnJZZWFyID0gbW9tZW50T2JqZWN0LmZvcm1hdChcIllZWVlcIik7XHJcbiAgICBsZXQgdG90YWxNYWluUm93ID0gNVxyXG4gICAgaWYgKCF0aGlzLmlzRml2ZVJvdykge1xyXG4gICAgICBpZiAodGhpcy5lbmREYXkgPiBmaXJzdFJvd0xhc3REYXlzKSB7XHJcbiAgICAgICAgdG90YWxNYWluUm93ID0gNlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvdGFsTWFpblJvdyA9IDVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHRvdGFsTWFpblJvdyxcclxuICAgICAgZmlyc3RSb3dMYXN0RGF5cyxcclxuICAgICAgbW9tZW50T2JqZWN0LFxyXG4gICAgICBzdGFydERheWlzQmVmb3JlVG9kYXksXHJcbiAgICAgIHN0YXJ0RGF5TW9tZW50LFxyXG4gICAgICBzdGFydERheSxcclxuICAgICAgZW5kRGF5LFxyXG4gICAgICBjdXJyTW9udGgsXHJcbiAgICAgIGN1cnJZZWFyXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMuZ2V0Q3VycmVudFllYXIoY3VyclllYXIpXHJcbiAgfVxyXG4gIG5leHRNb250aCgpIHtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LmFkZCgxLCBcIm1vbnRoXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vbWVudE9iamVjdFxyXG4gICAgfSwgdGhpcy5jaGFuZ2VNb250aCwgZmFsc2UpO1xyXG4gIH1cclxuICBwZXJNb250aCgpIHtcclxuICAgIGxldCBtb21lbnRPYmplY3QgPSB0aGlzLnN0YXRlLm1vbWVudE9iamVjdFxyXG4gICAgbW9tZW50T2JqZWN0LmFkZCgtMSwgXCJtb250aFwiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtb21lbnRPYmplY3RcclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIGZhbHNlKTtcclxuICB9XHJcbiAgc3R5bGVTdHRlcihlLG9iPXtcclxuICAgIC4uLnRoaXMucHJvcHMuc2VsZWN0U3R5bGV9KXtcclxuICAgIE9iamVjdC5rZXlzKG9iKS5mb3JFYWNoKHY9PntcclxuXHJcbiAgICAgIGUuc3R5bGVbdl09b2Jbdl1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGNsZWFyU3R0ZXIoZSl7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdFN0eWxlKS5mb3JFYWNoKHY9PntcclxuICAgICAgZS5zdHlsZVt2XT0nJ1xyXG4gICAgfSlcclxuICB9XHJcbiAgc2VsZWNWYWx1ZXMoaW5kZXgsIGUpIHtcclxuICAgIGxldCBsYXN0U2VsZWN0ZWROb2RlID0gZS50YXJnZXQ7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5sYXN0U2VsZWN0ZWROb2RlID09IG51bGwpIHtcclxuICAgICAgbGV0IGlucHV0VmFsdWUgPSB0aGlzLnN0YXRlLnN0YXJ0RGF5TW9tZW50XHJcbiAgICAgICAgLnN0YXJ0T2YoXCJtb250aFwiKVxyXG4gICAgICAgIC5hZGQoaW5kZXggLSAxLCBcImRheVwiKVxyXG4gICAgICAgIC5mb3JtYXQodGhpcy5wcm9wcy5jdXN0b21Gb3JtYXQpO1xyXG4gICAgICBsZXQgc2VsZWN0ZWRNb250aCA9IHRoaXMuc3RhdGUubW9udGhIZWFkZXJbXHJcbiAgICAgICAgdGhpcy5jb252KHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnQuZm9ybWF0KFwiTVwiKSlcclxuICAgICAgXTtcclxuICAgICAgbGV0IHNlbGVjdGVkWWVhciA9IHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnQuZm9ybWF0KFwiWVlZWVwiKTtcclxuICAgICAgbGV0IHNlbGVjdGVkRGF5ID0gdGhpcy5zdGF0ZS5zdGFydERheU1vbWVudC5mb3JtYXQoXCJEXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICAgIGxhc3RTZWxlY3RlZE5vZGUsXHJcbiAgICAgICAgaW5wdXRWYWx1ZSxcclxuICAgICAgICBzZWxlY3RlZE1vbnRoLFxyXG4gICAgICAgIHNlbGVjdGVkWWVhcixcclxuICAgICAgICBzZWxlY3RlZERheVxyXG4gICAgICB9LCB0aGlzLnByb3BzLmlucHV0LCBpbnB1dFZhbHVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbGVhclN0dGVyKHRoaXMuc3RhdGUubGFzdFNlbGVjdGVkTm9kZSlcclxuICAgICAgbGV0IGlucHV0VmFsdWUgPSB0aGlzLnN0YXRlLnN0YXJ0RGF5TW9tZW50XHJcbiAgICAgICAgLnN0YXJ0T2YoXCJtb250aFwiKVxyXG4gICAgICAgIC5hZGQoaW5kZXggLSAxLCBcImRheVwiKVxyXG4gICAgICAgIC5mb3JtYXQodGhpcy5wcm9wcy5jdXN0b21Gb3JtYXQpO1xyXG4gICAgICBsZXQgc2VsZWN0ZWRNb250aCA9IHRoaXMuc3RhdGUubW9udGhIZWFkZXJbXHJcbiAgICAgICAgdGhpcy5jb252KHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnQuZm9ybWF0KFwiTVwiKSlcclxuICAgICAgXTtcclxuICAgICAgbGV0IHNlbGVjdGVkWWVhciA9IHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnQuZm9ybWF0KFwiWVlZWVwiKTtcclxuXHJcbiAgICAgIGxldCBzZWxlY3RlZERheSA9IHRoaXMuc3RhdGUuc3RhcnREYXlNb21lbnQuZm9ybWF0KFwiRFwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0b3JzKHtcclxuICAgICAgICBsYXN0U2VsZWN0ZWROb2RlLFxyXG4gICAgICAgIGlucHV0VmFsdWUsXHJcbiAgICAgICAgc2VsZWN0ZWRNb250aCxcclxuICAgICAgICBzZWxlY3RlZFllYXIsXHJcbiAgICAgICAgc2VsZWN0ZWREYXlcclxuICAgICAgfSwgdGhpcy5wcm9wcy5pbnB1dCxcclxuICAgICAgICBpbnB1dFZhbHVlKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zdHlsZVN0dGVyKGxhc3RTZWxlY3RlZE5vZGUpXHJcbiAgfVxyXG4gIGdvVG9kYXkoKSB7XHJcbiAgICBsZXQgbW9tZW50T2JqZWN0ID0gbW9tZW50KCk7XHJcbiAgICB0aGlzLnNldFN0YXRvcnMoe1xyXG4gICAgICBtb21lbnRPYmplY3RcclxuICAgIH0sIHRoaXMuY2hhbmdlTW9udGgsIGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgc2V0RGF0ZXIoKSB7XHJcbiAgICB0aGlzLnNEYXkgPSB0aGlzLnNEYXkgKyAxO1xyXG4gICAgcmV0dXJuIHRoaXMuc0RheTtcclxuICB9XHJcbiAgY29udih2YWwpIHtcclxuICAgIGxldCB0ZXh0ID0gdmFsICsgXCJcIjtcclxuICAgIGlmICh0ZXh0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgdmFyIG5zID0gXCLbsNux27Lbs9u027Xbttu327jbuVwiO1xyXG4gICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICBsZXQgbGVuZ3RoID0gdGV4dC5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjID0gdGV4dC5jaGFyQXQoaSk7XHJcbiAgICAgIGxldCBudW1wID0gbnMuaW5kZXhPZihjICsgXCJcIik7XHJcbiAgICAgIGlmIChudW1wID49IDApIHtcclxuICAgICAgICBvdXQgKz0gbnVtcDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvdXQgKz0gYztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAvLyBZb3UgZG9uJ3QgaGF2ZSB0byBkbyB0aGlzIGNoZWNrIGZpcnN0LCBidXQgaXQgY2FuIGhlbHAgcHJldmVudCBhbiB1bm5lZWRlZCByZW5kZXJcclxuICAgIGlmICh0aGlzLnN0YXRlLm1vdmVBY3Rpb24gIT09IG5leHRQcm9wcy5tb3ZlQWN0aW9uKSB7XHJcbiAgICAgIHRoaXMud2F0Y2hNb3ZlQWN0aW9uKG5leHRQcm9wcy5tb3ZlQWN0aW9uKVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy51c2VSYWl0b1NpemluZykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW8tcGFyZW50IG15LWZvbnQtY2FsZW5kZXJcIiA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGlvLWNoaWxkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHctMTAwIGgtMTAwXCIgc3R5bGU9e3RoaXMucHJvcHMubWFpbkJvZHlTdHlsZX0+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd1RpdGxlICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnRpdGxlU3R5bGUsIC4uLiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAodGhpcy5wcm9wcy5yYWl0b1RpdGxlICogMTAgKyAnJScpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wZXJNb250aH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaS1jaGV2cm9uLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMiAzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmFycm93TGVmdFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjcuODEyNSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwIDMwIEw4IDE2IDIwIDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jbGlja1RpdGxlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi57IG1pbldpZHRoOiAnMjAlJyB9LCAuLi50aGlzLnByb3BzLmNsaWNrYWJsZVN0eWxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj57KHRoaXMuc3RhdGUuY3VyclllYXIpfSAtPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDx0cmFuc2l0aW9uIG5hbWU9XCJtb250aEFuaW1cIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGFuZ2VBbmltICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPnsodGhpcy5zdGF0ZS5jdXJyTW9udGgpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDwvdHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbWFsbCBkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5uZXh0TW9udGh9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImktY2hldnJvbi1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMyIDMyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Y29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuYXJyb3dSaWdodFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjcuODEyNSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDMwIEwyNCAxNiAxMiAyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggdy0xMDAgZmxleC1yb3ctcmV2ZXJzZSBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiB0aGlzLnByb3BzLnJhaXRvQm9keSAqIDEwICsgJyUnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWJldHdlZW4gIGZsZXgtbm93cmFwICBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuaGVhZGVyQ2FsZW5kZXJTdHlsZX1cclxuXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUuaGVhZGVyKS5tYXAoKGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCAgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlckNhbGVuZGVySXRlbVN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtrICsgMTAwICsgMTAwICsgJzsnfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5oZWFkZXJba10pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1DcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnN0YXRlLnN0YXJ0RGF5KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93Rm9vdGVyICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4udGhpcy5wcm9wcy5mb290ZXJTdHlsZSwgLi4ueyBoZWlnaHQ6IHRoaXMucHJvcHMucmFpdG9Gb290ZXIgKiAxMCArICclJyB9IH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0J1dHRvblRvZGF5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGwgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4udGhpcy5wcm9wcy50b2RheUJ1dHRvblN0eWxlLCAuLi57IGN1cnNvcjogJ3BvaW50ZXInIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nb1RvZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHRoaXMucHJvcHMudG9kYXlCdXR0b25UaXRsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWVTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5pbnB1dFZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG15LWZvbnQtY2FsZW5kZXJcIiBzdHlsZT17dGhpcy5wcm9wcy5tYWluQm9keVN0eWxlfSA+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93VGl0bGUgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIHN0eWxlPXt0aGlzLnByb3BzLnRpdGxlU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tc21hbGxcIiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9e3RoaXMucGVyTW9udGh9PlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJpLWNoZXZyb24tbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMiAzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Y29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuYXJyb3dMZWZ0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI3LjgxMjUlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgMzAgTDggMTYgMjAgMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jbGlja1RpdGxlKCl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnsgbWluV2lkdGg6ICcyMCUnIH0sIC4uLnRoaXMucHJvcHMuY2xpY2thYmxlU3R5bGUgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdj57KHRoaXMuc3RhdGUuY3VyclllYXIpfSAtPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogPHRyYW5zaXRpb24gbmFtZT1cIm1vbnRoQW5pbVwiPiAqL31cclxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hhbmdlQW5pbSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgPnsodGhpcy5zdGF0ZS5jdXJyTW9udGgpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8L3RyYW5zaXRpb24+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsIGRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5uZXh0TW9udGh9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImktY2hldnJvbi1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMiAzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Y29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuYXJyb3dSaWdodFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNy44MTI1JVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDMwIEwyNCAxNiAxMiAyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiAgZmxleC1ub3dyYXAgIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlckNhbGVuZGVyU3R5bGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmhlYWRlcikubWFwKChrKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlckNhbGVuZGVySXRlbVN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2sgKyAxMDAgKyAxMDAgKyAnOyd9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5oZWFkZXJba10pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgICAgIHt0aGlzLm1DcmVhdG9yKHt9LCB0aGlzLnN0YXRlLnN0YXJ0RGF5KX1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dGb290ZXIgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIHN0eWxlPXt0aGlzLnByb3BzLmZvb3RlclN0eWxlfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93QnV0dG9uVG9kYXkgJiYgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtYWxsIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnRoaXMucHJvcHMudG9kYXlCdXR0b25TdHlsZSwgLi4uIHsgY3Vyc29yOiAncG9pbnRlcicgfSB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvVG9kYXl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHsodGhpcy5wcm9wcy50b2RheUJ1dHRvblRpdGxlKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd1NlbGVjdGVkVmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zaG93U2VsZWN0ZWRWYWx1ZVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbklubGluZUNhbGVuZGVyVmVydGljYWwucHJvcFR5cGVzID0ge1xyXG4gIGRlZkRheTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gIGRlZlllYXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcclxuICBkZWZNb250aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gIGlucHV0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBnZXRDdXJyZW50WWVhcjpQcm9wVHlwZXMuZnVuYyxcclxuICBjbGlja1RpdGxlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBhY3Rpb25TdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIG1vdmVBY3Rpb246IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgaXNGaXZlUm93OiBQcm9wVHlwZXMuYm9vbCxcclxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBzZWxlY3RlZENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0b2RheVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGFmdGVyVG9kYXlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBiZWZvcmVUb2RheVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNlbGVjdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNhbGVuZGVyQ2VsbEJvZHlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjYWxlbmRlckNlbGxXaXRoVGV4dFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNhbGVuZGVyQ2VsbE5vVGV4dFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHJvd0NhbGVuZGVySXRlbVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHJvd0NhbGVuZGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgaGVhZGVyQ2FsZW5kZXJJdGVtU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgbWFpbkJvZHlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBhcnJvd1JpZ2h0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgYXJyb3dMZWZ0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2xpY2thYmxlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgdGl0bGVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBoZWFkZXJDYWxlbmRlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGZvb3RlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHRvZGF5QnV0dG9uU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2hvd1NlbGVjdGVkVmFsdWVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjdXN0b21Gb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdXNlUmFpdG9TaXppbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gIHJhaXRvVGl0bGU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgcmFpdG9UYWJsZUhlZGVhcjogUHJvcFR5cGVzLm51bWJlcixcclxuICByYWl0b0JvZHk6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgcmFpdG9Gb290ZXI6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgc2hvd1RpdGxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzaG93Rm9vdGVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzaG93QnV0dG9uVG9kYXk6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNob3dTZWxlY3RlZFZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjYWxlbmRlckl0ZW1BbmltOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG1vbnRoQW5pbTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0b2RheUJ1dHRvblRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5JbmxpbmVDYWxlbmRlclZlcnRpY2FsLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpbnB1dCh2YWwpIHsgfSxcclxuICBcclxuICBnZXRDdXJyZW50WWVhcih2YWwpIHsgfSxcclxuICBjbGlja1RpdGxlKCkge1xyXG5cclxuICB9LFxyXG4gIGRlZkRheTogXCJcIixcclxuICBkZWZZZWFyOiBcIlwiLFxyXG4gIGRlZk1vbnRoOiBcIlwiLFxyXG4gIGFjdGlvblN0ZXA6IDEsXHJcbiAgbW92ZUFjdGlvbjoge1xyXG4gICAgYWN0aW9uOiBcIlwiLFxyXG4gICAgc3RlcDogMSxcclxuICAgIHVzZUp1bXA6IGZhbHNlLFxyXG4gICAganVtcDoge31cclxuICB9LFxyXG4gIGlzRml2ZVJvdzogZmFsc2UsXHJcbiAgdmFsdWU6IFwiXCIsXHJcbiAgc2VsZWN0ZWRDbGFzc05hbWU6IFwic2VsZWN0ZWRcIixcclxuICB0b2RheVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZTg0NTQ1XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMwMGFkYjVcIixcclxuXHJcbiAgICBib3hTaGFkb3c6IFwiMCAwIDVweCAjZTg0NTQ1XCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcIiBhbGwgMXNcIlxyXG4gIH0sXHJcbiAgYWZ0ZXJUb2RheVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4ICNlZWVlZWVcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzIyMjgzMVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMXNcIlxyXG4gIH0sXHJcbiAgYmVmb3JlVG9kYXlTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjZWVlZWVlXCIsXHJcblxyXG4gICAgYm94U2hhZG93OiBcImluc2V0IDAgMCAxMHB4ICMyMjI4MzFcIixcclxuICAgIGNvbG9yOiBcIiMyMjI4MzFcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIHNlbGVjdFN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIm9yYW5nZXJlZFwiLFxyXG5cclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDFzXCJcclxuICB9LFxyXG4gIGNhbGVuZGVyQ2VsbEJvZHlTdHlsZToge1xyXG4gIH0sXHJcbiAgY2FsZW5kZXJDZWxsV2l0aFRleHRTdHlsZToge1xyXG4gICAgLy8gYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXHJcbiAgICBtYXJnaW46IFwiMnB4XCIsXHJcbiAgICBcIldlYmtpdFVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIk1velVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIm1zVXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxc1wiXHJcbiAgfSxcclxuICBjYWxlbmRlckNlbGxOb1RleHRTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBtYXJnaW46IFwiYXV0b1wiXHJcbiAgfSxcclxuICByb3dDYWxlbmRlckl0ZW1TdHlsZToge1xyXG4gIH0sXHJcbiAgcm93Q2FsZW5kZXJTdHlsZToge1xyXG4gICAgICBmbGV4R3JvdzogJzEnXHJcbiAgICAvLyBtYXJnaW46IFwiMCAtMTRweFwiXHJcbiAgfSxcclxuICBoZWFkZXJDYWxlbmRlckl0ZW1TdHlsZToge1xyXG4gICAgY29sb3I6IFwiI2VlZWVlZVwiLFxyXG4gICAgLy8gbWFyZ2luOiBcImF1dG9cIlxyXG4gIH0sXHJcbiAgbWFpbkJvZHlTdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMzkzZTQ2XCIsXHJcbiAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNlZWVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIxNXB4XCIsXHJcbiAgICBwYWRkaW5nOiBcIjE1cHhcIlxyXG4gIH0sXHJcbiAgYXJyb3dSaWdodFN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCJcclxuICB9LFxyXG4gIGFycm93TGVmdFN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCJcclxuICB9LFxyXG4gIGNsaWNrYWJsZVN0eWxlOiB7XHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXHJcbiAgICBcIldlYmtpdFVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIk1velVzZXJTZWxlY3RcIjogXCJub25lXCIsXHJcbiAgICBcIm1zVXNlclNlbGVjdFwiOiBcIm5vbmVcIixcclxuICB9LFxyXG4gIHRpdGxlU3R5bGU6IHtcclxuICAgIC8vIG1hcmdpblRvcDogXCItMTBweFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCIjMzkzZTQ2XCIsXHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCJcclxuICB9LFxyXG4gIGhlYWRlckNhbGVuZGVyU3R5bGU6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiIzIyMjgzMVwiLFxyXG4gICAgcGFkZGluZzonMCA1cHgnLFxyXG4gICAgLy8gZmxleEdyb3c6ICcxJyxcclxuICAgIG1hcmdpbjogXCIwcHggMnB4XCJcclxuICB9LFxyXG4gIGZvb3RlclN0eWxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMTRweFwiXHJcbiAgfSxcclxuICB0b2RheUJ1dHRvblN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcbiAgICBvdXRsaW5lOiBcIm5vbmUgIWltcG9ydGFudFwiXHJcbiAgfSxcclxuICBzaG93U2VsZWN0ZWRWYWx1ZVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCIjZWVlZWVlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxuICB9LFxyXG4gIGN1c3RvbUZvcm1hdDogXCJZWVlZL00vRFwiLFxyXG4gIHVzZVJhaXRvU2l6aW5nOiB0cnVlLFxyXG4gIHJhaXRvVGl0bGU6IDEsXHJcbiAgcmFpdG9UYWJsZUhlZGVhcjogMSxcclxuICByYWl0b0JvZHk6IDgsXHJcbiAgcmFpdG9Gb290ZXI6IDEsXHJcbiAgc2hvd1RpdGxlOiB0cnVlLFxyXG4gIHNob3dGb290ZXI6IHRydWUsXHJcbiAgc2hvd0J1dHRvblRvZGF5OiB0cnVlLFxyXG4gIHNob3dTZWxlY3RlZFZhbHVlOiB0cnVlLFxyXG4gIGNhbGVuZGVySXRlbUFuaW06IFwic2xpZGUtZmFkZVwiLFxyXG4gIG1vbnRoQW5pbTogXCJmYWRlXCIsXHJcbiAgdG9kYXlCdXR0b25UaXRsZTogXCJUb2RheVwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmxpbmVDYWxlbmRlclZlcnRpY2FsOyJdfQ==