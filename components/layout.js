import React, { useState, useEffect } from 'react';
import Nav from './Navbar';
import DTNav from './DTNav';
import Footer from './Footer';
import styled from 'styled-components';

const StyledlayoutDiv = styled.div`
    min-height: 100vh;
    width: 100vw;
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default function Layout({ children }) {
    const [width, setWidth] = React.useState(null);
    const breakpoint = 620;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    return (
        <StyledlayoutDiv>
            {width < breakpoint ? <Nav /> : <DTNav />}
            <main>{children}</main>
            <Footer />
        </StyledlayoutDiv>
    );
}
