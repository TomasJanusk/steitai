import Article from '../article/Article';
import AddPost from '../addPost/AddPost';
import PostsData from '../../data/PostsData';
import { useState } from 'react';



const Main = () => {
    const [addPost, setAddPost] = useState(false);
    const [posts, setPosts] = useState(PostsData);
    const handlePostData = (data) => {
        setPosts((prevData) => {
            return [data, ...prevData]
        })
    }
    console.log(posts)
    return (
        <>
            <section>
                <button onClick={() => setAddPost(true)}>Prideti naujiena</button>
                {addPost && <AddPost
                    onSave={handlePostData}
                />}
            </section>
            <main>
                {posts.map(post => <Article
                    key={post.id}
                    title={post.title}
                    desc={post.desc}
                />)}
            </main>
        </>
    )
}
export default Main