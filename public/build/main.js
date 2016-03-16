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

	var MainHead = __webpack_require__(408);
	var Foot = __webpack_require__(404);
	var PullButton = __webpack_require__(409);

	var tip = {
	  fontFamily: '微软雅黑',
	  fontSize: '18',
	  color: '#A98580',
	  marginTop: '4%',
	  textAlign: 'center'
	};

	//滚动图片组建
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
	    // alert('selected=' + selectedIndex + ', direction=' + selectedDirection);
	    this.setState({
	      index: selectedIndex,
	      direction: selectedDirection
	    });
	  },
	  render: function render() {
	    return React.createElement(
	      Carousel,
	      { activeIndex: this.state.index, direction: this.state.direction, onSelect: this.handleSelect, indicators: false },
	      React.createElement(
	        CarouselItem,
	        null,
	        React.createElement(
	          'div',
	          { className: 'text-center', style: { backgroundColor: 'rgba(0,0,0,0.1)' } },
	          React.createElement('img', { alt: '白夜行', src: 'https://img1.doubanio.com/lpic/s4610502.jpg', style: { height: this.state.h, width: '210' } }),
	          React.createElement('div', { title: '启读历史', style: { backgroundColor: 'rgba(153,204,0,0.4)', width: '30', height: '20', position: 'fixed', cursor: 'pointer', top: 10, left: (window.innerWidth + 210) / 2 } }),
	          React.createElement('div', { title: '本书笔记', style: { backgroundColor: 'rgba(255,204,0,0.4)', width: '40', height: '20', position: 'fixed', cursor: 'pointer', top: 60, left: (window.innerWidth + 210) / 2 } }),
	          React.createElement('div', { title: '历史书签', style: { backgroundColor: 'rgba(153,204,255,0.4)', width: '50', height: '20', position: 'fixed', cursor: 'pointer', top: 110, left: (window.innerWidth + 210) / 2 } }),
	          React.createElement('div', { title: '历史书评', style: { backgroundColor: 'rgba(250,128,114,0.4)', width: '60', height: '20', position: 'fixed', cursor: 'pointer', top: 160, left: (window.innerWidth + 210) / 2 } }),
	          React.createElement('div', { title: '毕读历史', style: { backgroundColor: 'rgba(143,188,143,0.4)', width: '70', height: '20', position: 'fixed', cursor: 'pointer', top: 210, left: (window.innerWidth + 210) / 2 } }),
	          React.createElement('div', { title: '分享历史', style: { backgroundColor: 'rgba(255,105,180,0.4)', width: '80', height: '20', position: 'fixed', cursor: 'pointer', top: 260, left: (window.innerWidth + 210) / 2 } })
	        )
	      ),
	      React.createElement(
	        CarouselItem,
	        null,
	        React.createElement(
	          'div',
	          { className: 'text-center', style: { backgroundColor: 'rgba(0,0,0,0.1)' } },
	          React.createElement('img', { alt: '白夜行', src: 'https://img1.doubanio.com/lpic/s4610502.jpg', style: { height: this.state.h } })
	        )
	      ),
	      React.createElement(
	        CarouselItem,
	        null,
	        React.createElement(
	          'div',
	          { className: 'text-center', style: { backgroundColor: 'rgba(0,0,0,0.1)' } },
	          React.createElement('img', { alt: '白夜行', src: 'https://img1.doubanio.com/lpic/s4610502.jpg', style: { height: this.state.h } })
	        )
	      )
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
	      subPageBack: '#FFFFFF'
	    };
	  },

	  handleResize: function handleResize(e) {
	    this.setState({
	      windowWidth: window.innerwidth,
	      windowHeight: window.innerHeight
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
	      selectPage: args.currentPage
	    });
	  },

	  render: function render() {
	    var _this = this;

	    //点击不同按钮，展示不同界面
	    var subContent;
	    if (this.state.selectPage === '1') subContent = React.createElement(
	      'div',
	      { style: { width: '100%', paddingBottom: '60', backgroundColor: this.state.subPageBack, height: window.innerHeight - 300 - 80 - 60 - 60 } },
	      React.createElement(
	        'div',
	        { style: { width: '500', height: '400', paddingTop: '10', left: window.innerWidth / 2 - 250, top: (window.innerHeight + 300 + 80 + 60 + 60) / 2 - 200, position: 'fixed' } },
	        React.createElement(
	          'p',
	          { style: { fontSize: '24', fontFamily: '微软雅黑', color: '#000000', paddingBottom: '10' } },
	          '还没有开始读'
	        ),
	        React.createElement(
	          Button,
	          { bsStyle: 'success', style: { fontSize: '20' } },
	          React.createElement(Glyphicon, { glyph: 'file' }),
	          ' 开始读第 1 遍'
	        )
	      )
	    );else if (this.state.selectPage === '2') subContent = React.createElement(
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
	    );else if (this.state.selectPage === '5') subContent = React.createElement(
	      'div',
	      { style: { width: '100%', paddingBottom: '60', backgroundColor: this.state.subPageBack, height: window.innerHeight - 300 - 80 - 60 - 60 } },
	      React.createElement(
	        'div',
	        { style: { width: '500', height: '400', paddingTop: '10', left: window.innerWidth / 2 - 250, top: (window.innerHeight + 300 + 80 + 60 + 60) / 2 - 200, position: 'fixed' } },
	        React.createElement(
	          'p',
	          { style: { fontSize: '24', fontFamily: '微软雅黑', color: '#000000', paddingBottom: '10' } },
	          '离开始读已经过了 3 天'
	        ),
	        React.createElement(
	          Button,
	          { bsStyle: 'success', style: { fontSize: '20' } },
	          React.createElement(Glyphicon, { glyph: 'ok' }),
	          ' 第 1 遍读完啦'
	        )
	      )
	    );else if (this.state.selectPage === '6') subContent = React.createElement(
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
	        React.createElement(SlideWindow, null)
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
	              React.createElement(PullButton, { bPage: '1', selectPage: this.state.selectPage, backColor: 'rgba(153,204,0,0.2)', text: '启读', icon: 'book', callback: function callback(tag) {
	                  _this.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '2', selectPage: this.state.selectPage, backColor: 'rgba(255,204,0,0.2)', text: '笔记', icon: 'edit', callback: function callback(tag) {
	                  _this.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '3', selectPage: this.state.selectPage, backColor: 'rgba(153,204,255,0.2)', text: '书签', icon: 'bookmark', callback: function callback(tag) {
	                  _this.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '4', selectPage: this.state.selectPage, backColor: 'rgba(250,128,114,0.2)', text: '书评', icon: 'comment', callback: function callback(tag) {
	                  _this.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '5', selectPage: this.state.selectPage, backColor: 'rgba(143,188,143,0.2)', text: '毕读', icon: 'check', callback: function callback(tag) {
	                  _this.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '6', selectPage: this.state.selectPage, backColor: 'rgba(255,105,180,0.2)', text: '收藏', icon: 'heart', callback: function callback(tag) {
	                  _this.callbackHandler(tag);
	                } })
	            )
	          )
	        )
	      ),
	      subContent
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

	//页面header
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
	                  '阅读管理'
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

	//下拉按钮
	//props:
	//backColor 背景颜色
	//text 文字
	//icon 图标
	//focused 是否激活
	//callback 回调
	//page 当前页面编号
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
	    this.props.callback({ color: this.props.backColor, currentPage: this.props.bPage });
	  },

	  render: function render() {
	    var _this = this;

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
	          _this._mouseOverHandler();
	        }, onMouseOut: function onMouseOut() {
	          _this._mouseOutHandler();
	        }, onClick: function onClick() {
	          _this._onclickHandler();
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