import { Box, Container, ListItem } from "@mui/material"
import logo from "../assets/logo.svg"
import { MoreVert } from "@mui/icons-material"
import { motion,AnimatePresence } from "motion/react"
import heart from "../assets/Ohover2.png"
import { useState } from "react"
import Navpage from "./Navpage"
const Navsection = () => {
  const [isvisible,setIsVisible] = useState(true)
  return (
    <Container maxWidth="xl" className="navsection !min-h-[80px] grid grid-cols-3 items-center px-[32px] cursor-pointer rounded-[12px] md:rounded-[24px] shadow-sm z-10 sticky top-[20px] !w-[90%] !md:w-full">
        <Box>
            <img src={logo} />
        </Box>
        <Box>

        </Box>
        <Box className="flex items-center justify-end !ml-2 w-[100%] gap-4">
          <Box className=" gap-2 flex invisible md:visible ">
            <ListItem className="navlinks flex items-center max-w-max justify-center ">Product</ListItem>
            <ListItem className="navlinks flex items-center justify-center ">About</ListItem>
            <ListItem className="navlinks flex items-center justify-center ">Contact</ListItem>
          </Box>

            <Box className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] ">
            <div className="flex flex-col ">
              <AnimatePresence initial={true}>
                <motion.div
                  onClick={() => setIsVisible(!isvisible)}
                  whileTap={{ y: -4 }}
                >
                <MoreVert className="hover:rotate-[30deg] hover:text-[#FF4200]   transition-all duration-500" style={{fontWeight:600,fontSize:"1.98rem",
                }}/>
                </motion.div>
                {!isvisible ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, visibility: 0,y:-1000 }}
                    animate={{ opacity: 1, scale: 1, visibility: 1, y:10 }}
                    exit={{ opacity: 0, scale: 0 ,y:-1000 }}
                    key="box"
                    className="absolute top-[100px] left-0  flex justify-center items-center w-[100%] min-h-[100vh] rounded-xl navpage inset-6 border-4"
                    ><Navpage /></motion.div>
                ) : null}

              </AnimatePresence>
            </div>

            </Box>
        </Box>
    </Container>
  )
}

export default Navsection