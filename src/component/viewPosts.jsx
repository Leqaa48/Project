import React, { Component, useContext, useState } from 'react';
import PostContext from '../context/postContext';
import Post from './post';
import { Link } from 'react-router-dom';
import { AddPostContext } from '../context/addPostsContext';
import Details from './details';

function ViewPosts() {
    const [posts] = useContext(AddPostContext);

    return (

        <div className="bar" >
            {posts.map(Posts =>

                <Link to={{
                    pathname: "/Details", state: {
                        key: Posts.id, name: Posts.name,
                        type: Posts.type, imgSrc: Posts.imgSrc
                    }
                }} >
                    <Post key={Posts.id} name={Posts.name} type={Posts.type} imgSrc={Posts.imgSrc} />
                </Link>

            )}
        </div>

    );
}

export default ViewPosts;