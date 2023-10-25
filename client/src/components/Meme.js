import React from 'react';

import memeData from '../memesData'
const Generator = () => {

function handleImage(){
    // Access meme data from the imported JSON
    const data = memeData;

    // Generate a random index within the range of the memes array
    const randomIndex = Math.floor(Math.random() * data.data.memes.length);

    // Access the URL of the randomly selected meme
    const randomMeme = data.data.memes[randomIndex];
    const randomURL = randomMeme.url;

    console.log("URL of image:", randomURL);


}


  return (
    <main>
    <div className="form">
        <p></p>
        <input 
            type="text"
            placeholder="Top text"
            className="form--input"
        />
        <input 
            type="text"
            placeholder="Bottom text"
            className="form--input"
        />
        <button 
            className="form--button"
            onClick={handleImage}
        >
            Get a new meme image 🖼
        </button>
    </div>
</main>
  );
};

export default Generator;
