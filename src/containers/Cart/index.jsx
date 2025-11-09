import Logo from '../../assets/Logo 2.png';

import { CartItems } from '../../components/CartItems';
import { Container, Banner, Title, Content } from './styles';

export function Cart() {
    return(
        <Container>
            <Banner>
                <img src={Logo} alt="Logo devburger Carrinho" />
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                { <CartItems />
                    /*<CartResume /> */}
            </Content>
        </Container>
    );
}