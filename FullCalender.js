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

var _InlineCalender2 = _interopRequireDefault(require("./InlineCalender"));

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
      return _react.default.createElement(_react.Fragment, null, this.state.level === 0 && _react.default.createElement(_InlineCalender2.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb25lbnQvRnVsbENhbGVuZGVyLmpzeCJdLCJuYW1lcyI6WyJGdWxsQ2FsZW5kZXJWZXJ0aWNhbCIsInByb3BzIiwic3RhdGUiLCJsZXZlbCIsIm1vbnRoIiwiZGF5IiwidGVuWWVhciIsInllYXIiLCJjbGlja1RpdGxlIiwiYmluZCIsImNsaWNrVGl0bGVNb250aCIsImNsaWNrVGl0bGVZZWFyIiwiZ2V0TWFpblZhbCIsImdldEN1cnJlbnRZZWFyTW9udGgiLCJzZWxlY3RlZFllYXJNIiwic2VsZWN0ZWRZZWFyIiwic2VsZWN0ZWRNb250aCIsInNlbGVjdGVkVGVuWWVhciIsImdldEN1cnJlbnRZZWFyIiwibUNyZWF0b3IiLCJzZXRTdGF0ZSIsInZhbCIsImlucHV0IiwidXNlUmFpdG9TaXppbmciLCJtYWluQm9keVN0eWxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJkZWZZZWFyIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFJQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0lBRU1BLG9COzs7OztBQUNGLGdDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEZBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsS0FBSyxFQUFFLENBREU7QUFFVEMsTUFBQUEsS0FBSyxFQUFFLEVBRkU7QUFHVEMsTUFBQUEsR0FBRyxFQUFFLEVBSEk7QUFJVEMsTUFBQUEsT0FBTyxFQUFFLEVBSkE7QUFLVEMsTUFBQUEsSUFBSSxFQUFFO0FBTEcsS0FBYjtBQU9BLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsK0JBQWxCO0FBQ0EsVUFBS0MsZUFBTCxH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O0FBQWtELFVBQUEsS0FBSyxFQUFFLEtBQUtsQixLQUFMLENBQVd1QjtBQUFwRSxXQUVQLEtBQUtMLFFBQUwsRUFGTyxDQUFSO0FBSUg7QUFDSjs7OztFQS9LOEJNLGVBQU1DLFM7O0FBcUx6QzFCLG9CQUFvQixDQUFDMkIsU0FBckIsR0FBaUM7QUFDN0JDLEVBQUFBLE9BQU8sRUFBRUMsbUJBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0QsbUJBQVVFLE1BQVgsRUFBbUJGLG1CQUFVRyxNQUE3QixDQUFwQixDQURvQjtBQUU3QlQsRUFBQUEsY0FBYyxFQUFFTSxtQkFBVUksSUFGRztBQUc3QlgsRUFBQUEsS0FBSyxFQUFDTyxtQkFBVUs7QUFIYSxDQUFqQztBQU1BbEMsb0JBQW9CLENBQUNtQyxZQUFyQixHQUFvQztBQUNoQ1osRUFBQUEsY0FBYyxFQUFFLElBRGdCO0FBRWhDRCxFQUFBQSxLQUZnQyxpQkFFMUJELEdBRjBCLEVBRXRCLENBQUU7QUFGb0IsQ0FBcEM7ZUFNZXJCLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0ICcuL0lubGluZUNhbGVuZGVyLmNzcyc7XHJcblxyXG5pbXBvcnQgJy4vRnVsbENhbGVuZGVyLmNzcyc7XHJcbmltcG9ydCBUZW5ZZWFyQ2FsZW5kZXIgZnJvbSBcIi4vVGVuWWVhckNhbGVuZGVyXCI7XHJcbmltcG9ydCBZZWFyQ2FsZW5kZXIgZnJvbSBcIi4vWWVhckNhbGVuZGVyXCI7XHJcbmltcG9ydCBNb250aENhbGVuZGVyIGZyb20gXCIuL01vbnRoQ2FsZW5kZXJcIjtcclxuaW1wb3J0IElubGluZUNhbGVuZGVyIGZyb20gXCIuL0lubGluZUNhbGVuZGVyXCI7XHJcbi8vIGltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xyXG4vLyBpbXBvcnQgVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwJyAvLyBFUzZcclxuXHJcbmNsYXNzIEZ1bGxDYWxlbmRlclZlcnRpY2FsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxldmVsOiAwLFxyXG4gICAgICAgICAgICBtb250aDogXCJcIixcclxuICAgICAgICAgICAgZGF5OiBcIlwiLFxyXG4gICAgICAgICAgICB0ZW5ZZWFyOiBcIlwiLFxyXG4gICAgICAgICAgICB5ZWFyOiBcIlwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jbGlja1RpdGxlID0gdGhpcy5jbGlja1RpdGxlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmNsaWNrVGl0bGVNb250aCA9IHRoaXMuY2xpY2tUaXRsZU1vbnRoLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmNsaWNrVGl0bGVZZWFyID0gdGhpcy5jbGlja1RpdGxlWWVhci5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5nZXRNYWluVmFsID0gdGhpcy5nZXRNYWluVmFsLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmdldEN1cnJlbnRZZWFyTW9udGggPSB0aGlzLmdldEN1cnJlbnRZZWFyTW9udGguYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRZZWFyTSA9IHRoaXMuc2VsZWN0ZWRZZWFyTS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFllYXIgPSB0aGlzLnNlbGVjdGVkWWVhci5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1vbnRoID0gdGhpcy5zZWxlY3RlZE1vbnRoLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGVuWWVhciA9IHRoaXMuc2VsZWN0ZWRUZW5ZZWFyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmdldEN1cnJlbnRZZWFyID0gdGhpcy5nZXRDdXJyZW50WWVhci5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5tQ3JlYXRvciA9IHRoaXMubUNyZWF0b3IuYmluZCh0aGlzKVxyXG4gICAgfVxyXG4gICAgbUNyZWF0b3IoKXtcclxuICAgICAgICByZXR1cm4oXHJcbjxGcmFnbWVudD5cclxuICAgIHsvKiA8VHJhbnNpdGlvbkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cImFsZXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dD17MzAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxldmVsID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubGluZUNhbGVuZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRml2ZVJvdz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmWWVhcj17dGhpcy5zdGF0ZS55ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZNb250aD17dGhpcy5zdGF0ZS5tb250aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9e3RoaXMuZ2V0TWFpblZhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiISFpbmxpbmVTdHlsZSA/IGlubGluZVN0eWxlIDoge31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRDdXJyZW50WWVhcj17dGhpcy5nZXRDdXJyZW50WWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tUaXRsZT17dGhpcy5jbGlja1RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRyYW5zaXRpb24gbmFtZT1cImFuaW1lXCIgbW9kZT1cIm91dC1pblwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGV2ZWwgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9udGhDYWxlbmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCIhIW1vbnRoU3R5bGUgPyBtb250aFN0eWxlIDoge31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZZZWFyPXt0aGlzLnN0YXRlLnllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEN1cnJlbnRZZWFyPXt0aGlzLmdldEN1cnJlbnRZZWFyTW9udGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNZZWFyPXt0aGlzLnNlbGVjdGVkWWVhck19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNNb250aD17dGhpcy5zZWxlY3RlZE1vbnRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja1RpdGxlPXt0aGlzLmNsaWNrVGl0bGVNb250aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGV2ZWwgPT09IDIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WWVhckNhbGVuZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cIiEheWVhclN0eWxlID8geWVhclN0eWxlIDoge31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZZZWFyPXt0aGlzLnN0YXRlLnRlblllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0PXt0aGlzLnNlbGVjdGVkWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tUaXRsZT17dGhpcy5jbGlja1RpdGxlWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxldmVsID4gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIDxUZW5ZZWFyQ2FsZW5kZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmWWVhcj17dGhpcy5zdGF0ZS55ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17dGhpcy5zZWxlY3RlZFRlblllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC90cmFuc2l0aW9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvVHJhbnNpdGlvbkdyb3VwPiAqL31cclxuPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBjbGlja1RpdGxlKCkge1xyXG4gICAgICAgIC8vIHRoaXMuYW5pbWUgPSB0aGlzLmFuaW1VcDtcclxuICAgICAgICAvLyB0aGlzLmxldmVsID0gMTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbGV2ZWw6IDFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY2xpY2tUaXRsZVllYXIoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hbmltZSA9IHRoaXMuYW5pbVVwO1xyXG4gICAgICAgIC8vIHRoaXMubGV2ZWwgPSAzO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsZXZlbDogM1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjbGlja1RpdGxlTW9udGgoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hbmltZSA9IHRoaXMuYW5pbVVwO1xyXG4gICAgICAgIC8vIHRoaXMubGV2ZWwgPSAyO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsZXZlbDogMlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXRNYWluVmFsKHZhbCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuaW5wdXQodmFsKVxyXG4gICAgICAgIC8vIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCB2YWwpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFllYXJNb250aCh2YWwpIHtcclxuICAgICAgICAvLyB0aGlzLnRlblllYXIgPSB2YWw7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuYW5pbWUgPSBcInRoaXMuYW5pbURvd25cIjtcclxuICAgICAgICAvLyB0aGlzLmxldmVsID0gMTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGVuWWVhcjogdmFsLFxyXG4gICAgICAgICAgICAvLyBsZXZlbDogMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZWxlY3RlZFllYXJNKHZhbCkge1xyXG4gICAgICAgIC8vIHRoaXMueWVhciA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgeWVhcjogdmFsLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZWxlY3RlZFllYXIodmFsKSB7XHJcbiAgICAgICAgdGhpcy55ZWFyID0gdmFsO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmFuaW1lID0gdGhpcy5hbmltRG93bjtcclxuICAgICAgICB0aGlzLmxldmVsID0gMTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgeWVhcjogdmFsLFxyXG4gICAgICAgICAgICBsZXZlbDogMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZWxlY3RlZE1vbnRoKHZhbCkge1xyXG4gICAgICAgIC8vLy8vLy8vY29uc29sZS5sb2codmFsKTtcclxuICAgICAgICAvLyB0aGlzLm1vbnRoID0gdmFsO1xyXG4gICAgICAgIC8vIHRoaXMuYW5pbWUgPSB0aGlzLmFuaW1Eb3duO1xyXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy9jb25zb2xlLmxvZyh2YWwsXCIgZmZmZmZmc2Fnd2doXCIpXHJcbiAgICAgICAgLy8gdGhpcy5sZXZlbCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1vbnRoOiB2YWwsXHJcbiAgICAgICAgICAgIGxldmVsOiAwXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNlbGVjdGVkVGVuWWVhcih2YWwpIHtcclxuICAgICAgICAvLyB0aGlzLnRlblllYXIgPSB2YWw7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuYW5pbWUgPSB0aGlzLmFuaW1Eb3duO1xyXG4gICAgICAgIC8vIHRoaXMubGV2ZWwgPSAyO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0ZW5ZZWFyOiB2YWwsXHJcbiAgICAgICAgICAgIGxldmVsOiAyXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRZZWFyKHZhbCkge1xyXG4gICAgICAgIC8vIHRoaXMueWVhciA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgeWVhcjogdmFsLFxyXG4gICAgICAgICAgICAvLyBsZXZlbDogMlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAvLy8vLy8vLy8vLy8vLy8vY29uc29sZS5sb2coJ2ZmZmZmZmZmZmZhZ2EnKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubGV2ZWwgPT09IDAsIFwibGV2ZWxcIix0aGlzLnN0YXRlLmxldmVsKVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnVzZVJhaXRvU2l6aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGlvLXBhcmVudCBteS1mb250LWNhbGVuZGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW8tY2hpbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHctMTAwIGgtMTAwIG92ZXJmbG93LWhpZGRlbiBwb3NpdGlvbi1yZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXttYWluQm9keVN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5tQ3JlYXRvcigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXktZm9udC1jYWxlbmRlclwiIHN0eWxlPXt0aGlzLnByb3BzLm1haW5Cb2R5U3R5bGV9ID5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dGhpcy5tQ3JlYXRvcigpfVxyXG4gICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkZ1bGxDYWxlbmRlclZlcnRpY2FsLnByb3BUeXBlcyA9IHtcclxuICAgIGRlZlllYXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcclxuICAgIHVzZVJhaXRvU2l6aW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGlucHV0OlByb3BUeXBlcy5mdW5jXHJcbn07XHJcblxyXG5GdWxsQ2FsZW5kZXJWZXJ0aWNhbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB1c2VSYWl0b1NpemluZzogdHJ1ZSxcclxuICAgIGlucHV0KHZhbCl7fVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bGxDYWxlbmRlclZlcnRpY2FsOyJdfQ==