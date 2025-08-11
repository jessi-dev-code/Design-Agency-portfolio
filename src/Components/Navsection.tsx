import { Box, Container, ListItem } from "@mui/material"
import logo from "../assets/logo.svg"
import { MoreVert } from "@mui/icons-material"
const Navsection = () => {

  return (
    <Container maxWidth="xl" disableGutters className="navsection !h-[80px] grid grid-cols-3 items-center px-[32px] cursor-pointer rounded-[24px] shadow-sm z-10 sticky top-[20px] ">
        <Box>
            <img src={logo} />
        </Box>
        <Box>
        </Box>
        <Box className="flex items-center justify-end !ml-12 w-[90%]">
            <ListItem className="navlinks">Product</ListItem>
            <ListItem className="navlinks">About</ListItem>
            <ListItem className="navlinks">Contact</ListItem>
            <Box className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] ">
                <MoreVert className="hover:rotate-[30deg] hover:text-[#FF4200]   transition-all duration-500" style={{fontWeight:600,fontSize:"1.98rem",
                }}/>
            </Box>
        </Box>
    </Container>
  )
}

export default Navsection