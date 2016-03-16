var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('react-bootstrap').Button;
var Image = require('react-bootstrap').Image;

var Input = require('react-bootstrap').Input;
var Glyphicon = require('react-bootstrap').Glyphicon;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;

var SearchHead = require('./SearchHead');
var Foot = require('./Foot');
var MyPagination = require('./MyPagination');


var $ = require('jquery');
    
    //展示容器,捕捉窗口改变大小的事件，保证背景图显示正确
    //currentPage
    
    var MyDiv = React.createClass({
        
        getInitialState: function() {
            return ({
                windowWidth: window.innerwidth,
                windowHeight: window.innerHeight,
                bookData:{books:{}},
                pageType:'listPage', //当前页面类型listPage是图书列表，detailPage是图书详情
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
          
          callbackHandler:function(args){
            this.setState({
              pageType : 'listPage',
              bookData:args,
              searchText:args.text,
            });
          },
          
          pagerCallbackHandler:function(args){
            this.setState({
              pageType : 'listPage',
              bookData:args,
              searchText:args.text,
            })
          },
          
          //点击某一行展示书本详细信息
          showBookDetail:function(args){
            $.ajax({
              data: JSON.stringify({
            		id:args
            	}),
              url: '/read/book/detail',
              headers: {
                'Content-Type': 'application/json',
              },
              type:'post',
              dataType: 'json',
              cache: false,
              timeout: 5000,
              success: (data)=>{
                alert(data.title);
                this.setState({
                  // pageType : 'detailPage',
                  // bookData : data
                });
              },
              error: function(jqXHR, textStatus, errorThrown){
                alert("获取书籍信息失败，请重试");  
              }
            });
          },
        
          render: function() {
            var content = [];
            if(this.state.pageType === 'listPage' && this.state.bookData.books.length>0){
              content.push(<ListGroupItem key="0000" header="书籍列表" bsStyle="success"></ListGroupItem>);
              for(let i=0;i<this.state.bookData.books.length;i++){
                content.push(
                  //点击某一行展示书本详细信息
                  <ListGroupItem key={this.state.bookData.books[i].id} href="#" onClick={()=>{this.showBookDetail(this.state.bookData.books[i].id)}}>
                  {this.state.bookData.books[i].title} 
                  ({this.state.bookData.books[i].author})
                  </ListGroupItem>
                  );
              }
            }
            
            var pager;
            if(this.state.bookData.books.length>0)
              pager = <MyPagination total={this.state.bookData.total} text={this.state.searchText} callback={(data)=>{this.pagerCallbackHandler(data)}}/>;
            
            return (
              <div style={{backgroundColor:'#FFFFFF',backgroundSize:'cover',
                height:this.state.windowHeight,width:this.state.windowWidth}}>
                <div style={{paddingTop:'60',paddingBottom:'60',width:'100%',}}>
                  <ListGroup style={{paddingTop:'60',paddingBottom:'60',height:'100%',paddingLeft:'10%',paddingRight:'10%',}}>
                  {content}
                  </ListGroup>
                  <div className="text-center">
                    {pager}
                  </div>
                </div>
                <SearchHead callback={(data)=>{this.callbackHandler(data)}}/>
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