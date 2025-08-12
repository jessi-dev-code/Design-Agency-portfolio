import { Box, Container, Typography } from "@mui/material"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <Container maxWidth={false} disableGutters className="hero-section h-[100vh] p-[20px] flex flex-col">
      <Container className="flex flex-col items-center justify-center gap-[40px] text-center h-[80%]"> 
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
        className="flex justify-center mx-auto gap-[4px]">
        <Box className="HeroHeadingText">H</Box>
        <Box className="HeroHeadingText">O</Box>
        <Box className="HeroHeadingText">U</Box>
        <Box className="HeroHeadingText">S</Box>
        <Box className="mr-[12px] HeroHeadingText">E</Box>
        <div className="flex">
        <Box className="HeroHeadingText">O</Box>
        <Box className="HeroHeadingText">F</Box>
        </div>
        <Box className="ml-[12px] HeroHeadingText">D</Box>
        <Box className="HeroHeadingText">E</Box>
        <Box className="HeroHeadingText">S</Box>
        <Box className="HeroHeadingText">I</Box>
        <Box className="HeroHeadingText">G</Box>
        <Box className="HeroHeadingText">N</Box>
        </motion.div>
    </Container>
  )
}

export default HeroSection
