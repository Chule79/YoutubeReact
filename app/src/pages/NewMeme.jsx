import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";


const NewMeme = () => {

const [title, setTitle] = useState("");
const [mediaMeme, setMediaMeme] = useState("");
const [minia, setMinia] = useState("");




const createMeme = (ev) => {
  ev.preventDefault()  
  const meme = {
    id: uuidv4(),
    title: title,
    mediameme: mediaMeme,
    minia: minia,
  
  }
  postMeme(meme)
}

const postMeme = async (item) => {
    axios({
        method: "post",
        url: "http://localhost:8080/videos",
        data: item,
      });
}

  return <div>
    <form onSubmit={(ev) => createMeme(ev)}>
        <fieldset>
            <legend>Crear nuevo Meme</legend>
            <label htmlFor="title">Titulo:</label>
            <input type="text" name="title" id="title" onChange={(ev)=> setTitle(ev.target.value)}/>
            <label htmlFor="mediameme">Link Meme:</label>
            <input type="text" name="mediameme" id="mediameme" onChange={(ev)=> setMediaMeme(ev.target.value)}/>
            <label htmlFor="minia">Link Miniatura:</label>
            <input type="text" name="minia" id="minia" onChange={(ev)=> setMinia(ev.target.value)}/>
        </fieldset>
        <input type="submit" value="Guardar"/>
    </form>
  </div>;
};

export default NewMeme;
