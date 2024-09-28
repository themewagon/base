import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ActionMenu from 'components/common/ActionMenu';

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

const TopSelling = () => {
  return (
    <Paper sx={{ height: 410 }}>
      <Stack mt={-0.5} alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="text.secondary">
          Top selling Products
        </Typography>

        <ActionMenu actions={actions} />
      </Stack>
    </Paper>
  );
};

export default TopSelling;
