import Grid from '@mui/material/Grid';
import TopCards from 'components/sections/dashboard/top-cards';

const Dashboard = () => {
  return (
    <Grid container px={3.75} spacing={2.5}>
      <Grid item xs={12}>
        <TopCards />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
