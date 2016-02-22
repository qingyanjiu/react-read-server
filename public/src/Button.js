var React = require('react');

var But = React.createClass({
	render:function(){
    	var button = React.DOM.button({
    	    className: "btn btn-lg btn-success",
    	    children: "Register"
    	});
		return(button);
	}
});

module.exports=But;