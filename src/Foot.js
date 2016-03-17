var React = require('react');
var Button = require('react-bootstrap').Button;
var Image = require('react-bootstrap').Image;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var styles ={
        footStyle:{
            height:'60',
            width:'100%',
            backgroundColor:'rgba(219,188,86,0.6)',
            bottom:'0',
            position:'fixed'
        },
        imageStyle:{
            width:'26%',
            paddingTop:'10%',
            paddingRight:'8%',
            cursor:'pointer'
        },
        tip:{
            fontFamily:'微软雅黑',
            fontSize:'16',
            paddingTop:'20',
            color:'#FFFFFF',
            cursor:'pointer'
        }
    };

//页面header
var Foot = React.createClass({
        
        render:function(){
            var content = <p style={{fontSize:'24',fontFamily:'微软雅黑',paddingTop:'12'}}>乐读</p>;

            return(
            <div style={styles.footStyle}>
            <Grid className="text-center">
                <Row>
                <Col xsHidden smHidden md={2} lg={2}>
                    <image src='/assets/i/weixin.png' style={styles.imageStyle}/>
                    <image src='/assets/i/weibo.png' style={styles.imageStyle}/>
                </Col>
                <Col xs={6} sm={6} md={2} lg={2}>
                    <p style={styles.tip}>关于乐读</p>
                </Col>
                <Col xs={6} sm={6} md={2} lg={2}>
                    <p style={styles.tip}>联系我们</p>
                </Col>
                <Col xsHidden smHidden md={6} lg={6}>
                    <p></p>
                </Col>
                </Row>
            </Grid>
            </div>
            );
        }
});

module.exports = Foot;
