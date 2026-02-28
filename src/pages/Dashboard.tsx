import Grid from '@mui/material/Grid';
import KPIs from 'components/sections/dashboard/kpis/KPIs';
import Reports from 'components/sections/dashboard/reports/Reports';
import Analytics from 'components/sections/dashboard/analytics/Analytics';
import RecentOrders from 'components/sections/dashboard/recent-orders/RecentOrders';
import TopSelling from 'components/sections/dashboard/top-selling/TopSelling';

const Dashboard = () => {
  return (
    <Grid container spacing={3.75} px={3.75}>
      <Grid size={{ xs: 12 }}>
        <KPIs />
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Reports />
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <Analytics />
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <RecentOrders />
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <TopSelling />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
