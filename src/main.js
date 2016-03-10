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
          <div className="text-center" style={{backgroundColor:'rgba(0,0,0,0.1)'}}><img alt="白夜行" src="https://img1.doubanio.com/lpic/s4610502.jpg" style={{height:this.state.h}}/></div>
        </CarouselItem>
        <CarouselItem>
          <div className="text-center" style={{backgroundColor:'rgba(0,0,0,0.1)'}}><img alt="白夜行" src="https://img1.doubanio.com/lpic/s4610502.jpg" style={{height:this.state.h}}/></div>
        </CarouselItem>
        <CarouselItem>
          <div className="text-center" style={{backgroundColor:'rgba(0,0,0,0.1)'}}><img alt="白夜行" src="https://img1.doubanio.com/lpic/s4610502.jpg" style={{height:this.state.h}}/></div>
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
            var subContent;
            
            subContent = 
                    <div style={{width:'100%',paddingBottom:'60',backgroundColor:this.state.subPageBack,opacity:'0.4',height:this.state.windowHeight-300-100-60-60}}>
                      adkfjaklsdjflka
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
                          <PullButton bPage="1" selectPage={this.state.selectPage} backColor="#99CC00" text="启读" icon="book" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="2" selectPage={this.state.selectPage} backColor="#FFCC00" text="笔记" icon="edit" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="3" selectPage={this.state.selectPage} backColor="#99CCFF" text="书签" icon="bookmark" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="4" selectPage={this.state.selectPage} backColor="#FA8072" text="书评" icon="comment" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="5" selectPage={this.state.selectPage} backColor="#8FBC8F" text="毕读" icon="check" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="6" selectPage={this.state.selectPage} backColor="#FF69B4" text="最爱" icon="heart" callback={(tag)=>{this.callbackHandler(tag)}}/>
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