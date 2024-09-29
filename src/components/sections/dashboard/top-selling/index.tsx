import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ActionMenu from 'components/common/ActionMenu';
import { productsData } from 'data/productsData';
import ProductCard from './ProductCard';
import { Divider } from '@mui/material';

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

      <Box mt={2.5}>
        {productsData.slice(0, 2).map((item, index) => (
          <>
            <ProductCard data={item} />
            {index !== 1 && <Divider sx={{ my: 2.5 }} />}
          </>
        ))}
      </Box>
    </Paper>
  );
};

export default TopSelling;
