import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';
import ReportsChart from './ReportsChart';

const Reports = () => {
  return (
    <Paper sx={{ pr: 0, height: 410 }}>
      <Stack mt={-0.5} pr={3.5} alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="text.secondary">
          Reports
        </Typography>

        <IconButton size="small">
          <IconifyIcon icon="solar:menu-dots-bold" color="neutral.dark" />
        </IconButton>
      </Stack>

      <ReportsChart data={[56000, 32000, 66000, 52000, 88000, 44000, 58000, 34000, 65000, 56000, 86000]} sx={{ height: '320px !important' }} />
    </Paper>
  );
};

export default Reports;
