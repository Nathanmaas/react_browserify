var React = require('react');

module.exports = React.createClass({
  parseTime: function(time){
    var minutes = '00' + parseInt(time / 60);
    var seconds = '00' + (time % 60).toFixed(2);
    return minutes.substr(-2) + ':' + seconds.substr(-5)
  },
  render: function(){
    var time = this.parseTime(this.props.time);
    return <div>{time}</div>
  }
});