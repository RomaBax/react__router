import * as React from 'react';
import { Link,NavLink } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer';
import './Home.css'


import { Text,Grid,GridItem,Box} from '@chakra-ui/react'



import { useEffect } from 'react';

import Cart from './Component/Cart';


 export default function BasicTextFields() {



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
   <Navbar/>
    
    
    <Text className='catalog' fontSize='6xl'>Catalog</Text>

    <Grid templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(1, 1fr)", md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)", xl:"repeat(3, 1fr)", "2xl":"repeat(4, 1fr)"}} p={{sm:"0 80px", md:"0 10px", lg:"0 80px", xl:"0 20px", "2xl":"0 100px"}} gap={5}>
            <NavLink to={"/eletronika"}>
              <Cart/>
            </NavLink>

            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
        </Grid>


        <Box p={"0 100px"} m={"30px 0 0"} h={"15vh"} w={"100%"}>
            <Box bg={'whitesmoke'} w={"100%"} overflow={"hidden"}  h={"100%"} position={"relative"} >
                
               <div className="linia__blur__1"></div>
               <div className="linia__blur__2"></div>
        
        <Box bg={"whiteAlpha.100"} position={"absolute"} top={"0px"} display={"flex"} >
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/731/731984.png" alt="" />{/* 1 */}
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/732/732230.png" alt="" />{/* 2 */}
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/882/882747.png" alt="" />{/* 3 */}
            <img className="img__cart" width={"180px"} src="https://icons.veryicon.com/png/o/miscellaneous/bitisland-world/iphone-42.png" alt="" />{/* 4 */}
            <img className="img__cart" width={"180px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/640px-Tesla_logo.png" alt="" />{/* 5 */}
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/731/731984.png" alt="" />{/* 1 */}
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/732/732230.png" alt="" />{/* 2 */}
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/882/882747.png" alt="" />{/* 3 */}
            <img className="img__cart" width={"180px"} src="https://icons.veryicon.com/png/o/miscellaneous/bitisland-world/iphone-42.png" alt="" />{/* 4 */}
            <img className="img__cart" width={"180px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/640px-Tesla_logo.png" alt="" />{/* 5 */}
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/731/731984.png" alt="" /> {/* 1 */}
        </Box>

           </Box>
        </Box>

    <Footer/>
      </>

  );
  
}
