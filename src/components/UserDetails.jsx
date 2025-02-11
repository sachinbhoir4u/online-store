import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Menu, MenuItem, Typography, Avatar, Divider, ListItemIcon, Box, Button } from "@mui/material";
import { logout } from "../redux/slices/authSlice";
import { ExitToApp } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { jwtDecode } from "jwt-decode";

const UserDetails = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth.user);
    const decoded = userData && "email" in userData ? userData : jwtDecode(userData);

    const user = { 
      email: decoded.email, 
      name: decoded.name || undefined 
    };
    
    const [toggleUser, setToggleUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        dispatch(logout());
        setToggleUser(null);
        navigate("/login");
    };
    const handleCloseUserMenu = () => {
        setToggleUser(null);
    };
    const handleMenuClick = (event) => {
        setToggleUser(event.currentTarget);
    };
    return (
        <>{user ? (
          <div className="user-details">
            <Avatar className="user-avatar"
              sx={{ cursor: "pointer" }}
              onClick={handleMenuClick}
            >
              {user && user.name ? user.name[0].toUpperCase() : <AccountCircleIcon />}
            </Avatar>

            <Menu
              toggleUser={toggleUser}
              open={Boolean(toggleUser)}
              onClose={handleCloseUserMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "top", 
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              sx={{
                marginTop: "65px"
              }}
            >
              <MenuItem disabled>
                <Typography variant="h6">{user.name}</Typography>
              </MenuItem>
              <MenuItem disabled>
                <Typography variant="body2">{user.email || localStorage.getItem("user")}</Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <ExitToApp fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <>
            {location.pathname === "" || location.pathname === "/login" || location.pathname === "/signup" ? "" :<Box sx={{ width: "auto", float: "right" }}>
                    <Button key={"login"} color="inherit" component={Link} to={user ? "/" : "/login"} sx={{ color: "#FFFFFF", border: "1px solid #7a9c89", "&:hover": { color: "#FFFFFF", borderColor: "#FFFFFF" } }} onClick={user ? handleLogout : undefined}>
                        { user ? "Logout" : "Login" }
                    </Button>
                    
                </Box>}
          </>
        )}
      </>
    )
}

export default UserDetails;