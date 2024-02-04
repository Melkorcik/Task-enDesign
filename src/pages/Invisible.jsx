import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Invisible.css';

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
                        <>
                            <div key={el.name} className="card">
                                <header className="header-card">
                                    <Link to={`/users/${el.id}`} className="name-Link"><li><strong>{el.name}</strong></li></Link>
                                </header>
                                <span className="box-text">
                                    {el.body}
                                </span>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}
export default Invisible;