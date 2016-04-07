webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);
	var Button = __webpack_require__(159).Button;
	var Image = __webpack_require__(159).Image;
	var Grid = __webpack_require__(159).Grid;
	var Row = __webpack_require__(159).Row;
	var Col = __webpack_require__(159).Col;
	var Carousel = __webpack_require__(159).Carousel;
	var CarouselItem = __webpack_require__(159).CarouselItem;
	var Panel = __webpack_require__(159).Panel;
	var Input = __webpack_require__(159).Input;
	var Glyphicon = __webpack_require__(159).Glyphicon;
	var Alert = __webpack_require__(159).Alert;

	var MainHead = __webpack_require__(408);
	var Foot = __webpack_require__(404);
	var PullButton = __webpack_require__(409);

	var $ = __webpack_require__(406);

	//阅读主界面的js文件   
	var tip = {
	  fontFamily: '微软雅黑',
	  fontSize: '18',
	  color: '#A98580',
	  marginTop: '4%',
	  textAlign: 'center'
	};

	//滚动图片组建
	//props:
	//bookPlan--要展示的滚动的读书计划中的书籍列表
	//callback--切换书籍以后把当前选择的书籍信息返回父容器
	var SlideWindow = React.createClass({
	  displayName: 'SlideWindow',
	  getInitialState: function getInitialState() {
	    return {
	      index: 0,
	      direction: null,
	      h: 300

	    };
	  },
	  handleSelect: function handleSelect(selectedIndex, selectedDirection) {
	    // alert(this.props.bookPlan[selectedIndex].name);
	    this.setState({
	      index: selectedIndex,
	      direction: selectedDirection
	    });
	    //当前选中的书籍信息通过回调函数返回给父容器
	    this.props.callback(this.props.bookPlan[selectedIndex]);
	  },
	  render: function render() {
	    var content = [];
	    var bookPlan = this.props.bookPlan;
	    if (bookPlan.length > 0) for (var i = 0; i < bookPlan.length; i++) {
	      content.push(React.createElement(
	        CarouselItem,
	        null,
	        React.createElement(
	          'div',
	          { className: 'text-center', style: { backgroundColor: 'rgba(0,0,0,0.1)' } },
	          React.createElement('img', { alt: bookPlan[i].name, src: bookPlan[i].image_url, style: { height: this.state.h, width: '210' } }),
	          React.createElement('div', { title: '启读历史', style: { backgroundColor: 'rgba(153,204,0,0.4)', width: '30', height: '20', position: 'fixed', cursor: 'pointer', top: 10, left: (window.innerWidth + 210) / 2 } }),
	          React.createElement('div', { title: '本书笔记', style: { backgroundColor: 'rgba(255,204,0,0.4)', width: '40', height: '20', position: 'fixed', cursor: 'pointer', top: 60, left: (window.innerWidth + 210) / 2 } }),
	          React.createElement('div', { title: '历史书签', style: { backgroundColor: 'rgba(153,204,255,0.4)', width: '50', height: '20', position: 'fixed', cursor: 'pointer', top: 110, left: (window.innerWidth + 210) / 2 } }),
	          React.createElement('div', { title: '历史书评', style: { backgroundColor: 'rgba(250,128,114,0.4)', width: '60', height: '20', position: 'fixed', cursor: 'pointer', top: 160, left: (window.innerWidth + 210) / 2 } }),
	          React.createElement('div', { title: '毕读历史', style: { backgroundColor: 'rgba(143,188,143,0.4)', width: '70', height: '20', position: 'fixed', cursor: 'pointer', top: 210, left: (window.innerWidth + 210) / 2 } }),
	          React.createElement('div', { title: '分享历史', style: { backgroundColor: 'rgba(255,105,180,0.4)', width: '80', height: '20', position: 'fixed', cursor: 'pointer', top: 260, left: (window.innerWidth + 210) / 2 } })
	        )
	      ));
	    }
	    return React.createElement(
	      Carousel,
	      { activeIndex: this.state.index, direction: this.state.direction, onSelect: this.handleSelect, indicators: false },
	      content
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
	  displayName: 'MyDiv',


	  getInitialState: function getInitialState() {
	    return {
	      windowWidth: window.innerwidth,
	      windowHeight: window.innerHeight,
	      selectPage: '0',
	      subPageBack: '#FFFFFF',
	      bookPlan: [], //查询到的在当前用户阅读计划中的书籍列表，默认是空的 book列表
	      currentBook: {}, //当前已选择书籍的信息 book对象
	      readInfo: {}, //点击选项卡后查询当前书籍的阅读信息 readHistory对象
	      tip: '' };
	  },

	  //点击选项卡中的按钮返回的信息 可能是success之类的标示
	  handleResize: function handleResize(e) {
	    this.setState({
	      windowWidth: window.innerwidth,
	      windowHeight: window.innerHeight
	    });
	  },

	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    $.ajax({
	      url: '/read/book/queryReadPlan',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      type: 'post',
	      dataType: 'json',
	      cache: false,
	      timeout: 5000,
	      success: function success(data) {
	        _this.setState({
	          //读书计划列表状态初始化
	          bookPlan: data,
	          //默认选择的当前选择书籍为第一本dele
	          currentBook: data[0]
	        });
	      },
	      error: function error(jqXHR, textStatus, errorThrown) {
	        alert("获取阅读信息失败，请尝试刷新页面重试");
	      }
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    window.addEventListener('resize', this.handleResize);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    window.removeEventListener('resize', this.handleResize);
	  },

	  callbackHandler: function callbackHandler(args) {
	    this.setState({
	      subPageBack: args.color,
	      selectPage: args.currentPage,
	      //点击选项卡后查询当前书籍的阅读信息并回调写回主页面state
	      readInfo: args.readInfo
	    });
	  },

	  sildeWindowCallbackHandler: function sildeWindowCallbackHandler(args) {
	    //切换书的时候，currentBook对象变成已选择书籍的信息，所有选项卡收起
	    this.setState({
	      currentBook: args,
	      selectPage: '0'
	    });
	  },

	  _startRead: function _startRead() {
	    var _this2 = this;

	    $.ajax({
	      data: JSON.stringify({
	        douban_id: this.state.currentBook.douban_id
	      }),
	      url: '/read/book/startRead',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      type: 'post',
	      dataType: 'json',
	      cache: false,
	      timeout: 5000,
	      success: function success(data) {
	        _this2.setState({
	          tip: data.result
	        });
	      },
	      error: function error(jqXHR, textStatus, errorThrown) {
	        alert("操作失败，请重试");
	      }
	    });
	  },

	  _completeRead: function _completeRead() {
	    var _this3 = this;

	    $.ajax({
	      data: JSON.stringify({
	        douban_id: this.state.currentBook.douban_id
	      }),
	      url: '/read/book/completeRead',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      type: 'post',
	      dataType: 'json',
	      cache: false,
	      timeout: 5000,
	      success: function success(data) {
	        _this3.setState({
	          tip: data.result
	        });
	      },
	      error: function error(jqXHR, textStatus, errorThrown) {
	        alert("操作失败，请重试");
	      }
	    });
	  },

	  //提示框事件
	  handleAlertDismiss: function handleAlertDismiss() {
	    this.setState({
	      tip: ''
	    });
	  },


	  render: function render() {
	    var _this4 = this;

	    //点击按钮后返回的提示信息
	    var tipAlert;
	    if (this.state.tip) {
	      //如果返回成功
	      if (this.state.tip === "success") tipAlert = React.createElement(
	        Alert,
	        { onDismiss: this.handleAlertDismiss, style: { marginTop: '40', width: '200', marginLeft: 500 / 2 - 100 }, bsStyle: 'success', dismissAfter: 3000 },
	        '操作成功'
	      );else if (this.state.tip === "notcomplete") tipAlert = React.createElement(
	        Alert,
	        { onDismiss: this.handleAlertDismiss, style: { marginTop: '40', width: '200', marginLeft: 500 / 2 - 100 }, bsStyle: 'danger', dismissAfter: 3000 },
	        '全书未毕读,不能启读'
	      );else if (this.state.tip === "notstart") tipAlert = React.createElement(
	        Alert,
	        { onDismiss: this.handleAlertDismiss, style: { marginTop: '40', width: '200', marginLeft: 500 / 2 - 100 }, bsStyle: 'danger', dismissAfter: 3000 },
	        '未启读,不能毕读'
	      );else tipAlert = React.createElement('div', null);
	    }

	    //点击不同按钮，展示不同界面
	    var subContent;
	    //启读选项卡的功能
	    if (this.state.selectPage === '1') {
	      var text = undefined;
	      var startButton = undefined;
	      var times = undefined;
	      //如果已经读过，看已经读了多少遍
	      if (this.state.readInfo.length > 0) {
	        text = "正在读第 " + this.state.readInfo[0].read_time + " 遍";
	        times = this.state.readInfo[0].read_time + 1;

	        //如果还没有阅读完毕
	        if (this.state.readInfo[0].tag === '0') startButton = React.createElement(
	          Button,
	          { disabled: true, onClick: function onClick() {
	              _this4._startRead();
	            }, bsStyle: 'danger', style: { fontSize: '20' } },
	          React.createElement(Glyphicon, { glyph: 'file' }),
	          ' 未毕读,不能启读'
	        );
	        //如果已经阅读完这一遍
	        else if (this.state.readInfo[0].tag === '1') startButton = React.createElement(
	            Button,
	            { onClick: function onClick() {
	                _this4._startRead();
	              }, bsStyle: 'success', style: { fontSize: '20' } },
	            React.createElement(Glyphicon, { glyph: 'file' }),
	            ' 开始读第 ',
	            times,
	            ' 遍'
	          );
	      }
	      //如果是还没有开始读过（查询到的书籍阅读信息为空）
	      else if (this.state.readInfo.length === 0) {
	          text = "还没有开始读";
	          times = 1;
	          startButton = React.createElement(
	            Button,
	            { onClick: function onClick() {
	                _this4._startRead();
	              }, bsStyle: 'success', style: { fontSize: '20' } },
	            React.createElement(Glyphicon, { glyph: 'file' }),
	            ' 开始读第 ',
	            times,
	            ' 遍'
	          );
	        }

	      subContent = React.createElement(
	        'div',
	        { style: { width: '100%', paddingBottom: '60', backgroundColor: this.state.subPageBack, height: window.innerHeight - 300 - 80 - 60 - 60 } },
	        React.createElement(
	          'div',
	          { style: { width: '500', height: '400', paddingTop: '10', left: window.innerWidth / 2 - 250, top: (window.innerHeight + 300 + 80 + 60 + 60) / 2 - 200, position: 'fixed' } },
	          React.createElement(
	            'p',
	            { style: { fontSize: '24', fontFamily: '微软雅黑', color: '#000000', paddingBottom: '10' } },
	            text
	          ),
	          startButton,
	          tipAlert
	        )
	      );
	    } else if (this.state.selectPage === '2') subContent = React.createElement(
	      'div',
	      { style: { width: '100%', paddingBottom: '60', backgroundColor: this.state.subPageBack, height: window.innerHeight - 300 - 80 - 60 - 60 } },
	      React.createElement(
	        'div',
	        { style: { width: '500', height: '400', paddingTop: '10', left: window.innerWidth / 2 - 250, top: (window.innerHeight + 300 + 80 + 60 + 60) / 2 - 200, position: 'fixed' } },
	        React.createElement(Input, { id: 'page', type: 'number', min: '0', max: '200', bsSize: 'large', placeholder: '页码' }),
	        React.createElement(Input, { id: 'content', type: 'textarea', bsSize: 'large', placeholder: '文字' }),
	        React.createElement(Input, { type: 'textarea', bsSize: 'large', placeholder: '笔记' }),
	        React.createElement(
	          Button,
	          { bsStyle: 'warning', style: { fontSize: '20' } },
	          React.createElement(Glyphicon, { glyph: 'pencil' }),
	          ' 记笔记'
	        )
	      )
	    );else if (this.state.selectPage === '3') subContent = React.createElement(
	      'div',
	      { style: { width: '100%', paddingBottom: '60', backgroundColor: this.state.subPageBack, height: window.innerHeight - 300 - 80 - 60 - 60 } },
	      React.createElement(
	        'div',
	        { style: { width: '500', height: '400', paddingTop: '10', left: window.innerWidth / 2 - 250, top: (window.innerHeight + 300 + 80 + 60 + 60) / 2 - 200, position: 'fixed' } },
	        React.createElement(Input, { id: 'page', type: 'number', min: '0', max: '200', bsSize: 'large', placeholder: '页码' }),
	        React.createElement(
	          Button,
	          { bsStyle: 'info', style: { fontSize: '20' } },
	          React.createElement(Glyphicon, { glyph: 'pencil' }),
	          ' 做书签'
	        )
	      )
	    );else if (this.state.selectPage === '4') subContent = React.createElement(
	      'div',
	      { style: { width: '100%', paddingBottom: '60', backgroundColor: this.state.subPageBack, height: window.innerHeight - 300 - 80 - 60 - 60 } },
	      React.createElement(
	        'div',
	        { style: { width: '500', height: '400', paddingTop: '10', left: window.innerWidth / 2 - 250, top: (window.innerHeight + 300 + 80 + 60 + 60) / 2 - 200, position: 'fixed' } },
	        React.createElement(Input, { type: 'textarea', bsSize: 'large', placeholder: '评论' }),
	        React.createElement(
	          Button,
	          { bsStyle: 'danger', style: { fontSize: '20' } },
	          React.createElement(Glyphicon, { glyph: 'pencil' }),
	          ' 写书评'
	        )
	      )
	    );else if (this.state.selectPage === '5') {
	      //毕读选项卡的功能
	      var text = undefined;
	      var completeButton = undefined;
	      var times = undefined;
	      //如果已经读过，看已经读了多少遍
	      if (this.state.readInfo.length > 0) {
	        text = "正在读第 " + this.state.readInfo[0].read_time + " 遍";
	        times = this.state.readInfo[0].read_time;

	        //如果还没有启读
	        if (this.state.readInfo[0].tag === '1') completeButton = React.createElement(
	          Button,
	          { disabled: true, onClick: function onClick() {
	              _this4._completeRead();
	            }, bsStyle: 'danger', style: { fontSize: '20' } },
	          React.createElement(Glyphicon, { glyph: 'ok' }),
	          ' 未启读,不能毕读'
	        );
	        //如果已经启读
	        else if (this.state.readInfo[0].tag === '0') completeButton = React.createElement(
	            Button,
	            { onClick: function onClick() {
	                _this4._completeRead();
	              }, bsStyle: 'success', style: { fontSize: '20' } },
	            React.createElement(Glyphicon, { glyph: 'ok' }),
	            ' 第 ',
	            times,
	            ' 遍读完啦'
	          );
	      }
	      //如果是还没有开始读过（查询到的书籍阅读信息为空）
	      else if (this.state.readInfo.length === 0) {
	          text = "还没有开始读";
	          times = 1;
	          completeButton = React.createElement(
	            Button,
	            { disabled: true, onClick: function onClick() {
	                _this4._completeRead();
	              }, bsStyle: 'danger', style: { fontSize: '20' } },
	            React.createElement(Glyphicon, { glyph: 'ok' }),
	            ' 未启读,不能毕读'
	          );
	        }

	      subContent = React.createElement(
	        'div',
	        { style: { width: '100%', paddingBottom: '60', backgroundColor: this.state.subPageBack, height: window.innerHeight - 300 - 80 - 60 - 60 } },
	        React.createElement(
	          'div',
	          { style: { width: '500', height: '400', paddingTop: '10', left: window.innerWidth / 2 - 250, top: (window.innerHeight + 300 + 80 + 60 + 60) / 2 - 200, position: 'fixed' } },
	          React.createElement(
	            'p',
	            { style: { fontSize: '24', fontFamily: '微软雅黑', color: '#000000', paddingBottom: '10' } },
	            text
	          ),
	          completeButton,
	          tipAlert
	        )
	      );
	    } else if (this.state.selectPage === '6') subContent = React.createElement(
	      'div',
	      { style: { width: '100%', paddingBottom: '60', backgroundColor: this.state.subPageBack, height: window.innerHeight - 300 - 80 - 60 - 60 } },
	      React.createElement(
	        'div',
	        { style: { width: '500', height: '400', paddingTop: '10', left: window.innerWidth / 2 - 250, top: (window.innerHeight + 300 + 80 + 60 + 60) / 2 - 200, position: 'fixed' } },
	        React.createElement(
	          Button,
	          { bsStyle: 'success', style: { fontSize: '20' } },
	          React.createElement(Glyphicon, { glyph: 'send' }),
	          ' 分享'
	        ),
	        '    ',
	        React.createElement(
	          Button,
	          { bsStyle: 'danger', style: { fontSize: '20' } },
	          React.createElement(Glyphicon, { glyph: 'star' }),
	          ' 收藏'
	        )
	      )
	    );

	    var content = React.createElement(
	      'div',
	      { style: { paddingTop: '60', paddingBottom: '60', height: '100%' } },
	      React.createElement(
	        'div',
	        null,
	        React.createElement(SlideWindow, { bookPlan: this.state.bookPlan, callback: function callback(args) {
	            _this4.sildeWindowCallbackHandler(args);
	          } })
	      ),
	      React.createElement(
	        'div',
	        null,
	        React.createElement(
	          Grid,
	          { style: { width: '100%' } },
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '1', selectPage: this.state.selectPage, backColor: 'rgba(153,204,0,0.2)', text: '启读', icon: 'book', url: '/read/book/getReadInfo', data: this.state.currentBook, callback: function callback(tag) {
	                  _this4.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '2', selectPage: this.state.selectPage, backColor: 'rgba(255,204,0,0.2)', text: '笔记', icon: 'edit', callback: function callback(tag) {
	                  _this4.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '3', selectPage: this.state.selectPage, backColor: 'rgba(153,204,255,0.2)', text: '书签', icon: 'bookmark', callback: function callback(tag) {
	                  _this4.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '4', selectPage: this.state.selectPage, backColor: 'rgba(250,128,114,0.2)', text: '书评', icon: 'comment', callback: function callback(tag) {
	                  _this4.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '5', selectPage: this.state.selectPage, backColor: 'rgba(143,188,143,0.2)', text: '毕读', icon: 'check', url: '/read/book/getReadInfo', data: this.state.currentBook, callback: function callback(tag) {
	                  _this4.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '6', selectPage: this.state.selectPage, backColor: 'rgba(255,105,180,0.2)', text: '收藏', icon: 'heart', callback: function callback(tag) {
	                  _this4.callbackHandler(tag);
	                } })
	            )
	          )
	        )
	      ),
	      subContent
	    );

	    if (this.state.bookPlan.length === 0) content = React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        '阅读计划中没有书籍'
	      )
	    );

	    return React.createElement(
	      'div',
	      { style: { textAlign: 'center', backgroundColor: '#FFFFFF', backgroundSize: 'cover',
	          height: this.state.windowHeight, width: this.state.windowWidth } },
	      content,
	      React.createElement(MainHead, null),
	      React.createElement(Foot, null)
	    );
	  }
	});

	var cont = React.createElement(
	  'div',
	  null,
	  React.createElement(MyDiv, null)
	);

	ReactDOM.render(cont, document.getElementById('content'));

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Image = __webpack_require__(159).Image;
	var Grid = __webpack_require__(159).Grid;
	var Row = __webpack_require__(159).Row;
	var Col = __webpack_require__(159).Col;
	var DropdownButton = __webpack_require__(159).DropdownButton;
	var MenuItem = __webpack_require__(159).MenuItem;
	var Glyphicon = __webpack_require__(159).Glyphicon;
	var Input = __webpack_require__(159).Input;

	var $ = __webpack_require__(406);

	var styles = {
	  headStyle: {
	    width: '100%',
	    height: '60',
	    backgroundColor: 'rgba(219,188,86,0.6)',
	    top: '0',
	    position: 'fixed'
	  },
	  imageStyle: {
	    height: '46',
	    width: '46',
	    marginTop: '7',
	    marginLeft: '2%',
	    cursor: 'pointer',
	    backgroundColor: 'rgba(255,255,255,1)'
	  },
	  dropdown: {
	    height: '46',
	    marginTop: '7',
	    cursor: 'pointer',
	    backgroundColor: 'rgba(255,255,255,0)',
	    border: 'none',
	    color: '#FFFFFF'
	  }
	};

	//图书主界面页面header
	var MainHead = React.createClass({
	  displayName: 'MainHead',


	  getInitialState: function getInitialState() {
	    return {
	      userInfo: {}
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    $.ajax({
	      url: '/read/user/getUserInSession',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      type: 'post',
	      dataType: 'json',
	      cache: false,
	      timeout: 5000,
	      success: function success(data) {
	        _this.setState({
	          userInfo: data.userInfo
	        });
	      },
	      error: function error(jqXHR, textStatus, errorThrown) {
	        alert("您的登录状态已经失效，请重新登录");
	      }
	    });
	  },

	  //回调
	  toLogin: function toLogin() {
	    this.props.callback('login');
	  },

	  //右侧下拉菜单
	  handleSelect: function handleSelect(event, eventKey) {
	    if (eventKey === '1') {
	      document.getElementById('form').action = "/read/book/search";
	      document.getElementById('form').submit();
	    } else if (eventKey === '2') {
	      document.getElementById('form').action = "/read/book/plan";
	      document.getElementById('form').submit();
	    }
	  },


	  render: function render() {

	    return React.createElement(
	      'div',
	      { style: styles.headStyle },
	      React.createElement(
	        Grid,
	        { style: { width: '100%' }, className: 'text-center' },
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xsHidden: true, smHidden: true, md: 4, lg: 4 },
	            React.createElement('image', { src: '/assets/i/logo.png', style: { paddingTop: '10' } })
	          ),
	          React.createElement(Col, { xs: 4, sm: 4, md: 4, lg: 4 }),
	          React.createElement(
	            Col,
	            { xs: 8, sm: 8, md: 4, lg: 4 },
	            React.createElement(Image, { src: '/assets/i/head_whale.jpg', style: styles.imageStyle, circle: true }),
	            React.createElement(
	              DropdownButton,
	              { bsStyle: 'link', id: 'dropdown-button', bsSize: 'large', title: this.state.userInfo.user_name, style: styles.dropdown, onSelect: this.handleSelect },
	              React.createElement(
	                MenuItem,
	                { eventKey: '1' },
	                React.createElement(Glyphicon, { glyph: 'tags' }),
	                '    ',
	                React.createElement(
	                  'b',
	                  null,
	                  '选择书籍'
	                )
	              ),
	              React.createElement(
	                MenuItem,
	                { eventKey: '2' },
	                React.createElement(Glyphicon, { glyph: 'list-alt' }),
	                '    ',
	                React.createElement(
	                  'b',
	                  null,
	                  '阅读计划'
	                )
	              ),
	              React.createElement(
	                MenuItem,
	                { eventKey: '9' },
	                React.createElement(Glyphicon, { glyph: 'log-out' }),
	                '    ',
	                React.createElement(
	                  'b',
	                  null,
	                  '退出登录'
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = MainHead;

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Glyphicon = __webpack_require__(159).Glyphicon;

	var $ = __webpack_require__(406);

	//下拉按钮,阅读主界面用到了
	//props:
	//backColor 背景颜色
	//text 文字
	//icon 图标
	//focused 是否激活
	//callback 回调
	//page 当前页面编号
	//url 点击的时候要请求数据的url
	var PullButton = React.createClass({
	  displayName: 'PullButton',


	  getInitialState: function getInitialState() {
	    return {
	      focused: false,
	      active: false
	    };
	  },

	  //点击某一项时通过回调方法修改父容器中的prop值为新选中的项目selectPage值
	  //然后将最新的selectPage值通过props传递给本组件
	  //在该方法中对新的选中selectPage值与本组件的固定page值作比较
	  //如果是一致的说明被选中，如果不一致说明未选中
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      active: nextProps.selectPage === nextProps.bPage ? true : false
	    });
	  },

	  //鼠标放在按钮上时
	  _mouseOverHandler: function _mouseOverHandler() {
	    this.setState({
	      focused: true
	    });
	  },

	  //鼠标离开按钮上时
	  _mouseOutHandler: function _mouseOutHandler() {
	    this.setState({
	      focused: false
	    });
	  },

	  //回调
	  _onclickHandler: function _onclickHandler() {
	    var _this = this;

	    //如果传入了要访问的url，则发起请求
	    if (this.props.url) {
	      $.ajax({
	        data: JSON.stringify(this.props.data),
	        url: this.props.url,
	        headers: {
	          'Content-Type': 'application/json'
	        },
	        type: 'post',
	        dataType: 'json',
	        cache: false,
	        timeout: 5000,
	        success: function success(data) {
	          _this.props.callback({ color: _this.props.backColor, currentPage: _this.props.bPage, readInfo: data });
	        },
	        error: function error(jqXHR, textStatus, errorThrown) {
	          alert("获取阅读信息失败，请尝试刷新页面重试");
	        }
	      });
	    } else {
	      this.props.callback({ color: this.props.backColor, currentPage: this.props.bPage });
	    }
	  },

	  render: function render() {
	    var _this2 = this;

	    var buttonStyle;
	    if (this.state.active || this.state.focused) buttonStyle = {
	      backgroundColor: this.props.backColor,
	      fontFamily: '微软雅黑',
	      fontSize: '20',
	      paddingTop: '25',
	      height: '80',
	      opacity: '0.8',
	      cursor: 'pointer',
	      color: '#666666'
	    };else buttonStyle = {
	      backgroundColor: this.props.backColor,
	      fontFamily: '微软雅黑',
	      fontSize: '20',
	      paddingTop: '12',
	      height: '54',
	      opacity: '0.8',
	      cursor: 'pointer',
	      color: '#000000'
	    };

	    var content = React.createElement(
	      'div',
	      { style: buttonStyle, onMouseOver: function onMouseOver() {
	          _this2._mouseOverHandler();
	        }, onMouseOut: function onMouseOut() {
	          _this2._mouseOutHandler();
	        }, onClick: function onClick() {
	          _this2._onclickHandler();
	        } },
	      React.createElement(Glyphicon, { glyph: this.props.icon }),
	      ' ',
	      this.props.text
	    );
	    return React.createElement(
	      'div',
	      null,
	      content
	    );
	  }
	});

	module.exports = PullButton;

/***/ }

});