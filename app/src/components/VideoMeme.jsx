import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VideoMeme = () => {
    const [meme, setMeme] = useState({});

    const params = useParams();
    const { id } = params;
    console.log(id);
  
    useEffect(() => {
      const getCharacter = async () => {
        const data = await fetch(`http://localhost:8080/videos/${id}`);
        const res = await data.json();
        setMeme(res);
      };
  
      getCharacter();
    }, []);
  


  return (
    <video loop autoPlay>
      <source src={meme.mediameme} type="video/mp4" />
    </video>
  );
};
export default VideoMeme;
