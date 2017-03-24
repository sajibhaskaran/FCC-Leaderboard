"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var recentURL = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
var alltimeURL = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";

var Tablerow = function (_React$Component) {
  _inherits(Tablerow, _React$Component);

  function Tablerow(props) {
    _classCallCheck(this, Tablerow);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      campers: ['Loading...']
    };
    _this.getAPI(recentURL);
    return _this;
  }

  Tablerow.prototype.componentDidMount = function componentDidMount() {
    //this.getAPI(recentURL);
  };

  Tablerow.prototype.getAPI = function getAPI(url) {
    var _this2 = this;

    $.getJSON(url, function (campers) {
      _this2.setState({
        campers: campers
      });
    });
  };

  Tablerow.prototype.render = function render() {
    var _this3 = this;

    var campers = this.state.campers;
    return React.createElement(
      "div",
      null,
      React.createElement(
        "table",
        { className: "table table-bordered table-striped table-responsive" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "Rank"
            ),
            React.createElement(
              "th",
              null,
              "Camper"
            ),
            React.createElement(
              "th",
              null,
              "Username"
            ),
            React.createElement(
              "th",
              null,
              React.createElement(
                "a",
                { onClick: function onClick() {
                    _this3.getAPI(recentURL);
                  } },
                "Recent points"
              )
            ),
            React.createElement(
              "th",
              null,
              React.createElement(
                "a",
                { onClick: function onClick() {
                    _this3.getAPI(alltimeURL);
                  } },
                "All time points"
              )
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          campers.map(function (camper, index) {
            return React.createElement(
              "tr",
              { key: index },
              React.createElement(
                "td",
                null,
                index + 1
              ),
              React.createElement(
                "td",
                null,
                React.createElement("img", { className: "img-thumbnail", src: camper.img })
              ),
              React.createElement(
                "td",
                null,
                React.createElement(
                  "a",
                  { href: "https://www.freecodecamp.com/" + camper.username, target: "_blank" },
                  camper.username
                )
              ),
              React.createElement(
                "td",
                null,
                camper.recent
              ),
              React.createElement(
                "td",
                null,
                camper.alltime
              )
            );
          })
        )
      )
    );
  };

  return Tablerow;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "text-center container" },
      React.createElement(
        "h2",
        null,
        "FCC Leaderboard"
      ),
      React.createElement(Tablerow, null)
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), app);