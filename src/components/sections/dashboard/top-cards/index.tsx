import { Box, Paper, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const TopCards = () => {
  return (
    <Stack spacing={2} justifyContent="space-between">
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
    </Stack>
  );
};

export default TopCards;
