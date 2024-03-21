import React, { useState } from "react";
import './styles/App.css';

import PostsList from "./components/PostList/PostsList";

export const App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title:'JavaScript: Basic', body:'Description'},
        {id: 2, title:'JavaScript: Advanced', body:'Description'},
        {id: 3, title:'JavaScript: Promise', body:'Description'},
        {id: 4, title:'JavaScript: Classes', body:'Description'},
        {id: 5, title:'JavaScript: Prototypes', body:'Description'},
    ])

    return (
        <div className="App">
            <PostsList posts={posts} title='JavaScript Posts'/>
        </div>
    )
}