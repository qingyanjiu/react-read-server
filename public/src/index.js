var ReactDOM = require('react-dom')
var But = require('./Button');
var Jumbotron = require('react-bootstrap').Jumbotron;
var Button = require('react-bootstrap').Button;

var jumbotron = (
  <div>
    <Jumbotron style={{paddingLeft:'2%',height:'100%'}}>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
    </Jumbotron>
    <But/>
  </div>
);

ReactDOM.render(jumbotron, document.getElementById('content'));