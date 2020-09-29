import React, { Component, useState, useContext } from 'react';
import { PostContext } from '../context/postContext';
import '../App.css';
import { AddPostContext } from '../context/addPostsContext';

function AddPost() {

    const [posts, addPosts] = useContext(AddPostContext);
    const [item, setItem] = useContext(PostContext);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    const [id, setId] = useState('');


    const updateName = (e) => {
        setName(e.target.value);
    };
    const updatetype = (e) => {
        setType(e.target.value);
    };
    const updateImgSrc = (e) => {
        setImgSrc(e.target.value);
    };
    const updateId = (e) => {
        setId(posts.length + 1);
        console.log(id);

    };
    const AddPosts = (e) => {
        e.preventDefault();
        updateId();
        addPosts(prevPosts => [...prevPosts, { id: id, name: name, type: type, imgSrc: imgSrc }]);

    };
    return (

        <div>

            <h1>Add Post Page </h1>
            <div className="tableDiv">

                <form onSubmit={setId, AddPosts}>
                    <label>Enter the name of product </label>
                    <input type="textbox" value={name} onChange={updateName} />
                    <br />
                    <label>Select the type of this product</label>
                    <select value={type} onChange={updatetype}>
                        {item.map((Item) => (<option key={Item.id} >{Item.type}</option>))}

                    </select>
                    <br />
                    <label>Image</label>
                    <select value={imgSrc} onChange={updateImgSrc}>
                        {item.map((Item) => (<option key={Item.id} >{Item.imgSrc}</option>))}
                    </select>
                    <br />
                    <button>Submit</button>
                </form>

            </div>
        </div>

    );
}

export default AddPost;