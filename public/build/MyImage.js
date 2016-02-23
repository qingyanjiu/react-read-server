webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports) {

	'use strict';

	// var React = require('react');
	// var Image = require('react-bootstrap').Image;

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

	    render: function render() {
	        var backcolor = 'rgba(255,255,255,0.4)';
	        if (this.state.isMouseOver) backcolor = 'rgba(255,245,142,0.4)';
	        return React.createElement(Image, { src: this.props.src, style: { width: '36%', backgroundColor: backcolor }, circle: true, onMouseOver: this.changeBack, onMouseOut: this.changeBack });
	    }

	});

	// module.exports = MyImage;

/***/ }
]);