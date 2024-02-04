import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return(
        <>
            <header>
                <Link to="/"></Link>
            </header>
            <Outlet/>
        </>
    )
}
export default Layout;