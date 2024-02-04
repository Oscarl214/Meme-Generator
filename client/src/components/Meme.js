import React from 'react';

import memeData from '../memesData';
const Generator = () => {
  /**
   * Challenge: Save the random meme URL in state
   * - Create new state called `memeImage` with an
   *   empty string as default
   * - When the getMemeImage function is called, update
   *   the `memeImage` state to be the random chosen
   *   image URL
   * - Below the div.form, add an <img /> and set the
   *   src to the new `memeImage` state you created
   */

  const [meme, setMeme] = React.useState({
    bottomText: '',
    topText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allImages, setAllImages] = React.useState(memeData);

  function getMemeImage() {
    const memesArray = allImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // memesArray[randomNumber].url  <-- this line is incomplete!
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="img">
        <img src={meme.randomImage} alt="meme" />
      </div>
    </main>
  );
};

export default Generator;
