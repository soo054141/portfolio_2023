import ReactPlayer from "react-player/lazy";
import gitfarm from "asset/images/gitfarm.png";
function VideoContainer() {
  return (
    <>
      <ReactPlayer
        className="react-player"
        url={process.env.PUBLIC_URL + "/videos/gitfarm.mp4"}
        height="500px"
        playing={true}
        muted={true}
        controls={true}
        loop={true}
        poster={gitfarm}
      />
    </>
  );
}
export default VideoContainer;
