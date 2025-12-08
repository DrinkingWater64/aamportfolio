"use client";

import { useEffect, useRef } from "react";

export default function StarfieldBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Star properties
        const stars = [];
        const numStars = 200;

        // Create initial stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2,
                opacity: Math.random(),
                speed: Math.random() * 0.05 + 0.01,
                direction: Math.random() > 0.5 ? 1 : -1
            });
        }

        // Comet properties
        let comets = [];

        const createComet = () => {
            // Randomly spawn a comet
            if (Math.random() < 0.005) { // Adjust spawn rate
                const startX = Math.random() * canvas.width;
                const startY = 0;
                comets.push({
                    x: startX,
                    y: startY,
                    length: Math.random() * 50 + 50,
                    speed: Math.random() * 5 + 5,
                    angle: Math.PI / 4, // 45 degrees
                    opacity: 1
                });
            }
        };

        const draw = () => {
            ctx.fillStyle = "#0a0a0a"; // Very dark bg, almost black
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Stars
            stars.forEach(star => {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Twinkle effect
                star.opacity += star.speed * star.direction;
                if (star.opacity > 1 || star.opacity < 0.2) {
                    star.direction *= -1;
                }
            });

            // Draw and Update Comets
            createComet();

            comets.forEach((comet, index) => {
                ctx.strokeStyle = `rgba(255, 255, 255, ${comet.opacity})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(comet.x, comet.y);
                // Calculate end point based on angle and length
                const endX = comet.x - Math.cos(comet.angle) * comet.length;
                const endY = comet.y - Math.sin(comet.angle) * comet.length;
                ctx.lineTo(endX, endY);
                ctx.stroke();

                // Move comet
                comet.x += Math.cos(comet.angle) * comet.speed;
                comet.y += Math.sin(comet.angle) * comet.speed;
                comet.opacity -= 0.01;

                // Remove comet if fading out or off screen
                if (comet.opacity <= 0 || comet.x > canvas.width || comet.y > canvas.height) {
                    comets.splice(index, 1);
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
        />
    );
}
