import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

// project import
import Logo from './LogoMain';
import config from 'config';
import logo from '../../assets/RP Dark@2x-8.png';
import { Box, Image } from '@chakra-ui/react';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => {
  return (
    <ButtonBase disableRipple component={Link} to={!to ? config.defaultPath : to} sx={sx}>
      <Box display={'flex'} justifyContent={'flex-start'}>
        <Image src={logo} alt="logo" w={'80%'} />
      </Box>
      <Stack direction="row" spacing={1} alignItems="center"></Stack>
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
