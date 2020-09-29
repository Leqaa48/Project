import React, { useState, createContext } from 'react';
import Post from '../component/post';


export const PostContext = createContext();

export const PostProvider = (Props) => {

    const [item, setItem] = useState([
        {
            id: 1, type: "Car", imgSrc: "img-9.jpg"
        }, {

            id: 2, type: "Flower", imgSrc: "img-1.jpg"
        },
        {

            id: 3, type: "Sea", imgSrc: "img-5.jpg"
        }




    ]);

    
   

    return (<PostContext.Provider value={[item, setItem]} >{Props.children}</PostContext.Provider>);
}


