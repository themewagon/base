import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import sitemap from 'routes/sitemap';
import Logo from 'assets/images/Logo.png';
import Profile from 'assets/images/Profile.png';
import DrawerCardImg from 'assets/images/lighting.png';

interface DrawerItemsProps {
  expand: boolean;
}

const DrawerItems = ({ expand }: DrawerItemsProps) => {
  return (
    <>
      <Stack px={1} py={4} alignItems="center" justifyContent="center">
        <ButtonBase component={Link} href="/" disableRipple>
          <Stack
            direction={expand ? 'row' : 'column'}
            spacing={expand ? 1.75 : 1.25}
            alignItems="center"
            justifyContent="center"
          >
            <Image src={Logo} alt="logo" height={44} width={44} />
            <Typography variant="h4" letterSpacing={1} fontWeight={600}>
              Base
            </Typography>
          </Stack>
        </ButtonBase>
      </Stack>

      <List component="nav" sx={{ mb: 30 }}>
        {sitemap.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
              }}
            >
              <ListItemIcon sx={{ width: 48 }}>
                {item.icon && <IconifyIcon icon={item.icon} />}
              </ListItemIcon>

              <ListItemText
                primary={item.subheader}
                sx={[
                  expand
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box mt="auto" px={2.35} py={4}>
        <Stack
          position="relative"
          mt="auto"
          mb={4}
          height={300}
          width={1}
          sx={{ userSelect: 'none' }}
        >
          <Image src={DrawerCardImg} height={1} width={1} sx={{ objectFit: 'cover' }} />

          <Stack
            position="absolute"
            bottom={16}
            left={0}
            width={1}
            px={1.75}
            justifyContent={'center'}
          >
            <Button variant="contained" color="secondary" size="small" fullWidth>
              Go To Help Center
            </Button>
          </Stack>
        </Stack>

        <Stack
          spacing={expand ? 1 : 2}
          direction={expand ? 'row' : 'column'}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack component={Link} href="#!" spacing={1.5} alignItems="center">
            <Image src={Profile} height={50} width={50} sx={{ borderRadius: 3 }} />
            <Box sx={[expand ? { display: 'block' } : { display: 'none' }]}>
              <Typography mb={-0.5} variant="body2" color="text.primary" fontWeight={600}>
                Easin Arafat
              </Typography>
              <Typography mt={-0.5} variant="caption" color="text.disabled" fontWeight={400}>
                Free Account
              </Typography>
            </Box>
          </Stack>

          <IconButton LinkComponent={Link} href="#!">
            <IconifyIcon icon="majesticons:logout" color="text.disabled" />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

export default DrawerItems;
