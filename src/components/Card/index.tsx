import {
  Card,
  CardContent,
  Typography,
  Avatar,
  CardHeader,
} from "@mui/material";
import style from "../../styles/style.module.css";
import millify from "millify";

interface CardProps {
  price: number;
  imgSrc: string;
  coinName: string;
  marketCap: number;
  coinRank: number;
  coinSymbol: string;
}

const CoinCard = (props: CardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }} className={style.card}>
      <CardHeader
        title={`${props.coinRank}. ${props.coinSymbol}`}
        avatar={<Avatar alt='Alias' src={props.imgSrc} />}
        titleTypographyProps={{ variant: "h5" }}
        className={style.cardHeader}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h4'
          component='div'
          className={style.cardTicker}
        >
          {props.coinName}
        </Typography>
        <Typography
          gutterBottom
          variant='h6'
          component='div'
          className={style.cardTicker}
        >
          {"Market Cap: " + millify(props.marketCap) + "$"}
        </Typography>
        <Typography variant='h6' component='div' className={style.cardTicker}>
          {"Price: " + millify(props.price) + "$"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CoinCard;
