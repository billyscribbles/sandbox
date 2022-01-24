import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export type VenueProps = {
    children: React.ReactNode;
};

export default function MenuLayout({ children }: VenueProps): JSX.Element {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
