var React = require('react');
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;

var input = {
  paddingLeft:'10%',
  paddingRight:'10%',
  marginTop:'30'
};

var Register = React.createClass({
  
  getInitialState:function(){   
    return({
      isMouseOver:false,
    });
  },
        
        
  render:function(){
          return(

                  <div style={{backgroundColor:'#FFFFFF',borderRadius:'10',width:'400',height:'400',
                    left:window.innerWidth/2-200,top:window.innerHeight/2-200,
                    position:'fixed'}}>
                    <div><h3>用户注册</h3></div>
                    <div style={input}><Input type="text" bsSize="large" placeholder="请输入用户名"/></div>
                    <div style={input}><Input type="password" bsSize="large" placeholder="请输入密码"/></div>
                    <div style={input}><Input type="password" bsSize="large" placeholder="请再次输入密码"/></div>
                    <div style={input}><Button bsStyle="danger" bsSize="large" style={{width:'100%',borderRadius:'24'}}>注册</Button></div>
                  </div>

          );
      }
});

module.exports = Register;