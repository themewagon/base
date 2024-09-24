import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import LanguageSelect from './LanguageSelect';
import ProfileMenu from './ProfileMenu';
import Image from 'components/base/Image';
import Logo from 'assets/images/Logo.png';

interface TopbarProps {
  expand: boolean;
  mobileOpen: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ expand, mobileOpen, setExpand, setMobileOpen }: TopbarProps) => {
  const handleDrawerExpand = () => {
    setExpand(!expand);
  };

  const handleMobileOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Stack
      px={3}
      py={2}
      position="sticky"
      top={0}
      alignItems="center"
      justifyContent="space-between"
      bgcolor="transparent.info.main"
      sx={{ backdropFilter: 'blur(10px)' }}
      zIndex={1200}
    >
      <Stack spacing={{ xs: 2, sm: 3 }} alignItems="center">
        <ButtonBase
          component={Link}
          href="/"
          disableRipple
          sx={{ lineHeight: 0, display: { xs: 'none', sm: 'block', lg: 'none' } }}
        >
          <Image src={Logo} alt="logo" height={40} width={40} />
        </ButtonBase>

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="expand drawer"
            onClick={handleDrawerExpand}
            edge="start"
            sx={{ display: { xs: 'none', lg: 'flex' } }}
          >
            <IconifyIcon icon={expand ? 'line-md:menu-fold-left' : 'line-md:menu-fold-right'} />
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="expand drawer"
            onClick={handleMobileOpen}
            edge="start"
            sx={{ display: { xs: 'flex', lg: 'none' } }}
          >
            <IconifyIcon icon="solar:hamburger-menu-outline" />
          </IconButton>
        </Toolbar>

        <Toolbar sx={{ ml: -1.5, display: { xm: 'block', md: 'none' } }}>
          <IconButton edge="start" color="inherit" aria-label="search">
            <IconifyIcon icon="prime:search" />
          </IconButton>
        </Toolbar>

        <TextField
          variant="filled"
          placeholder="Search"
          sx={{ width: 300, display: { xs: 'none', md: 'flex' } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon="prime:search" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack spacing={{ xs: 1, sm: 2 }} alignItems="center">
        <LanguageSelect />
        <IconButton>
          <Badge color="error" badgeContent={2} sx={{ '& .MuiBadge-badge': { top: 6, right: 2 } }}>
            <IconifyIcon icon="mdi:bell-outline" />
          </Badge>
        </IconButton>
        <ProfileMenu />
      </Stack>
    </Stack>
  );
};

export default Topbar;
