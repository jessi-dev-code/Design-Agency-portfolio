import { Box, Container, Typography } from "@mui/material"
import { motion } from "motion/react"

const marquee = {
  animate: {
    x: ["0%", "-100%"], // Move entire width
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10, // Slower for readability
        ease: "linear",
      },
    },
  },
}


const Marquee = () => {
    const text = ["CREATIVE WEB DESIGNING AGENCY", "JESSI"]
    
    const duplicate_text = [...text, ...text,...text, ...text,...text, ...text,...text, ...text]
  return (
    <>
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        pt: 4,
        mt:"300px"
      }}
    >
      <Container maxWidth={false} disableGutters>
        <motion.div
          style={{ display: "inline-flex", gap: "2rem" }}
          animate={{
            x:["0%","-50%"]
          }}
          transition={
            {
                
                x:{
                          repeat: Infinity,
        repeatType: "loop",
        duration: 20, // Slower for readability
        ease: "linear",  
                }
            }
          }
        >
          {duplicate_text.map((item, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: { xs: "1rem", sm: "1.5rem", md: "8rem" },
                whiteSpace: "nowrap",
              }}
              className="marquee-text"
            >
              {item}
            </Typography>
          ))}
        </motion.div>
      </Container>
    </Box>
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        my:"0px"
      }}
    >
      <Container maxWidth={false} disableGutters>
        <motion.div
          style={{ display: "inline-flex", gap: "2rem" }}
          animate={{
            x:["-50%","0%"]
          }}
          transition={
            {
                
                x:{
                          repeat: Infinity,
        repeatType: "loop",
        duration: 40, // Slower for readability
        ease: "linear",  
                }
            }
          }
        >
          {duplicate_text.map((item, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: { xs: "1rem", sm: "1.5rem", md: "8rem" },
                whiteSpace: "nowrap",
              }}
              className="marquee-text-2"
            >
              {item}
            </Typography>
          ))}
        </motion.div>
      </Container>
    </Box>
    </>
  )
}

export default Marquee
