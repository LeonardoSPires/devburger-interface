import { SignOut, CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

import { navLinks } from "./navLinks";
import Logo from '../../assets/logo.png';
import { useUser } from "../../hooks/UserContext";
import { Container, NavLinkContainer, NavLink, Footer, ToggleButton } from "./styles";
import { useResolvedPath } from "react-router-dom";

export function SideNavAdmin() {
   const { logout } = useUser();
   const { pathname } = useResolvedPath();
   const [isExpanded, setIsExpanded] = useState(true);
   const navRef = useRef(null);

   useEffect(() => {
      function handleOutsideClick(event) {
         const isMobile = window.innerWidth <= 640;
         if (!isMobile) return;
         const navEl = navRef.current;
         if (navEl && !navEl.contains(event.target) && isExpanded) {
            setIsExpanded(false);
         }
      }

      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
   }, [isExpanded]);

   const handleLinkClick = () => {
      setIsExpanded(false);
   };

    return (
       <Container ref={navRef} $isExpanded={isExpanded}>
           <img src={Logo} alt="Hamburger DevBurger Logo" />
          <ToggleButton onClick={() => setIsExpanded(!isExpanded)} $isExpanded={isExpanded}>
             {isExpanded ? <CaretDoubleLeft size={20} /> : <CaretDoubleRight size={20} />}
          </ToggleButton>
           <NavLinkContainer>
            {navLinks.map((link) => (
               <NavLink 
               key={link.id} 
               to={link.path}
               $isActive={pathname === link.path}
                  $isExpanded={isExpanded}
                  onClick={handleLinkClick}
               >
                     {link.icon}
                     <span>{link.label}</span>
               </NavLink>
            ))}
           </NavLinkContainer>
           <Footer>
             <NavLink
                to="/login"
                onClick={() => { logout(); handleLinkClick(); }}
                $isExpanded={isExpanded}
             >
               <SignOut />
               <span>Sair</span>
            </NavLink>
           </Footer>
        </Container>
        );
     }
