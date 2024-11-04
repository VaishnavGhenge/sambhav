type TProduct = {
  sku: string,
  title: string,
  price: number,
  inventory: number,
  category: string,
  attributes: {
    color: string;
    size: string;
  }
  weight: string
}

export type TAmazonProduct = TProduct &  {
  asin: string;
}

export type TShopifyProduct = TProduct & {
  productId: number,
  variantId: number
};

export type TSKUMappingProduct = {
  amazonSku: string;
  shopifySku: string;
  amazonAsin: string;
  title: string,
  inventory: {
    amazonInventory: number
    shopifyInventory: number
  };
  attributes: {
    color: string;
    size: string;
  }
  prices: {
    amazonPrice: number;
    shopifyPrice: number;
  }
}