import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {datas: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

//     const [blogs, setBlogs] = useState(false)
//     const [isPending, setIsPending] = useState(true)
//     const [error, setError] = useState(false)

//     useEffect(() =>{
//         fetch(" http://localhost:8000/blogs")
//         .then(res => {
//             if (!res.ok){
//                 throw Error ("Could not get data from this resource")
//             }
//             return res.json();
//         })
//         .then(data =>{
//             setBlogs(data);
//             setIsPending(false);
//             setError(null)
//         })
//         .catch(err =>{
//             setIsPending(false)
//             setError(err.message);
//         }
//         );
// },[]);


    return ( 
        // PROPS
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Fetching data...</div>}
            {blogs && <BlogList blogs={blogs} title = "All Blogs!" />}
        </div>
     );
}
 
export default Home;

