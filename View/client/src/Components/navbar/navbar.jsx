import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from 'react-router-dom';
import { Profile } from '../../Components/profile/Profile';
import { Container } from '../../Themes/globalComponents.styled';
import { Brandname, CloseButton, MenuButton, Nav, Navbars, NavButton, NavCart, NavItems, NavList, Navlogo, Navright, StyledMenuButton } from './navbar.styled';


const navbarVariant = {
  visible: { opacity: 1, scale: 1,y:0, transition: { duration: 0.2 } },
  hidden: { opacity: 0, scale: 1 ,y:50}
};


export const Navbar = () => {
  const [cookies] = useCookies(['']);
  const [isSignIn,setIsSignIn]=useState(false)
  
 const navigate= useNavigate()
  
  const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
   
    
    {
        display: 'Shop',
        path: '/products'
    },
    {
      display: 'About Us',
      path: '/aboutus'
  },
  
  
];


const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if(cookies.jwt){
      // console.log(isSignIn);
      setIsSignIn(true)
    }
  if (inView) {
      control.start("visible");
      // console.log('visible')
    } else {
      control.start("hidden");
    }
  }, [ref,control, inView,isSignIn]);





const [isOpen, setisOpen] = useState("false");
const [isToggle, setisToggle] = useState("false");
const Sidebar = () => {
  setisOpen(!isOpen);
  setisToggle(!isToggle);
};


  return (
    <>
    <Container>
    <Navbars>
      <Navlogo ref={ref}
      variants={navbarVariant}
      initial="hidden"
      animate={control}>
        
        <Brandname to='/'>E-Commerce</Brandname>
        

      </Navlogo>
      <StyledMenuButton
          ariaExpanded={isToggle}
          
          type="button"
          onClick={Sidebar}
        >
          {isOpen ? <MenuButton /> : <CloseButton />}
        </StyledMenuButton>
      <Nav>
        <NavItems dataVisible={isOpen} id="navitems">
        {
            headerNav.map((e, i) => (
           <NavList key={i} ref={ref}
           variants={navbarVariant}
           initial="hidden"
           animate={control}>
           <Link to={e.path}  >
              {e.display}
          </Link>
          </NavList>
                        ))
                    }
        </NavItems>

      </Nav>
      <Navright dataVisible={isOpen} ref={ref}
      variants={navbarVariant}
      initial="hidden"
      animate={control} >
        
          {isSignIn ?
          <Profile/>:
          <NavButton onClick={()=>navigate('/login')}>Sign in</NavButton>
          }
        
        
        
        <NavCart onClick={()=>cookies.jwt?navigate('/cart'):navigate('/login')}/>
        
        
        

      </Navright>
    </Navbars>
   
    
    </Container>
    </>
  )
}

