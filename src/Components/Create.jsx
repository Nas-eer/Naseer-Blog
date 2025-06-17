import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
const [title, setTitle] = useState (' ')
const [body, setBody] = useState (' ')
const [author, setAuthor] = useState (' ')
const [isPending, setIsPending] = useState (false)
const goBack = useHistory();

const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author}
    setIsPending(true);
    
    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {'content-type' : "application/JSON"},
        body: JSON.stringify(blog)
    }).then(() => {
        setIsPending(false);
        goBack.push('/');
    })
}
    return ( 
        <div className="Create">
            <h2>Add a new blog</h2>
            <form 
            onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" 
                required
                value = {title}
                onChange ={ (e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Naseer">Naseer</option>
                    <option value="Fatiu">Fatiu</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog.....</button>}
            <p>{ title }</p>
            <p>{ body }</p>
            <p>{ author }</p>
            </form>
        </div>
     );
}
 
export default Create;