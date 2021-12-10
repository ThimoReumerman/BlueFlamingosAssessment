import TradeDoublerProduct from './TradeDoublerProduct';

type TradeDoublerResult = {
  productHeader: {
    totalHits: number
  },
  products: TradeDoublerProduct[]
}

export default TradeDoublerResult;