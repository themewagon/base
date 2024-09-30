import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ActionMenu from 'components/common/ActionMenu';
import DataTable from './DataTable';

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

const RecentOrders = () => {
  return (
    <Paper sx={{ height: 425, overflow: 'hidden' }}>
      <Stack mt={-0.5} alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="text.secondary">
          Recent Orders
        </Typography>

        <ActionMenu actions={actions} />
      </Stack>

      <Box mt={1} height={357} flex={1}>
        <DataTable searchText={''} />
      </Box>
    </Paper>
  );
};

export default RecentOrders;
