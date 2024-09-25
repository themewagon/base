import { Box, Paper, Stack, Typography, Grid } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const TopCards = () => {
  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Stack component={Paper} p={2.5} alignItems="center" spacing={2.25} height={100}>
          <Stack
            alignItems="center"
            justifyContent="center"
            height={56}
            width={56}
            bgcolor="info.main"
            borderRadius="50%"
          >
            <IconifyIcon icon="ic:round-bar-chart" fontSize="h2.fontSize" color="primary.main" />
          </Stack>

          <Box>
            <Typography variant="h5" color="text.secondary">
              178+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Save Products
            </Typography>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default TopCards;
