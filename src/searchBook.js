var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('react-bootstrap').Button;
var Image = require('react-bootstrap').Image;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Glyphicon = require('react-bootstrap').Glyphicon;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;

var SearchHead = require('./SearchHead');
var Foot = require('./Foot');
var MyPagination = require('./MyPagination');
var LoadingButton = require('./LoadingButton');

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
                this.setState({
                  pageType : 'detailPage',
                  bookData : data
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
            if(this.state.pageType === 'listPage' && this.state.bookData.books.length>0)
              pager = <MyPagination total={this.state.bookData.total} text={this.state.searchText} callback={(data)=>{this.pagerCallbackHandler(data)}}/>;
            
            var mainContent;
            if(this.state.pageType === 'listPage')
              mainContent = 
              <div style={{backgroundColor:'#FEFEFE',backgroundSize:'cover',
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
              </div>;
              
            else if(this.state.pageType === 'detailPage')
              mainContent = 
              <div style={{backgroundColor:'#FEFEFE',backgroundSize:'cover',
                height:this.state.windowHeight,width:this.state.windowWidth}}>
                <div style={{paddingTop:'60',paddingBottom:'60',width:'100%',}}>
                  <Grid style={{paddingTop:'60'}}>
                    <Row>
                      <Col xs={12} sm={12} md={4} lg={4} className="text-center">
                        <Image src={this.state.bookData.images.large} alt={this.state.bookData.title} 
                        style={{height:'400',borderStyle:'solid',borderWidth:'1',borderColor:'#DDDDDD'}}/>
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={8} className="text-center">
                        <div className="text-left" style={{height:'400',overflow:'auto'}}>
                        <h2>{this.state.bookData.title}   (豆瓣评分:{this.state.bookData.rating.average})</h2>
                        <h4>{this.state.bookData.author}</h4>
                        <p style={{fontSize:'16'}}>{this.state.bookData.summary}</p>
                        </div>
                      </Col>
                    </Row>
                  </Grid>
                </div>
                <div className="text-center" style={{paddingBottom:'80'}}>
                  <LoadingButton loadingText="正在添加..." text="加入我的书架" bsStyle="success"/>
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