var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('react-bootstrap').Button;
var Image = require('react-bootstrap').Image;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var Head = require('./Head');
var Foot = require('./Foot');
    
var tip = {
        fontFamily:'微软雅黑',
        fontSize:'18',
        color:'#A98580',
        marginTop:'4%',
        textAlign:'center',
    };
    
    //菜单按钮
    var MyImage = React.createClass({
        
        getInitialState:function(){   
          return({
            isMouseOver:false,
          });
        },
        
        changeBack:function(){
            this.setState({
                isMouseOver:this.state.isMouseOver? false:true
            });
        },
        
        goSub:function(){
            document.getElementById('form').action = this.props.url;
            document.getElementById('form').submit();
        },
        
        
        render:function(){
            var backcolor = 'rgba(255,255,255,0.4)';
            if(this.state.isMouseOver)
                backcolor = 'rgba(255,245,142,0.4)';
            return(
            <Image src={this.props.src} style={{width:'36%',backgroundColor:backcolor}} circle onClick={()=>{this.goSub()}}  
                onMouseOver={this.changeBack} onMouseOut={this.changeBack} >
                
            </Image>
            );
        }
       
    });
    
    
    //展示容器,捕捉窗口改变大小的事件，保证背景图显示正确
    var MyDiv = React.createClass({
        
        getInitialState: function() {
            return ({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            });
          },
        
          handleResize: function(e) {
            this.setState({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            });
          },
        
          componentDidMount: function() {
            window.addEventListener('resize', this.handleResize);
          },
        
          componentWillUnmount: function() {
            window.removeEventListener('resize', this.handleResize);
          },
          
        
          render: function() {
            return (
                <div style={{textAlign:'center',backgroundImage:'url(/assets/i/shuji-2.jpg)',backgroundSize:'cover',
                    height:this.state.windowHeight,width:this.state.windowWidth}}>
                    <Head/>
                    <p style={{fontFamily:'微软雅黑',fontSize:'60',paddingTop:'8%'}}>乐读</p>
                    <p style={{marginTop:'2%',fontFamily:'微软雅黑',fontSize:'20'}}>记录阅读，更好的阅读</p>
                    
                    <div style={{marginTop:'8%'}}>
                        <Grid>
                            <Row>
                              <Col xs={6} md={3}>
                                <MyImage src="/assets/i/biji.png" url='/calculate'/>
                                <p style={tip}>笔记</p>
                              </Col>
                              <Col xs={6} md={3}>
                                <MyImage src="/assets/i/shuqian.png" url='/cal'/>
                                <p style={tip}>书签</p>
                              </Col>
                              <Col xs={6} md={3}>
                                <MyImage src="/assets/i/shoucang.png" url='/calc'/>
                                <p style={tip}>收藏</p>
                              </Col>
                              <Col xs={6} md={3}>
                                <MyImage src="/assets/i/fenxiang.png" url='/calcu'/>
                                <p style={tip}>分享</p>
                              </Col>
                            </Row>
                        </Grid>
                    </div>
                    <Foot/>
                    
                </div>
            );
          }
    });
   
    
    var content = (
        <div>
            <MyDiv/>
        </div>
    );
    
    ReactDOM.render(content, document.getElementById('content'));    