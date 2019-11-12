"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./InlineCalender.css");

require("./FullCalender.css");

var _TenYearCalender = _interopRequireDefault(require("./TenYearCalender"));

var _YearCalender = _interopRequireDefault(require("./YearCalender"));

var _MonthCalender = _interopRequireDefault(require("./MonthCalender"));

var _InlineCalenderVertical = _interopRequireDefault(require("./InlineCalenderVertical"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import { CSSTransition } from "react-transition-group";
// import TransitionGroup from 'react-transition-group/TransitionGroup' // ES6
var FullCalenderVertical =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FullCalenderVertical, _React$Component);

  function FullCalenderVertical(props) {
    var _this;

    _classCallCheck(this, FullCalenderVertical);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FullCalenderVertical).call(this, props));
    _this.state = {
      level: 0,
      month: "",
      day: "",
      tenYear: "",
      year: ""
    };
    _this.clickTitle = _this.clickTitle.bind(_assertThisInitialized(_this));
    _this.clickTitleMonth = _this.clickTitleMonth.bind(_assertThisInitialized(_this));
    _this.clickTitleYear = _this.clickTitleYear.bind(_assertThisInitialized(_this));
    _this.getMainVal = _this.getMainVal.bind(_assertThisInitialized(_this));
    _this.getCurrentYearMonth = _this.getCurrentYearMonth.bind(_assertThisInitialized(_this));
    _this.selectedYearM = _this.selectedYearM.bind(_assertThisInitialized(_this));
    _this.selectedYear = _this.selectedYear.bind(_assertThisInitialized(_this));
    _this.selectedMonth = _this.selectedMonth.bind(_assertThisInitialized(_this));
    _this.selectedTenYear = _this.selectedTenYear.bind(_assertThisInitialized(_this));
    _this.getCurrentYear = _this.getCurrentYear.bind(_assertThisInitialized(_this));
    _this.mCreator = _this.mCreator.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FullCalenderVertical, [{
    key: "mCreator",
    value: function mCreator() {
      return _react.default.createElement(_react.Fragment, null, this.state.level === 0 && _react.default.createElement(_InlineCalenderVertical.default, {
        isFiveRow: true,
        defYear: this.state.year,
        defMonth: this.state.month,
        input: this.getMainVal,
        "v-bind": "!!inlineStyle ? inlineStyle : {}",
        getCurrentYear: this.getCurrentYear,
        clickTitle: this.clickTitle
      }), this.state.level === 1 && _react.default.createElement(_MonthCalender.default, {
        "v-bind": "!!monthStyle ? monthStyle : {}",
        defYear: this.state.year,
        getCurrentYear: this.getCurrentYearMonth,
        sYear: this.selectedYearM,
        sMonth: this.selectedMonth,
        clickTitle: this.clickTitleMonth
      }), this.state.level === 2 && _react.default.createElement(_YearCalender.default, {
        "v-bind": "!!yearStyle ? yearStyle : {}",
        defYear: this.state.tenYear,
        input: this.selectedYear,
        clickTitle: this.clickTitleYear
      }), this.state.level > 2 && _react.default.createElement(_TenYearCalender.default, {
        defYear: this.state.year,
        input: this.selectedTenYear
      }));
    }
  }, {
    key: "clickTitle",
    value: function clickTitle() {
      // this.anime = this.animUp;
      // this.level = 1;
      this.setState({
        level: 1
      });
    }
  }, {
    key: "clickTitleYear",
    value: function clickTitleYear() {
      // this.anime = this.animUp;
      // this.level = 3;
      this.setState({
        level: 3
      });
    }
  }, {
    key: "clickTitleMonth",
    value: function clickTitleMonth() {
      // this.anime = this.animUp;
      // this.level = 2;
      this.setState({
        level: 2
      });
    }
  }, {
    key: "getMainVal",
    value: function getMainVal(val) {
      this.props.input(val); // this.$emit("input", val);
    }
  }, {
    key: "getCurrentYearMonth",
    value: function getCurrentYearMonth(val) {
      // this.tenYear = val;
      // this.anime = "this.animDown";
      // this.level = 1;
      this.setState({
        tenYear: val // level: 1

      });
    }
  }, {
    key: "selectedYearM",
    value: function selectedYearM(val) {
      // this.year = val;
      this.setState({
        year: val
      });
    }
  }, {
    key: "selectedYear",
    value: function selectedYear(val) {
      this.year = val; // this.anime = this.animDown;

      this.level = 1;
      this.setState({
        year: val,
        level: 1
      });
    }
  }, {
    key: "selectedMonth",
    value: function selectedMonth(val) {
      ////////console.log(val);
      // this.month = val;
      // this.anime = this.animDown;
      // ////////////////console.log(val," ffffffsagwgh")
      // this.level = 0;
      this.setState({
        month: val,
        level: 0
      });
    }
  }, {
    key: "selectedTenYear",
    value: function selectedTenYear(val) {
      // this.tenYear = val;
      // this.anime = this.animDown;
      // this.level = 2;
      this.setState({
        tenYear: val,
        level: 2
      });
    }
  }, {
    key: "getCurrentYear",
    value: function getCurrentYear(val) {
      // this.year = val;
      this.setState({
        year: val // level: 2

      }); //   ////////////////console.log('ffffffffffaga')
    }
  }, {
    key: "render",
    value: function render() {
      // console.log(this.state.level === 0, "level",this.state.level)
      if (this.props.useRaitoSizing) {
        return _react.default.createElement("div", {
          className: "ratio-parent my-font-calender"
        }, _react.default.createElement("div", {
          className: "ratio-child"
        }, _react.default.createElement("div", {
          className: "container-fluid w-100 h-100 overflow-hidden position-relative" // style={mainBodyStyle}

        }, this.mCreator())));
      } else {
        return _react.default.createElement("div", {
          className: "container-fluid my-font-calender",
          style: this.props.mainBodyStyle
        }, this.mCreator());
      }
    }
  }]);

  return FullCalenderVertical;
}(_react.default.Component);

FullCalenderVertical.propTypes = {
  defYear: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  useRaitoSizing: _propTypes.default.bool,
  input: _propTypes.default.func
};
FullCalenderVertical.defaultProps = {
  useRaitoSizing: true,
  input: function input(val) {}
};
var _default = FullCalenderVertical;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb25lbnQvRnVsbENhbGVuZGVyVmVydGljYWwuanN4Il0sIm5hbWVzIjpbIkZ1bGxDYWxlbmRlclZlcnRpY2FsIiwicHJvcHMiLCJzdGF0ZSIsImxldmVsIiwibW9udGgiLCJkYXkiLCJ0ZW5ZZWFyIiwieWVhciIsImNsaWNrVGl0bGUiLCJiaW5kIiwiY2xpY2tUaXRsZU1vbnRoIiwiY2xpY2tUaXRsZVllYXIiLCJnZXRNYWluVmFsIiwiZ2V0Q3VycmVudFllYXJNb250aCIsInNlbGVjdGVkWWVhck0iLCJzZWxlY3RlZFllYXIiLCJzZWxlY3RlZE1vbnRoIiwic2VsZWN0ZWRUZW5ZZWFyIiwiZ2V0Q3VycmVudFllYXIiLCJtQ3JlYXRvciIsInNldFN0YXRlIiwidmFsIiwiaW5wdXQiLCJ1c2VSYWl0b1NpemluZyIsIm1haW5Cb2R5U3R5bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImRlZlllYXIiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7SUFFTUEsb0I7Ozs7O0FBQ0YsZ0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4RkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxLQUFLLEVBQUUsQ0FERTtBQUVUQyxNQUFBQSxLQUFLLEVBQUUsRUFGRTtBQUdUQyxNQUFBQSxHQUFHLEVBQUUsRUFISTtBQUlUQyxNQUFBQSxPQUFPLEVBQUUsRUFKQTtBQUtUQyxNQUFBQSxJQUFJLEVBQUU7QUFMRyxLQUFiO0FBT0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQiwrQkFBbEI7QUFDQSxVQUFL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QUMsa0NBQWY7QUFBa0QsVUFBQSxLQUFLLEVBQUUsS0FBS2xCLEtBQUwsQ0FBV3VCO0FBQXBFLFdBRVAsS0FBS0wsUUFBTCxFQUZPLENBQVI7QUFJSDtBQUNKOzs7O0VBL0s4Qk0sZUFBTUMsUzs7QUFxTHpDMUIsb0JBQW9CLENBQUMyQixTQUFyQixHQUFpQztBQUM3QkMsRUFBQUEsT0FBTyxFQUFFQyxtQkFBVUMsU0FBVixDQUFvQixDQUFDRCxtQkFBVUUsTUFBWCxFQUFtQkYsbUJBQVVHLE1BQTdCLENBQXBCLENBRG9CO0FBRTdCVCxFQUFBQSxjQUFjLEVBQUVNLG1CQUFVSSxJQUZHO0FBRzdCWCxFQUFBQSxLQUFLLEVBQUNPLG1CQUFVSztBQUhhLENBQWpDO0FBTUFsQyxvQkFBb0IsQ0FBQ21DLFlBQXJCLEdBQW9DO0FBQ2hDWixFQUFBQSxjQUFjLEVBQUUsSUFEZ0I7QUFFaENELEVBQUFBLEtBRmdDLGlCQUUxQkQsR0FGMEIsRUFFdEIsQ0FBRTtBQUZvQixDQUFwQztlQU1lckIsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgJy4vSW5saW5lQ2FsZW5kZXIuY3NzJztcclxuXHJcbmltcG9ydCAnLi9GdWxsQ2FsZW5kZXIuY3NzJztcclxuaW1wb3J0IFRlblllYXJDYWxlbmRlciBmcm9tIFwiLi9UZW5ZZWFyQ2FsZW5kZXJcIjtcclxuaW1wb3J0IFllYXJDYWxlbmRlciBmcm9tIFwiLi9ZZWFyQ2FsZW5kZXJcIjtcclxuaW1wb3J0IE1vbnRoQ2FsZW5kZXIgZnJvbSBcIi4vTW9udGhDYWxlbmRlclwiO1xyXG5pbXBvcnQgSW5saW5lQ2FsZW5kZXJWZXJ0aWNhbCBmcm9tIFwiLi9JbmxpbmVDYWxlbmRlclZlcnRpY2FsXCI7XHJcbi8vIGltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xyXG4vLyBpbXBvcnQgVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwJyAvLyBFUzZcclxuXHJcbmNsYXNzIEZ1bGxDYWxlbmRlclZlcnRpY2FsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxldmVsOiAwLFxyXG4gICAgICAgICAgICBtb250aDogXCJcIixcclxuICAgICAgICAgICAgZGF5OiBcIlwiLFxyXG4gICAgICAgICAgICB0ZW5ZZWFyOiBcIlwiLFxyXG4gICAgICAgICAgICB5ZWFyOiBcIlwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jbGlja1RpdGxlID0gdGhpcy5jbGlja1RpdGxlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmNsaWNrVGl0bGVNb250aCA9IHRoaXMuY2xpY2tUaXRsZU1vbnRoLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmNsaWNrVGl0bGVZZWFyID0gdGhpcy5jbGlja1RpdGxlWWVhci5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5nZXRNYWluVmFsID0gdGhpcy5nZXRNYWluVmFsLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmdldEN1cnJlbnRZZWFyTW9udGggPSB0aGlzLmdldEN1cnJlbnRZZWFyTW9udGguYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRZZWFyTSA9IHRoaXMuc2VsZWN0ZWRZZWFyTS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFllYXIgPSB0aGlzLnNlbGVjdGVkWWVhci5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1vbnRoID0gdGhpcy5zZWxlY3RlZE1vbnRoLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGVuWWVhciA9IHRoaXMuc2VsZWN0ZWRUZW5ZZWFyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmdldEN1cnJlbnRZZWFyID0gdGhpcy5nZXRDdXJyZW50WWVhci5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5tQ3JlYXRvciA9IHRoaXMubUNyZWF0b3IuYmluZCh0aGlzKVxyXG4gICAgfVxyXG4gICAgbUNyZWF0b3IoKXtcclxuICAgICAgICByZXR1cm4oXHJcbjxGcmFnbWVudD5cclxuICAgIHsvKiA8VHJhbnNpdGlvbkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cImFsZXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dD17MzAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxldmVsID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubGluZUNhbGVuZGVyVmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGaXZlUm93PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZZZWFyPXt0aGlzLnN0YXRlLnllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZk1vbnRoPXt0aGlzLnN0YXRlLm1vbnRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17dGhpcy5nZXRNYWluVmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCIhIWlubGluZVN0eWxlID8gaW5saW5lU3R5bGUgOiB7fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEN1cnJlbnRZZWFyPXt0aGlzLmdldEN1cnJlbnRZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja1RpdGxlPXt0aGlzLmNsaWNrVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dHJhbnNpdGlvbiBuYW1lPVwiYW5pbWVcIiBtb2RlPVwib3V0LWluXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sZXZlbCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb250aENhbGVuZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cIiEhbW9udGhTdHlsZSA/IG1vbnRoU3R5bGUgOiB7fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZlllYXI9e3RoaXMuc3RhdGUueWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q3VycmVudFllYXI9e3RoaXMuZ2V0Q3VycmVudFllYXJNb250aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc1llYXI9e3RoaXMuc2VsZWN0ZWRZZWFyTX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc01vbnRoPXt0aGlzLnNlbGVjdGVkTW9udGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrVGl0bGU9e3RoaXMuY2xpY2tUaXRsZU1vbnRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sZXZlbCA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxZZWFyQ2FsZW5kZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiISF5ZWFyU3R5bGUgPyB5ZWFyU3R5bGUgOiB7fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZlllYXI9e3RoaXMuc3RhdGUudGVuWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9e3RoaXMuc2VsZWN0ZWRZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja1RpdGxlPXt0aGlzLmNsaWNrVGl0bGVZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGV2ZWwgPiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgPFRlblllYXJDYWxlbmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZZZWFyPXt0aGlzLnN0YXRlLnllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0PXt0aGlzLnNlbGVjdGVkVGVuWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L3RyYW5zaXRpb24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9UcmFuc2l0aW9uR3JvdXA+ICovfVxyXG48L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNsaWNrVGl0bGUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hbmltZSA9IHRoaXMuYW5pbVVwO1xyXG4gICAgICAgIC8vIHRoaXMubGV2ZWwgPSAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsZXZlbDogMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjbGlja1RpdGxlWWVhcigpIHtcclxuICAgICAgICAvLyB0aGlzLmFuaW1lID0gdGhpcy5hbmltVXA7XHJcbiAgICAgICAgLy8gdGhpcy5sZXZlbCA9IDM7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxldmVsOiAzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNsaWNrVGl0bGVNb250aCgpIHtcclxuICAgICAgICAvLyB0aGlzLmFuaW1lID0gdGhpcy5hbmltVXA7XHJcbiAgICAgICAgLy8gdGhpcy5sZXZlbCA9IDI7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxldmVsOiAyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldE1haW5WYWwodmFsKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5pbnB1dCh2YWwpXHJcbiAgICAgICAgLy8gdGhpcy4kZW1pdChcImlucHV0XCIsIHZhbCk7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50WWVhck1vbnRoKHZhbCkge1xyXG4gICAgICAgIC8vIHRoaXMudGVuWWVhciA9IHZhbDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5hbmltZSA9IFwidGhpcy5hbmltRG93blwiO1xyXG4gICAgICAgIC8vIHRoaXMubGV2ZWwgPSAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0ZW5ZZWFyOiB2YWwsXHJcbiAgICAgICAgICAgIC8vIGxldmVsOiAxXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNlbGVjdGVkWWVhck0odmFsKSB7XHJcbiAgICAgICAgLy8gdGhpcy55ZWFyID0gdmFsO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB5ZWFyOiB2YWwsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNlbGVjdGVkWWVhcih2YWwpIHtcclxuICAgICAgICB0aGlzLnllYXIgPSB2YWw7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuYW5pbWUgPSB0aGlzLmFuaW1Eb3duO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB5ZWFyOiB2YWwsXHJcbiAgICAgICAgICAgIGxldmVsOiAxXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNlbGVjdGVkTW9udGgodmFsKSB7XHJcbiAgICAgICAgLy8vLy8vLy9jb25zb2xlLmxvZyh2YWwpO1xyXG4gICAgICAgIC8vIHRoaXMubW9udGggPSB2YWw7XHJcbiAgICAgICAgLy8gdGhpcy5hbmltZSA9IHRoaXMuYW5pbURvd247XHJcbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vL2NvbnNvbGUubG9nKHZhbCxcIiBmZmZmZmZzYWd3Z2hcIilcclxuICAgICAgICAvLyB0aGlzLmxldmVsID0gMDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbW9udGg6IHZhbCxcclxuICAgICAgICAgICAgbGV2ZWw6IDBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2VsZWN0ZWRUZW5ZZWFyKHZhbCkge1xyXG4gICAgICAgIC8vIHRoaXMudGVuWWVhciA9IHZhbDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5hbmltZSA9IHRoaXMuYW5pbURvd247XHJcbiAgICAgICAgLy8gdGhpcy5sZXZlbCA9IDI7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRlblllYXI6IHZhbCxcclxuICAgICAgICAgICAgbGV2ZWw6IDJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFllYXIodmFsKSB7XHJcbiAgICAgICAgLy8gdGhpcy55ZWFyID0gdmFsO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB5ZWFyOiB2YWwsXHJcbiAgICAgICAgICAgIC8vIGxldmVsOiAyXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyAgIC8vLy8vLy8vLy8vLy8vLy9jb25zb2xlLmxvZygnZmZmZmZmZmZmZmFnYScpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5sZXZlbCA9PT0gMCwgXCJsZXZlbFwiLHRoaXMuc3RhdGUubGV2ZWwpXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlUmFpdG9TaXppbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW8tcGFyZW50IG15LWZvbnQtY2FsZW5kZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpby1jaGlsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdy0xMDAgaC0xMDAgb3ZlcmZsb3ctaGlkZGVuIHBvc2l0aW9uLXJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e21haW5Cb2R5U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm1DcmVhdG9yKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBteS1mb250LWNhbGVuZGVyXCIgc3R5bGU9e3RoaXMucHJvcHMubWFpbkJvZHlTdHlsZX0gPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt0aGlzLm1DcmVhdG9yKCl9XHJcbiAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuRnVsbENhbGVuZGVyVmVydGljYWwucHJvcFR5cGVzID0ge1xyXG4gICAgZGVmWWVhcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gICAgdXNlUmFpdG9TaXppbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaW5wdXQ6UHJvcFR5cGVzLmZ1bmNcclxufTtcclxuXHJcbkZ1bGxDYWxlbmRlclZlcnRpY2FsLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHVzZVJhaXRvU2l6aW5nOiB0cnVlLFxyXG4gICAgaW5wdXQodmFsKXt9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVsbENhbGVuZGVyVmVydGljYWw7Il19