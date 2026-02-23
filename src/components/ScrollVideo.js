"use client";
import { useRef, useEffect, useState } from "react";
import { useScroll, useSpring } from "framer-motion";

export default function ScrollVideo({ src, children }) {
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    // Track scroll progress of the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // If mobile, just play the video normally
        if (isMobile) {
            video.currentTime = 0;
            video.play().catch(() => { }); // Autoplay might be blocked, catch error
            return;
        }

        // Ensure video metadata is loaded to know duration
        const handleMetadata = () => {
            // Ready
        };
        video.addEventListener('loadedmetadata', handleMetadata);

        // Sync video time with scroll
        const unsubscribe = smoothProgress.on("change", (latest) => {
            if (video.duration) {
                // Calculate time based on scroll progress
                const time = latest * video.duration;
                // Check for validity to avoid errors
                if (isFinite(time)) {
                    try {
                        video.pause(); // Ensure it's paused for scrubbing
                        video.currentTime = time;
                    } catch (e) {
                        // ignore play errors
                    }
                }
            }
        });

        return () => {
            video.removeEventListener('loadedmetadata', handleMetadata);
            unsubscribe();
        };
    }, [smoothProgress, isMobile]);

    return (
        <div ref={containerRef} style={{ height: isMobile ? "100vh" : "600vh", position: "relative" }}>
            <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
                <video
                    ref={videoRef}
                    src={src}
                    style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0, zIndex: 0 }}
                    muted
                    playsInline
                    autoPlay={isMobile}
                    loop={isMobile}
                    preload="auto"
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(26, 60, 52, 0.45)', // Overlay for text readability (kept dark green)
                    zIndex: 1
                }} />

                {/* Render children (Hero Content) on top of video */}
                <div style={{ position: "absolute", zIndex: 2, top: 0, left: 0, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}
