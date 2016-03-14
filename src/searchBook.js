var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('react-bootstrap').Button;
var Image = require('react-bootstrap').Image;

var Input = require('react-bootstrap').Input;
var Glyphicon = require('react-bootstrap').Glyphicon;

var MainHead = require('./MainHead');
var Foot = require('./Foot');

    
    //展示容器,捕捉窗口改变大小的事件，保证背景图显示正确
    //currentPage
    
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
              
            var content = 
                  <div style={{paddingTop:'60',paddingBottom:'60',height:'100%'}}>
                    
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