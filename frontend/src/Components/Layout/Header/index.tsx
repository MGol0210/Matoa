/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';

import images from '../../../assets/Images';

import './styles.css';
import Cart from '../../../Screen/Cart';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../../redux/store';

import { logoutUser } from "../../../features/authSlice";
import { toast } from "react-toastify";


const pages = ['Watches', 'Eyewear', 'Accessories', 'New'];
const settings = ['Profile', 'Account', 'Login', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseMenuLogout = () => {
    setAnchorElUser(null);
    dispatch(logoutUser(null));
    toast.warning("Logged out!", { position: "bottom-left" });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  height: '80%',
  bgcolor: '#F7F6F4',
  boxShadow: 24,
  p: 4,
};

  return (
    <AppBar position="static" sx={{ backgroundColor: '#E5E5E5', paddingLeft: '8%', paddingRight: '10%', boxShadow:'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: '20%', display: { xs: 'none', md: 'flex' } }}
          >
            <Link className='nav-link' to='/'>
              <img src={images.Logo} alt="image" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link className="nav-link" to='/detail'>
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button>
                <Link className="nav-link" to='/detail'>
                  Watches
                </Link>
              </Button>
              <Button>
                <Link className="nav-link" to='/'>
                  Eyewear
                </Link>
              </Button>
              <Button>
                <Link className="nav-link" to='/detail'>
                  Accessories
                </Link>
              </Button>
              <Button>
                <Link className="nav-link" to='/detail'>
                  New
                </Link>
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
						<Button sx={{ width: 30, height: 30 }}>
							<img src={images.Icon_Search} style={{ width: 30, height: 30 }}/>
						</Button>

						<Button sx={{ p: 0, mr: 2 }}>
							<Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings" onClick={handleOpenUserMenu}>
                  <img src={images.Icon_User} />
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {auth._id ? (
                  <MenuItem onClick={handleCloseMenuLogout}>
                    Logout
                  </MenuItem>
                  ) : (
                    <>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Link className="nav-link" to='/register'>
                          Register
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Link className="nav-link" to='/login'>
                          Login
                        </Link>
                      </MenuItem>
                    </>
                  )}
                </Menu>
              </Box>
            </Button>

            <Tooltip title="Open Cart">
              <IconButton onClick={handleOpen} sx={{ p: 1, backgroundColor: '#F1DDC9' }}>
                <img src={images.Icon_Cart}/>
              </IconButton>
            </Tooltip>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Cart />
              </Box>
            </Modal>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
