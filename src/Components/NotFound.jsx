import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="Not-Found-Page">
            <h2>Sorry</h2>
            <p>This page does not exist on this page</p>
            <Link to ='/'>Go back to the Home Page.....</Link>
        </div>
     );
}
 
export default NotFound;