var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {posts:[]};
  },
  getPosts: function(){
    var ajax = new XMLHttpRequest();
    var self = this;
    ajax.onreadystatechange = function(){
      if (ajax.readyState==4 && ajax.status==200) {
        // console.log('data',typeof ajax.responseText);
        try {
          var data = JSON.parse(ajax.responseText);
          self.setState({posts:data.data.children});
        } catch(e){
          console.log('error',e);
          self.setState({posts:[]});
        }
      }
    }
    ajax.open('GET', 'https://www.reddit.com/r/reactjs.json');
    ajax.send();
  },
  render: function(){
    // console.log('posts render',this.state.posts);
    var posts = this.state.posts.map(function(post, idx){
      return (
        <tr key={idx}>
          <td>{post.data.score}</td>
          <td>{post.data.title}</td>
        </tr>
      );
    });

    return (
      <div>
        <button onClick={this.getPosts}>Load posts</button>
        <table className="table">{posts}</table>
      </div>
    )
  }
});

