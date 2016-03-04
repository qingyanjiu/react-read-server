var React = require('react');
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;
var $ = require('jquery');

var input = {
  paddingLeft:'10%',
  paddingRight:'10%',
  marginTop:'30'
};

var Register = React.createClass({
  
  getInitialState:function(){   
    return({
      differentPass:false,
      inputEmpty:false,
      nameExist:false,
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
  
  _inputHandler:function(){
    this.setState({
      inputEmpty:false,
      nameExist:false,
    });
    this.checkPass();
  },
  
  // regist:function(){
  //   fetch('/user/regist', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  // 	  body: JSON.stringify({
  //   		username: document.getElementById('username').value,
  //   		password: document.getElementById('password1').value
  //   	})
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {this._registHandler(json)})
  //     .catch((error) => {
  //       alert("注册失败，请重试");
  //     });
  //   },
    
  //   _registHandler:function(json){
  //       if(json.result === "success")
  //         alert("注册成功");
  //       else if(json.result === "exist")
  //         alert("用户名已被使用");

  //   },
  regist:function(){
    document.getElementById('button').disabled = true;
    
    //判断是否有为空的空格
    var username = document.getElementById('username').value;
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    if(username === "" || password1 === "" || password2 === ""){
      this.setState({
        inputEmpty:true
      });
    }
    else{
      $.ajax({
            data: JSON.stringify({
          		username: document.getElementById('username').value,
          		password: document.getElementById('password1').value
          	}),
            url: '/read/user/regist',
            headers: {
              'Content-Type': 'application/json',
            },
            type:'post',
            dataType: 'json',
            cache: false,
            timeout: 5000,
            success: (data)=>{
              if(data.result === "success")
                alert("注册成功");
              else if(data.result === "exist"){
                this.setState({
                  nameExist:true
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
      content = <div style={{backgroundColor:'rgba(255,255,255,0.6)',borderRadius:'10',width:'400',height:'400',
                    left:window.innerWidth/2-200,top:window.innerHeight/2-200,
                    position:'fixed'}}>
                    <div><h3>用户注册</h3></div>
                    <div style={input}><Input id="username" type="text" bsSize="large" placeholder="请输入用户名" hasFeedback onChange={()=>{this._inputHandler()}}/></div>
                    <div style={input}><Input id="password1" type="password" bsSize="large" placeholder="请输入密码" hasFeedback onChange={()=>{this._inputHandler()}}/></div>
                    <div style={input}><Input id="password2" type="password" bsSize="large" placeholder="请再次输入密码" hasFeedback onChange={()=>{this._inputHandler()}}/></div>
                    <div style={input}><Button id="button" bsStyle="danger" bsSize="large" style={{width:'100%',borderRadius:'24'}} disabled>输入内容不能为空</Button></div>
                </div>;
      else{
        if(this.state.nameExist)
        content = <div style={{backgroundColor:'rgba(255,255,255,0.6)',borderRadius:'10',width:'400',height:'400',
                      left:window.innerWidth/2-200,top:window.innerHeight/2-200,
                      position:'fixed'}}>
                      <div><h3>用户注册</h3></div>
                      <div style={input}><Input id="username" type="text" bsSize="large" placeholder="请输入用户名" bsStyle="error" hasFeedback onChange={()=>{this._inputHandler()}}/></div>
                      <div style={input}><Input id="password1" type="password" bsSize="large" placeholder="请输入密码" hasFeedback onChange={()=>{this._inputHandler()}}/></div>
                      <div style={input}><Input id="password2" type="password" bsSize="large" placeholder="请再次输入密码" hasFeedback onChange={()=>{this._inputHandler()}}/></div>
                      <div style={input}><Button id="button" bsStyle="danger" bsSize="large" style={{width:'100%',borderRadius:'24'}} disabled>用户名已存在</Button></div>
                  </div>;
        else{
          if(this.state.differentPass)
          content = <div style={{backgroundColor:'rgba(255,255,255,0.6)',borderRadius:'10',width:'400',height:'400',
                        left:window.innerWidth/2-200,top:window.innerHeight/2-200,
                        position:'fixed'}}>
                        <div><h3>用户注册</h3></div>
                        <div style={input}><Input id="username" type="text" bsSize="large" placeholder="请输入用户名" hasFeedback onChange={()=>{this._inputHandler()}}/></div>
                        <div style={input}><Input id="password1" type="password" bsSize="large" placeholder="请输入密码" bsStyle="error" hasFeedback onChange={()=>{this._inputHandler()}}/></div>
                        <div style={input}><Input id="password2" type="password" bsSize="large" placeholder="请再次输入密码" bsStyle="error" hasFeedback onChange={()=>{this._inputHandler()}}/></div>
                        <div style={input}><Button id="button" bsStyle="danger" bsSize="large" style={{width:'100%',borderRadius:'24'}} disabled>两次密码不一致</Button></div>
                    </div>;
                      
          else   
          content = <div style={{backgroundColor:'rgba(255,255,255,0.6)',borderRadius:'10',width:'400',height:'400',
                        left:window.innerWidth/2-200,top:window.innerHeight/2-200,
                        position:'fixed'}}>
                        <div><h3>用户注册</h3></div>
                        <div style={input}><Input id="username" type="text" bsSize="large" placeholder="请输入用户名" onChange={()=>{this._inputHandler()}}/></div>
                        <div style={input}><Input id="password1" type="password" bsSize="large" placeholder="请输入密码" onChange={()=>{this._inputHandler()}}/></div>
                        <div style={input}><Input id="password2" type="password" bsSize="large" placeholder="请再次输入密码"  onChange={()=>{this._inputHandler()}}/></div>
                        <div style={input}><Button id="button" bsStyle="danger" bsSize="large" style={{width:'100%',borderRadius:'24'}} onClick={()=>{this.regist()}}>注册</Button></div>
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

module.exports = Register;