var React = require('react');
var TimeDisplay = require('./TimeDisplay');

module.exports = React.createClass({
  getInitialState: function(){
    return {time:0,laps:[]}
  },
  increment: function(){
    this.setState({time:this.state.time + 0.01});
  },
  start: function(){
    this.timer = setInterval(this.increment,10);
  },
  stop: function(){
    clearInterval(this.timer);
  },
  clear: function(){
    this.stop();
    this.setState({time:0, laps:[]});
  },
  lap: function(){
    var time = this.state.time;
    var lapClone = this.state.laps.slice();
    lapClone.push(time);
    this.setState({laps:lapClone});
  },
  render: function(){
    var laps = this.state.laps.map(function(item, idx){
      return (
        <div key={idx}>
          Lap {idx + 1}: <TimeDisplay time={item} />
        </div>
      );
    });

    return (
      <div>
        <TimeDisplay time={this.state.time} />
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.clear}>Clear</button>
        <button onClick={this.lap}>Lap</button>
        <div>
          {laps}
        </div>
      </div>
    );
  }
});