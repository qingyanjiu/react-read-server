var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('react-bootstrap').Button;
var Image = require('react-bootstrap').Image;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var Head = require('./Head');
var Foot = require('./Foot');
var Login = require('./Login');
var Register = require('./Register');
  
//网站首页的js文件  
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
            <Image src={this.props.src} style={{width:'36%',backgroundColor:backcolor,cursor:'pointer'}} circle onClick={()=>{this.goSub()}}  
                onMouseOver={this.changeBack} onMouseOut={this.changeBack} >
                
            </Image>
            );
        }
       
    });
    
    
    //展示容器,捕捉窗口改变大小的事件，保证背景图显示正确
    //currentPage
    //index--首页
    //register--注册
    //login--登录
    var MyDiv = React.createClass({
        
        getInitialState: function() {
            return ({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
                currentPage:'index'
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
          
          callbackHandler:function(args){
            this.setState({
              currentPage:args
            });

          },
          
        
          render: function() {
            var background = 'url(/assets/i/shuji-2.jpg)';
            if(this.state.currentPage !== 'index')
              background = 'url(/assets/i/log.jpg)';
              
            var cont;
            if(this.state.currentPage === 'index')
              cont=
                    <div>
                      <p style={{fontFamily:'微软雅黑',fontSize:'60',paddingTop:this.state.windowHeight/10 + 60}}>乐读</p>
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
                      </div></div>;
            else if(this.state.currentPage === 'login')
                  cont = <Login/>;
            else if(this.state.currentPage === 'register')
                  cont = <Register/>;
            
            return (
              <div style={{textAlign:'center',backgroundImage:background,backgroundSize:'cover',
                height:this.state.windowHeight,width:this.state.windowWidth}}>
                <Head callback={(tag)=>{this.callbackHandler(tag)}}/>
                {cont}
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