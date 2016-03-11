var React = require('react');

var Glyphicon = require('react-bootstrap').Glyphicon;


//下拉按钮
//props:
//backColor 背景颜色
//text 文字
//icon 图标
//focused 是否激活
//callback 回调
//page 当前页面编号
var PullButton = React.createClass({
        
        getInitialState:function(){
          return({
            focused:false,
            active:false,
          });
        },
        
        //点击某一项时通过回调方法修改父容器中的prop值为新选中的项目selectPage值
        //然后将最新的selectPage值通过props传递给本组件
        //在该方法中对新的选中selectPage值与本组件的固定page值作比较
        //如果是一致的说明被选中，如果不一致说明未选中
        componentWillReceiveProps:function(nextProps){
          this.setState({
            active:nextProps.selectPage === nextProps.bPage ? true : false,
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
        _onclickHandler:function(){
          this.props.callback({color:this.props.backColor,currentPage:this.props.bPage});
        },
        
        
        render:function(){
          
            var buttonStyle;
            if(this.state.active || this.state.focused)
              buttonStyle = {
                backgroundColor:this.props.backColor,
                fontFamily:'微软雅黑',
                fontSize:'20',
                paddingTop:'25',
                height:'80',
                opacity:'0.8',
                cursor:'pointer',
                color:'#666666',
              };

                else
                  buttonStyle = {
                    backgroundColor:this.props.backColor,
                    fontFamily:'微软雅黑',
                    fontSize:'20',
                    paddingTop:'12',
                    height:'54',
                    opacity:'0.8',
                    cursor:'pointer',
                    color:'#000000',
                  };
          
            var content = 
              <div style={buttonStyle} onMouseOver={()=>{this._mouseOverHandler()}} onMouseOut={()=>{this._mouseOutHandler()}} onClick={()=>{this._onclickHandler()}}>
                <Glyphicon glyph={this.props.icon}/>&nbsp;{this.props.text}
              </div>
            return(
            <div>
              {content}
            </div>
            );
        }
});

module.exports = PullButton;