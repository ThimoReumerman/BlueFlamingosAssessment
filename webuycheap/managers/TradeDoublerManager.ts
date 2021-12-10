import { product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import axios from "axios";
import TradeDoublerProduct from "../types/TradeDoublerProduct";
import TradeDoublerResult from "../types/TradeDoublerResult";
import { insertProducts } from "./ProductManager";

const getProductList = async () => {
  const result = await axios.get<TradeDoublerResult>('http://api.tradedoubler.com/1.0/products.json;page=1;pageSize=100;fid=23056?token=26A8CEEC9833CED128CAC91910344740632FBC93');
  
  return result.data.products;
}

const parseToDatabaseProduct = (tradeDoublerProduct: TradeDoublerProduct): product => {

    // Parse Trade Doubler Product object to database product object
    const dbProduct: product = {
      name: tradeDoublerProduct.name,
      ean: tradeDoublerProduct.identifiers.ean,
      description: tradeDoublerProduct.description,
      link: tradeDoublerProduct.offers[0].productUrl,
      price: new Decimal(tradeDoublerProduct.offers[0].priceHistory[0].price.value),
      image: tradeDoublerProduct.productImage.url
    }

    // Return parsed object
    return dbProduct;
}

const insertProductListIntoDatabase = async(tradeDoublerProducts: TradeDoublerProduct[]) => {

  // Convert Trade Doubler products to database products
  const products: product[] = tradeDoublerProducts.map(
    tradeDoublerProduct => {return parseToDatabaseProduct(tradeDoublerProduct)}
  );

  // Insert new products in the database
  const hasInserted: boolean = await insertProducts(products);

  // Give error message if insertion failed
  if(!hasInserted) console.log("Could not insert any more products into the database.");
}

export {getProductList, insertProductListIntoDatabase};

