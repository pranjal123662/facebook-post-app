import React, { useState, useEffect } from "react";
import Final from "./Final";
export default function Posts() {
  const [imgList, setImgList] = useState([]);
  // const
  useEffect(() => {
    let apiKey = "4AcjV2rWRED3CgVU3ogU1ydW4ED4iAvr";
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(1);
        console.log(data.data);
        setImgList(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("Outer");
  return (
    <div>
      <Final data={imgList} />
    </div>
  );
}
