import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams ();
    const url =  `http://localhost:8000/blogs/${id}`
    const {datas:blog, isPending, error} = useFetch(url)

    const redirect = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' +blog.id, {
            method: 'DELETE',
        }).then(() => {
            redirect.push('/');
        })
    }


    return ( 
        <div className="Blog-Details">
            {isPending && <div>Loading.....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                <h2>{blog.title}</h2>
                <p>WRITTEN BY: {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;