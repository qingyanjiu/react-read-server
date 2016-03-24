var React = require('react');
var Button = require('react-bootstrap').Button;

//点击后会显示载入中文字的按钮
//props:
//callUrl:点击按钮后请求的URL地址
//callData:请求时传递过来的提交的data数据
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

  //提交请求
  handleClick() {
    this.setState({isLoading: true});
    $.ajax({
              data: JSON.stringify({
            		this.props.callData
            	}),
              url: this.props.callUrl,
              headers: {
                'Content-Type': 'application/json',
              },
              type:'post',
              dataType: 'json',
              cache: false,
              timeout: 5000,
              success: (data)=>{
                this.setState({
                  this.props.callback(data);
                });
              },
              error: function(jqXHR, textStatus, errorThrown){
                alert("操作失败，请重试");  
              }
    });
    this.setState({isLoading: false});
  }
});

module.exports = LoadingButton;