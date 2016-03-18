var React = require('react');
var Image = require('react-bootstrap').Image;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Input = require('react-bootstrap').Input;


var $ = require('jquery');

var styles ={
        headStyle:{
            width:'100%',
            height:'60',
            backgroundColor:'rgba(219,188,86,0.6)',
            top:'0',
            position:'fixed'
        },
        imageStyle:{
            height:'46',
            width:'46',
            marginTop:'7',
            marginLeft:'2%', 
            cursor:'pointer',
            backgroundColor:'rgba(255,255,255,1)',
        },
        dropdown:{
            height:'46',
            marginTop:'7',
            cursor:'pointer',
            backgroundColor:'rgba(255,255,255,0)',
            border:'none',
            color:'#FFFFFF'
        }
    };

//页面header
var MainHead = React.createClass({
        
        getInitialState:function(){   
          return({
            userInfo:{},
          });
        },
        
        componentWillMount: function() {
          $.ajax({
            url: '/read/user/getUserInSession',
            headers: {
              'Content-Type': 'application/json',
            },
            type:'post',
            dataType: 'json',
            cache: false,
            timeout: 5000,
            success: (data)=>{
              this.setState({
                userInfo : data.userInfo
              });
            },
            error: function(jqXHR, textStatus, errorThrown){
              alert("您的登录状态已经失效，请重新登录");  
            }
          });
        },
        
        //回调
        toLogin:function(){
          this.props.callback('login');
        },
        
        //右侧下拉菜单
        handleSelect(event, eventKey) {
          if(eventKey === '1'){
            document.getElementById('form').action="/read/book/search";
            document.getElementById('form').submit();
          }
        },
        
        render:function(){

            return(
            <div style={styles.headStyle}>
            <Grid style={{width:'100%'}} className="text-center">
                <Row>
                <Col xsHidden smHidden md={4} lg={4}>
                <image src="/assets/i/logo.png" style={{paddingTop:'10'}}/>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                </Col>
                <Col xs={8} sm={8} md={4} lg={4}>
                {/*用户图标*/}
                <Image src="/assets/i/head_whale.jpg" style={styles.imageStyle} circle/> 
                {/*下拉菜单*/}
                <DropdownButton bsStyle="link" id="dropdown-button" bsSize="large" title={this.state.userInfo.user_name} style={styles.dropdown} onSelect={this.handleSelect}> 
                  <MenuItem eventKey="1"><Glyphicon glyph="tags" />&nbsp;&nbsp;&nbsp;&nbsp;<b>选择书籍</b></MenuItem>
                  <MenuItem eventKey="2"><Glyphicon glyph="list-alt" />&nbsp;&nbsp;&nbsp;&nbsp;<b>阅读计划</b></MenuItem>
                  <MenuItem eventKey="9"><Glyphicon glyph="log-out" />&nbsp;&nbsp;&nbsp;&nbsp;<b>退出登录</b></MenuItem>
                </DropdownButton>
                </Col>
                </Row>
            </Grid>
            </div>
            
            );
        }
});

module.exports = MainHead;
