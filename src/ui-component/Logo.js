// material-ui
import { useTheme } from '@mui/material/styles';


//  import logoDark from 'assets/images/logo-dark.svg';
// import logo from 'assets/images/logo.svg';
import logo from '../assets/images/logo.png';


// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
  
         <img src={logo} alt="CSW-LOGO" width="100" />
    );
};
export default Logo;
