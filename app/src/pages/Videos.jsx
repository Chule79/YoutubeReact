import MemesGallery from "../components/MemeGalleri";
import { useState, useEffect } from "react";

const Videos = () => {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    const getMemes = async () => {
      const data = await fetch("http://localhost:8080/videos");
      const res = await data.json();
      setMemes(res);
    };

    getMemes();
  }, []);

  return (
    <>
      <MemesGallery memes={memes} />
    </>
  );
};

export default Videos;
