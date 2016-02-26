var React = require('react');
var Image = require('react-bootstrap').Image;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var styles ={
        headStyle:{
            width:'100%',
            height:'60',
            backgroundColor:'rgba(219,188,86,0.4)'
        },
        imageStyle:{
            height:'46',
            paddingTop:'16',
            paddingLeft:'2%',
            cursor:'pointer'
        }
    };

//页面header
var Head = React.createClass({
        
        getInitialState:function(){   
          return({
            isLogined:false,
          });
        },
        
        logined:function(){
            this.setState({
                isLogined:this.state.isLogined? false:true
            });
        },
        //回调
        toLogin:function(){
          this.props.callback('login');
        },
        
        
        render:function(){
            var content = <p style={{fontSize:'24',fontFamily:'微软雅黑',paddingTop:'12',color:'#FFFFFF'}}>乐读</p>;

            return(
            <div style={styles.headStyle}>
            <Grid style={{width:'100%'}}>
                <Row>
                <Col xsHidden smHidden md={4} lg={4}>
                <image src="/assets/i/logo.png" style={{paddingTop:'10'}}/>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                    {content}
                </Col>
                <Col xs={8} sm={8} md={4} lg={4}>
                <image src="/assets/i/regist.png" style={styles.imageStyle}/>
                <image src="/assets/i/login.png" style={styles.imageStyle} onClick={()=>{this.toLogin()}}/>
                </Col>
                </Row>
            </Grid>
            </div>
            
            );
        }
});

module.exports = Head;
