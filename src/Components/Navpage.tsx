import { Box, Container, List, ListItem } from '@mui/material'
import bigcircle from "../assets/BIGCIRCLE TEXT.png"
const Navpage = () => {
  return (
<>
    <Container className='grid md:grid-cols-12 md:h-[100vh] pt-10 md:pt-20'>
      <Box className="col-span-12 md:col-span-4">
        <List>
          <ListItem className='navlinks hover:translate-x-2 mediumdisplay'>Company</ListItem>
          <ListItem className='navlinks hover:translate-x-2 font-thin !text-[24px]'>About us</ListItem>
        </List>
      </Box>
      <Box className="col-span-12 md:col-span-4">
        <List>
          <ListItem className='navlinks hover:translate-x-2 mediumdisplay'>Follow</ListItem>
          <ListItem className='navlinks hover:translate-x-2  font-thin !text-[24px]'>Facebook</ListItem>
          <ListItem className='navlinks hover:translate-x-2 font-thin !text-[24px]'>Instagram</ListItem>
          <ListItem className='navlinks hover:translate-x-2 font-thin !text-[24px]'>linkedIn</ListItem>
        </List>
      </Box>
      <Box className="col-span-12 md:col-span-4 gap-0 md:gap-10 flex flex-col">
          <ListItem className='navlinks hover:translate-x-8 hero-nav home'>Home</ListItem>
          <ListItem className='navlinks hover:translate-x-8 hero-nav projects'>Projects</ListItem>
          <ListItem className='navlinks hover:translate-x-8 hero-nav services'>Services</ListItem>
          <ListItem className='navlinks hover:translate-x-8 hero-nav contact'> Contact</ListItem>
      </Box>
    </Container>
    <img
     src={bigcircle}
     className='absolute bottom-32 -left-0 invisible md:visible'
    />
    </>
  )
}

export default Navpage