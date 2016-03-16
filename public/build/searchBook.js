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
	var ListGroup = __webpack_require__(159).ListGroup;
	var ListGroupItem = __webpack_require__(159).ListGroupItem;

	var SearchHead = __webpack_require__(410);
	var Foot = __webpack_require__(404);
	var MyPagination = __webpack_require__(411);

	var $ = __webpack_require__(406);

	//展示容器,捕捉窗口改变大小的事件，保证背景图显示正确
	//currentPage

	var MyDiv = React.createClass({
	  displayName: 'MyDiv',


	  getInitialState: function getInitialState() {
	    return {
	      windowWidth: window.innerwidth,
	      windowHeight: window.innerHeight,
	      bookData: { books: {} },
	      pageType: 'listPage', //当前页面类型listPage是图书列表，detailPage是图书详情
	      searchText: ''
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
	      pageType: 'listPage',
	      bookData: args,
	      searchText: args.text
	    });
	  },

	  pagerCallbackHandler: function pagerCallbackHandler(args) {
	    this.setState({
	      pageType: 'listPage',
	      bookData: args,
	      searchText: args.text
	    });
	  },

	  //点击某一行展示书本详细信息
	  showBookDetail: function showBookDetail(args) {
	    var _this = this;

	    $.ajax({
	      data: JSON.stringify({
	        id: args
	      }),
	      url: '/read/book/detail',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      type: 'post',
	      dataType: 'json',
	      cache: false,
	      timeout: 5000,
	      success: function success(data) {
	        alert(data.title);
	        _this.setState({
	          // pageType : 'detailPage',
	          // bookData : data
	        });
	      },
	      error: function error(jqXHR, textStatus, errorThrown) {
	        alert("获取书籍信息失败，请重试");
	      }
	    });
	  },

	  render: function render() {
	    var _this2 = this;

	    var content = [];
	    if (this.state.pageType === 'listPage' && this.state.bookData.books.length > 0) {
	      content.push(React.createElement(ListGroupItem, { key: '0000', header: '书籍列表', bsStyle: 'success' }));

	      var _loop = function _loop(i) {
	        content.push(
	        //点击某一行展示书本详细信息
	        React.createElement(
	          ListGroupItem,
	          { key: _this2.state.bookData.books[i].id, href: '#', onClick: function onClick() {
	              _this2.showBookDetail(_this2.state.bookData.books[i].id);
	            } },
	          _this2.state.bookData.books[i].title,
	          '(',
	          _this2.state.bookData.books[i].author,
	          ')'
	        ));
	      };

	      for (var i = 0; i < this.state.bookData.books.length; i++) {
	        _loop(i);
	      }
	    }

	    var pager;
	    if (this.state.bookData.books.length > 0) pager = React.createElement(MyPagination, { total: this.state.bookData.total, text: this.state.searchText, callback: function callback(data) {
	        _this2.pagerCallbackHandler(data);
	      } });

	    return React.createElement(
	      'div',
	      { style: { backgroundColor: '#FFFFFF', backgroundSize: 'cover',
	          height: this.state.windowHeight, width: this.state.windowWidth } },
	      React.createElement(
	        'div',
	        { style: { paddingTop: '60', paddingBottom: '60', width: '100%' } },
	        React.createElement(
	          ListGroup,
	          { style: { paddingTop: '60', paddingBottom: '60', height: '100%', paddingLeft: '10%', paddingRight: '10%' } },
	          content
	        ),
	        React.createElement(
	          'div',
	          { className: 'text-center' },
	          pager
	        )
	      ),
	      React.createElement(SearchHead, { callback: function callback(data) {
	          _this2.callbackHandler(data);
	        } }),
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
	var Button = __webpack_require__(159).Button;

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
	        alert("您的登录状态已经失效，请重新登录");
	      }
	    });
	  },

	  startSearch: function startSearch() {
	    var _this2 = this;

	    $.ajax({
	      data: JSON.stringify({
	        text: document.getElementById('search').value,
	        page: 1
	      }),
	      url: '/read/book/search',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      type: 'post',
	      dataType: 'json',
	      cache: false,
	      timeout: 5000,
	      success: function success(data) {
	        _this2.props.callback(data);
	      },
	      error: function error(jqXHR, textStatus, errorThrown) {
	        alert("系统出错，请稍后再试");
	      }
	    });
	  },

	  pressEnterHandler: function pressEnterHandler(event) {
	    var e = event || window.event || arguments.callee.caller.arguments[0];
	    // enter 键
	    if (e && e.keyCode == 13) {
	      this.startSearch();
	    }
	  },

	  //右侧下拉菜单
	  handleSelect: function handleSelect(event, eventKey) {
	    if (eventKey === '0') {
	      document.getElementById('form').action = "/read/book/main";
	      document.getElementById('form').submit();
	    }
	  },


	  render: function render() {
	    var _this3 = this;

	    //搜索按钮
	    var button = React.createElement(
	      Button,
	      { onClick: function onClick() {
	          _this3.startSearch();
	        } },
	      React.createElement(Glyphicon, { glyph: 'search', style: { cursor: 'pointer' } })
	    );

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
	          React.createElement(
	            Col,
	            { xs: 6, sm: 6, md: 4, lg: 4 },
	            React.createElement(
	              'div',
	              { style: { paddingLeft: '30%', paddingRight: '30%', paddingTop: '12' } },
	              React.createElement(Input, { type: 'text', id: 'search', placeholder: '搜索...', buttonAfter: button, onKeyDown: function onKeyDown(event) {
	                  _this3.pressEnterHandler(event);
	                } })
	            )
	          ),
	          React.createElement(
	            Col,
	            { xs: 6, sm: 6, md: 4, lg: 4 },
	            React.createElement(Image, { src: '/assets/i/head_whale.jpg', style: styles.imageStyle, circle: true }),
	            React.createElement(
	              DropdownButton,
	              { bsStyle: 'link', id: 'dropdown-button', bsSize: 'large', title: this.state.userInfo.user_name, style: styles.dropdown, onSelect: this.handleSelect },
	              React.createElement(
	                MenuItem,
	                { eventKey: '0' },
	                React.createElement(Glyphicon, { glyph: 'home' }),
	                '    ',
	                React.createElement(
	                  'b',
	                  null,
	                  '返回主页'
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

	module.exports = SearchHead;

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Pagination = __webpack_require__(159).Pagination;

	var $ = __webpack_require__(406);

	var MyPagination = React.createClass({
	  displayName: 'MyPagination',
	  getInitialState: function getInitialState() {
	    return {
	      activePage: 1
	    };
	  },


	  //页面刷新时（开始新的搜索），将页码置为1
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      activePage: 1
	    });
	  },

	  handleSelect: function handleSelect(event, selectedEvent) {
	    var _this = this;

	    $.ajax({
	      data: JSON.stringify({
	        text: this.props.text,
	        page: selectedEvent.eventKey
	      }),
	      url: '/read/book/search',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      type: 'post',
	      dataType: 'json',
	      cache: false,
	      timeout: 5000,
	      success: function success(data) {
	        _this.props.callback(data);
	        _this.setState({
	          activePage: selectedEvent.eventKey
	        });
	      },
	      error: function error(jqXHR, textStatus, errorThrown) {
	        alert("查询书籍出错，请稍后再试");
	      }
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
	      items: Math.ceil(this.props.total / 10),
	      maxButtons: 5,
	      activePage: this.state.activePage,
	      onSelect: this.handleSelect

	    });
	  }
	});

	module.exports = MyPagination;

/***/ }

});