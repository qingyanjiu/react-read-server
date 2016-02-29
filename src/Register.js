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
      differentPass:false,
    });
  },
  
  checkPass:function(){
    var pass1 = document.getElementById('password1').value;
    var pass2 = document.getElementById('password2').value;
    if(pass1 != pass2 && pass1 != '')
      this.setState({
        differentPass:true
      });
    else if(pass1 === pass2 && pass1 != '')
      this.setState({
        differentPass:false
      });
  },   
        
  render:function(){
    var content;
      if(this.state.differentPass)
      content = <div style={{backgroundColor:'rgba(255,255,255,0.6)',borderRadius:'10',width:'400',height:'400',
                    left:window.innerWidth/2-200,top:window.innerHeight/2-200,
                    position:'fixed'}}>
                    <div><h3>用户注册</h3></div>
                    <div style={input}><Input id="username" type="text" bsSize="large" placeholder="请输入用户名" hasFeedback/></div>
                    <div style={input}><Input id="password1" type="password" bsSize="large" placeholder="请输入密码" bsStyle="error" hasFeedback/></div>
                    <div style={input}><Input id="password2" type="password" bsSize="large" placeholder="请再次输入密码" bsStyle="error" hasFeedback onKeyUp={()=>{this.checkPass()}}/></div>
                    <div style={input}><Button bsStyle="danger" bsSize="large" style={{width:'100%',borderRadius:'24'}} disabled>两次密码不一致</Button></div>
                </div>;
                  
      else   
      content = <div style={{backgroundColor:'rgba(255,255,255,0.6)',borderRadius:'10',width:'400',height:'400',
                    left:window.innerWidth/2-200,top:window.innerHeight/2-200,
                    position:'fixed'}}>
                    <div><h3>用户注册</h3></div>
                    <div style={input}><Input id="username" type="text" bsSize="large" placeholder="请输入用户名" /></div>
                    <div style={input}><Input id="password1" type="password" bsSize="large" placeholder="请输入密码" /></div>
                    <div style={input}><Input id="password2" type="password" bsSize="large" placeholder="请再次输入密码"  onKeyUp={()=>{this.checkPass()}}/></div>
                    <div style={input}><Button bsStyle="danger" bsSize="large" style={{width:'100%',borderRadius:'24'}} >注册</Button></div>
                  </div>;
          return(
            <div>
            {content}
            </div>
          );
      }
});

module.exports = Register;