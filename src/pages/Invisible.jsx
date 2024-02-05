import { useState, useEffect } from "react";
import Links from "../Components/Links";

const Invisible = () => {
    const[posts, setPosts] = useState([]);
    
    useEffect(()=>{
        async function FetchUsers(){            
            try {
                const requestUsers = await fetch('https://jsonplaceholder.typicode.com/users');
                const responseUsers = await requestUsers.json();

                const requestPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
                const responsePosts = await requestPosts.json();

                //filter/find 
                
                setPosts(                    
                    responsePosts.filter(obj=> {
                        return responseUsers.find(obj2 => {
                            if(obj.userId === obj2.id) return Object.assign(obj, obj2);
                        });
                    })                    
                )
            } catch (error) {
                console.log(error);
            }      
        }
        FetchUsers();
    },[])
         
    return(
        <div>
            {
                posts.map(el => {
                    return(                            
                        <Links key={el.name} id={el.id} name={el.name} title={el.title} body={el.body}/>                            
                    )
                })
            }
        </div>
    )
}
export default Invisible;