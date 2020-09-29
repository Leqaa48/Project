import React, { Component, useContext } from 'react';


function Post(props) {


    return (
        <div className="post">
            <h2 className="postH2">{props.name}</h2>
            <img src={"/images/" + props.imgSrc} alt={props.name} />
        </div>);
}

export default Post;