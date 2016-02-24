// var React = require('react');
// var Image = require('react-bootstrap').Image;

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
        
        render:function(){
            var backcolor = 'rgba(255,255,255,0.4)';
            if(this.state.isMouseOver)
                backcolor = 'rgba(255,245,142,0.4)';
            return(
            <Image src={this.props.src} style={{width:'36%',backgroundColor:backcolor}} circle onMouseOver={this.changeBack} onMouseOut={this.changeBack}>
            </Image>
            );
        }
       
    });


// module.exports = MyImage;
