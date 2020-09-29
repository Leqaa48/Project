import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Details(props) {

    console.log(props);

    return (
        <div>
            <img src={"/images/" + props.location.state.imgSrc} />
            <h3>Name : {props.location.state.name} </h3>
            <h3>Type : {props.location.state.type} </h3>
        </div>
    );
}

export default Details;