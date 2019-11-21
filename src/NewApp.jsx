import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NewApp = () => {

  const [ shows, setShows ] = useState([])

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    axios.get(proxyUrl + 'http://content.viaplay.se/pc-se/serier/samtliga')
      .then(response => {
        setShows(response.data._embedded["viaplay:blocks"][0]._embedded["viaplay:products"])
      })
  }, [])

  let showDisplayList = shows.map(show => {
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
  )
}

export default NewApp
