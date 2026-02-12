'use client';

import { useState, useEffect } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Listen for loading completion
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2800); // Match LoadingScreen duration (2000ms + 300ms pause + 500ms fade)

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading && <LoadingScreen />}
            {!isLoading && (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            )}
        </>
    );
}
