import React from "react";
import { useParams } from "react-router-dom";

export default function ImageGallery() {
  const params = useParams();
  console.log("WELKE PARAMS HEEFT IMAGE GALLERY?", params);

  // use Params
  return (
    <div>
      <img src={`https://source.unsplash.com/1600x900/?${params.topic}`} />
    </div>
  );
}
