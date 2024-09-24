import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Sidebar from './Sidebar';
import Topbar from './topbar';

const MainLayout = ({ children }: React.PropsWithChildren) => {
  const [expand, setExpand] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <Stack>
      <Sidebar expand={expand} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Topbar
          expand={expand}
          mobileOpen={mobileOpen}
          setExpand={setExpand}
          setMobileOpen={setMobileOpen}
        />
        {children}
      </Box>
    </Stack>
  );
};

export default MainLayout;
