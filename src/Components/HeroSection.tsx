import { Box, Container, Typography } from "@mui/material"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <Container maxWidth={false} disableGutters className="hero-section !h-[70vh]">
      <Container className="text-center !h-[100%] flex flex-col items-center justify-center gap-[40px]">
        <motion.div
          initial={{ opacity: 0, y: -140 }}
          whileInView={{ opacity: 1, y: 10 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
        <Typography className="hero-heading"> 
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
      <Container maxWidth={false} disableGutters className="flex justify-center items-center">
        <Typography className="hero-superheading ">HOUSE OF DESIGN</Typography>
      </Container>
    </Container>
  )
}

export default HeroSection
