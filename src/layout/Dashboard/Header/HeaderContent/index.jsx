// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import metamask from '../../../../assets/metamask.png';

// project import
import { GithubOutlined } from '@ant-design/icons';
import { Button, Image } from '@chakra-ui/react';

// ==============================|| HEADER - CONTENT ||============================== //

export default function HeaderContent() {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <>
      {!downLG && <Search />}
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}
      <IconButton
        component={Link}
        onClick={() => metaMask()}
        disableRipple
        color="secondary"
        title="Download Free Version"
        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
      >
        <Image src={metamask} />
      </IconButton>

      <Button ml={4} bg={'#ff5800'} color={'#fff'} p={2} rounded={'lg'}>
        Signup/Signin
      </Button>

      {/* <Notification /> */}
      {/* {!downLG && <Profile />} */}
      {/* {downLG && <MobileSection />} */}
    </>
  );
}
