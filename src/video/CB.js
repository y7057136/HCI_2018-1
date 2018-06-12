import React from 'react';
import YouTube from 'react-youtube';


class CBvideo extends React.Component {
  render() {
    const contentStyle = {
      margin: "margin: 0px 50px 75px 0px"
    };
    const opts = {
      height: '195',
      width: '320',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <YouTube
        contentStyle={contentStyle}
        videoId="7AFSmeCnyy8"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default CBvideo;