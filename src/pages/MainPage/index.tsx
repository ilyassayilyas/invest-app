import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Board from "../../components/Board";
import style from "../../styles/style.module.css";

const MainPage = () => {
  return (
    <div className={style.mainPage}>
      <Header />
      <Board />
      <Footer />
    </div>
  );
};

export default MainPage;
