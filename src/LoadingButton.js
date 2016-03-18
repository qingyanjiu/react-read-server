var React = require('react');
var Button = require('react-bootstrap').Button;

const LoadingButton = React.createClass({
  getInitialState() {
    return {
      isLoading: false
    };
  },

  render() {
    let isLoading = this.state.isLoading;
    return (
      <Button style={{width:'160',height:'50',fontSize:'20',borderRadius:'25'}}
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