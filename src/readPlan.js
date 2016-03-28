var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('react-bootstrap').Button;
var Image = require('react-bootstrap').Image;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Thumbnail = require('react-bootstrap').Thumbnail;

var SearchHead = require('./SearchHead');
var Foot = require('./Foot');

var $ = require('jquery');
//搜索图书界面的js文件
    
    //展示容器,捕捉窗口改变大小的事件，保证背景图显示正确
    //currentPage
    
    var MyDiv = React.createClass({
        
        getInitialState: function() {
            return ({
                windowWidth: window.innerwidth,
                windowHeight: window.innerHeight,
                bookData:{books:{}},
                pageType:'', 
                searchText:'',
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
          
        
          render: function() {
            var content = [];
             for(let i=0;i<2;i++){
                content.push(
                  //点击某一行展示书本详细信息
                  <Row>
                    <Col md={4}>
                      <div className="text-center" style={{paddingBottom:'40'}}>
                        <Image src="https://img1.doubanio.com\/lpic\/s1001902.jpg" style={{height:'260',borderRadius:'10',cursor:'pointer'}}/>
                        <h4>小王子</h4>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="text-center" style={{paddingBottom:'40'}}>
                        <Image src="https://img1.doubanio.com\/lpic\/s1001902.jpg" style={{height:'260',borderRadius:'10',cursor:'pointer'}}/>
                        <h4>小王子</h4>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="text-center" style={{paddingBottom:'40'}}>
                        <Image src="https://img1.doubanio.com\/lpic\/s1001902.jpg" style={{height:'260',borderRadius:'10',cursor:'pointer'}}/>
                        <h4>小王子</h4>
                      </div>
                    </Col>
                  </Row>
                  );
                }
            var mainContent;
            if(this.state.pageType === 'listPage')
              mainContent = 
              <div style={{backgroundColor:'#FEFEFE',backgroundSize:'cover',
                height:this.state.windowHeight,width:this.state.windowWidth}}>
                <div style={{paddingTop:'60',paddingBottom:'60',width:'100%'}} className="text-center">
                  <h3>我的读书计划</h3>
                  <hr width="80%"/>
                  <Grid style={{width:window.innerWidth*7/10}}>
                    {content}
                  </Grid>
                </div>
                <SearchHead callback={(data)=>{this.callbackHandler(data)}}/>
                <Foot/>
              </div>;
            
            
            return (
              <div>
                {mainContent}
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