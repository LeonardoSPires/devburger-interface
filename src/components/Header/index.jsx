    import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
    import { useNavigate, useResolvedPath } from "react-router-dom";
    import { useUser } from "../../hooks/UserContext.jsx";
    import { useCart } from "../../hooks/CartContext.jsx";

import { 
    Container, 
    HeaderLink, 
    LinkContainer, 
    Logout, 
    Navigation, 
    Options, 
    Profile,
    Content,
    CartBadge
    } from "./styles.js";



export function Header() {
    const navigate = useNavigate();
    const { logout, userInfo } = useUser();
    const { cartProducts } = useCart();

    const { pathname } = useResolvedPath();

    const totalItems = cartProducts.reduce((acc, item) => acc + item.quantity, 0);

    function logoutUser() {
        logout();
        navigate("/login");
    }

    console.log(pathname);
    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to="/" $isActive={pathname === "/"}>Home</HeaderLink>
                        <hr></hr>
                        <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>Cardápio</HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircle color="#fff" size={24} />
                        <div>
                            <p>
                                Olá, <span>{userInfo.name}</span>  
                            </p>
                            <Logout onClick={logoutUser}>Sair</Logout> 
                        </div>
                    </Profile>
                    <LinkContainer>
                        <HeaderLink to="/carrinho" $isActive={pathname === "/carrinho"}>
                            <div style={{ position: 'relative' }}>
                                <ShoppingCart color={pathname === "/carrinho" ? "#9758a6" : "#fff"} size={24} />
                                {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
                            </div>
                        </HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    );
}