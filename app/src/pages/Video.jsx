import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Video = () => {
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
    
    <div className="meme"> 
    
      {meme ? (
       
        <figure>
          <h3>{meme.title}</h3>
          <div>
            <video loop autoPlay>
                <source src={meme.mediameme} type="video/mp4" ></source>
            </video>
          </div>        
        </figure>
      ) : (
        <div>Not Exists</div>
        
      )}
    </div>
  );
};

export default Video;

