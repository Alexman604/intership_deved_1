import React from 'react';
import { Link } from "react-router-dom";

const ArticleItem = ({ id, imageUrl, title }) => {
    return (

        <div className='article-item'>
            <img src={imageUrl} alt="" />
            <Link to={`/articles/${id}`}>
                <p>{title}</p>
            </Link>

        </div>

    );
}

export default ArticleItem;

