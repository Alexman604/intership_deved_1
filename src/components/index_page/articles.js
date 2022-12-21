import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Context } from '../..';
import ArticleItem from '../detailed_page/article-item';

const Articles = () => {
    const data = useContext(Context);

    let elements = data.map(article => {
        const { id, imageUrl, title } = article;
        return (
            <ArticleItem key={id} id={id} imageUrl={imageUrl} title={title} />
        )
    })

if (!data ) return Spinner 
else
    return (
        <div className='wrapper'>
            {elements}
        </div>
    );
}

export default Articles;
