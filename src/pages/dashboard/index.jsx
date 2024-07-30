// material-ui
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import UniqueVisitorCard from './UniqueVisitorCard';
import SaleReportCard from './SaleReportCard';
import OrdersTable from './OrdersTable';

// assets
import GiftOutlined from '@ant-design/icons/GiftOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import SwapAndBuyToken from './SwapAndBuyToken';
import { useEffect, useState } from 'react';
import { Divider } from '@mui/material';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  const [endTime, setEndTime] = useState(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(endTime - Date.now());
  const [selectedOption, setSelectedOption] = useState('Daily');
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const generateDates = () => {
      const today = new Date();
      const datesArray = [];
      if (selectedOption === 'Daily') {
        for (let i = 0; i < 7; i++) {
          const date = new Date();
          date.setDate(today.getDate() + i);
          datesArray.push({
            day: date.getDate(),
            month: date.toLocaleString('default', { month: 'long' }),
            year: date.getFullYear(),
            isToday: i === 0
          });
        }
      } else if (selectedOption === 'Monthly') {
        for (let i = 0; i < 7; i++) {
          const date = new Date();
          date.setMonth(today.getMonth() + i);
          date.setDate(today.getDate());
          datesArray.push({
            day: date.getDate(),
            month: date.toLocaleString('default', { month: 'long' }),
            year: date.getFullYear(),
            isToday: i === 0
          });
        }
      }
      setDates(datesArray);
    };
    generateDates();
  }, [selectedOption]);

  const formatTimeLeft = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return (
      <Box
        display="grid"
        gridTemplateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(7, 1fr)'
        }}
        gap={{
          base: 2,
          md: 0
        }}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width="100%"
      >
        <Typography
          className="time-part"
          sx={{
            fontSize: { md: '18px', '2xl': '23px' },
            fontWeight: 'light',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            p: 3,
            textAlign: 'center',
            borderRadius: '0.75rem',
            color: '#FF5800'
          }}
        >
          {days}d
        </Typography>
        <Typography
          className="time-part"
          sx={{
            fontSize: { md: '18px', '2xl': '23px' },
            fontWeight: 'light',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            p: 3,
            textAlign: 'center',
            borderRadius: '0.75rem',
            color: '#FF5800'
          }}
        >
          {hours}h
        </Typography>
        <Typography
          className="time-part"
          sx={{
            fontSize: { md: '18px', '2xl': '23px' },
            fontWeight: 'light',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            p: 3,
            textAlign: 'center',
            borderRadius: '0.75rem',
            color: '#FF5800'
          }}
        >
          {minutes}m
        </Typography>
        <Typography
          className="time-part"
          sx={{
            fontSize: { md: '18px', '2xl': '23px' },
            fontWeight: 'light',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            p: 3,
            textAlign: 'center',
            borderRadius: '0.75rem',
            color: '#FF5800'
          }}
        >
          {seconds}s
        </Typography>
      </Box>
    );
  };

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="RealProton Price" count="$ 1" percentage={59.3} extra="35,000" />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="RealProton ROI" count="$ 0" percentage={27.4} isLoss color="warning" extra="$20,395" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={6}>
        <MainCard>
          <Box
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            gap={4}
            alignItems="center"
            borderRadius="10px"
            bgcolor="rgba(255, 255, 255)"
          >
            <Box width={{ base: '80%', md: '20%', xl: '20%' }} bgcolor="rgba(255, 255, 255, 0.05)" alignItems="center" borderRadius="4px">
              <Typography textAlign="center">Round 1</Typography>
              <Divider sx={{ bgcolor: '#d4d4d4', opacity: 0.35 }} />
              <Typography textAlign="center">Day 1</Typography>
            </Box>
            <Box>
              <Typography variant="h4">Live in :</Typography>
              <Box className="timer">{formatTimeLeft(timeLeft)}</Box>
            </Box>
          </Box>
        </MainCard>
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Grid item xs={12} md={12} lg={12}>
        {/* <UniqueVisitorCard /> */}
        <SwapAndBuyToken />
      </Grid>
      {/* 
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Income Overview</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.secondary">
                This Week Statistics
              </Typography>
              <Typography variant="h3">$7,650</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid> */}

      {/* row 3 */}
      {/* <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Recent Orders</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid> */}

      {/* row 4 */}
      {/* <Grid item xs={12} md={7} lg={8}>
        <SaleReportCard />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Transaction History</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              '& .MuiListItemButton-root': {
                py: 1.5,
                '& .MuiAvatar-root': avatarSX,
                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
              }
            }}
          >
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar sx={{ color: 'success.main', bgcolor: 'success.lighter' }}>
                  <GiftOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #002434</Typography>} secondary="Today, 2:00 AM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $1,430
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    78%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
                  <MessageOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #984947</Typography>} secondary="5 August, 1:45 PM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $302
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    8%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ color: 'error.main', bgcolor: 'error.lighter' }}>
                  <SettingOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #988784</Typography>} secondary="7 hours ago" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $682
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    16%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
          </List>
        </MainCard>
        <MainCard sx={{ mt: 2 }}>
          <Stack spacing={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5" noWrap>
                    Help & Support Chat
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    Typical replay within 5 min
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                  <Avatar alt="Remy Sharp" src={avatar1} />
                  <Avatar alt="Travis Howard" src={avatar2} />
                  <Avatar alt="Cindy Baker" src={avatar3} />
                  <Avatar alt="Agnes Walker" src={avatar4} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
              Need Help?
            </Button>
          </Stack>
        </MainCard>
      </Grid> */}
    </Grid>
  );
}
