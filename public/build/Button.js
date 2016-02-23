

var But = React.createClass({
  displayName: "But",

  render: function () {
    var button = React.DOM.button({
      className: "btn btn-lg btn-success",
      children: "Register"
    });
    return button;
  }
});