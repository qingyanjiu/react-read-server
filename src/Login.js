var React = require('react');
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;

var input = {
  paddingLeft:'10%',
  paddingRight:'10%',
  marginTop:'30'
};

var Login = React.createClass({
  
  getInitialState:function(){   
    return({
      isMouseOver:false,
    });
  },
        
        
  render:function(){
          return(

                  <div style={{backgroundColor:'#FFFFFF',borderRadius:'10',width:'400',height:'300',
                    left:window.innerWidth/2-200,top:window.innerHeight/2-150,
                    position:'fixed'}}>
                    <div><h3>用户登录</h3></div>
                    <div style={input}><Input type="text" bsSize="large" placeholder="请输入用户名"/></div>
                    <div style={input}><Input type="password" bsSize="large" placeholder="请输入密码"/></div>
                    <div style={input}><Button bsStyle="success" bsSize="large" style={{width:'100%',borderRadius:'24'}}>登录</Button></div>
                  </div>

          );
      }
});

module.exports = Login;