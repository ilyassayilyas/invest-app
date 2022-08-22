import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LineChart from "../../components/LineChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarIcon from "@mui/icons-material/Star";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Divider,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import {
  useGetCryptoCoinBySymbolQuery,
  useGetCryptoCoinHistoryQuery,
} from "../../services/cryptoApi";
import style from "../../styles/style.module.css";
import millify from "millify";
import { ChangeEvent, useState } from "react";

const CoinPage = () => {
  const { uuid } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data: coinDetails, isFetching } = useGetCryptoCoinBySymbolQuery(uuid);
  const { data: coinHistory } = useGetCryptoCoinHistoryQuery({
    uuid,
    timePeriod,
  });
  const details = coinDetails?.data?.coin;

  if (isFetching) return <div>Loading...</div>;

  console.log(coinHistory);

  const handleSelect = (event: any) => {
    setTimePeriod(event.target.value as string);
  };

  return (
    <div className={style.coinPage}>
      <Header />
      <div className={style.coinPageContent}>
        <div className={style.coinStats}>
          <h2>{`${details.name} Statistics`}</h2>
          <Box sx={{ width: "65%", bgcolor: "#efefef" }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`Current Price: ${millify(details.price)} $`}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <LocalGroceryStoreIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`Market Cap: ${millify(details.marketCap)}`}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`Current Coin Rank: ${millify(details.rank)}`}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <ArrowUpwardIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`All Time Highest Price: ${millify(
                    details.allTimeHigh.price
                  )} $`}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <AutoGraphIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`Number of Exchanges: ${millify(
                    details.numberOfExchanges
                  )}`}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <FormatListNumberedIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`Number of Markets: ${millify(
                    details.numberOfMarkets
                  )}`}
                />
              </ListItem>
            </List>
          </Box>
        </div>
        <div className={style.coinChart}>
          <div className={style.chartHeader}>
            <h2>{`${details.name} Chart`}</h2>
            <Box sx={{ minWidth: 120, display: "inline" }}>
              <FormControl fullWidth>
                <InputLabel id='timePeriod'>Time</InputLabel>
                <Select
                  labelId='timePeriod'
                  value={timePeriod}
                  label='Time'
                  onChange={handleSelect}
                >
                  <MenuItem value={"24h"}>One Day</MenuItem>
                  <MenuItem value={"7d"}>One Week</MenuItem>
                  <MenuItem value={"30d"}>One Month</MenuItem>
                  <MenuItem value={"3m"}>3 Months</MenuItem>
                  <MenuItem value={"1y"}>One Year</MenuItem>
                  <MenuItem value={"5y"}>All Time</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <LineChart
            timePeriod={timePeriod}
            currentCoinPrice={details.price}
            coinHistory={coinHistory}
            coinName={details.name}
          />
        </div>
        <div className={style.coinDescription}>
          <h2>{`About ${details.name}`}</h2>
          {HTMLReactParser(details.description)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoinPage;
