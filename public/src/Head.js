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
            width:'100%',
            paddingTop:'14%'
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
        
        render:function(){
            var content = <p style={{fontSize:'24',fontFamily:'微软雅黑',paddingTop:'12',color:'#FFFFFF'}}>乐读</p>;

            return(
            
            <Grid style={styles.headStyle}>
                <Row>
                <Col xsHidden smHidden md={2} lg={2}>
                <image src="/assets/i/logo.png" style={{paddingTop:'10'}}/>
                </Col>
                <Col xs={4} sm={4} md={8} lg={8}>
                    {content}
                </Col>
                <Col xs={4} sm={4} md={1} lg={1}>
                <image src="/assets/i/regist.png" style={styles.imageStyle}/>
                </Col>
                <Col xs={4} sm={4} md={1} lg={1}>
                <image src="/assets/i/login.png" style={styles.imageStyle}/>
                </Col>
                </Row>
            </Grid>
            
            );
        }
});

module.exports = Head;
