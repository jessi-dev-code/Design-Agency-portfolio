import { Box, Container, Typography } from "@mui/material"
import { motion } from "motion/react"
import first from "../assets/image1.avif"
import second from "../assets/image2.avif"
import third from "../assets/image3.avif"
import fourth from "../assets/image4.avif"
import fifth from "../assets/image5.avif"

const Marquee = () => {
    const text = ["CREATIVE WEB DESIGNING AGENCY", "JESSI"]
    
    const duplicate_text = [...text, ...text,...text, ...text,...text, ...text,...text, ...text]
  return (
    <>
    <Container maxWidth={false} disableGutters className="!h-[100vh] relative mb-20">
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        pt: 4,
        mt:{xs:"100px", lg:"400px"}
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
        duration: 20,
        ease: "linear",  
                }
            }
          }
        >
          {duplicate_text.map((item, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: { xs: "2rem", sm: "4rem", md: "8rem" },
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
        duration: 20,
        ease: "linear",  
                }
            }
          }
        >
          {duplicate_text.map((item, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: { xs: "2rem", sm: "4rem", md: "8rem" },
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
      <motion.div
          initial={{ opacity: 0,}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.64, ease: "easeInOut" }}
        >
          <Container maxWidth={false} disableGutters className="overflow-hidden h-[600px] md:h-[789px] absolute top-[5%]">
        <Container maxWidth={false} disableGutters className="!h-full flex flex-col items-center justify-start gap-[2%] md:gap-[140px] overflow-scroll lg:pt-[60px] !pt-[120px] ">
            <Box className="w-[400px] md:w-[990px] min-h-[533px] sticky top-0 rounded-xl" >  
                <img src={first} className="border-[4px] border-black rounded-[32px]" />
            </Box>
            <Box className="w-[400px] md:w-[990px] min-h-[533px] sticky top-0 rounded-xl rotate-[-2deg]">  
                <img src={second}  className="border-[4px] border-black rounded-[32px]"/>
            </Box>
            <Box className="w-[400px] md:w-[990px] min-h-[533px]  sticky top-0 rounded-xl rotate-[-4deg]">  
                <img src={third}  className="border-[4px] border-black rounded-[32px]"/>
            </Box>
            <Box className="w-[400px] md:w-[990px] min-h-[533px] sticky top-0 rounded-xl rotate-[-6deg]">  
                <img src={fourth} className="border-[4px] border-black rounded-[32px]" />
            </Box>
            <Box className="w-[400px] md:w-[990px] min-h-[533px]  sticky top-0 rounded-xl rotate-[-8deg]">  
                <img src={fifth} className="border-[4px] border-black rounded-[32px]" />
            </Box>
            <Box className="w-[400px] md:w-[990px] min-h-[533px] sticky top-0 rounded-xl rotate-[-10deg]">  
                <img src={second}  className="border-[4px] border-black rounded-[32px]"/>
            </Box>
        </Container>
          </Container>
    </motion.div>
    </Container>
    </>
  )
}

export default Marquee
