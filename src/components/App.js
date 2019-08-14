import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'André Souza',
        avatar: 'https://avatars2.githubusercontent.com/u/20190830?s=400&v=4',
        time: 'há 3 min',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis mi eu velit fermentum, non commodo nulla consectetur. Maecenas lacus velit, convallis eget neque ut, egestas rutrum elit. Fusce vitae nunc venenatis, ornare lectus et, posuere urna. Integer gravida magna non dui pretium, id tristique sem iaculis. Cras quis justo eget ex vehicula sagittis. Nunc ipsum metus, ultrices sit amet velit non, luctus viverra lacus. Nam tincidunt tempus sapien, sit amet tristique erat feugiat a. Sed volutpat nec mi nec efficitur. Cras in volutpat nibh. Integer at tellus ipsum. Aenean feugiat tincidunt ex, eget egestas diam consectetur maximus. Aliquam erat volutpat.',
      },
      {
        id: 2,
        name: 'André Souza',
        avatar: 'https://avatars2.githubusercontent.com/u/20190830?s=400&v=4',
        time: 'há 30 min',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis mi eu velit fermentum, non commodo nulla consectetur.',
      },
      {
        id: 3,
        name: 'André Souza',
        avatar: 'https://avatars2.githubusercontent.com/u/20190830?s=400&v=4',
        time: 'há 40 min',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis mi eu velit fermentum, non commodo nulla consectetur.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
