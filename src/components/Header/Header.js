
import estrella from '../../assets/logoBM.png';
import { HeaderContainer, Brand, BrandLogo, Title } from './styles';

const Header = (props) => {
  return (
    <HeaderContainer>
      <Brand>
        <BrandLogo src={estrella} alt="" />
        <Title>UR TUNES</Title>
      </Brand>

      {props.children}
    </HeaderContainer>
  );
};

export default Header;