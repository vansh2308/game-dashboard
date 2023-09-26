import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsFillCaretDownFill } from "react-icons/bs"

export default function BasicMenu(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(props.theme);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color: props.theme.font, textTransform: "none"}}
      >
        {props.name}
        <BsFillCaretDownFill style={{marginLeft: "7px"}} />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        {props.list.map((item) => {
          return(
            <MenuItem onClick={handleClose} style={{minWidth: "10vw", color: props.theme.font, fontSize: "0.9rem", fontWeight:"400", backgroundColor: props.theme.bg}}>{item}</MenuItem>
          )
        })}

      </Menu>
    </div>
  );
}