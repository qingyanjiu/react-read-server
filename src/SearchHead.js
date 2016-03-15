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
var SearchHead = React.createClass({
        
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
        
        startSearch:function(){
          $.ajax({
            data: JSON.stringify({
          		text:document.getElementById('search').value,
          		page: 1
          	}),
            url: '/read/book/search',
            headers: {
              'Content-Type': 'application/json',
            },
            type:'post',
            dataType: 'json',
            cache: false,
            timeout: 5000,
            success: (data)=>{
              this.props.callback(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
              alert("系统出错，请稍后再试");  
            }
          });
        },
        
        render:function(){
          //搜索按钮
            var innerGlyphicon = <Glyphicon glyph="search" style={{cursor:'pointer'}} onClick={()=>{this.startSearch()}}/>;

            return(
            <div style={styles.headStyle}>
            <Grid style={{width:'100%'}} className="text-center">
                <Row>
                <Col xsHidden smHidden md={4} lg={4}>
                <image src="/assets/i/logo.png" style={{paddingTop:'10'}}/>
                </Col>
                <Col xs={6} sm={6} md={4} lg={4}>
                  <div style={{paddingLeft:'30%',paddingRight:'30%',paddingTop:'12'}}>
                  <Input type="text" id="search" placeholder="搜索..." addonAfter={innerGlyphicon}/>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={4} lg={4}>
                <Image src="/assets/i/head_whale.jpg" style={styles.imageStyle} circle/>
                <DropdownButton bsStyle="link" id="dropdown-button" bsSize="large" title={this.state.userInfo.user_name} style={styles.dropdown}>
                  <MenuItem eventKey="1"><Glyphicon glyph="log-out" />&nbsp;&nbsp;&nbsp;&nbsp;<b>退出登录</b></MenuItem>
                </DropdownButton>
                </Col>
                </Row>
            </Grid>
            </div>
            
            );
        }
});

module.exports = SearchHead;
