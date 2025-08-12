import { Box, Container, Typography } from "@mui/material"
import {motion} from  "motion/react"
import shape1 from "../assets/aboutusflower.png"
import shape2 from "../assets/aboutusshape2.png"
import shape3 from "../assets/aboutusshape3.png"
import circletext from "../assets/circletext.png"
const Aboutus = () => {
  return (
    <>
      <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 8 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
    <Container maxWidth={false} disableGutters className="aboutussection !h-[70vh] relative">
      <Container  maxWidth={false} disableGutters className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 1, y:-80 }}
          whileInView={{ opacity: 1, y: 8 }}
          transition={{ duration: 2.4, ease: "easeInOut" }} className="waveimg z-0"></motion.div>
          <Box className="Orangebox !h-[68px] w-full"></Box>
          <Box className="bluebox !h-[58px] w-full"></Box>
          <Box className="pinkbox !h-[48px] w-full"></Box>
          <Container maxWidth="xl" className="flex  pt-20 justify-between gap-[12%] ">
        <Box className="flex justify-center aboutus-heading">
          <Typography className="aboutus-heading">
             HOD isn't just a <span>nice-to-have</span>, it's how <span>your </span>brand comes alive .
             </Typography>
           </Box>
        <Box className="flex justify-start !items-start hero-discription mt-[40px]">I believe your brand should feel like that morning excitement of being in charge of your own day. Like those little moments of delight when you realize—yes, you really did build this. Like the quiet satisfaction of knowing what you do brings real joy and change to others.Like those little moments of delight when you realize—yes.
        </Box>
          </Container>
          <Box className="flex  items-center justify-center w-full mt-2">
            <Box>
              <motion.img
               whileInView={{rotate:360}}
               transition={{duration:1.5,ease:"anticipate",delay:1.2, repeat:Infinity}}
              src={circletext}/>
            </Box>
            <Box className="flex items-end justify-end w-[70%]">
            <motion.img
             whileInView={{rotate:360}}
             transition={{duration:1.5,ease:"anticipate",delay:1.2, repeat:1}}
            src={shape1}/>
            <motion.img
             whileInView={{rotate:360}}
             transition={{duration:1.5,ease:"anticipate",delay:1.2 ,repeat:1}}
            src={shape2}/>
            <motion.img
             whileInView={{rotate:360}}
             transition={{duration:1.5,ease:"anticipate",delay:1.2 ,repeat:1}}
            src={shape3}/>
            </Box>
          </Box>
      </Container>
    </Container>

        </motion.div>
    </>
  )
}

export default Aboutus