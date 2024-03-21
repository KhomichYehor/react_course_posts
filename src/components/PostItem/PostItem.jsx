import React from 'react';
import './PostItem.css';

const PostItem = () => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>1. JavaScript</strong>
                <div>JavaScript - це мова програмування</div>
            </div>
             <div className="post__btns">
                <button>Видалити пост</button>
            </div>
        </div>
    );
}

export default PostItem;
