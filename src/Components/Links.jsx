import { Link } from "react-router-dom";
import '../pages/Invisible.css';

const Links = ({id, name, body}) => {
    return(
        <div className="card">
         <header className="header-card">
            <Link to={`/users/${id}`} className="name-Link"><li><strong>{name}</strong></li></Link>
         </header>
         <span className="box-text">
            {body}
         </span>
        </div>
    )
}
export default Links;