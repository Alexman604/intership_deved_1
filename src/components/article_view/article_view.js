
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../..';
import { Spinner } from 'react-bootstrap';

const ArticleView = () => {
    const { id } = useParams();
    const data = useContext(Context);

    const article = data.filter((item) => item.id === id);
    const [{ title, imageUrl, expertComment, description }] = article;

    if (!article) return Spinner
    else
        return (
            <div className='article-view'>
                <h3>{title} hello</h3>
                <img src={imageUrl} alt="" />
                <p>{description}</p>
                <div contentEditable="true">
                    <h5>Experts Comment</h5>
                    {expertComment} hello</div>
            </div>
        );
}

export default ArticleView;
