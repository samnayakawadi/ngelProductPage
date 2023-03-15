import logo from "./images/megh-logo.png"

const Navbar = ({ theme, setTheme }) => {
    return (
        <div>
            <div className="navbar bg-base-100 fixed w-full z-20 top-0 left-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#statistics">Statistics</a></li>
                            <li><a href="#organizations">Target Groups</a></li>
                            <li><a href="#highlights">Highlights</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#clients">Clients</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact">Get in Touch</a></li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a>
                                    Theme
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-zinc-600 text-white">
                                    {/* eslint-disable-next-line */}
                                    <li onClick={() => { setTheme("lofi") }}><a>Light {theme === "lofi" && <i className="fa-solid fa-circle-check" />}</a></li>
                                    {/* eslint-disable-next-line */}
                                    <li onClick={() => { setTheme("business") }}><a>Dark {theme === "business" && <i className="fa-solid fa-circle-check" />}</a></li>
                                </ul>
                            </li>
                            <li><a href="tel:+919177669936">Call Now</a></li>
                        </ul>
                    </div>
                    {/* eslint-disable-next-line */}
                    <a className="ml-5 btn btn-ghost normal-case text-xl"><img width="180" className="max-w-xs" src={logo} /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#statistics">Statistics</a></li>
                        <li><a href="#organizations">Target Groups</a></li>
                        <li><a href="#highlights">Highlights</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#clients">Clients</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Get in Touch</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-3 invisible md:visible">
                    {/* <a className="btn" href="tel:+919177669936">Call Now</a> */}

                    <ul className="menu menu-horizontal px-1">
                        <li>
                            {/* eslint-disable-next-line */}
                            <a>
                                Theme
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-zinc-600 text-white">
                                {/* eslint-disable-next-line */}
                                <li onClick={() => { setTheme("lofi") }}><a>Light {theme === "lofi" && <i className="fa-solid fa-circle-check" />}</a></li>
                                {/* eslint-disable-next-line */}
                                <li onClick={() => { setTheme("business") }}><a>Dark {theme === "business" && <i className="fa-solid fa-circle-check" />}</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar