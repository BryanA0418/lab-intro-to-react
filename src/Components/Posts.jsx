import Post from "./Post"
import "./Posts.css"
function Posts (){
    return(
        <div className="posts-card">
            <h1 className="posts-card__h1">Posts</h1>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts;