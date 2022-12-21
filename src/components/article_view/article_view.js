import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from '../../firebase'
import { Spinner } from 'react-bootstrap';
import { doc, getDoc } from "firebase/firestore";


const ArticleView = () => {
    const { id } = useParams();

    const [article, setArticle] = useState(null);
    const docRef = doc(db, "Articles", `${id}`);


    useEffect(() => {
        getDoc(docRef).then((docSnap) => {
            if (docSnap.exists()) {
                setArticle(docSnap.data())

            } else {
                console.log("No userInfo yet");
            }
        })

    }, []);

    if (!article) return <Spinner />
    else {
        const { title, imageUrl, expertComment, description } = article;

        return (
            <div className='article-view'>
                <h3>{title} hello</h3>
                <img src={imageUrl} alt="" />
                <p>{description}</p>
                <div >
                    <h5>Experts Comment</h5>
                    {expertComment} hello</div>
            </div>
        );
    }
}

export default ArticleView;
