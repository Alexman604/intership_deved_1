import React from 'react';
import { useState, useEffect } from "react";
import { db } from '../../firebase'
import { Spinner } from 'react-bootstrap';
import ArticleItem from '../detailed_page/article-item';
import { collection, onSnapshot } from "firebase/firestore";
const Articles = () => {
const articlesRef = collection(db, "Articles")
const [articles, setArticles] = useState([]);

useEffect(() => {
   
    const unSub = onSnapshot(articlesRef, { includeMetadataChanges: true }, (snapshot) => {
      
      setArticles(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unSub;
  }, []);


    let elements = articles.map(article => {
        const { id, imageUrl, title } = article;
        return (
            <ArticleItem key={id} id={id} imageUrl={imageUrl} title={title} />
        )
    })


   
if (!articles ) return Spinner 
else
    return (
        <div className='wrapper'>
            {elements}
        </div>
    );
}

export default Articles;
