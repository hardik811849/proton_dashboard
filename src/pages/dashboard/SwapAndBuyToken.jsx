import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import etherLogo from '../../assets/images/etherLogo.png';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import usa from '../../assets/usa 1.svg';
import fav from '../../assets/fEVICON2.svg';

export default function SwapAndBuyToken() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box display={'flex'} justifyContent={'center'}>
        <Box sx={{ width: '50%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, width: '100%', borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Buy with Crypto" value="1" />
                <Tab label="Buy with FIAT" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Box p="0.5rem" bg="white" borderRadius="0 0 1.37rem 1.37rem">
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  bg="rgb(247, 248, 250)"
                  p="1rem 1rem 1.1rem"
                  borderRadius="1.25rem"
                  border="0.06rem solid rgb(237, 238, 242)"
                  _hover={{ border: '0.06rem solid rgb(211,211,211)' }}
                >
                  <Box>
                    <Text color={'gray'}>Sell</Text>
                    <Input
                      placeholder="0.0"
                      fontWeight="500"
                      fontSize="1.5rem"
                      width="100%"
                      size="19rem"
                      bg="rgb(247, 248, 250)"
                      outline="none"
                      border="none"
                      focusBorderColor="none"
                      type="number"
                      css={{
                        '&::-webkit-outer-spin-button': { display: 'none' },
                        '&::-webkit-inner-spin-button': { display: 'none' },
                        '-moz-appearance': 'textfield'
                      }}
                    />
                  </Box>
                  <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                    <Image src={usa} />
                    USDT
                  </Box>
                </Flex>

                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  bg="rgb(247, 248, 250)"
                  pos="relative"
                  p="1rem 1rem 1.1rem"
                  borderRadius="1.25rem"
                  mt="0.25rem"
                  border="0.06rem solid rgb(237, 238, 242)"
                  _hover={{ border: '0.06rem solid rgb(211,211,211)' }}
                >
                  <Box>
                    <Text color={'gray'}>Buy</Text>
                    <Input
                      placeholder="0.0"
                      fontSize="1.5rem"
                      width="100%"
                      size="19rem"
                      bg="rgb(247, 248, 250)"
                      outline="none"
                      border="none"
                      focusBorderColor="none"
                      type="number"
                      css={{
                        '&::-webkit-outer-spin-button': { display: 'none' },
                        '&::-webkit-inner-spin-button': { display: 'none' },
                        '-moz-appearance': 'textfield'
                      }}
                    />
                  </Box>
                  <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                    <Image src={fav} width="2rem" />
                    RealProton
                  </Box>
                </Flex>

                <Box mt="0.5rem">
                  <Button bg="#ff5800" _hover={{ cursor: 'pointer' }} width="100%" p="1.62rem" borderRadius="1.25rem" color={'#fff'}>
                    Connect Wallet
                  </Button>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <Box p="0.5rem" bg="white" borderRadius="0 0 1.37rem 1.37rem">
                <Box bg="rgb(247, 248, 250)" rounded={'3xl'} p={'2rem'}>
                  <Text pt={'0.5rem'} pl={'0.5rem'}>
                    You&apos;re Buying
                  </Text>
                  <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Input
                      placeholder="$0.0"
                      fontWeight="500"
                      fontSize="5rem"
                      width="100%"
                      size="19rem"
                      textAlign="center"
                      bg="rgb(247, 248, 250)"
                      outline="none"
                      border="none"
                      focusBorderColor="none"
                      type="number"
                      css={{
                        '&::-webkit-outer-spin-button': { display: 'none' },
                        '&::-webkit-inner-spin-button': { display: 'none' },
                        '-moz-appearance': 'textfield'
                      }}
                    />
                  </Box>
                  <Text textAlign={'center'} fontSize={'1.5rem'} opacity={'0.2'} fontWeight={'500'}>
                    USDT
                  </Text>
                </Box>

                <Box mt="0.5rem">
                  <Button bg="#ff5800" width="100%" p="1.62rem" borderRadius="1.25rem" _hover={{ cursor: 'pointer' }} color={'#fff'}>
                    Connect Wallet
                  </Button>
                </Box>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </>
  );
}
