var React = require('react');

var Button = React.createClass({
	render:function(){
    	var button = React.DOM.button({
    	    className: "btn btn-lg btn-success",
    	    children: "Register"
    	});
		return(button);
	}
});

module.exports=Button;