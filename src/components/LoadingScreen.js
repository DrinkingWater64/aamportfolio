'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const duration = 2000; // 2 seconds
        const interval = 20; // Update every 20ms
        const steps = duration / interval;
        const increment = 100 / steps;

        let currentProgress = 0;
        const timer = setInterval(() => {
            currentProgress += increment;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(timer);
                // Start fade out after a brief pause
                setTimeout(() => {
                    setFadeOut(true);
                    // Remove loading screen after fade out
                    setTimeout(() => {
                        setLoading(false);
                    }, 500);
                }, 300);
            }
            setProgress(currentProgress);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    if (!loading) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-900 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Logo */}
            <div className="mb-12 animate-pulse">
                <Image
                    src="/images/AAMlogo.png"
                    alt="AAM Logo"
                    width={200}
                    height={200}
                    priority
                    className="drop-shadow-2xl"
                />
            </div>

            {/* Loading Bar Container */}
            <div className="w-80 max-w-[90%]">
                {/* Loading Bar Background */}
                <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden shadow-lg">
                    {/* Neon Green Loading Bar */}
                    <div
                        className="absolute top-0 left-0 h-full bg-linear-to-r from-green-400 to-green-500 rounded-full transition-all duration-200 ease-out neon-bar"
                        style={{ width: `${progress}%` }}
                    >
                        {/* Glow effect overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="mt-4 text-center">
                    <p className="text-green-400 font-semibold text-sm tracking-wider">
                        Loading... {Math.round(progress)}%
                    </p>
                </div>
            </div>

            <style jsx>{`
        .neon-bar {
          box-shadow: 
            0 0 10px #39FF14,
            0 0 20px #39FF14,
            0 0 30px #39FF14,
            0 0 40px #39FF14;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
        </div>
    );
}
