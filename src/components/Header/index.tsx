import { Button, Stack } from "@mui/material";
import style from "../../styles/style.module.css";
import appLogo from "../../img/app-logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  return (
    <div className={style.header}>
      <Link to='/'>
        <img src={appLogo} alt='App logo' className={style.appLogo} />
      </Link>
      <Stack direction='row' spacing={2}>
        <Button variant='contained' className={style.headerRightElements}>
          Sign In
        </Button>
        <Button
          variant='outlined'
          className={style.headerRightElements}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
      </Stack>
    </div>
  );
};

export default Header;
