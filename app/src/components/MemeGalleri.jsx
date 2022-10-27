import { Link } from "react-router-dom";

const MemesGallery = ({ memes}) => {
  return (
    <div className="memesGallery">
      <h2>Gallery</h2>
      <div className="gallery">
        {memes.length ? (
          memes.map((meme) => (
            <figure key={meme.id}>
              <Link to={`/videos/${meme.id}`}>
                <h3>{meme.title}</h3>
                <img src={meme.minia}></img>
              </Link>
            </figure>
          ))
        ) : (
          <p>No existe el Meme 😢</p>
        )}
      </div>
    </div>
  );
};

export default MemesGallery;