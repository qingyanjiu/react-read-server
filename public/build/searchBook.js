webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);
	var Button = __webpack_require__(159).Button;
	var Image = __webpack_require__(159).Image;

	var Input = __webpack_require__(159).Input;
	var Glyphicon = __webpack_require__(159).Glyphicon;

	var SearchHead = __webpack_require__(410);
	var Foot = __webpack_require__(404);
	var MyPagination = __webpack_require__(411);

	//展示容器,捕捉窗口改变大小的事件，保证背景图显示正确
	//currentPage

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

	    var content = React.createElement(
	      'div',
	      { style: { paddingTop: '60', paddingBottom: '60', height: '100%' } },
	      React.createElement(MyPagination, null),
	      ';'
	    );

	    return React.createElement(
	      'div',
	      { style: { textAlign: 'center', backgroundColor: '#FFFFFF', backgroundSize: 'cover',
	          height: this.state.windowHeight, width: this.state.windowWidth } },
	      content,
	      React.createElement(SearchHead, null),
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

/***/ 410:
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
	var SearchHead = React.createClass({
	  displayName: 'SearchHead',


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

	  startSearch: function startSearch() {
	    var _this2 = this;

	    $.ajax({
	      url: '/read/book/search',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      type: 'post',
	      dataType: 'json',
	      cache: false,
	      timeout: 5000,
	      success: function success(data) {
	        _this2.setState({
	          userInfo: data.userInfo
	        });
	      },
	      error: function error(jqXHR, textStatus, errorThrown) {
	        alert("系统出错，请稍后再试");
	      }
	    });
	  },

	  render: function render() {
	    var _this3 = this;

	    //搜索按钮
	    var innerGlyphicon = React.createElement(Glyphicon, { glyph: 'search', style: { cursor: 'pointer' }, onClick: function onClick() {
	        _this3.startSearch();
	      } });

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
	            React.createElement(
	              'div',
	              { style: { paddingLeft: '20%', paddingRight: '20%', paddingTop: '12' } },
	              React.createElement(Input, { type: 'text', placeholder: '请输入书名搜索', addonAfter: innerGlyphicon })
	            )
	          ),
	          React.createElement(
	            Col,
	            { xs: 8, sm: 8, md: 4, lg: 4 },
	            React.createElement(Image, { src: '/assets/i/head_whale.jpg', style: styles.imageStyle, onClick: function onClick() {
	                _this3.toRegister();
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

	module.exports = SearchHead;

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Pagination = __webpack_require__(159).Pagination;

	var MyPagination = React.createClass({
	  displayName: 'MyPagination',
	  getInitialState: function getInitialState() {
	    return {
	      activePage: 1
	    };
	  },
	  handleSelect: function handleSelect(event, selectedEvent) {
	    this.setState({
	      activePage: selectedEvent.eventKey
	    });
	  },
	  render: function render() {
	    return React.createElement(Pagination, {
	      prev: true,
	      next: true,
	      first: true,
	      last: true,
	      ellipsis: true,
	      boundaryLinks: true,
	      items: 20,
	      maxButtons: 5,
	      activePage: this.state.activePage,
	      onSelect: this.handleSelect });
	  }
	});

	module.exports = MyPagination;

/***/ }

});