import React from 'react';
import Header from '../header/header';
import { Route, Routes } from "react-router-dom";
import Articles from '../index_page/articles';
import ArticleView from '../article_view/article_view';

const App = () => {

    return (
        <div className='app'>
            <Header />

            <Routes>
                <Route path="/" element={<Articles />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:id" element={<ArticleView />} />

            </Routes>


        </div>
    );
}

export default App;
