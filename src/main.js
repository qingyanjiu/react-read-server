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
          <div className="text-center" style={{backgroundColor:'rgba(0,0,0,0.1)'}}><img alt="白夜行" src="https://img1.doubanio.com/lpic/s4610502.jpg"/></div>
        </CarouselItem>
        <CarouselItem>
          <div className="text-center" style={{backgroundColor:'rgba(0,0,0,0.1)'}}><img alt="白夜行" src="https://img1.doubanio.com/lpic/s4610502.jpg"/></div>
        </CarouselItem>
        <CarouselItem>
          <div className="text-center" style={{backgroundColor:'rgba(0,0,0,0.1)'}}><img alt="白夜行" src="https://img1.doubanio.com/lpic/s4610502.jpg"/></div>
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
            var cont;
            if(this.state.currentPage === 'index')
              cont= 
                  <div style={{paddingTop:'60',paddingBottom:'60',height:'100%'}}>
                    <div>
                      <SlideWindow/>
                    </div>
                    <div>
                      <Grid style={{width:'100%'}}>
                        <Row>
                          <Col md={2}>
                          <PullButton backColor="#FFCC00" text="做笔记"/>
                          </Col>
                          <Col md={2}>
                          <PullButton backColor="#99CC00" text="做笔记"/>
                          </Col>
                          <Col md={2}>
                          <PullButton backColor="#CC3333" text="做笔记"/>
                          </Col>
                          <Col md={2}>
                          <PullButton backColor="#99CCFF" text="做笔记"/>
                          </Col>
                          <Col md={2}>
                          <PullButton backColor="#CC99FF" text="做笔记"/>
                          </Col>
                          <Col md={2}>
                          <PullButton backColor="#CCCCCC" text="做笔记"/>
                          </Col>
                        </Row> 
                      </Grid>
                    </div>
                  </div>;
            else if(this.state.currentPage === 'login')
                  cont = <Login/>;
            else if(this.state.currentPage === 'register')
                  cont = <Register/>;
            
            return (
              <div style={{textAlign:'center',backgroundColor:'#FFFFFF',backgroundSize:'cover',
                height:this.state.windowHeight,width:this.state.windowWidth}}>
                {cont}
                <MainHead/>
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