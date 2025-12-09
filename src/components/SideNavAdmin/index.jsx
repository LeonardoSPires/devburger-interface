import { SignOut } from "@phosphor-icons/react";

import { navLinks } from "./navLinks";
import Logo from '../../assets/logo.png';
import { useUser } from "../../hooks/UserContext";
import { Container, NavLinkContainer, NavLink, Footer } from "./styles";
import { useResolvedPath } from "react-router-dom";

export function SideNavAdmin() {
   const { logout } = useUser();
   const { pathname } = useResolvedPath();

    return (
        <Container>
           <img src={Logo} alt="Hamburger DevBurger Logo" />
           <NavLinkContainer>
            {navLinks.map((link) => (
               <NavLink 
               key={link.id} 
               to={link.path}
               $isActive={pathname === link.path}
               >
                     {link.icon}
                     <span>{link.label}</span>
               </NavLink>
            ))}
           </NavLinkContainer>
           <Footer>
            <NavLink to="/login" onClick={logout}>
               <SignOut />
               <span>Sair</span>
            </NavLink>
           </Footer>
        </Container>
        );
     }
