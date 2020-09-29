import React, { createContext, useContext, useState } from 'react';

export const AddPostContext = createContext();

export const AddPostsProvider = (props) => {
    const [Posts, addPosts] = useState([
        { id: '1', name: 'car', type: 'car', imgSrc: 'img-9.jpg' },
    ]
    );
    return (
        <AddPostContext.Provider value={[Posts, addPosts]}>
            {props.children}
        </AddPostContext.Provider>
    );
};