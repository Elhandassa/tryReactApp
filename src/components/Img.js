import { React } from "react";

function Img(prop) {
  return <img src={`/image/${prop.image}`} alt="TheImgCard" />;
}

export default Img;
