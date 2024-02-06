import { useState, useEffect } from "react";
import Links from "../Components/Links";

const Invisible = () => {
    const[posts, setPosts] = useState([]);
    const[post, setPost] = useState([]);
    const[user, setUser] = useState([]);

    useEffect(()=>{
        async function FetchUsers(){              
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(resp => resp.json())
                .then(data => setUser(data))
                .catch(err => console.error(err))
                
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(resp => resp.json())
                .then(data => setPost(data))
                .catch(err => console.error(err))        
        }
        FetchUsers();
    },[])
        
    useEffect(() => {
        const arr = post.map(e => { 
            const author = user.find(u => u.id === e.userId);             
            return Object.assign(e, author)
        })
        setPosts(arr)
    },[post, user])

    return(
        <div>
            { 
                posts.map((e, i) => {
                    return(                            
                            <Links key={i} id={e.id} name={e.name} title={e.title} body={e.body}/>                            
                        )
                    }                        
                )
                                
            }
        </div>
    )
}
export default Invisible;