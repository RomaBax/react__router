import * as React from 'react';
import { Input,Stack,useDisclosure,RadioGroup,Button,Drawer,DrawerOverlay,DrawerBody,DrawerContent } from '@chakra-ui/react'
import '../Home.css'
import Carousel from './Carausel';
import Logo from '.././img/Logo.jpeg'
import { AiFillHeart,AiOutlineShoppingCart,AiOutlineGift,AiOutlineBars,AiOutlineCloseCircle,AiOutlineSearch } from "react-icons/ai";
import { useEffect } from 'react';
import  Sign from './SignIn'
import SignIn from './SignUp';

 export default function BasicTextFields() {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')


    useEffect(() => {
      const handleScroll = () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 200) {
          navbar.classList.add('navbar-fixed');
        } else {
          navbar.classList.remove('navbar-fixed');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
   
    
  return (
      <>
    <div className='navbar'>
 
    <img className='logo' src={Logo} alt="" />
    <p className='contact'>Contact: <br />
    +998 (93) 891 88-11</p>
    
    <Stack spacing={3}>
  <Input borderRightRadius='none' className='search' variant='filled' w='540px' placeholder= 'Search' size='lg'/>
</Stack>
<Button borderLeftRadius='none' h='48px' colorScheme='telegram'  className='search_icon'>
<AiOutlineSearch/>
</Button>
<RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='4'>
            
          </Stack>
        </RadioGroup>
        <Button colorScheme='gray'  variant='solid' className='burger_menu' onClick={onOpen}>
        <AiOutlineBars />
  </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
          <img className='burg-menu_logo' src={Logo} alt="" />
              <Button colorScheme='gray'  variant='solid' className='burger_menu-but' onClick={onClose}>
        <AiOutlineCloseCircle />
  </Button>
            <DrawerBody>
            <Button colorScheme='gray'  variant='solid' h='65px'
            w='100%' >
        Setting
  </Button>
  <Button colorScheme='gray'  variant='solid' h='65px'
            w='100%' >
        Setting
  </Button>
  <Button colorScheme='gray'  variant='solid' h='65px'
            w='100%' >
        Setting
  </Button>
  <Button colorScheme='gray'  variant='solid' h='65px'
            w='100%' >
        Setting
  </Button>

              
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      
        <Button colorScheme='white' variant='solid'  className='like'>
       <AiFillHeart color='red'/>
  </Button>

  <Button colorScheme='white' variant='solid'  className='shop'>
       <AiOutlineShoppingCart color='gold'/>
  </Button>

  <Button colorScheme='white' variant='solid' className='bonus'>
       <AiOutlineGift color='red'/>
  </Button>

  <Sign/>
      
<SignIn/>
    </div>
    <Carousel/>
    </>
  )
    }
