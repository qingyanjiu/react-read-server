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

	var MainHead = __webpack_require__(408);

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
	      h: '300'
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
	      { activeIndex: this.state.index, direction: this.state.direction, onSelect: this.handleSelect },
	      React.createElement(
	        CarouselItem,
	        null,
	        React.createElement(
	          'div',
	          { className: 'text-center', style: { backgroundColor: 'rgba(0,0,0,0.1)' } },
	          React.createElement('img', { alt: '白夜行', src: 'https://img1.doubanio.com/lpic/s4610502.jpg' })
	        ),
	        React.createElement(
	          'div',
	          { className: 'carousel-caption' },
	          React.createElement(
	            'h3',
	            null,
	            'First slide label'
	          ),
	          React.createElement(
	            'p',
	            null,
	            'Nulla vitae elit libero, a pharetra augue mollis interdum.'
	          )
	        )
	      ),
	      React.createElement(
	        CarouselItem,
	        null,
	        React.createElement(
	          'div',
	          { className: 'text-center', style: { backgroundColor: 'rgba(0,0,0,0.1)' } },
	          React.createElement('img', { alt: '白夜行', src: 'https://img1.doubanio.com/lpic/s4610502.jpg' })
	        ),
	        React.createElement(
	          'div',
	          { className: 'carousel-caption' },
	          React.createElement(
	            'h3',
	            null,
	            'First slide label'
	          ),
	          React.createElement(
	            'p',
	            null,
	            'Nulla vitae elit libero, a pharetra augue mollis interdum.'
	          )
	        )
	      ),
	      React.createElement(
	        CarouselItem,
	        null,
	        React.createElement(
	          'div',
	          { className: 'text-center', style: { backgroundColor: 'rgba(0,0,0,0.1)' } },
	          React.createElement('img', { alt: '白夜行', src: 'https://img1.doubanio.com/lpic/s4610502.jpg' })
	        ),
	        React.createElement(
	          'div',
	          { className: 'carousel-caption' },
	          React.createElement(
	            'h3',
	            null,
	            'First slide label'
	          ),
	          React.createElement(
	            'p',
	            null,
	            'Nulla vitae elit libero, a pharetra augue mollis interdum.'
	          )
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
	      windowWidth: window.innerWidth,
	      windowHeight: window.innerHeight,
	      currentPage: 'index'
	    };
	  },

	  handleResize: function handleResize(e) {
	    this.setState({
	      windowWidth: window.innerWidth,
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
	      currentPage: args
	    });
	  },

	  render: function render() {
	    var cont;
	    if (this.state.currentPage === 'index') cont = React.createElement(
	      'div',
	      { style: { paddingTop: '60', paddingBottom: '60' } },
	      React.createElement(
	        'p',
	        { style: { fontFamily: '微软雅黑', fontSize: '40', paddingTop: this.state.windowHeight / 10 } },
	        '乐读'
	      ),
	      React.createElement(SlideWindow, null)
	    );else if (this.state.currentPage === 'login') cont = React.createElement(Login, null);else if (this.state.currentPage === 'register') cont = React.createElement(Register, null);

	    return React.createElement(
	      'div',
	      { style: { textAlign: 'center', backgroundColor: '#FFFFFF', backgroundSize: 'cover',
	          height: this.state.windowHeight, width: this.state.windowWidth } },
	      React.createElement(MainHead, null),
	      cont
	    );
	  }
	});

	var content = React.createElement(
	  'div',
	  null,
	  React.createElement(MyDiv, null)
	);

	ReactDOM.render(content, document.getElementById('content'));

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
	    backgroundColor: 'rgba(0,0,0,0.3)',
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

/***/ }

});