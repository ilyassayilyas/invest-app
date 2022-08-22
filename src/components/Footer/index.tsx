import style from "../../styles/style.module.css";
import jusanLogo from "../../img/jusan-logo.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <a href='https://www.jusaninvest.kz/' target='_blank' rel='noreferrer'>
        <img src={jusanLogo} alt='Jusan Logo' className={style.jusanLogo} />
      </a>
    </div>
  );
};

export default Footer;
