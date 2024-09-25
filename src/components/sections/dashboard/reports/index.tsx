import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';
import ReportsChart from './ReportsChart';

const Reports = () => {
  return (
    <Paper>
      <Stack mt={-0.5} alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="text.secondary">
          Reports
        </Typography>

        <IconButton size="small">
          <IconifyIcon icon="solar:menu-dots-bold" color="neutral.dark" />
        </IconButton>
      </Stack>

      <Box mt={2} bgcolor="info.lighter" borderRadius={3}>
        <ReportsChart data={[1.7, 2, 1.4, 3, 1.8, 2.4, 1.9]} sx={{ height: '130px !important' }} />
      </Box>
    </Paper>
  );
};

export default Reports;
