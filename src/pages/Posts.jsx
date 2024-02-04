import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Posts = () => {
    const{id} = useParams();

    const[posts, setPosts] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => setPosts(data))
    },[id])

   return(
        <div>
            {
                posts && (
                    <>
                        <div className="human-card">
                            <h1 className="name">{posts.name}</h1>
                                <h3>Email: {posts.email}</h3>
                                <span className="container-main-info">
                                    <h3>Address: {posts.address.street}</h3>
                                    <h3>City: {posts.address.city}</h3>
                                    <h3>Phone: {posts.phone}</h3>
                                    <h3>Website: {posts.website}</h3>
                                    <h3>Company: {posts.company.name}</h3>
                                </span>
                                {/* <span className="container-additional-info">
                                    <h3>Additional Information</h3>
                                    <h4>Zipcode: {posts.address.zipcode}</h4>
                                </span> */}
                                <Link to="/" className="link-back"><strong>back</strong></Link>
                        </div>
                    </>
                )
            }
        </div>
   ) 
}
export default Posts;