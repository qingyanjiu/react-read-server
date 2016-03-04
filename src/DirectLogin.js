var ReactDOM = require('react-dom');
var Login = require('./Login');
var Head = require('./Head');
var Foot = require('./Foot');

//直接登录的页面，暂时没有用到

    //展示容器,捕捉窗口改变大小的事件，保证背景图显示正确
    //背景图backImage
    var Container = React.createClass({
        
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
                <div style={{textAlign:'center',backgroundImage:this.props.backImage,backgroundSize:'cover',
                    height:this.state.windowHeight,width:this.state.windowWidth,position:'fixed'}}>
                  <Head/>
                  <Login/>
                  <Foot/>
                </div>
            );
          }
    });


var content = (
    <Container backImage="url(/assets/i/log.jpg)">
    </Container>
  );
    
ReactDOM.render(content, document.getElementById('content'));    