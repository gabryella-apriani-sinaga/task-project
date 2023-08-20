import { useEffect, useState } from "react";
import axios from "axios";

function Image({ imageSrc }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    getPokemonImage(imageSrc);
  }, []);

  async function getPokemonImage(api) {
    const res = await axios.get(api);
    setImage(res.data.sprites.front_default);
  }

  return (
    <>
      <img src={image} alt="gambar" />
    </>
  );
}

export default Image;
