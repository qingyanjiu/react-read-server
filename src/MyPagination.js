var React = require('react');

var Pagination = require('react-bootstrap').Pagination;

var $ = require('jquery');

const MyPagination = React.createClass({
  getInitialState() {
    return {
      activePage: 1
    };
  },
  
  //页面刷新时（开始新的搜索），将页码置为1
  componentWillReceiveProps:function(nextProps){
    this.setState({
      activePage:1,
    });
  },
  
  handleSelect(event, selectedEvent) {
          $.ajax({
            data: JSON.stringify({
          		text: this.props.text,
          		page: selectedEvent.eventKey
          	}),
            url: '/read/book/search',
            headers: {
              'Content-Type': 'application/json',
            },
            type:'post',
            dataType: 'json',
            cache: false,
            timeout: 5000,
            success: (data)=>{
              this.props.callback(data);
              this.setState({
                activePage: selectedEvent.eventKey
              });
            },
            error: function(jqXHR, textStatus, errorThrown){
              alert("查询书籍出错，请稍后再试");  
            }
      });
  },

  render() {
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={Math.ceil(this.props.total/10)}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} 
        
        />
    );
  }
});

 module.exports = MyPagination;