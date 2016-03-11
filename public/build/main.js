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
	      h: 400
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
	//currentPage
	//main--主页
	//register--注册
	//login--登录
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

	    var subContent;

	    subContent = React.createElement(
	      'div',
	      { style: { width: '100%', paddingBottom: '60', backgroundColor: this.state.subPageBack, opacity: '0.1', height: this.state.windowHeight - 400 - 100 - 60 - 60 } },
	      'adkfjaklsdjflka'
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
	              React.createElement(PullButton, { bPage: '1', selectPage: this.state.selectPage, backColor: '#99CC00', text: '启读', icon: 'book', callback: function callback(tag) {
	                  _this.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '2', selectPage: this.state.selectPage, backColor: '#FFCC00', text: '笔记', icon: 'edit', callback: function callback(tag) {
	                  _this.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '3', selectPage: this.state.selectPage, backColor: '#99CCFF', text: '书签', icon: 'bookmark', callback: function callback(tag) {
	                  _this.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '4', selectPage: this.state.selectPage, backColor: '#FA8072', text: '书评', icon: 'comment', callback: function callback(tag) {
	                  _this.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '5', selectPage: this.state.selectPage, backColor: '#8FBC8F', text: '毕读', icon: 'check', callback: function callback(tag) {
	                  _this.callbackHandler(tag);
	                } })
	            ),
	            React.createElement(
	              Col,
	              { md: 2 },
	              React.createElement(PullButton, { bPage: '6', selectPage: this.state.selectPage, backColor: '#FF69B4', text: '最爱', icon: 'heart', callback: function callback(tag) {
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
	        alert("系统出错，请稍后再试");
	      }
	    });
	  },

	  //回调
	  toLogin: function toLogin() {
	    this.props.callback('login');
	  },

	  render: function render() {
	    var _this2 = this;

	    var content = React.createElement(
	      'p',
	      { style: { fontSize: '24', fontFamily: '微软雅黑', paddingTop: '12', color: '#FFFFFF' } },
	      '乐读'
	    );
	    return React.createElement(
	      'div',
	      { style: styles.headStyle },
	      React.createElement(
	        Grid,
	        { style: { width: '100%' } },
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xsHidden: true, smHidden: true, md: 4, lg: 4 },
	            React.createElement('image', { src: '/assets/i/logo.png', style: { paddingTop: '10' } })
	          ),
	          React.createElement(
	            Col,
	            { xs: 4, sm: 4, md: 4, lg: 4 },
	            content
	          ),
	          React.createElement(
	            Col,
	            { xs: 8, sm: 8, md: 4, lg: 4 },
	            React.createElement(Image, { src: '/assets/i/head_whale.jpg', style: styles.imageStyle, onClick: function onClick() {
	                _this2.toRegister();
	              }, circle: true }),
	            React.createElement(
	              DropdownButton,
	              { bsStyle: 'link', id: 'dropdown-button', bsSize: 'large', title: this.state.userInfo.user_name, style: styles.dropdown },
	              React.createElement(
	                MenuItem,
	                { eventKey: '1' },
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
	      paddingTop: '35',
	      height: '100',
	      opacity: '0.8',
	      cursor: 'pointer',
	      color: '#FFFFFF'
	    };else buttonStyle = {
	      backgroundColor: this.props.backColor,
	      fontFamily: '微软雅黑',
	      fontSize: '20',
	      paddingTop: '15',
	      height: '60',
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