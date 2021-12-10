type TradeDoublerProduct = {
  name: string,
  description: string,
  language: string,
  identifiers: {
    ean: string,
    sku: string
  },
  brand: string,
  model: string,
  groupingId: string,
  fields: [
    {
      name: string,
      value: string
    }
  ],
  offers: [
    {
      feedId: number,
      productUrl: string,
      priceHistory: [
        {
          date: number,
          price: {
            value: string,
            currency: string
          }
        }
      ],
      modified: Date,
      sourceProductId: string,
      programLogo: string,
      programName: string,
      id: string,
      deliveryTime: string,
      shippingCost: number,
      availability: boolean
    }
  ],
  categories: [
    {
      name: string
    }
  ],
  productImage: {
    url: string
  }
}

export default TradeDoublerProduct;