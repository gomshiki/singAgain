import React from "react";

const SongPlay = ({src}) => {

    const myAudio = new Audio(src);

    const playClick = () => () => {
        myAudio.play()
    }

    const pauseClick = () => () => {
        myAudio.pause()
    }

    return (
        <>
            <button onClick={playClick()}>play</button>
            <button onClick={pauseClick()}>pause</button>
        </>
    )

}


export default SongPlay;