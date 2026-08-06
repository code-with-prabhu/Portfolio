import React, { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const NavbarContext = createContext();
export const NavbarImageContext = createContext(); // Renamed for clarity

const NavContext = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false);
    
    // Store the actual file name you want to use
    const [navImage, setNavImage] = useState('light.svg'); 
    const validRoutes = ['/', '/projects', '/skills', '/contact', '/blogs'];
    const locate = useLocation().pathname;
    const isNotFoundPage = !validRoutes.includes(locate);
    useEffect(() => {
        // Provide the specific SVG file name based on the route
        if (locate === '/projects' || locate === '/skills' || isNotFoundPage) {
            setNavImage('image.svg'); 
        } else {
            setNavImage('light.svg');
        }
    }, [locate]);
    
    return (
        <NavbarContext.Provider value={[navOpen, setNavOpen]}>
            <NavbarImageContext.Provider value={[navImage, setNavImage]}>
                {children}
            </NavbarImageContext.Provider>
        </NavbarContext.Provider>
    );
}

export default NavContext;