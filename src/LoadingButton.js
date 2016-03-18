var React = require('react');
var Button = require('react-bootstrap').Button;

//点击后会显示载入中文字的按钮
//props:loadingText:载入中的文字
//text:按钮的文字
const LoadingButton = React.createClass({
  getInitialState() {
    return {
      isLoading: false
    };
  },

  render() {
    let isLoading = this.state.isLoading;
    return (
      <Button style={{height:'50',fontSize:'20',borderRadius:'25'}}
        bsStyle= {this.props.bsStyle}
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}>
        {isLoading ? this.props.loadingText : this.props.text}
      </Button>
    );
  },

  handleClick() {
    this.setState({isLoading: true});

    // This probably where you would have an `ajax` call
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({isLoading: false});
    }, 2000);
  }
});

module.exports = LoadingButton;