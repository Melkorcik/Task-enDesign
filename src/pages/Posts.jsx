import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Contact from "../Components/Contact_Information";
import Address from "../Components/Address";
import Company from "../Components/Company";
import UserName from "../Components/UserName";

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
                            <UserName name={posts.name}/>
                            <Contact email={posts.email} phone={posts.phone} website={posts.website}/>
                            <Address 
                                street={posts.address.street} 
                                suite={posts.address.suite} 
                                city={posts.address.city} 
                                zipcode={posts.address.zipcode} 
                                lat={posts.address.geo.lat} 
                                lng={posts.address.geo.lng}
                            />
                            <Company name={posts.company.name} catchPhrase={posts.company.catchPhrase} bs={posts.company.bs}/>
                            <Link to="/" className="link-back"><strong>back</strong></Link>
                        </div>
                    </>
                )
            }
        </div>
   ) 
}
export default Posts;