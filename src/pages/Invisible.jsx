import { useState, useEffect } from "react";
import Links from "../Components/Links";

const Invisible = () => {
    const[posts, setPosts] = useState([]);

    useEffect(()=>{
        async function FetchUsers(){
            //users
            const requestUsers = await fetch('https://jsonplaceholder.typicode.com/users');
            const responseUsers = await requestUsers.json().catch(err => console.error(err));
            //posts
            const requestPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
            const responsePosts = await requestPosts.json().catch(err => console.error(err));
            
            //use filter/find
            setPosts(
              responsePosts.filter(obj=> {
                return responseUsers.find(obj2 => {
                    if(obj.id === obj2.id) return Object.assign(obj, obj2);
                });
              })
            );
      
          }
          FetchUsers();
    },[])
         
    return(
        <div>
            {
                posts.map(el => {
                    return(                            
                        <Links key={el.name} id={el.id} name={el.name} body={el.body}/>                            
                    )
                })
            }
        </div>
    )
}
export default Invisible;