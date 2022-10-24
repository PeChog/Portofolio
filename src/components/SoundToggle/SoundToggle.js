import { useRef, useState } from "react";

import Burning from "../../assets/sound/Burning.mp3";

import "./style.scss";

const SoundToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef();
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };
  return (
    <>
      <audio ref={audioPlayer} src={Burning} preload="metadata"></audio>
      {isPlaying ? (
        <div onClick={togglePlayPause} className="sound-toggle">
          Sound on
        </div>
      ) : (
        <div onClick={togglePlayPause} className="sound-toggle">
          Sound off
        </div>
      )}
    </>
  );
};
export default SoundToggle;
