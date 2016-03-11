var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('react-bootstrap').Button;
var Image = require('react-bootstrap').Image;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Carousel = require('react-bootstrap').Carousel;
var CarouselItem = require('react-bootstrap').CarouselItem;
var Panel = require('react-bootstrap').Panel;
var ProgressBar = require('react-bootstrap').ProgressBar;
var Input = require('react-bootstrap').Input;
var Glyphicon = require('react-bootstrap').Glyphicon;

var MainHead = require('./MainHead');
var Foot = require('./Foot');
var PullButton = require('./PullButton');
    
var tip = {
        fontFamily:'微软雅黑',
        fontSize:'18',
        color:'#A98580',
        marginTop:'4%',
        textAlign:'center',
    };

    
  //滚动图片组建
  const SlideWindow = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null,
      h:300,
    };
  },

  handleSelect(selectedIndex, selectedDirection) {
    // alert('selected=' + selectedIndex + ', direction=' + selectedDirection);
    this.setState({
      index: selectedIndex,
      direction: selectedDirection
    });
  },

  render() {
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} indicators={false}>
        <CarouselItem>
          <div className="text-center" style={{backgroundColor:'rgba(0,0,0,0.1)'}}>
            <img alt="白夜行" src="https://img1.doubanio.com/lpic/s4610502.jpg" style={{height:this.state.h}}/>
            <div title="启读历史" style={{backgroundColor:'rgba(153,204,0,0.4)',width:'30',height:'20',zIndex:'10',position:'fixed',cursor:'pointer',top:10,left:(window.innerWidth+210)/2}}/>
            <div title="本书笔记" style={{backgroundColor:'rgba(255,204,0,0.4)',width:'40',height:'20',zIndex:'10',position:'fixed',cursor:'pointer',top:60,left:(window.innerWidth+210)/2}}/>
            <div title="历史书签" style={{backgroundColor:'rgba(153,204,255,0.4)',width:'50',height:'20',zIndex:'10',position:'fixed',cursor:'pointer',top:110,left:(window.innerWidth+210)/2}}/>
            <div title="历史书评" style={{backgroundColor:'rgba(250,128,114,0.4)',width:'60',height:'20',zIndex:'10',position:'fixed',cursor:'pointer',top:160,left:(window.innerWidth+210)/2}}/>
            <div title="毕读历史" style={{backgroundColor:'rgba(143,188,143,0.4)',width:'70',height:'20',zIndex:'10',position:'fixed',cursor:'pointer',top:210,left:(window.innerWidth+210)/2}}/>
            <div title="分享历史" style={{backgroundColor:'rgba(255,105,180,0.4)',width:'80',height:'20',zIndex:'10',position:'fixed',cursor:'pointer',top:260,left:(window.innerWidth+210)/2}}/>
            
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="text-center" style={{backgroundColor:'rgba(0,0,0,0.1)'}}>
            <img alt="白夜行" src="https://img1.doubanio.com/lpic/s4610502.jpg" style={{height:this.state.h}}/>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="text-center" style={{backgroundColor:'rgba(0,0,0,0.1)'}}>
            <img alt="白夜行" src="https://img1.doubanio.com/lpic/s4610502.jpg" style={{height:this.state.h}}/>
          </div>
        </CarouselItem>
      </Carousel>
    );
  }
});
    
    
    //展示容器,捕捉窗口改变大小的事件，保证背景图显示正确
    //currentPage
    //main--主页
    //register--注册
    //login--登录
    var MyDiv = React.createClass({
        
        getInitialState: function() {
            return ({
                windowWidth: window.innerwidth,
                windowHeight: window.innerHeight,
                selectPage:'0',
                subPageBack:'#FFFFFF'
            });
          },
        
          handleResize: function(e) {
            this.setState({
                windowWidth: window.innerwidth,
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
              subPageBack:args.color,
              selectPage:args.currentPage
            });
          },
          
        
          render: function() {
            //点击不同按钮，展示不同界面
            var subContent;
              if(this.state.selectPage === '1')
                subContent = 
                    <div style={{width:'100%',paddingBottom:'60',backgroundColor:this.state.subPageBack,height:window.innerHeight-300-80-60-60}}>
                      <div style={{width:'500',height:'400',paddingTop:'10',left:window.innerWidth/2-250,top:(window.innerHeight+300+80+60+60)/2-200,position:'fixed'}}>
                        <p style={{fontSize:'24',fontFamily:'微软雅黑',color:'#000000',paddingBottom:'10'}}>还没有开始读</p>
                        <Button bsStyle="success" style={{fontSize:'20'}}><Glyphicon glyph="file"/>&nbsp;开始读第 1 遍</Button>  
                      </div>
                    </div>;
              else if(this.state.selectPage === '2')
                subContent = 
                    <div style={{width:'100%',paddingBottom:'60',backgroundColor:this.state.subPageBack,height:window.innerHeight-300-80-60-60}}>
                      <div style={{width:'500',height:'400',paddingTop:'10',left:window.innerWidth/2-250,top:(window.innerHeight+300+80+60+60)/2-200,position:'fixed'}}>
                        <Input id="page" type="number" min='0' max='200' bsSize="large" placeholder="页码"/>
                        <Input id="content" type="textarea" bsSize="large" placeholder="文字"/>
                        <Input type="textarea" bsSize="large" placeholder="笔记"/>
                        <Button bsStyle="warning" style={{fontSize:'20'}}><Glyphicon glyph="pencil"/>&nbsp;记笔记</Button>
                      </div>
                    </div>;
              else if(this.state.selectPage === '3')
                subContent = 
                    <div style={{width:'100%',paddingBottom:'60',backgroundColor:this.state.subPageBack,height:window.innerHeight-300-80-60-60}}>
                      <div style={{width:'500',height:'400',paddingTop:'10',left:window.innerWidth/2-250,top:(window.innerHeight+300+80+60+60)/2-200,position:'fixed'}}>
                        <Input id="page" type="number" min='0' max='200' bsSize="large" placeholder="页码"/>
                        <Button bsStyle="info" style={{fontSize:'20'}}><Glyphicon glyph="pencil"/>&nbsp;做书签</Button>
                      </div>
                    </div>;      
              else if(this.state.selectPage === '4')
                subContent = 
                    <div style={{width:'100%',paddingBottom:'60',backgroundColor:this.state.subPageBack,height:window.innerHeight-300-80-60-60}}>
                      <div style={{width:'500',height:'400',paddingTop:'10',left:window.innerWidth/2-250,top:(window.innerHeight+300+80+60+60)/2-200,position:'fixed'}}>
                        <Input type="textarea" bsSize="large" placeholder="评论"/>
                        <Button bsStyle="danger" style={{fontSize:'20'}}><Glyphicon glyph="pencil"/>&nbsp;写书评</Button>
                      </div>
                    </div>;
              else if(this.state.selectPage === '5')
                subContent = 
                    <div style={{width:'100%',paddingBottom:'60',backgroundColor:this.state.subPageBack,height:window.innerHeight-300-80-60-60}}>
                      <div style={{width:'500',height:'400',paddingTop:'10',left:window.innerWidth/2-250,top:(window.innerHeight+300+80+60+60)/2-200,position:'fixed'}}>
                        <p style={{fontSize:'24',fontFamily:'微软雅黑',color:'#000000',paddingBottom:'10'}}>离开始读已经过了 3 天</p>
                        <Button bsStyle="success" style={{fontSize:'20'}}><Glyphicon glyph="ok"/>&nbsp;第 1 遍读完啦</Button>  
                      </div>
                    </div>;      
              else if(this.state.selectPage === '6')
                subContent = 
                    <div style={{width:'100%',paddingBottom:'60',backgroundColor:this.state.subPageBack,height:window.innerHeight-300-80-60-60}}>
                      <div style={{width:'500',height:'400',paddingTop:'10',left:window.innerWidth/2-250,top:(window.innerHeight+300+80+60+60)/2-200,position:'fixed'}}>
                        <Button bsStyle="success" style={{fontSize:'20'}}><Glyphicon glyph="send"/>&nbsp;分享</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button bsStyle="danger" style={{fontSize:'20'}}><Glyphicon glyph="star"/>&nbsp;收藏</Button>  
                      </div>
                    </div>;      
              
            var  content = 
                  <div style={{paddingTop:'60',paddingBottom:'60',height:'100%'}}>
                    <div>
                      <SlideWindow/>
                    </div>
                    
                    <div>
                      <Grid style={{width:'100%'}}>
                        <Row>
                          <Col md={2}>
                          <PullButton bPage="1" selectPage={this.state.selectPage} backColor="rgba(153,204,0,0.2)" text="启读" icon="book" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="2" selectPage={this.state.selectPage} backColor="rgba(255,204,0,0.2)" text="笔记" icon="edit" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="3" selectPage={this.state.selectPage} backColor="rgba(153,204,255,0.2)" text="书签" icon="bookmark" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="4" selectPage={this.state.selectPage} backColor="rgba(250,128,114,0.2)" text="书评" icon="comment" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="5" selectPage={this.state.selectPage} backColor="rgba(143,188,143,0.2)" text="毕读" icon="check" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="6" selectPage={this.state.selectPage} backColor="rgba(255,105,180,0.2)" text="收藏" icon="heart" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                        </Row> 
                      </Grid>
                    </div>
                    {subContent}
                    
                  </div>;

            
            
            return (
              <div style={{textAlign:'center',backgroundColor:'#FFFFFF',backgroundSize:'cover',
                height:this.state.windowHeight,width:this.state.windowWidth}}>
                {content}
                <MainHead/>
                <Foot/>
                
              </div>
            );
          }
    });
   
    
    var cont = (
        <div>
            <MyDiv/>
        </div>
    );
    
    ReactDOM.render(cont, document.getElementById('content'));    