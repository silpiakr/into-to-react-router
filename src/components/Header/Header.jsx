import { Link } from "react-router-dom";
// import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <nav className="flex justify-between items-center text-lg font-semibold py-4">
                {/* <ul className="flex justify-center items-center space-x-6 text-lg font-semibold py-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/services">Services</a></li>
                </ul> */}
                <span className="font-extrabold text-2xl flex justify-start text-[#008080]">Dreams BD</span>
                <div className="justify-center items-center space-x-6 text-lg font-semibold py-4">
                <Link className="hover:underline hover:text-blue-700" to="/">Home</Link>
                <Link className="hover:underline hover:text-blue-700" to="/about">About</Link>
                <Link className="hover:underline hover:text-blue-700" to="/contact">Contact</Link>
                <Link className="hover:underline hover:text-blue-700" to="/services">Services</Link>
                <Link className="hover:underline hover:text-blue-700" to='/post'>Posts</Link>
                </div>
                
                <span><Link className="hover:underline hover:text-blue-700" to="/users">Users</Link></span>
            </nav>
        </div>
    );
};

export default Header;