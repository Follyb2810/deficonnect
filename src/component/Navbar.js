'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Menu, MenuItem ,useTheme} from '@mui/material';

const pages = [
  {
    id: 1,
    page: 'Home',
    path: '/'
  },
  {
    id: 2,
    page: 'About',
    path: '/about'
  },
  {
    id: 4,
    page: 'Use_Case',
    path: '/useCases'
  },
  {
    id: 5,
    page: 'Partners',
    path: '/partners'
  },
  {
    id: 6,
    page: 'Roadmap',
    path: '/roadmap'
  }
];

function ResponsiveAppBar() {
  const theme=useTheme()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar  sx={{ background: 'transparent',position:'fixed',
    top: 0,
    left: 0,
    width: '100%',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(8px)',
    zIndex: 1000,
    color:'#fff'
  }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Image src="/images/logono.png" alt="" width={50} height={50} />
          </div>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '1rem',color:'white' }}>
            {pages.map((page) => (
              <Typography key={page.id} sx={{ color: 'white' }}><a href={`#${page.page}`} sx={{ color: 'white' }}>{page.page}</a></Typography>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
              
            >
              <MenuIcon  sx={{color:'white'}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu} sx={{ color: 'white' }}>
                  <Typography textAlign="center" sx={{ color: 'white' }}><a href={`#${page.page}`} sx={{ color: 'white' }}>{page.page}</a></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;