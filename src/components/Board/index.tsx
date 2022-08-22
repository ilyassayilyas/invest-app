import style from "../../styles/style.module.css";
import { useEffect, useState } from "react";
import CoinCard from "../Card";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { TextField } from "@mui/material";

import { coinInterface } from "../../types";

const Board = () => {
  const [limit, setLimit] = useState(12);
  const [isBoardExtended, setIsBoardExtended] = useState(false);
  const { data: coinList, isFetching } = useGetCryptosQuery(limit);
  const [coins, setCoins] = useState([]);
  const [searchParams, setSearchParams] = useState("");

  const handleShowMoreOrLess = () => {
    if (!isBoardExtended) {
      setLimit(100);
      setIsBoardExtended(true);
    } else {
      setLimit(12);
      setIsBoardExtended(false);
    }
  };

  useEffect(() => {
    const filteredData = coinList?.data?.coins.filter((coin: coinInterface) =>
      coin.name.toLowerCase().includes(searchParams.toLowerCase())
    );

    setCoins(filteredData);
  }, [searchParams, coinList]);

  if (isFetching) return <div>Loading...</div>;

  return (
    <div className={style.board}>
      <div className={style.boardHeader}>
        {isBoardExtended ? (
          <TextField
            id='outlined-basic'
            label='Search'
            variant='outlined'
            size='small'
            className={style.headerRightElements}
            onChange={(e) => setSearchParams(e.target.value)}
          />
        ) : (
          ""
        )}
      </div>
      <div className={style.boardContent}>
        {coins &&
          coins.map((coin: coinInterface) => (
            <Link
              to={`coin/${coin.uuid}`}
              className={style.cardLink}
              key={coin.uuid}
            >
              <CoinCard
                coinRank={coin.rank}
                coinSymbol={coin.symbol}
                price={coin.price}
                coinName={coin.name}
                imgSrc={coin.iconUrl}
                marketCap={coin.marketCap}
              />
            </Link>
          ))}
      </div>
      <div className={style.boardFooter} onClick={handleShowMoreOrLess}>
        {isBoardExtended ? "Show Less..." : "Show more..."}
      </div>
    </div>
  );
};

export default Board;
