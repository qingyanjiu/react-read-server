var React = require('react');
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;
var $ = require('jquery');
//引入socket客户端
var io = require('socket.io-client');

var input = {
  paddingLeft:'10%',
  paddingRight:'10%',
  marginTop:'30'
};

var socket;

var Login = React.createClass({
  
  getInitialState:function(){   
    return({
      nameOrPassError:false,
      inputEmpty:false,
    });
  },
  
  componentDidMount :function() {
    //登录socket服务
    socket = io.connect();
  },
  
  _inputHandler:function(){
    this.setState({
      nameOrPassError:false,
      inputEmpty:false,
    });
  },
  
  login:function(){
    document.getElementById('button').disabled = true;
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username === "" || password === ""){
      this.setState({
        inputEmpty:true
      });
    }
    else{
      $.ajax({
            data: JSON.stringify({
          		username: document.getElementById('username').value,
          		password: document.getElementById('password').value
          	}),
            url: '/read/user/login',
            headers: {
              'Content-Type': 'application/json',
            },
            type:'post',
            dataType: 'json',
            cache: false,
            timeout: 5000,
            success: (data)=>{
              //
              if(data.result === "success"){
                  //登录成功发起socket广播，某用户已登录
                  socket.emit('login', {
                    name: document.getElementById('username').value
                  });
                  
                  //跳转页面
                  document.getElementById('form').action = "/read/book/main";
                  document.getElementById('form').submit();
              }
              else if(data.result === "fail"){
                this.setState({
                  nameOrPassError:true
                })
              }
            },
            error: function(jqXHR, textStatus, errorThrown){
              alert("系统出错，请稍后再试");  
            }
        });
    }
  },
        
        
  render:function(){
    var content;
    if(this.state.inputEmpty)
      content = <div style={{backgroundColor:'rgba(255,255,255,0.6)',borderRadius:'10',width:'400',height:'300',
                    left:window.innerWidth/2-200,top:window.innerHeight/2-150,
                    position:'fixed'}}>
                    <div><h3>用户登录</h3></div>
                    <div style={input}><Input id="username" type="text" bsSize="large" placeholder="请输入用户名"  onChange={()=>{this._inputHandler()}}/></div>
                    <div style={input}><Input id="password" type="password" bsSize="large" placeholder="请输入密码"  onChange={()=>{this._inputHandler()}}/></div>
                    <div style={input}><Button bsStyle="success" bsSize="large" style={{width:'100%',borderRadius:'24'}} disabled>请填写用户名和密码</Button></div>
                  </div>;
    else{
      if(this.state.nameOrPassError)
      content = <div style={{backgroundColor:'rgba(255,255,255,0.6)',borderRadius:'10',width:'400',height:'300',
                    left:window.innerWidth/2-200,top:window.innerHeight/2-150,
                    position:'fixed'}}>
                    <div><h3>用户登录</h3></div>
                    <div style={input}><Input id="username" type="text" bsSize="large" placeholder="请输入用户名"  onChange={()=>{this._inputHandler()}}/></div>
                    <div style={input}><Input id="password" type="password" bsSize="large" placeholder="请输入密码"  onChange={()=>{this._inputHandler()}}/></div>
                    <div style={input}><Button bsStyle="success" bsSize="large" style={{width:'100%',borderRadius:'24'}} disabled>用户名或密码错误</Button></div>
                  </div>;
      else{
        content = <div style={{backgroundColor:'rgba(255,255,255,0.6)',borderRadius:'10',width:'400',height:'300',
                    left:window.innerWidth/2-200,top:window.innerHeight/2-150,
                    position:'fixed'}}>
                    <div><h3>用户登录</h3></div>
                    <div style={input}><Input id="username" type="text" bsSize="large" placeholder="请输入用户名"  onChange={()=>{this._inputHandler()}}/></div>
                    <div style={input}><Input id="password" type="password" bsSize="large" placeholder="请输入密码"  onChange={()=>{this._inputHandler()}}/></div>
                    <div style={input}><Button bsStyle="success" id="button" bsSize="large" style={{width:'100%',borderRadius:'24'}} onClick={()=>{this.login()}}>登录</Button></div>
                  </div>;
      }
    }
          return(
              <div>
                {content}
              </div>
          );
      }
});

module.exports = Login;