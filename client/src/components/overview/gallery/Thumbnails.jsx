import React, { useEffect, useState } from "react";
import style from "../MainOverview.module.css";

const Thumbnails = ({ thumbUrl, handleThumb, images }) => {
  const [thumbLimit, setThumbLimit] = useState(7)
  const [array, setArray] = []
  
 
  return (
    <div 
      onClick={(e) => {
        handleThumb(e, thumbUrl);
      }}
    >
      <img id={style.thumbImage} src={thumbUrl}></img>
    </div>
  );
};

export default Thumbnails;
