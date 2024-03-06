import React from "react";
import photo from './photo.jpg'
import './singlepost.scss';
function SinglePost({ eachpost }) {
  return (
    <div className="singlepost">
      <div className="first-section">
        <img  src={photo}alt="" />
        <h3>{eachpost.title}</h3>
      </div>
      <div className="second-section">
        <p>craeted-at : {eachpost.created_at}</p>
        <p>number of comments : {eachpost.num_comments}</p>
        <p>updated_at : {eachpost.updated_at}</p>
      </div>
      <div className="third-section">
        <a href={eachpost.url} target="_blank">
            Read more...
        </a>
      </div>
    </div>
  );
}

export default SinglePost;
