webpackJsonp([0],{

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

	var Head = __webpack_require__(403);
	var Foot = __webpack_require__(404);
	var Login = __webpack_require__(405);
	var Register = __webpack_require__(407);

	var tip = {
	  fontFamily: '微软雅黑',
	  fontSize: '18',
	  color: '#A98580',
	  marginTop: '4%',
	  textAlign: 'center'
	};

	//菜单按钮
	var MyImage = React.createClass({
	  displayName: 'MyImage',


	  getInitialState: function getInitialState() {
	    return {
	      isMouseOver: false
	    };
	  },

	  changeBack: function changeBack() {
	    this.setState({
	      isMouseOver: this.state.isMouseOver ? false : true
	    });
	  },

	  goSub: function goSub() {
	    document.getElementById('form').action = this.props.url;
	    document.getElementById('form').submit();
	  },

	  render: function render() {
	    var _this = this;

	    var backcolor = 'rgba(255,255,255,0.4)';
	    if (this.state.isMouseOver) backcolor = 'rgba(255,245,142,0.4)';
	    return React.createElement(Image, { src: this.props.src, style: { width: '36%', backgroundColor: backcolor, cursor: 'pointer' }, circle: true, onClick: function onClick() {
	        _this.goSub();
	      },
	      onMouseOver: this.changeBack, onMouseOut: this.changeBack });
	  }

	});

	//展示容器,捕捉窗口改变大小的事件，保证背景图显示正确
	//currentPage
	//index--首页
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
	    var _this2 = this;

	    var background = 'url(/assets/i/shuji-2.jpg)';
	    if (this.state.currentPage !== 'index') background = 'url(/assets/i/log.jpg)';

	    var cont;
	    if (this.state.currentPage === 'index') cont = React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'p',
	        { style: { fontFamily: '微软雅黑', fontSize: '60', paddingTop: this.state.windowHeight / 10 + 60 } },
	        '乐读'
	      ),
	      React.createElement(
	        'p',
	        { style: { marginTop: '2%', fontFamily: '微软雅黑', fontSize: '20' } },
	        '记录阅读，更好的阅读'
	      ),
	      React.createElement(
	        'div',
	        { style: { marginTop: '8%' } },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { xs: 6, md: 3 },
	              React.createElement(MyImage, { src: '/assets/i/biji.png', url: '/calculate' }),
	              React.createElement(
	                'p',
	                { style: tip },
	                '笔记'
	              )
	            ),
	            React.createElement(
	              Col,
	              { xs: 6, md: 3 },
	              React.createElement(MyImage, { src: '/assets/i/shuqian.png', url: '/cal' }),
	              React.createElement(
	                'p',
	                { style: tip },
	                '书签'
	              )
	            ),
	            React.createElement(
	              Col,
	              { xs: 6, md: 3 },
	              React.createElement(MyImage, { src: '/assets/i/shoucang.png', url: '/calc' }),
	              React.createElement(
	                'p',
	                { style: tip },
	                '收藏'
	              )
	            ),
	            React.createElement(
	              Col,
	              { xs: 6, md: 3 },
	              React.createElement(MyImage, { src: '/assets/i/fenxiang.png', url: '/calcu' }),
	              React.createElement(
	                'p',
	                { style: tip },
	                '分享'
	              )
	            )
	          )
	        )
	      )
	    );else if (this.state.currentPage === 'login') cont = React.createElement(Login, null);else if (this.state.currentPage === 'register') cont = React.createElement(Register, null);

	    return React.createElement(
	      'div',
	      { style: { textAlign: 'center', backgroundImage: background, backgroundSize: 'cover',
	          height: this.state.windowHeight, width: this.state.windowWidth } },
	      React.createElement(Head, { callback: function callback(tag) {
	          _this2.callbackHandler(tag);
	        } }),
	      cont,
	      React.createElement(Foot, null)
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

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Image = __webpack_require__(159).Image;
	var Grid = __webpack_require__(159).Grid;
	var Row = __webpack_require__(159).Row;
	var Col = __webpack_require__(159).Col;

	var styles = {
	    headStyle: {
	        width: '100%',
	        height: '60',
	        backgroundColor: 'rgba(219,188,86,0.4)',
	        top: '0',
	        position: 'fixed'
	    },
	    imageStyle: {
	        height: '46',
	        paddingTop: '16',
	        paddingLeft: '2%',
	        cursor: 'pointer'
	    }
	};

	//页面header
	var Head = React.createClass({
	    displayName: 'Head',


	    getInitialState: function getInitialState() {
	        return {
	            isLogined: false
	        };
	    },

	    logined: function logined() {
	        this.setState({
	            isLogined: this.state.isLogined ? false : true
	        });
	    },
	    //回调
	    toLogin: function toLogin() {
	        this.props.callback('login');
	    },
	    //回调
	    toRegister: function toRegister() {
	        this.props.callback('register');
	    },

	    render: function render() {
	        var _this = this;

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
	                        React.createElement('image', { src: '/assets/i/regist.png', style: styles.imageStyle, onClick: function onClick() {
	                                _this.toRegister();
	                            } }),
	                        React.createElement('image', { src: '/assets/i/login.png', style: styles.imageStyle, onClick: function onClick() {
	                                _this.toLogin();
	                            } })
	                    )
	                )
	            )
	        );
	    }
	});

	module.exports = Head;

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Button = __webpack_require__(159).Button;
	var Image = __webpack_require__(159).Image;
	var Grid = __webpack_require__(159).Grid;
	var Row = __webpack_require__(159).Row;
	var Col = __webpack_require__(159).Col;

	var styles = {
	    footStyle: {
	        height: '60',
	        width: '100%',
	        backgroundColor: 'rgba(219,188,86,0.4)',
	        bottom: '0',
	        position: 'fixed'
	    },
	    imageStyle: {
	        width: '26%',
	        paddingTop: '10%',
	        paddingRight: '8%',
	        cursor: 'pointer'
	    },
	    tip: {
	        fontFamily: '微软雅黑',
	        fontSize: '16',
	        paddingTop: '20',
	        color: '#FFFFFF',
	        cursor: 'pointer'
	    }
	};

	//页面header
	var Foot = React.createClass({
	    displayName: 'Foot',


	    render: function render() {
	        var content = React.createElement(
	            'p',
	            { style: { fontSize: '24', fontFamily: '微软雅黑', paddingTop: '12' } },
	            '乐读'
	        );

	        return React.createElement(
	            'div',
	            { style: styles.footStyle },
	            React.createElement(
	                Grid,
	                null,
	                React.createElement(
	                    Row,
	                    null,
	                    React.createElement(
	                        Col,
	                        { xsHidden: true, smHidden: true, md: 2, lg: 2 },
	                        React.createElement('image', { src: '/assets/i/weixin.png', style: styles.imageStyle }),
	                        React.createElement('image', { src: '/assets/i/weibo.png', style: styles.imageStyle })
	                    ),
	                    React.createElement(
	                        Col,
	                        { xs: 6, sm: 6, md: 2, lg: 2 },
	                        React.createElement(
	                            'p',
	                            { style: styles.tip },
	                            '关于乐读'
	                        )
	                    ),
	                    React.createElement(
	                        Col,
	                        { xs: 6, sm: 6, md: 2, lg: 2 },
	                        React.createElement(
	                            'p',
	                            { style: styles.tip },
	                            '联系我们'
	                        )
	                    ),
	                    React.createElement(
	                        Col,
	                        { xsHidden: true, smHidden: true, md: 6, lg: 6 },
	                        React.createElement('p', null)
	                    )
	                )
	            )
	        );
	    }
	});

	module.exports = Foot;

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Button = __webpack_require__(159).Button;
	var Input = __webpack_require__(159).Input;
	var $ = __webpack_require__(406);

	var input = {
	  paddingLeft: '10%',
	  paddingRight: '10%',
	  marginTop: '30'
	};

	var Login = React.createClass({
	  displayName: 'Login',


	  getInitialState: function getInitialState() {
	    return {
	      nameOrPassError: false,
	      inputEmpty: false
	    };
	  },

	  _inputHandler: function _inputHandler() {
	    this.setState({
	      nameOrPassError: false,
	      inputEmpty: false
	    });
	  },

	  login: function login() {
	    var _this = this;

	    document.getElementById('button').disabled = true;

	    var username = document.getElementById('username').value;
	    var password = document.getElementById('password').value;
	    if (username === "" || password === "") {
	      this.setState({
	        inputEmpty: true
	      });
	    } else {
	      $.ajax({
	        data: JSON.stringify({
	          username: document.getElementById('username').value,
	          password: document.getElementById('password').value
	        }),
	        url: '/read/user/login',
	        headers: {
	          'Content-Type': 'application/json'
	        },
	        type: 'post',
	        dataType: 'json',
	        cache: false,
	        timeout: 5000,
	        success: function success(data) {
	          //
	          if (data.result === "success") {
	            document.getElementById('form').action = "/read/book/main";
	            document.getElementById('form').submit();
	          } else if (data.result === "fail") {
	            _this.setState({
	              nameOrPassError: true
	            });
	          }
	        },
	        error: function error(jqXHR, textStatus, errorThrown) {
	          alert("系统出错，请稍后再试");
	        }
	      });
	    }
	  },

	  render: function render() {
	    var _this2 = this;

	    var content;
	    if (this.state.inputEmpty) content = React.createElement(
	      'div',
	      { style: { backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '10', width: '400', height: '300',
	          left: window.innerWidth / 2 - 200, top: window.innerHeight / 2 - 150,
	          position: 'fixed' } },
	      React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h3',
	          null,
	          '用户登录'
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: input },
	        React.createElement(Input, { id: 'username', type: 'text', bsSize: 'large', placeholder: '请输入用户名', onChange: function onChange() {
	            _this2._inputHandler();
	          } })
	      ),
	      React.createElement(
	        'div',
	        { style: input },
	        React.createElement(Input, { id: 'password', type: 'password', bsSize: 'large', placeholder: '请输入密码', onChange: function onChange() {
	            _this2._inputHandler();
	          } })
	      ),
	      React.createElement(
	        'div',
	        { style: input },
	        React.createElement(
	          Button,
	          { bsStyle: 'success', bsSize: 'large', style: { width: '100%', borderRadius: '24' }, disabled: true },
	          '用户名或密码错误'
	        )
	      )
	    );else {
	      if (this.state.nameOrPassError) content = React.createElement(
	        'div',
	        { style: { backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '10', width: '400', height: '300',
	            left: window.innerWidth / 2 - 200, top: window.innerHeight / 2 - 150,
	            position: 'fixed' } },
	        React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'h3',
	            null,
	            '用户登录'
	          )
	        ),
	        React.createElement(
	          'div',
	          { style: input },
	          React.createElement(Input, { id: 'username', type: 'text', bsSize: 'large', placeholder: '请输入用户名', onChange: function onChange() {
	              _this2._inputHandler();
	            } })
	        ),
	        React.createElement(
	          'div',
	          { style: input },
	          React.createElement(Input, { id: 'password', type: 'password', bsSize: 'large', placeholder: '请输入密码', onChange: function onChange() {
	              _this2._inputHandler();
	            } })
	        ),
	        React.createElement(
	          'div',
	          { style: input },
	          React.createElement(
	            Button,
	            { bsStyle: 'success', bsSize: 'large', style: { width: '100%', borderRadius: '24' }, disabled: true },
	            '用户名或密码错误'
	          )
	        )
	      );else {
	        content = React.createElement(
	          'div',
	          { style: { backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '10', width: '400', height: '300',
	              left: window.innerWidth / 2 - 200, top: window.innerHeight / 2 - 150,
	              position: 'fixed' } },
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'h3',
	              null,
	              '用户登录'
	            )
	          ),
	          React.createElement(
	            'div',
	            { style: input },
	            React.createElement(Input, { id: 'username', type: 'text', bsSize: 'large', placeholder: '请输入用户名', onChange: function onChange() {
	                _this2._inputHandler();
	              } })
	          ),
	          React.createElement(
	            'div',
	            { style: input },
	            React.createElement(Input, { id: 'password', type: 'password', bsSize: 'large', placeholder: '请输入密码', onChange: function onChange() {
	                _this2._inputHandler();
	              } })
	          ),
	          React.createElement(
	            'div',
	            { style: input },
	            React.createElement(
	              Button,
	              { bsStyle: 'success', id: 'button', bsSize: 'large', style: { width: '100%', borderRadius: '24' }, onClick: function onClick() {
	                  _this2.login();
	                } },
	              '登录'
	            )
	          )
	        );
	      }
	    }
	    return React.createElement(
	      'div',
	      null,
	      content
	    );
	  }
	});

	module.exports = Login;

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Button = __webpack_require__(159).Button;
	var Input = __webpack_require__(159).Input;
	var $ = __webpack_require__(406);

	var input = {
	  paddingLeft: '10%',
	  paddingRight: '10%',
	  marginTop: '30'
	};

	var Register = React.createClass({
	  displayName: 'Register',


	  getInitialState: function getInitialState() {
	    return {
	      differentPass: false,
	      inputEmpty: false,
	      nameExist: false
	    };
	  },

	  checkPass: function checkPass() {
	    var pass1 = document.getElementById('password1').value;
	    var pass2 = document.getElementById('password2').value;
	    if (pass1 != pass2 && pass1 != '') this.setState({
	      differentPass: true
	    });else if (pass1 === pass2 && pass1 != '') this.setState({
	      differentPass: false
	    });
	  },

	  _inputHandler: function _inputHandler() {
	    this.setState({
	      inputEmpty: false,
	      nameExist: false
	    });
	    this.checkPass();
	  },

	  // regist:function(){
	  //   fetch('/user/regist', {
	  //     method: 'post',
	  //     headers: {
	  //       'Content-Type': 'application/json',
	  //     },
	  // 	  body: JSON.stringify({
	  //   		username: document.getElementById('username').value,
	  //   		password: document.getElementById('password1').value
	  //   	})
	  //   })
	  //     .then((response) => response.json())
	  //     .then((json) => {this._registHandler(json)})
	  //     .catch((error) => {
	  //       alert("注册失败，请重试");
	  //     });
	  //   },

	  //   _registHandler:function(json){
	  //       if(json.result === "success")
	  //         alert("注册成功");
	  //       else if(json.result === "exist")
	  //         alert("用户名已被使用");

	  //   },
	  regist: function regist() {
	    var _this = this;

	    document.getElementById('button').disabled = true;

	    //判断是否有为空的空格
	    var username = document.getElementById('username').value;
	    var password1 = document.getElementById('password1').value;
	    var password2 = document.getElementById('password2').value;
	    if (username === "" || password1 === "" || password2 === "") {
	      this.setState({
	        inputEmpty: true
	      });
	    } else {
	      $.ajax({
	        data: JSON.stringify({
	          username: document.getElementById('username').value,
	          password: document.getElementById('password1').value
	        }),
	        url: '/read/user/regist',
	        headers: {
	          'Content-Type': 'application/json'
	        },
	        type: 'post',
	        dataType: 'json',
	        cache: false,
	        timeout: 5000,
	        success: function success(data) {
	          if (data.result === "success") alert("注册成功");else if (data.result === "exist") {
	            _this.setState({
	              nameExist: true
	            });
	          }
	        },
	        error: function error(jqXHR, textStatus, errorThrown) {
	          alert("系统出错，请稍后再试");
	        }
	      });
	    }
	  },

	  render: function render() {
	    var _this2 = this;

	    var content;
	    if (this.state.inputEmpty) content = React.createElement(
	      'div',
	      { style: { backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '10', width: '400', height: '400',
	          left: window.innerWidth / 2 - 200, top: window.innerHeight / 2 - 200,
	          position: 'fixed' } },
	      React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h3',
	          null,
	          '用户注册'
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: input },
	        React.createElement(Input, { id: 'username', type: 'text', bsSize: 'large', placeholder: '请输入用户名', hasFeedback: true, onChange: function onChange() {
	            _this2._inputHandler();
	          } })
	      ),
	      React.createElement(
	        'div',
	        { style: input },
	        React.createElement(Input, { id: 'password1', type: 'password', bsSize: 'large', placeholder: '请输入密码', hasFeedback: true, onChange: function onChange() {
	            _this2._inputHandler();
	          } })
	      ),
	      React.createElement(
	        'div',
	        { style: input },
	        React.createElement(Input, { id: 'password2', type: 'password', bsSize: 'large', placeholder: '请再次输入密码', hasFeedback: true, onChange: function onChange() {
	            _this2._inputHandler();
	          } })
	      ),
	      React.createElement(
	        'div',
	        { style: input },
	        React.createElement(
	          Button,
	          { id: 'button', bsStyle: 'danger', bsSize: 'large', style: { width: '100%', borderRadius: '24' }, disabled: true },
	          '输入内容不能为空'
	        )
	      )
	    );else {
	      if (this.state.nameExist) content = React.createElement(
	        'div',
	        { style: { backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '10', width: '400', height: '400',
	            left: window.innerWidth / 2 - 200, top: window.innerHeight / 2 - 200,
	            position: 'fixed' } },
	        React.createElement(
	          'div',
	          null,
	          React.createElement(
	            'h3',
	            null,
	            '用户注册'
	          )
	        ),
	        React.createElement(
	          'div',
	          { style: input },
	          React.createElement(Input, { id: 'username', type: 'text', bsSize: 'large', placeholder: '请输入用户名', bsStyle: 'error', hasFeedback: true, onChange: function onChange() {
	              _this2._inputHandler();
	            } })
	        ),
	        React.createElement(
	          'div',
	          { style: input },
	          React.createElement(Input, { id: 'password1', type: 'password', bsSize: 'large', placeholder: '请输入密码', hasFeedback: true, onChange: function onChange() {
	              _this2._inputHandler();
	            } })
	        ),
	        React.createElement(
	          'div',
	          { style: input },
	          React.createElement(Input, { id: 'password2', type: 'password', bsSize: 'large', placeholder: '请再次输入密码', hasFeedback: true, onChange: function onChange() {
	              _this2._inputHandler();
	            } })
	        ),
	        React.createElement(
	          'div',
	          { style: input },
	          React.createElement(
	            Button,
	            { id: 'button', bsStyle: 'danger', bsSize: 'large', style: { width: '100%', borderRadius: '24' }, disabled: true },
	            '用户名已存在'
	          )
	        )
	      );else {
	        if (this.state.differentPass) content = React.createElement(
	          'div',
	          { style: { backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '10', width: '400', height: '400',
	              left: window.innerWidth / 2 - 200, top: window.innerHeight / 2 - 200,
	              position: 'fixed' } },
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'h3',
	              null,
	              '用户注册'
	            )
	          ),
	          React.createElement(
	            'div',
	            { style: input },
	            React.createElement(Input, { id: 'username', type: 'text', bsSize: 'large', placeholder: '请输入用户名', hasFeedback: true, onChange: function onChange() {
	                _this2._inputHandler();
	              } })
	          ),
	          React.createElement(
	            'div',
	            { style: input },
	            React.createElement(Input, { id: 'password1', type: 'password', bsSize: 'large', placeholder: '请输入密码', bsStyle: 'error', hasFeedback: true, onChange: function onChange() {
	                _this2._inputHandler();
	              } })
	          ),
	          React.createElement(
	            'div',
	            { style: input },
	            React.createElement(Input, { id: 'password2', type: 'password', bsSize: 'large', placeholder: '请再次输入密码', bsStyle: 'error', hasFeedback: true, onChange: function onChange() {
	                _this2._inputHandler();
	              } })
	          ),
	          React.createElement(
	            'div',
	            { style: input },
	            React.createElement(
	              Button,
	              { id: 'button', bsStyle: 'danger', bsSize: 'large', style: { width: '100%', borderRadius: '24' }, disabled: true },
	              '两次密码不一致'
	            )
	          )
	        );else content = React.createElement(
	          'div',
	          { style: { backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '10', width: '400', height: '400',
	              left: window.innerWidth / 2 - 200, top: window.innerHeight / 2 - 200,
	              position: 'fixed' } },
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'h3',
	              null,
	              '用户注册'
	            )
	          ),
	          React.createElement(
	            'div',
	            { style: input },
	            React.createElement(Input, { id: 'username', type: 'text', bsSize: 'large', placeholder: '请输入用户名', onChange: function onChange() {
	                _this2._inputHandler();
	              } })
	          ),
	          React.createElement(
	            'div',
	            { style: input },
	            React.createElement(Input, { id: 'password1', type: 'password', bsSize: 'large', placeholder: '请输入密码', onChange: function onChange() {
	                _this2._inputHandler();
	              } })
	          ),
	          React.createElement(
	            'div',
	            { style: input },
	            React.createElement(Input, { id: 'password2', type: 'password', bsSize: 'large', placeholder: '请再次输入密码', onChange: function onChange() {
	                _this2._inputHandler();
	              } })
	          ),
	          React.createElement(
	            'div',
	            { style: input },
	            React.createElement(
	              Button,
	              { id: 'button', bsStyle: 'danger', bsSize: 'large', style: { width: '100%', borderRadius: '24' }, onClick: function onClick() {
	                  _this2.regist();
	                } },
	              '注册'
	            )
	          )
	        );
	      }
	    }
	    return React.createElement(
	      'div',
	      null,
	      content
	    );
	  }
	});

	module.exports = Register;

/***/ }

});