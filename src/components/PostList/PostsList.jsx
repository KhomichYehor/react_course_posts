import React from 'react';
import PostItem from '../PostItem/PostItem';


const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop:15}}>
                {title}
            </h1>
            {posts.map((post) => 
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
}

export default PostList;
