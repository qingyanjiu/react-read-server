webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactDOM = __webpack_require__(1);
	var Login = __webpack_require__(147);
	var Head = __webpack_require__(405);
	var Foot = __webpack_require__(406);

	//展示容器,捕捉窗口改变大小的事件，保证背景图显示正确
	//背景图backImage
	var Container = React.createClass({
	  displayName: 'Container',


	  getInitialState: function getInitialState() {
	    return {
	      windowWidth: window.innerWidth,
	      windowHeight: window.innerHeight
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

	  render: function render() {
	    return React.createElement(
	      'div',
	      { style: { textAlign: 'center', backgroundImage: this.props.backImage, backgroundSize: 'cover',
	          height: this.state.windowHeight, width: this.state.windowWidth, position: 'fixed' } },
	      React.createElement(Head, null),
	      React.createElement(Login, null),
	      React.createElement(Foot, null)
	    );
	  }
	});

	var content = React.createElement(Container, { backImage: 'url(/assets/i/log.jpg)' });

	ReactDOM.render(content, document.getElementById('content'));

/***/ }
]);