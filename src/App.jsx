import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  state = {
    shows: []
  }

  componentDidMount() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    axios.get(proxyUrl + 'http://content.viaplay.se/pc-se/serier/samtliga')
      .then(response => {
        this.setState({ shows: response.data._embedded["viaplay:blocks"][0]._embedded["viaplay:products"] })
      })
  }

  render() {
    let showDisplayList = this.state.shows.map(show => {
      return (
        <img key={show.publicPath} src={show.content.images.landscape.url} />
      )
    })

    return (
      <>
        <header>
          <img alt="Vue logo" src="https://github.com/tochman/viaplay/blob/master/src/assets/viaplay-logo-1-min-300x91.png?raw=true" />
        </header>
        <div className="preview-products">
          {showDisplayList}
        </div>
        <footer>
          FOOTER
        </footer>
      </>
    );
  }
}

export default App;