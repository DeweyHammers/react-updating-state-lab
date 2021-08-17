import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
        resolution: '1080p'
        }
      }
    }
  }

  handleBitrateChange = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionChange = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBitrateChange} className="bitrate">Bitrate</button>
        <button onClick={this.handleResolutionChange} className="resolution">Resolution</button>
      </div>
   )
 }
}
