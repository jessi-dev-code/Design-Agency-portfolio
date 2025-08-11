"use client"

import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

import Hhover from "../assets/Hhover.png"
import Container from '@mui/material/Container'
export default function ExitAnimation() {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <>
        <Container maxWidth="lg" className="flex flex-row items-center justify-center h-[100vh] -inset-0">
        <div style={container}>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={box}
                        key="box"
                    ><img src={Hhover} alt="Hover" className="w-full h-full object-cover rounded-[10px]" />
                    </motion.div>
                ) : null}
            </AnimatePresence>
            <motion.button
            className="hero-superheading "
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 1 }}
            >
                {isVisible ? "H" : "H"}
            </motion.button>
        </div>
        <div style={container}>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={box}
                        key="box"
                    ><img src={Hhover} alt="Hover" className="w-full h-full object-cover rounded-[10px]" />
                    </motion.div>
                ) : null}
            </AnimatePresence>
            <motion.button
            className="hero-superheading "
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 1 }}
            >
                {isVisible ? "H" : "H"}
            </motion.button>
        </div>
          
        </Container>
        </>
    )
}



const container: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: 200,
    height: 500,
    position: "relative",
}

const box: React.CSSProperties = {
    width:200,
    height: 100,
    borderRadius: "10px",
    position: "absolute",
    top:50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
}   