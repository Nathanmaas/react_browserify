var React = require('react');
var TimeDisplay = require('./TimeDisplay');
var Timer = require('./Timer');
var RedditThing = require('./RedditThing');

var MyApp = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="col-xs-4">
          <Timer />
        </div>
        <div className="col-xs-4">
          <RedditThing />
        </div>
      </div>
    )
  }
});

module.exports = MyApp;