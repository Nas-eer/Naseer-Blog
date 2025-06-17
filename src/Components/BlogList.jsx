import { Link } from "react-router-dom";

const BlogList = ( { blogs, title} ) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
        {blogs.map(({id, author}) => (
            <div className="blog-preview" key={id}>
                <Link to = {`/blogs/${id}`}>
            <h2>{title}</h2>
            <h2>Written By: {author}</h2>
                </Link>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;