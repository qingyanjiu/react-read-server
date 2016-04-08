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
var Input = require('react-bootstrap').Input;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Alert = require('react-bootstrap').Alert;

var MainHead = require('./MainHead');
var Foot = require('./Foot');
var PullButton = require('./PullButton');

var $ = require('jquery');

//阅读主界面的js文件    
var tip = {
        fontFamily:'微软雅黑',
        fontSize:'18',
        color:'#A98580',
        marginTop:'4%',
        textAlign:'center',
    };

    
  //滚动图片组建
  //props: 
  //bookPlan--要展示的滚动的读书计划中的书籍列表
  //callback--切换书籍以后把当前选择的书籍信息返回父容器
  const SlideWindow = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null,
      h:300,
      
    };
  },

  handleSelect(selectedIndex, selectedDirection) {
    // alert(this.props.bookPlan[selectedIndex].name);
    this.setState({
      index: selectedIndex,
      direction: selectedDirection
    });
    //当前选中的书籍信息通过回调函数返回给父容器
    this.props.callback(this.props.bookPlan[selectedIndex]);
  },

  render() {
    var content = [];
    let bookPlan = this.props.bookPlan;
    if(bookPlan.length > 0)
    for(let i=0;i<bookPlan.length;i++){
      content.push(
        <CarouselItem>
          <div className="text-center" style={{backgroundColor:'rgba(0,0,0,0.1)'}}>
            <img alt={bookPlan[i].name} src={bookPlan[i].image_url} style={{height:this.state.h,width:'210'}}/>
            <div title="启读历史" style={{backgroundColor:'rgba(153,204,0,0.4)',width:'30',height:'20',position:'fixed',cursor:'pointer',top:10,left:(window.innerWidth+210)/2}}/>
            <div title="本书笔记" style={{backgroundColor:'rgba(255,204,0,0.4)',width:'40',height:'20',position:'fixed',cursor:'pointer',top:60,left:(window.innerWidth+210)/2}}/>
            <div title="历史书签" style={{backgroundColor:'rgba(153,204,255,0.4)',width:'50',height:'20',position:'fixed',cursor:'pointer',top:110,left:(window.innerWidth+210)/2}}/>
            <div title="历史书评" style={{backgroundColor:'rgba(250,128,114,0.4)',width:'60',height:'20',position:'fixed',cursor:'pointer',top:160,left:(window.innerWidth+210)/2}}/>
            <div title="毕读历史" style={{backgroundColor:'rgba(143,188,143,0.4)',width:'70',height:'20',position:'fixed',cursor:'pointer',top:210,left:(window.innerWidth+210)/2}}/>
            <div title="分享历史" style={{backgroundColor:'rgba(255,105,180,0.4)',width:'80',height:'20',position:'fixed',cursor:'pointer',top:260,left:(window.innerWidth+210)/2}}/>
            
          </div>
        </CarouselItem>
        );
      }
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} indicators={false}>
        {content}
      </Carousel>
    );
  }
});
    
    
    //展示容器,捕捉窗口改变大小的事件，保证背景图显示正确
    //selectPage
    //1--启读
    //2--笔记
    //3--书签
    //4--书评
    //5--毕读
    //6--收藏
    var MyDiv = React.createClass({
        
        getInitialState: function() {
            return ({
                windowWidth: window.innerwidth,
                windowHeight: window.innerHeight,
                selectPage:'0',
                subPageBack:'#FFFFFF',
                bookPlan:[], //查询到的在当前用户阅读计划中的书籍列表，默认是空的 book列表
                currentBook:{},//当前已选择书籍的信息 book对象
                readInfo:{},//点击选项卡后查询当前书籍的阅读信息 readHistory对象
                tip:'',//点击选项卡中的按钮返回的信息 可能是success之类的标示
            });
          },
        
          handleResize: function(e) {
            this.setState({
                windowWidth: window.innerwidth,
                windowHeight: window.innerHeight,
            });
          },
          
          componentWillMount: function(){
            $.ajax({
              url: '/read/book/queryReadPlan',
              headers: {
                'Content-Type': 'application/json',
              },
              type:'post',
              dataType: 'json',
              cache: false,
              timeout: 5000,
              success: (data)=>{
                this.setState({
                  //读书计划列表状态初始化
                  bookPlan : data,
                  //默认选择的当前选择书籍为第一本dele
                  currentBook:data[0],
                });
              },
              error: function(jqXHR, textStatus, errorThrown){
                alert("获取阅读信息失败，请尝试刷新页面重试");  
              }
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
              selectPage:args.currentPage,
              //点击选项卡后查询当前书籍的阅读信息并回调写回主页面state
              readInfo:args.readInfo,
            });
          },
          
          sildeWindowCallbackHandler:function(args){
            //切换书的时候，currentBook对象变成已选择书籍的信息，所有选项卡收起
            this.setState({
              currentBook:args,
              selectPage:'0'
            });
          },
          
          //启读按钮触发
          _startRead:function(){
            $.ajax({
              data:JSON.stringify({
                douban_id:this.state.currentBook.douban_id,
              }),
              url: '/read/book/startRead',
              headers: {
                'Content-Type': 'application/json',
              },
              type:'post',
              dataType: 'json',
              cache: false,
              timeout: 5000,
              success: (data)=>{
                this.setState({
                  tip:data.result,
                });
              },
              error: function(jqXHR, textStatus, errorThrown){
                alert("操作失败，请重试");  
              }
            });
          },
          
          //记笔记按钮触发
          _addNote:function(){
            $.ajax({
              data:JSON.stringify({
                douban_id:this.state.currentBook.douban_id,
                page:$("#page").val(),
                content:$("#bookcont").val(),
                note:$("#note").val()
              }),
              url: '/read/book/addNote',
              headers: {
                'Content-Type': 'application/json',
              },
              type:'post',
              dataType: 'json',
              cache: false,
              timeout: 5000,
              success: (data)=>{
                this.setState({
                  tip:data.result,
                });
              },
              error: function(jqXHR, textStatus, errorThrown){
                alert("操作失败，请重试");  
              }
            });
          },
          
          _completeRead:function(){
            $.ajax({
              data:JSON.stringify({
                douban_id:this.state.currentBook.douban_id,
              }),
              url: '/read/book/completeRead',
              headers: {
                'Content-Type': 'application/json',
              },
              type:'post',
              dataType: 'json',
              cache: false,
              timeout: 5000,
              success: (data)=>{
                this.setState({
                  tip:data.result,
                });
              },
              error: function(jqXHR, textStatus, errorThrown){
                alert("操作失败，请重试");  
              }
            });
          },
          
          //提示框事件
          handleAlertDismiss() {
            this.setState({
              tip:''
            });
          },
          
        
          render: function() {
            
            //点击按钮后返回的提示信息
            var tipAlert;
            if(this.state.tip){
                  //如果返回成功
                  if(this.state.tip === "success")
                    tipAlert = <Alert onDismiss={this.handleAlertDismiss} style={{marginTop:'40',width:'200',marginLeft:500/2 - 100}} bsStyle="success" dismissAfter={3000}>操作成功</Alert>
                  else if(this.state.tip === "notcomplete")
                    tipAlert = <Alert onDismiss={this.handleAlertDismiss} style={{marginTop:'40',width:'200',marginLeft:500/2 - 100}} bsStyle="danger" dismissAfter={3000}>全书未毕读,不能启读</Alert>
                  else if(this.state.tip === "notstart")
                    tipAlert = <Alert onDismiss={this.handleAlertDismiss} style={{marginTop:'40',width:'200',marginLeft:500/2 - 100}} bsStyle="danger" dismissAfter={3000}>未启读,不能毕读</Alert>
                  else
                    tipAlert = <div></div>
            }
            
            //点击不同按钮，展示不同界面
            var subContent;    
              //启读选项卡的功能
              if(this.state.selectPage === '1'){
                let text;
                let startButton;
                let times;
                //如果已经读过，看已经读了多少遍
                if(this.state.readInfo.length > 0){
                  text = "正在读第 "+this.state.readInfo[0].read_time+" 遍";
                  times = this.state.readInfo[0].read_time +1;
                  
                  //如果还没有阅读完毕
                  if(this.state.readInfo[0].tag === '0')
                    startButton = <Button disabled onClick={()=>{this._startRead()}} bsStyle="danger" style={{fontSize:'20'}}><Glyphicon glyph="file"/>&nbsp;未毕读,不能启读</Button>;
                  //如果已经阅读完这一遍
                  else if(this.state.readInfo[0].tag === '1')
                    startButton = <Button onClick={()=>{this._startRead()}} bsStyle="success" style={{fontSize:'20'}}><Glyphicon glyph="file"/>&nbsp;开始读第 {times} 遍</Button>;
                }
                //如果是还没有开始读过（查询到的书籍阅读信息为空）
                else if(this.state.readInfo.length === 0){
                  text = "还没有开始读";
                  times = 1;
                  startButton = <Button onClick={()=>{this._startRead()}} bsStyle="success" style={{fontSize:'20'}}><Glyphicon glyph="file"/>&nbsp;开始读第 {times} 遍</Button>;
                }
                
                subContent = 
                    <div style={{width:'100%',paddingBottom:'60',backgroundColor:this.state.subPageBack,height:window.innerHeight-300-80-60-60}}>
                      <div style={{width:'500',height:'400',paddingTop:'10',left:window.innerWidth/2-250,top:(window.innerHeight+300+80+60+60)/2-200,position:'fixed'}}>
                        <p style={{fontSize:'24',fontFamily:'微软雅黑',color:'#000000',paddingBottom:'10'}}>{text}</p>
                        {startButton}
                        {tipAlert}
                      </div>
                    </div>;
              }
              else if(this.state.selectPage === '2')
                subContent = 
                    <div style={{width:'100%',paddingBottom:'60',backgroundColor:this.state.subPageBack,height:window.innerHeight-300-80-60-60}}>
                      <div style={{width:'500',height:'400',paddingTop:'10',left:window.innerWidth/2-250,top:(window.innerHeight+300+80+60+60)/2-200,position:'fixed'}}>
                        <Input id="page" type="number" min='0' max='200' bsSize="large" placeholder="页码"/>
                        <Input id="bookcont" type="textarea" bsSize="large" placeholder="文字"/>
                        <Input id="note" type="textarea" bsSize="large" placeholder="笔记"/>
                        <Button onClick={()=>{this._addNote()}} bsStyle="warning" style={{fontSize:'20'}}><Glyphicon glyph="pencil"/>&nbsp;记笔记</Button>
                        {tipAlert}
                      </div>
                    </div>;
              else if(this.state.selectPage === '3')
                subContent = 
                    <div style={{width:'100%',paddingBottom:'60',backgroundColor:this.state.subPageBack,height:window.innerHeight-300-80-60-60}}>
                      <div style={{width:'500',height:'400',paddingTop:'10',left:window.innerWidth/2-250,top:(window.innerHeight+300+80+60+60)/2-200,position:'fixed'}}>
                        <Input id="page" type="number" min='0' max='200' bsSize="large" placeholder="页码"/>
                        <Button bsStyle="info" style={{fontSize:'20'}}><Glyphicon glyph="pencil"/>&nbsp;做书签</Button>
                      </div>
                    </div>;      
              else if(this.state.selectPage === '4')
                subContent = 
                    <div style={{width:'100%',paddingBottom:'60',backgroundColor:this.state.subPageBack,height:window.innerHeight-300-80-60-60}}>
                      <div style={{width:'500',height:'400',paddingTop:'10',left:window.innerWidth/2-250,top:(window.innerHeight+300+80+60+60)/2-200,position:'fixed'}}>
                        <Input type="textarea" bsSize="large" placeholder="评论"/>
                        <Button bsStyle="danger" style={{fontSize:'20'}}><Glyphicon glyph="pencil"/>&nbsp;写书评</Button>
                      </div>
                    </div>;
              else if(this.state.selectPage === '5'){
                //毕读选项卡的功能
                let text;
                let completeButton;
                let times;
                //如果已经读过，看已经读了多少遍
                if(this.state.readInfo.length > 0){
                  text = "正在读第 "+this.state.readInfo[0].read_time+" 遍";
                  times = this.state.readInfo[0].read_time;
                  
                  //如果还没有启读
                  if(this.state.readInfo[0].tag === '1')
                    completeButton = <Button disabled onClick={()=>{this._completeRead()}} bsStyle="danger" style={{fontSize:'20'}}><Glyphicon glyph="ok"/>&nbsp;未启读,不能毕读</Button>;
                  //如果已经启读
                  else if(this.state.readInfo[0].tag === '0')
                    completeButton = <Button onClick={()=>{this._completeRead()}} bsStyle="success" style={{fontSize:'20'}}><Glyphicon glyph="ok"/>&nbsp;第 {times} 遍读完啦</Button>;
                }
                //如果是还没有开始读过（查询到的书籍阅读信息为空）
                else if(this.state.readInfo.length === 0){
                  text = "还没有开始读";
                  times = 1;
                  completeButton = <Button disabled onClick={()=>{this._completeRead()}} bsStyle="danger" style={{fontSize:'20'}}><Glyphicon glyph="ok"/>&nbsp;未启读,不能毕读</Button>;
                }
              
                subContent = 
                    <div style={{width:'100%',paddingBottom:'60',backgroundColor:this.state.subPageBack,height:window.innerHeight-300-80-60-60}}>
                      <div style={{width:'500',height:'400',paddingTop:'10',left:window.innerWidth/2-250,top:(window.innerHeight+300+80+60+60)/2-200,position:'fixed'}}>
                        <p style={{fontSize:'24',fontFamily:'微软雅黑',color:'#000000',paddingBottom:'10'}}>{text}</p>
                        {completeButton}
                        {tipAlert}
                      </div>
                    </div>;    
              }
              else if(this.state.selectPage === '6')
                subContent = 
                    <div style={{width:'100%',paddingBottom:'60',backgroundColor:this.state.subPageBack,height:window.innerHeight-300-80-60-60}}>
                      <div style={{width:'500',height:'400',paddingTop:'10',left:window.innerWidth/2-250,top:(window.innerHeight+300+80+60+60)/2-200,position:'fixed'}}>
                        <Button bsStyle="success" style={{fontSize:'20'}}><Glyphicon glyph="send"/>&nbsp;分享</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button bsStyle="danger" style={{fontSize:'20'}}><Glyphicon glyph="star"/>&nbsp;收藏</Button>  
                      </div>
                    </div>;      
              
            var  content = 
                  <div style={{paddingTop:'60',paddingBottom:'60',height:'100%'}}>
                    <div>
                      <SlideWindow bookPlan={this.state.bookPlan} callback={(args)=>{this.sildeWindowCallbackHandler(args)}}/>
                    </div>
                    
                    <div>
                      <Grid style={{width:'100%'}}>
                        <Row>
                          <Col md={2}>
                          <PullButton bPage="1" selectPage={this.state.selectPage} backColor="rgba(153,204,0,0.2)" text="启读" icon="book" url="/read/book/getReadInfo" data={this.state.currentBook} callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="2" selectPage={this.state.selectPage} backColor="rgba(255,204,0,0.2)" text="笔记" icon="edit" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="3" selectPage={this.state.selectPage} backColor="rgba(153,204,255,0.2)" text="书签" icon="bookmark" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="4" selectPage={this.state.selectPage} backColor="rgba(250,128,114,0.2)" text="书评" icon="comment" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="5" selectPage={this.state.selectPage} backColor="rgba(143,188,143,0.2)" text="毕读" icon="check" url="/read/book/getReadInfo" data={this.state.currentBook} callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                          <Col md={2}>
                          <PullButton bPage="6" selectPage={this.state.selectPage} backColor="rgba(255,105,180,0.2)" text="收藏" icon="heart" callback={(tag)=>{this.callbackHandler(tag)}}/>
                          </Col>
                        </Row> 
                      </Grid>
                    </div>
                    {subContent}
                    
                  </div>;
            
            if(this.state.bookPlan.length === 0)
              content = <div><h3>阅读计划中没有书籍</h3></div>
            
            
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