import { Outlet, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Image from 'components/base/Image';
import SignInImage from 'assets/images/auth/signin-image.png';
import SignUpImage from 'assets/images/auth/signup-image.png';

const AuthLayout = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/').pop();

  return (
    <Stack justifyContent="space-between" height="100vh">
      <Stack px={3.5} py={2} width={450} height={1} bgcolor="info.lighter" overflow="scroll">
        <Outlet />
      </Stack>
      <Stack flex={1} height={1} alignItems="center" justifyContent="center" direction="column">
        <Image src={pathname === 'signin' ? SignInImage : SignUpImage} height="55%" />
      </Stack>
    </Stack>
  );
};

export default AuthLayout;
