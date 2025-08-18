import { Box, Container, Typography } from "@mui/material"
import { motion } from "framer-motion"
import Hhover from "../assets/Hhover.png"
import Ohover from "../assets/Ohover.png"
import Uhover from '../assets/Uhover.png'
import Shover from "../assets/Shover.png"
import Ehover from "../assets/Ehover.png"
import Ohover2 from "../assets/Ohover2.png"
import Fhover from "../assets/Fhover.png"
import Dhover from "../assets/Dhover.png"
import Ehover2 from "../assets/Ehover(2).png"
import Shover2 from "../assets/Shover(2).png"
import Ihover from "../assets/Ihover.png"
import Ghover from "../assets/Ghover.png"
import Nhover from "../assets/Nhover.png"

const HeroSection = () => {
  return (
    <Container maxWidth={false} disableGutters className="hero-section h-[96vh] p-[20px] flex flex-col">
      <Container className="flex flex-col items-center justify-center gap-[40px] text-center md:w-full !w-[80%] h-[100%]"> 
        <motion.div
          initial={{ opacity: 0, y: -140 }}
          whileInView={{ opacity: 1, y: 10 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
        <Typography className="hero-heading "> 
          Where we build brands that bring you joy every morning
        </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 140 }}
          whileInView={{ opacity: 1, y: 10 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <Typography className="hero-discription max-w-[96%]">
            Experts in impactful, beautifully designed websites, Qreative supports its clients at
            every stage of their digital journey, from launching their very first page to building a
            complete, results-driven strategy. Whatever your vision, let's turn it into a lasting
            and tangible success with Qreative!
          </Typography>
        </motion.div>
      </Container>
      <motion.div
          initial={{ opacity: 0, y: 140 }}
          whileInView={{ opacity: 1, y: 10 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        className="flex justify-center !mx-auto !ml-10 gap-[4px] overflow-x-hiddenx-hidden hover-heading"
        
        >
          <Box className="relative">
          <motion.img
          initial={{
            opacity:0
          }}
          whileHover={{
            scale:1.25,
            opacity:1
          }}

          src={Hhover} className="!h-[260px] !min-w-[200px] absolute !right-[-0%] bottom-[0%] z-40" />
        <Box className="HeroHeadingText">H
        </Box>
          </Box>
          <Box className="relative">
          <motion.img
          initial={{
            // scale:1,
            opacity:0
          }}
          whileHover={{
            scale:1.25,
            opacity:1
          }}

          src={Ohover} className="!h-[160px] !min-w-[160px] absolute !right-[-%] bottom-[20%] z-20" />
        <Box className="HeroHeadingText">O
        </Box>
          </Box>
          <Box className="relative">
          <motion.img
          initial={{
            // scale:1,
            opacity:0
          }}
          whileHover={{
            scale:1.25,
            opacity:1
          }}

          src={Uhover} className="!h-[300px] !min-w-[200px] absolute !right-[-10%] bottom-[8%] z-[8]" />
        <Box className="HeroHeadingText">U
        </Box>
          </Box>
          <Box className="relative">
          <motion.img
          initial={{
            opacity:0
          }}
          whileHover={{
            scale:1.25,
            opacity:1
          }}

          src={Shover} className="!h-[240px] !min-w-[180px] absolute !right-[-0%] bottom-[10%] z-40" />
        <Box className="HeroHeadingText">S
        </Box>
          </Box>
          <Box className="relative">
          <motion.img
          initial={{
            opacity:0
          }}
          whileHover={{
            scale:1.25,
            opacity:1
          }}

          src={Ehover} className="!h-[180px] !min-w-[200px] absolute !right-[-0%] bottom-[20%] z-40" />
        <Box className="HeroHeadingText">E
        </Box>
          </Box>

        <div className="flex">
          <Box className="relative">
          <motion.img
          initial={{
            opacity:0
          }}
          whileHover={{
            scale:1.25,
            opacity:1
          }}

          src={Ohover2} className="!h-[140px] !min-w-[160px] absolute !right-[8%] bottom-[40%] z-40" />
        <Box className="HeroHeadingText">O
        </Box>
          </Box>
          <Box className="relative">
          <motion.img
          initial={{
            opacity:0
          }}
          whileHover={{
            scale:1.25,
            opacity:1
          }}

          src={Fhover} className="!h-[200px] !min-w-[200px] absolute !right-[0%] bottom-[18%] z-40" />
        <Box className="HeroHeadingText">F
        </Box>
          </Box>
        </div>
          <Box className="relative">
          <motion.img
          initial={{
            opacity:0
          }}
          whileHover={{
            scale:1.25,
            opacity:1
          }}

          src={Dhover} className="!h-[200px] !min-w-[200px] absolute !right-[0%] bottom-[18%] z-[80]" />
        <Box className="HeroHeadingText">D
        </Box>
          </Box>
          <Box className="relative">
          <motion.img
          initial={{
            opacity:0
          }}
          whileHover={{
            scale:1.25,
            opacity:1
          }}

          src={Ehover2} className="!h-[200px] !min-w-[360px] absolute !right-[-60%] bottom-[18%] z-40" />
        <Box className="HeroHeadingText">E
        </Box>
          </Box>
          <Box className="relative">
          <motion.img
          initial={{
            // scale:1,
            opacity:0
          }}
          whileHover={{
            scale:1.25,
            opacity:1
          }}

          src={Shover2} className="!h-[100px] !min-w-[160px] absolute !right-[-0%] bottom-[40%] z-50 !rotate-[-20deg]" />
        <Box className="HeroHeadingText">S
        </Box>
          </Box>
          <Box className="relative">
          <motion.img
          initial={{
            // scale:1,
            opacity:0
          }}
          whileHover={{
            scale:1.25,
            opacity:1
          }}

          src={Ihover} className="!h-[160px] !min-w-[180px] absolute !right-[-40%] bottom-[30%] z-[60]" />
        <Box className="HeroHeadingText">I
        </Box>
          </Box>
          <Box className="relative">
          <motion.img
          initial={{
            // scale:1,
            opacity:0
          }}
          whileHover={{
            scale:1.25,
            opacity:1
          }}

          src={Ghover} className="!h-[200px] !min-w-[280px] absolute !right-[-40%] bottom-[10%]" />
        <Box className="HeroHeadingText">G
        </Box>
          </Box>
          <Box className="relative">
          <motion.img
          initial={{
            // scale:1,
            opacity:0
          }}
          whileHover={{
            scale:1.25,
            opacity:1
          }}

          src={Nhover} className="!h-[260px] !min-w-[200px] absolute !right-[12%] bottom-[8%]" />
        <Box className="HeroHeadingText">N
        </Box>
          </Box>

        </motion.div>
    </Container>
  )
}

export default HeroSection
