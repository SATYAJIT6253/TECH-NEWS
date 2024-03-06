import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import SinglePost from "../Singlepost/SinglePost";
import './stories.scss'
function Stories() {
  const { hits, isloading } = useContext(AppContext);
  console.log(hits);
  return (
    <div className="storie-container">
      {
      isloading ? 
      (
        <h1>Loading...</h1>
      ) : 
      (
        hits.map((eachpost) => {
          return (
            <div className="post-container">
               <SinglePost eachpost={eachpost} key ={eachpost.objectID}/>
            </div>
          );
        })
      )
      }
    </div>
  );
}

export default Stories;
