import React, { useState, useEffect } from "react";

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setAllMemes(data.data.memes));
    }, []);

    function getRandomImage() {
        const memeImg = allMemes[Math.floor(Math.random() * allMemes.length)];
        let url = memeImg.url;

        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }
  return (
    <main>
        <div className='form'>
            <input
            placeholder='top input'
             className='input'
             type='text'
             />

            <input
            placeholder='buttom input'
            className='input'
            type='text'
            />

            <button
             className='form-btn'
             onClick={getRandomImage}
            >
                Get a new meme image 
            </button>
        </div>
        <div className='meme'>
        <img src={meme.randomImage} className='meme-image' />
        <h2 className='top-txt'></h2>
        <h2 className='bttom-txt'></h2>
        
        </div>
    </main>
  )
}

export default Meme