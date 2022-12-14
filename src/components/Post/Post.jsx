import React from "react";
import "./Post.scss";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://tridev-blog-app.herokuapp.com/images/";

  return (
    <div className="post">
      {post.photo && <img src={PF + post.photo} alt="" className="postImg" />}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c, index) => (
            <span key={index} className="postCat">
              {c.name}
            </span>
          ))}
        </div>
        <Link to={`/posts/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
