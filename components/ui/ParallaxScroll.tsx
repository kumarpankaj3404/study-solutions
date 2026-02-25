"use client"

import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react"
import { useRef } from "react"
import { scrollContent } from "@/constants"

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function ParallaxItem({ item, index }: { item: typeof scrollContent[0], index: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    
    // Reduced the parallax distance so it moves more subtly and stays aligned
    const y = useParallax(scrollYProgress, 120)

    // Array of beautiful, soft gradients to alternate behind the images
    const gradients = [
        "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)", // Sky
        "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)", // Pink
        "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)", // Amber
        "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)", // Indigo
    ]

    return (
        <section className="img-container">
            <div 
                ref={ref} 
                className="image-box"
                style={{ background: gradients[index % gradients.length] }}
            >
                {/* Adding a smooth hover scale to the image */}
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={item.img}
                    alt={item.title}
                />
            </div>
            <motion.div
                style={{ y }}
                className="text-container" 
            >
                <span className="badge">Resource</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </motion.div>
        </section>
    )
}

export default function Parallax() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div className="relative w-full">
            {scrollContent.map((item, index) => (
                <ParallaxItem key={index} item={item} index={index} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>{`
        .img-container {
            /* Much smaller height so elements are closer together */
            height: 50vh; 
            min-height: 450px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
            margin-bottom: 2rem;
        }

        .image-box {
            /* Smaller, more compact image card */
            width: 280px;
            height: 280px;
            border-radius: 32px;
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            z-index: 1;
            border: 2px solid rgba(255, 255, 255, 0.6);
        }

        .image-box img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.1));
        }

        .text-container {
            position: absolute;
            /* Brought the text closer to the image */
            left: calc(50% + 180px); 
            top: 50%;
            transform: translateY(-50%);
            max-width: 400px;
            z-index: 2;
            display: flex;
            flex-direction: column;
        }

        .badge {
            align-self: flex-start;
            background: #f1f5f9;
            color: #64748b;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            padding: 6px 14px;
            border-radius: 20px;
            margin-bottom: 12px;
            border: 1px solid #e2e8f0;
        }

        .text-container h2 {
            color: #0f172a;
            margin: 0 0 12px 0;
            font-size: 36px;
            font-weight: 800;
            letter-spacing: -1px;
            line-height: 1.1;
        }

        .text-container p {
            color: #475569;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.6;
        }

        /* Mobile & Tablet Adjustments */
        @media (max-width: 1024px) {
            .img-container {
                flex-direction: column;
                height: auto;
                padding: 40px 0;
            }
            .image-box {
                width: 240px;
                height: 240px;
                margin-bottom: 30px;
            }
            .text-container {
                position: relative;
                left: auto;
                top: auto;
                transform: none !important;
                text-align: center;
                width: 90%;
                align-items: center;
            }
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6); 
            bottom: 0;
            z-index: 50;
            transform-origin: 0%;
        }
    `}</style>
    )
}