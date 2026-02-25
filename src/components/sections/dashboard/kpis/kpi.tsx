import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import { KPIProps } from 'data/kpis';

const KPI = (props: KPIProps) => {
  const { title, count, icon, iconColor, iconBg } = props;

  return (
    <Stack component={Paper} p={3} alignItems="center" spacing={2.5}>
      <Stack
        alignItems="center"
        justifyContent="center"
        height={60}
        width={60}
        bgcolor={iconBg}
        borderRadius="50%"
      >
        <IconifyIcon icon={icon} fontSize="h4.fontSize" color={iconColor} />
      </Stack>

      <div>
        <Typography variant="h5" color="neutral.darker" fontWeight={800}>
          {count}+
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </div>
    </Stack>
  );
};

export default KPI;
