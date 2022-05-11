import React, { useEffect, useState } from 'react'
function Meme() {

  const [allMemeImages, setAllMemeImages] = useState("")
  useEffect(() => {
    async function fetchMemeImg() {
      const response = await fetch('https://api.imgflip.com/get_memes')
      const data = await response.json()
      setAllMemeImages(data.data.memes)
     
    }
    fetchMemeImg()
  }, [])



const [meme, setMeme] = useState(
  {
    topText: "",
    botText: "",
    url: "https://i.imgflip.com/9vct.jpg"
  })
function getNewImage() {
  let randNum = Math.floor(Math.random() * allMemeImages.length)
  let randUrl = allMemeImages[randNum].url
  setMeme(prevState => {
    return {
      ...prevState,
      url: randUrl
    }
  })
}
function handleChange(event) {
  const { name, value } = event.target
  setMeme(prevState => {
    return {
      ...prevState,
      [name]: value
    }
  })
}

return (
  <main className='meme'>
    <div className='form'>
      <input
        type="text"
        className='form--input'
        placeholder='First'
        name='topText'
        value={meme.topText}
        onChange={handleChange}
      />
      <input
        type="text"
        className='form--input'
        placeholder='Second'
        name='botText'
        value={meme.botText}
        onChange={handleChange}
      />
      <br />
      <button className='form--btn' onClick={getNewImage}>Get a new meme image 😏</button>
      <br />
      <div className='container--meme'>
        <img className='meme--img' src={meme.url} />
        <p className='text--meme top'>{meme.topText}</p>
        <p className='text--meme bot'>{meme.botText}</p>
      </div>
    </div>
  </main>
)
}

export default Meme