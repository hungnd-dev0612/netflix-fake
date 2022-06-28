import React, { useEffect, useState } from 'react'
import "./Nav.css"
function Nav() {
    const [showNavScroll, setShowNavScroll] = useState(false);
    useEffect(() => {
        function onScroll() {
            const onScroll = window.scrollY;
            if (onScroll > 100) {
                console.log("hello");
                setShowNavScroll(true);
            } else setShowNavScroll(false);
        };

        window.addEventListener('scroll', onScroll)
        return () => { window.removeEventListener('scroll', onScroll); }
    }, [])
    return (
        <div className={`nav ${showNavScroll && "nav_black"}`}>
            <img className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="netflix logo" />
            <img className="nav_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="netflix logo" />
        </div>
    )
}

export default Nav