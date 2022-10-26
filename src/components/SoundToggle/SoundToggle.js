import Burning from "../../assets/sound/Burning.mp3";

import "./style.scss";

const SoundToggle = ({ isPlaying, togglePlayPause, audioPlayer }) => {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const audioPlayer = useRef();

  // const togglePlayPause = () => {
  //   const prevValue = isPlaying;
  //   setIsPlaying(!prevValue);
  //   if (!prevValue) {
  //     audioPlayer.current.play();
  //   } else {
  //     audioPlayer.current.pause();
  //   }
  // };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          // border: "solid red 1px",
          position: "absolute",
          width: "100%",
          height: "8vh",
        }}
      >
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
      </div>
    </>
  );
};
export default SoundToggle;
