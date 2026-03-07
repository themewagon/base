import { Theme, CSSObject } from '@mui/material/styles';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import DrawerItems from './DrawerItems';

interface SidebarProps {
  expand: boolean;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  drawerWidth: number;
  miniDrawerWidth: number;
}

const Sidebar = ({
  expand,
  mobileOpen,
  setMobileOpen,
  drawerWidth,
  miniDrawerWidth,
}: SidebarProps) => {
  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    width: miniDrawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
  });

  const closeMobileDrawer = (open: boolean) => () => {
    setMobileOpen(open);
  };

  return (
    <>
      <Drawer
        open={mobileOpen}
        onClose={closeMobileDrawer(false)}
        sx={(theme) => ({
          ...openedMixin(theme),
          [`& .${drawerClasses.paper}`]: { ...openedMixin(theme) },
          display: { xs: 'block', lg: 'none' },
        })}
      >
        <DrawerItems expand={true} />
      </Drawer>

      <Drawer
        variant="permanent"
        sx={[
          expand
            ? (theme) => ({
                ...openedMixin(theme),
                [`& .${drawerClasses.paper}`]: { ...openedMixin(theme) },
              })
            : (theme) => ({
                ...closedMixin(theme),
                [`& .${drawerClasses.paper}`]: { ...closedMixin(theme) },
              }),
          { display: { xs: 'none', lg: 'block' } },
        ]}
      >
        <DrawerItems expand={expand} />
      </Drawer>
    </>
  );
};

export default Sidebar;
