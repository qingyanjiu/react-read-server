webpackJsonp([3],{

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
	var Input = __webpack_require__(159).Input;
	var Glyphicon = __webpack_require__(159).Glyphicon;
	var ListGroup = __webpack_require__(159).ListGroup;
	var ListGroupItem = __webpack_require__(159).ListGroupItem;
	var Alert = __webpack_require__(159).Alert;
	var DropdownButton = __webpack_require__(159).DropdownButton;
	var MenuItem = __webpack_require__(159).MenuItem;

	var SearchHead = __webpack_require__(410);
	var Foot = __webpack_require__(404);
	var MyPagination = __webpack_require__(411);
	var LoadingButton = __webpack_require__(412);

	var $ = __webpack_require__(406);
	//搜索图书界面的js文件

	//下拉框选择添加到那个月的计划
	var DropDown = React.createClass({
	  displayName: 'DropDown',

	  onSelectHanlder: function onSelectHanlder(event, eventKey) {
	    var _this = this;

	    $.ajax({
	      data: JSON.stringify({
	        month: eventKey,
	        callData: this.props.callData
	      }),
	      url: "/read/book/addReadPlan",
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      type: 'post',
	      dataType: 'json',
	      cache: false,
	      timeout: 5000,
	      success: function success(data) {
	        _this.props.callback(data);
	      },
	      error: function error(jqXHR, textStatus, errorThrown) {
	        alert("操作失败，请重试");
	      }
	    });
	  },

	  render: function render() {
	    var date = new Date();
	    var currentMonth = date.getMonth() + 1;

	    var content = [];
	    for (var i = currentMonth; i <= 12; i++) {
	      content.push(React.createElement(
	        MenuItem,
	        { eventKey: i },
	        i,
	        '月'
	      ));
	    }

	    return React.createElement(
	      DropdownButton,
	      { bsStyle: 'success', title: '添加阅读计划', id: 'down', style: { height: '50', fontSize: '20', borderRadius: '25' }, onSelect: this.onSelectHanlder },
	      content
	    );
	  }
	});

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
	      searchText: '',
	      tip: ''
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
	    var _this2 = this;

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
	        _this2.setState({
	          pageType: 'detailPage',
	          bookData: data
	        });
	      },
	      error: function error(jqXHR, textStatus, errorThrown) {
	        alert("获取书籍信息失败，请重试");
	      }
	    });
	  },

	  _addReadPlanHandler: function _addReadPlanHandler(args) {
	    if (args) {
	      this.setState({
	        tip: args.result
	      });
	    }
	  },

	  //提示框事件
	  handleAlertDismiss: function handleAlertDismiss() {
	    this.setState({
	      tip: ''
	    });
	  },


	  render: function render() {
	    var _this3 = this;

	    var tipAlert;
	    if (this.state.tip) {
	      if (this.state.tip === "success") tipAlert = React.createElement(
	        Alert,
	        { onDismiss: this.handleAlertDismiss, style: { marginTop: '40', width: '200', marginLeft: window.innerWidth / 2 - 100 }, bsStyle: 'success', dismissAfter: 3000 },
	        '添加到阅读计划成功'
	      );else if (this.state.tip === "exist") tipAlert = React.createElement(
	        Alert,
	        { onDismiss: this.handleAlertDismiss, style: { marginTop: '40', width: '200', marginLeft: window.innerWidth / 2 - 100 }, bsStyle: 'danger', dismissAfter: 3000 },
	        '已存在于阅读计划中'
	      );else tipAlert = React.createElement('div', null);
	    }

	    var content = [];
	    if (this.state.pageType === 'listPage' && this.state.bookData.books.length > 0) {
	      content.push(React.createElement(ListGroupItem, { key: '0000', header: '书籍列表', bsStyle: 'success' }));

	      var _loop = function _loop(i) {
	        content.push(
	        //点击某一行展示书本详细信息
	        React.createElement(
	          ListGroupItem,
	          { key: _this3.state.bookData.books[i].id, href: '#', onClick: function onClick() {
	              _this3.showBookDetail(_this3.state.bookData.books[i].id);
	            } },
	          _this3.state.bookData.books[i].title,
	          '(',
	          _this3.state.bookData.books[i].author,
	          ')'
	        ));
	      };

	      for (var i = 0; i < this.state.bookData.books.length; i++) {
	        _loop(i);
	      }
	    }

	    var pager;
	    if (this.state.pageType === 'listPage' && this.state.bookData.books.length > 0) pager = React.createElement(MyPagination, { total: this.state.bookData.total, text: this.state.searchText, callback: function callback(data) {
	        _this3.pagerCallbackHandler(data);
	      } });

	    var mainContent;
	    if (this.state.pageType === 'listPage') mainContent = React.createElement(
	      'div',
	      { style: { backgroundColor: '#FEFEFE', backgroundSize: 'cover',
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
	          _this3.callbackHandler(data);
	        } }),
	      React.createElement(Foot, null)
	    );else if (this.state.pageType === 'detailPage') mainContent = React.createElement(
	      'div',
	      { style: { backgroundColor: '#FEFEFE', backgroundSize: 'cover',
	          height: this.state.windowHeight, width: this.state.windowWidth } },
	      React.createElement(
	        'div',
	        { style: { paddingTop: '60', paddingBottom: '60', width: '100%' } },
	        React.createElement(
	          Grid,
	          { style: { paddingTop: '60' } },
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { xs: 12, sm: 12, md: 4, lg: 4, className: 'text-center' },
	              React.createElement(Image, { src: this.state.bookData.images.large, alt: this.state.bookData.title,
	                style: { height: '400', borderStyle: 'solid', borderWidth: '1', borderColor: '#DDDDDD' } })
	            ),
	            React.createElement(
	              Col,
	              { xs: 12, sm: 12, md: 8, lg: 8, className: 'text-center' },
	              React.createElement(
	                'div',
	                { className: 'text-left', style: { height: '400', overflow: 'auto' } },
	                React.createElement(
	                  'h2',
	                  null,
	                  this.state.bookData.title,
	                  '   (豆瓣评分:',
	                  this.state.bookData.rating.average,
	                  ')'
	                ),
	                React.createElement(
	                  'h4',
	                  null,
	                  this.state.bookData.author
	                ),
	                React.createElement(
	                  'p',
	                  { style: { fontSize: '16' } },
	                  this.state.bookData.summary
	                )
	              )
	            )
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'text-center', style: { paddingBottom: '80' } },
	        React.createElement(DropDown, { callback: function callback(data) {
	            _this3._addReadPlanHandler(data);
	          }, callData: this.state.bookData }),
	        tipAlert
	      ),
	      React.createElement(SearchHead, { callback: function callback(data) {
	          _this3.callbackHandler(data);
	        } }),
	      React.createElement(Foot, null)
	    );

	    return React.createElement(
	      'div',
	      null,
	      mainContent
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

	//搜索图书的页面header
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

	module.exports = SearchHead;

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Pagination = __webpack_require__(159).Pagination;

	var $ = __webpack_require__(406);

	//分页组件，搜索图书界面用到
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

/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Button = __webpack_require__(159).Button;

	var $ = __webpack_require__(406);
	//点击后会显示载入中文字的按钮
	//props:
	//callUrl:点击按钮后请求的URL地址
	//callData:请求时传递过来的提交的data数据
	var LoadingButton = React.createClass({
	  displayName: 'LoadingButton',
	  getInitialState: function getInitialState() {
	    return {
	      isLoading: false
	    };
	  },


	  //提交请求
	  handleClick: function handleClick() {
	    var _this = this;

	    this.setState({ isLoading: true });
	    $.ajax({
	      data: JSON.stringify(this.props.callData),
	      url: this.props.callUrl,
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      type: 'post',
	      dataType: 'json',
	      cache: false,
	      timeout: 5000,
	      success: function success(data) {
	        _this.props.callback(data);
	      },
	      error: function error(jqXHR, textStatus, errorThrown) {
	        alert("操作失败，请重试");
	      }
	    });
	    this.setState({ isLoading: false });
	  },

	  render: function render() {
	    var _this2 = this;

	    var isLoading = this.state.isLoading;
	    return React.createElement(
	      Button,
	      { style: { height: '50', fontSize: '20', borderRadius: '25' },
	        bsStyle: this.props.bsStyle,
	        disabled: isLoading,
	        onClick: function onClick() {
	          _this2.handleClick();
	        } },
	      this.state.isLoading ? this.props.loadingText : this.props.text
	    );
	  }
	});

	module.exports = LoadingButton;

/***/ }

});