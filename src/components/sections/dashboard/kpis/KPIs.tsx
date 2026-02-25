import Grid from '@mui/material/Grid';
import KPI from './kpi';
import { kpiData } from 'data/kpis';

const KPIs = () => {
  return (
    <Grid container spacing={3.75}>
      {kpiData.map((item) => (
        <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 3 }}>
          <KPI {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default KPIs;
