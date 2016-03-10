var React = require('react');


//下拉按钮
//props:backColor 背景颜色
var PullButton = React.createClass({
        
        getInitialState:function(){   
          return({
            focused:false,
          });
        },
        
        //鼠标放在按钮上时
        _mouseOverHandler:function(){
          this.setState({
            focused:true
          });
        },
        
        //鼠标离开按钮上时
        _mouseOutHandler:function(){
          this.setState({
            focused:false
          });
        },
        
        //回调
        _clickHandler:function(){
          this.props.callback('login');
        },
        
        
        render:function(){
            var buttonStyle;
            if(this.state.focused)
              buttonStyle = {
                backgroundColor:this.props.backColor,
                fontFamily:'微软雅黑',
                fontSize:'18',
                paddingTop:'16',
                height:'60',
                opacity:'0.8',
                cursor:'pointer',
                color:'#FFFFFF',
              };
            else
              buttonStyle = {
                backgroundColor:this.props.backColor,
                fontFamily:'微软雅黑',
                fontSize:'18',
                paddingTop:'6',
                height:'40',
                opacity:'0.8',
                cursor:'pointer',
                color:'#000000',
              };
          
            var content = 
              <div style={buttonStyle} onMouseOver={()=>{this._mouseOverHandler()}} onMouseOut={()=>{this._mouseOutHandler()}}>
                {this.props.text}
              </div>
            return(
            <div>
              {content}
            </div>
            );
        }
});

module.exports = PullButton;