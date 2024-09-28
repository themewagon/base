import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ActionMenu from 'components/common/ActionMenu';
import AnalyticsChart from './AnalyticsChart';

const actions = [
  {
    id: 1,
    icon: 'mage:refresh',
    title: 'Refresh',
  },
  {
    id: 2,
    icon: 'solar:export-linear',
    title: 'Export',
  },
  {
    id: 3,
    icon: 'mage:share',
    title: 'Share',
  },
];

const Analytics = () => {
  return (
    <Paper sx={{ pr: 0, height: 410 }}>
      <Stack mt={-0.5} pr={3.5} alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="text.secondary">
          Analytics
        </Typography>

        <ActionMenu actions={actions} />
      </Stack>

      <AnalyticsChart data={[]} sx={{ mt: 2, height: '250px !important' }} />
    </Paper>
  );
};

export default Analytics;
