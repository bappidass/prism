
import riskconnect1 from "@/assets/risk.png";
import riskconnect2 from "@/assets/risk.png";
import riskconnect3 from "@/assets/risk.png";
import riskconnect4 from "@/assets/risk.png";
import riskconnect5 from "@/assets/risk.png";
import { motion, scale, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export default function RiskConnectedMindmap() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, {
        once: true,
        "amount": .8
    })
    const transitionConfig = {
        topLeft: {
            transition: { duration: .4, delay: 0, ease: "linear" }
        },
        topRight: {
            transition: { duration: .4, delay: .1, ease: "linear" }
        },
        bottomLeft: {
            transition: { duration: .4, delay: 0.2, ease: "linear" }
        },
        bottomCenter: {
            transition: { duration: .4, delay: .3, ease: "linear" }
        },
        bottomRight: {
            transition: { duration: .4, delay: .4, ease: "linear" }
        }
    }
    const svg_Vars = {
        initial: { scale: 0 },
        animate: { scale: [0, 1] }
    }

    return <div className="h-full overflow-auto bg-amber-50">
        <div ref={containerRef} className="scale-90 relative h-screen w-full max-w-6xl mx-auto"
            style={{
                display: "grid",
                gridTemplateRows: "repeat(5, minmax(0, 1fr))",
                gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            }}
        >
            {/* Center Item */}
            <div
                style={{ alignSelf: "center", justifySelf: "center", gridColumn: "3 / 3", gridRow: "3 / 3" }}
                className="z-10 bg-gradient text-center text-sm md:text-lg
            lg:text-xl font-heading font-semibold  rounded-2xl h-full w-full flex justify-center items-center text-white px-8 py-4  md:p-8 hover:shadow-md hover:shadow-blue-500">
                <h4>Risks are Connected</h4>
            </div>

            {/* Top Left  */}
            <div className=" flex justify-center items-center p-4"
                style={{
                    alignSelf: "center", justifySelf: "center",
                    gridColumnStart: "2",
                    gridRowStart: "2",
                    transform: "translate(25%,0%)",
                }}
            >
                <motion.svg
                    style={{ transformOrigin: "bottom right" }}
                    variants={svg_Vars}
                    initial={"initial"}
                    animate={isInView ? "animate" : "initial"}
                    transition={transitionConfig.topLeft.transition}
                    width="156"
                    height="208"
                    viewBox="0 0 156 228"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.10623e-05 10.6667C8.10623e-05 16.5577 4.77571 21.3333 10.6667 21.3333C16.5578 21.3333 21.3334 16.5577 21.3334 10.6667C21.3334 4.77563 16.5578 4.76837e-06 10.6667 4.76837e-06C4.77571 4.76837e-06 8.10623e-05 4.77563 8.10623e-05 10.6667ZM153.667 227.667C154.771 227.667 155.667 226.771 155.667 225.667C155.667 224.562 154.771 223.667 153.667 223.667V225.667V227.667ZM10.6667 10.6667V12.6667H50.475V10.6667V8.66667H10.6667V10.6667ZM67.475 27.6667H65.475V208.667H67.475H69.475V27.6667H67.475ZM84.475 225.667V227.667H153.667V225.667V223.667H84.475V225.667ZM67.475 208.667H65.475C65.475 219.16 73.9816 227.667 84.475 227.667V225.667V223.667C76.1907 223.667 69.475 216.951 69.475 208.667H67.475ZM50.475 10.6667V12.6667C58.7592 12.6667 65.475 19.3824 65.475 27.6667H67.475H69.475C69.475 17.1733 60.9684 8.66667 50.475 8.66667V10.6667Z"
                        fill="url(#paint0_linear_86_463)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_86_463"
                            x1="82.1667"
                            y1="10.6667"
                            x2="82.1667"
                            y2="225.667"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#24519E" />
                            <stop offset="0.483173" stopColor="#20B5E5" />
                            <stop offset="0.966346" stopColor="#087C64" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>
            <div
                style={{
                    alignSelf: "center", justifySelf: "center",
                    gridColumnStart: "2",
                    gridRowStart: "1",
                    transform: "translate(-50%,25%)",
                }}
                className="flex justify-center items-center p-4">
                <MindMapImage isInView={isInView}
                    transition={transitionConfig.topLeft.transition}
                    src={riskconnect5}
                    alt="Barrier to Trade"
                    title="Barrier to Trade"
                >
                </MindMapImage>
            </div>

            {/* Top Right */}
            <div className="flex justify-center items-center p-4"
                style={{
                    gridColumnStart: "4",
                    gridRowStart: "3",
                    transform: "translate(-25%,-50%)",
                    height: "100%",
                    transformOrigin: "bottom left"
                }}>
                <motion.svg
                    style={{
                        transformOrigin: "bottom left"
                    }}
                    variants={svg_Vars}
                    initial={"initial"}
                    animate={isInView ? "animate" : "initial"}
                    transition={transitionConfig.topRight.transition}
                    width="auto"
                    height="114"
                    viewBox="0 0 156 114"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M155.667 10.6667C155.667 16.5577 150.891 21.3333 145 21.3333C139.109 21.3333 134.333 16.5577 134.333 10.6667C134.333 4.77564 139.109 5.28338e-06 145 4.76837e-06C150.891 4.25336e-06 155.667 4.77563 155.667 10.6667ZM1.99999 113.667C0.895425 113.667 -6.33253e-06 112.771 -6.42909e-06 111.667C-6.52565e-06 110.562 0.895425 109.667 1.99999 109.667L1.99999 111.667L1.99999 113.667ZM145 10.6667L145 12.6667L105.192 12.6667L105.192 10.6667L105.192 8.66668L145 8.66667L145 10.6667ZM88.1918 27.6667L90.1918 27.6667L90.1918 94.6667L88.1918 94.6667L86.1918 94.6667L86.1918 27.6667L88.1918 27.6667ZM71.1918 111.667L71.1918 113.667L1.99999 113.667L1.99999 111.667L1.99999 109.667L71.1918 109.667L71.1918 111.667ZM88.1918 94.6667L90.1918 94.6667C90.1918 105.16 81.6852 113.667 71.1918 113.667L71.1918 111.667L71.1918 109.667C79.4761 109.667 86.1918 102.951 86.1918 94.6667L88.1918 94.6667ZM105.192 10.6667L105.192 12.6667C96.9075 12.6667 90.1918 19.3824 90.1918 27.6667L88.1918 27.6667L86.1918 27.6667C86.1918 17.1733 94.6984 8.66668 105.192 8.66668L105.192 10.6667Z"
                        fill="url(#paint0_linear_86_466)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_86_466"
                            x1="73.5"
                            y1="10.6667"
                            x2="73.5"
                            y2="111.667"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#24519E" />
                            <stop offset="0.483173" stopColor="#20B5E5" />
                            <stop offset="0.966346" stopColor="#087C64" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>
            <div
                style={{
                    alignSelf: "center", justifySelf: "center",
                    gridColumnStart: "4",
                    gridRowStart: "2",
                    transform: "translate(50%,25%)",
                }}
                className="flex justify-center items-center p-4">

                <MindMapImage isInView={isInView}
                    transition={transitionConfig.topRight.transition}
                    src={riskconnect4}
                    alt="Complex Supply Chain"
                    title="Complex Supply Chain" />
            </div>

            {/* Bottom Left */}
            <div className="flex justify-center items-center p-4"
                style={{
                    gridColumnStart: "2",
                    gridRowStart: "4",
                    transform: "translate(25%,-50%)",
                    height: "100%"
                }}>
                <motion.svg
                    style={{
                        transformOrigin: "top right"
                    }}
                    variants={svg_Vars}
                    initial={"initial"}
                    animate={isInView ? "animate" : "initial"}
                    transition={transitionConfig.bottomLeft.transition}
                    width="156"
                    height="114"
                    viewBox="0 0 156 114"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.10623e-05 103C8.05473e-05 97.109 4.77571 92.3333 10.6667 92.3333C16.5578 92.3333 21.3334 97.109 21.3334 103C21.3334 108.891 16.5578 113.667 10.6667 113.667C4.77571 113.667 8.15773e-05 108.891 8.10623e-05 103ZM153.667 2.75733e-06C154.771 2.66077e-06 155.667 0.895434 155.667 2C155.667 3.10457 154.771 4 153.667 4L153.667 2L153.667 2.75733e-06ZM10.6667 103L10.6667 101L50.475 101L50.475 103L50.475 105L10.6667 105L10.6667 103ZM67.475 86L65.475 86L65.475 19L67.475 19L69.475 19L69.475 86L67.475 86ZM84.475 2.00001L84.475 8.80627e-06L153.667 2.75733e-06L153.667 2L153.667 4L84.475 4.00001L84.475 2.00001ZM67.475 19L65.475 19C65.475 8.5066 73.9816 9.72363e-06 84.475 8.80627e-06L84.475 2.00001L84.475 4.00001C76.1907 4.00001 69.475 10.7157 69.475 19L67.475 19ZM50.475 103L50.475 101C58.7592 101 65.475 94.2843 65.475 86L67.475 86L69.475 86C69.475 96.4934 60.9684 105 50.475 105L50.475 103Z"
                        fill="url(#paint0_linear_86_472)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_86_472"
                            x1="82.1668"
                            y1="103"
                            x2="82.1667"
                            y2="2.00001"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#24519E" />
                            <stop offset="0.483173" stopColor="#20B5E5" />
                            <stop offset="0.966346" stopColor="#087C64" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>
            <div
                style={{
                    alignSelf: "center", justifySelf: "center",
                    gridColumnStart: "2",
                    gridRowStart: "4",
                    transform: "translate(-50%,0%)",
                }}
                className="flex justify-center items-center p-4">
                <MindMapImage isInView={isInView}
                    transition={transitionConfig.bottomLeft.transition}
                    src={riskconnect1}
                    alt="Food Insecurity"
                    title="Food Insecurity"
                    className="w-full max-w-md text-center">
                </MindMapImage>
            </div>

            {/* Bottom Right  */}
            <div
                style={{
                    gridColumnStart: "4",
                    gridRowStart: "4",
                    transform: "translate(-25%, 0%)",
                }}
                className="flex justify-center items-center p-4">
                <motion.svg
                    style={{
                        transformOrigin: "top left"
                    }}
                    variants={svg_Vars}
                    initial={"initial"}
                    animate={isInView ? "animate" : "initial"}
                    transition={transitionConfig.bottomRight.transition}
                    width="156"
                    height="226"
                    viewBox="0 0 156 226"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M155.667 215C155.667 209.109 150.891 204.333 145 204.333C139.109 204.333 134.333 209.109 134.333 215C134.333 220.891 139.109 225.667 145 225.667C150.891 225.667 155.667 220.891 155.667 215ZM2 0C0.895432 0 0 0.895432 0 2C0 3.10457 0.895432 4 2 4V2V0ZM145 215V213H105.192V215V217H145V215ZM88.1918 198H90.1918V19H88.1918H86.1918V198H88.1918ZM71.1918 2V0H2V2V4H71.1918V2ZM88.1918 19H90.1918C90.1918 8.50659 81.6852 0 71.1918 0V2V4C79.4761 4 86.1918 10.7157 86.1918 19H88.1918ZM105.192 215V213C96.9075 213 90.1918 206.284 90.1918 198H88.1918H86.1918C86.1918 208.493 94.6984 217 105.192 217V215Z"
                        fill="url(#paint0_linear_86_469)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_86_469"
                            x1="73.5"
                            y1="215"
                            x2="73.5"
                            y2="2"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#24519E" />
                            <stop offset="0.483173" stopColor="#20B5E5" />
                            <stop offset="0.966346" stopColor="#087C64" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>
            <div
                style={{
                    gridColumnStart: "5",
                    gridRowStart: "5",
                    transform: "translate(-50%, -25%)",
                }}
                className="flex justify-center items-center p-4">
                <MindMapImage isInView={isInView}
                    transition={transitionConfig.bottomRight.transition}
                    src={riskconnect3}
                    alt="Urban Inequities"
                    title=" Urban Inequities"
                    className="w-full max-w-md text-center">
                </MindMapImage>
            </div>

            {/* Bottom Center */}
            <div
                style={{
                    alignSelf: "center", justifySelf: "center",
                    gridColumnStart: "3",
                    gridRowStart: "3",
                    gridRowEnd: "4",
                    transform: "translate(0%,50%)",
                }}
                className=" flex justify-center items-center p-4">
                <motion.svg
                    style={{
                        transformOrigin: "top center"
                    }}
                    variants={svg_Vars}
                    initial={"initial"}
                    animate={isInView ? "animate" : "initial"}
                    transition={transitionConfig.bottomCenter.transition}
                    width="22"
                    height="147"
                    viewBox="0 0 22 147"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.6668 146.667C4.77572 146.667 8.70419e-05 141.891 8.67844e-05 136C8.65269e-05 130.109 4.77572 125.333 10.6668 125.333C16.5578 125.333 21.3334 130.109 21.3334 136C21.3334 141.891 16.5578 146.667 10.6668 146.667ZM10.6667 88.1918L8.66674 88.1918V88.1918L10.6667 88.1918ZM8.66674 2C8.66674 0.895432 9.56217 4.82825e-08 10.6667 0C11.7713 -4.8282e-08 12.6667 0.895431 12.6667 2L10.6667 2L8.66674 2ZM10.6668 136L8.66675 136L8.66674 88.1918L10.6667 88.1918L12.6667 88.1918L12.6668 136L10.6668 136ZM10.6667 88.1918L8.66674 88.1918L8.66674 2L10.6667 2L12.6667 2L12.6667 88.1918L10.6667 88.1918Z"
                        fill="url(#paint0_linear_41_47)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_41_47"
                            x1="10.6667"
                            y1="69"
                            x2="10.6667"
                            y2="69"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#24519E" />
                            <stop offset="1" stopColor="#087C64" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>
            <div
                style={{
                    alignSelf: "center", justifySelf: "center",
                    gridColumnStart: "3",
                    gridRowStart: "5",
                }}
                className="flex justify-center items-center p-4">
                <MindMapImage isInView={isInView}
                    animate={{ opacity: [0, 1] }}
                    transition={transitionConfig.bottomCenter.transition}
                    src={riskconnect5}
                    title="Complex Supply Chain"
                    alt="Complex Supply Chain"
                    className="w-[200px] h-28 md:w-[300px] md:h-40 object-cover rounded-2xl border-4 border-[#24519E] overflow-hidden shadow-md "
                />
            </div>
        </div>
    </div>
}

const animationVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
}

function MindMapImage({ transition = {}, isInView = false, src = "", alt = "", title = "" }) {
    return (<motion.div
        variants={animationVars}
        initial={"initial"}
        animate={isInView ? "animate" : "initial"}
        transition={{ ...transition, delay: transition.delay + .5 }}
        className="w-full max-w-md text-center">
        <div className="hover:shadow-xl transition duration-300">
            <img
                src={src}
                alt={alt}
                className="w-[200px] h-28 md:w-[300px] md:h-40 object-cover rounded-2xl border-4 border-[#24519E] overflow-hidden shadow-md "
            />
        </div>
        <h2 className="mt-4 text-sm sm:text-xl md:text-xl font-semibold text-[#24519E]">
            {title}
        </h2>
    </motion.div>)
}
