import Grid from '@mui/material/Grid';
import KPIs from 'components/sections/dashboard/kpis/KPIs';
import Reports from 'components/sections/dashboard/reports/Reports';

const Dashboard = () => {
  return (
    <Grid container spacing={3.75} px={3.75}>
      <Grid size={{ xs: 12 }}>
        <KPIs />
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Reports />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
