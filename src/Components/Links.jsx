import { Link } from "react-router-dom";
import '../pages/Invisible.css';

const Links = ({id, name, title, body}) => {
    return(
        <div className="card">
         <header className="header-card">
            <Link to={`/users/${id}`} className="name-Link"><li><strong>Author: {name}</strong></li></Link>
         </header>
         <span className="box-text">
            <h3>{title}</h3>
            {body}
         </span>
        </div>
    )
}
export default Links;