import { TAmazonProduct, TShopifyProduct, TSKUMappingProduct } from "@/types/products";

export const amazonProducts: TAmazonProduct[] = [
  {
    sku: "AMZ10001",
    asin: "B08QJHJXYZ",
    title: "Wireless Bluetooth Headphones",
    price: 49.99,
    inventory: 120,
    attributes: { color: "Black", size: "One Size" },
    category: "Electronics",
    weight: "0.5 lbs"
  },
  {
    sku: "AMZ10002",
    asin: "B08TRSTY56",
    title: "Portable Charger 10000mAh",
    price: 19.99,
    inventory: 75,
    attributes: { color: "White", size: "Compact" },
    category: "Electronics",
    weight: "0.3 lbs"
  },
  {
    sku: "AMZ10003",
    asin: "B07LMTYXLM",
    title: "USB-C Charging Cable 3ft",
    price: 7.99,
    inventory: 300,
    attributes: { color: "Red", size: "3ft" },
    category: "Accessories",
    weight: "0.1 lbs"
  },
  {
    sku: "AMZ10004",
    asin: "B08JGQ6DFD",
    title: "Smart LED Light Bulb",
    price: 12.99,
    inventory: 200,
    attributes: { color: "Multicolor", size: "Standard" },
    category: "Home",
    weight: "0.2 lbs"
  },
  {
    sku: "AMZ10005",
    asin: "B07PGL2ZSL",
    title: "Portable Bluetooth Speaker",
    price: 29.99,
    inventory: 90,
    attributes: { color: "Blue", size: "Small" },
    category: "Electronics",
    weight: "1 lbs"
  },
  {
    sku: "AMZ10006",
    asin: "B08FFM7CGX",
    title: "Wireless Gaming Mouse",
    price: 24.99,
    inventory: 150,
    attributes: { color: "Black", size: "Standard" },
    category: "Accessories",
    weight: "0.4 lbs"
  },
  {
    sku: "AMZ10007",
    asin: "B085RG7T5D",
    title: "Fitness Tracker Watch",
    price: 34.99,
    inventory: 65,
    attributes: { color: "Pink", size: "Adjustable" },
    category: "Fitness",
    weight: "0.2 lbs"
  },
  {
    sku: "AMZ10008",
    asin: "B08P1H8Q6G",
    title: "Bluetooth Earbuds",
    price: 39.99,
    inventory: 85,
    attributes: { color: "White", size: "One Size" },
    category: "Electronics",
    weight: "0.2 lbs"
  },
  {
    sku: "AMZ10009",
    asin: "B08DBQXZ8T",
    title: "Smart Thermostat",
    price: 99.99,
    inventory: 25,
    attributes: { color: "Silver", size: "Compact" },
    category: "Home",
    weight: "1.5 lbs"
  },
  {
    sku: "AMZ10010",
    asin: "B08X1XWHD3",
    title: "Noise-Cancelling Headphones",
    price: 89.99,
    inventory: 40,
    attributes: { color: "Gray", size: "Over-Ear" },
    category: "Electronics",
    weight: "0.7 lbs"
  }
]

export const shopifyProducts: TShopifyProduct[] = [
  {
    sku: "SHOP10001",
    productId: 987654321,
    variantId: 123456789,
    title: "Wireless Bluetooth Headphones",
    price: 54.99,
    inventory: 100,
    attributes: { color: "Black", size: "One Size" },
    category: "Electronics",
    weight: "0.5 lbs"
  },
  {
    sku: "SHOP10002",
    productId: 987654322,
    variantId: 123456790,
    title: "Portable Charger 10000mAh",
    price: 24.99,
    inventory: 80,
    attributes: { color: "White", size: "Compact" },
    category: "Electronics",
    weight: "0.3 lbs"
  },
  {
    sku: "SHOP10003",
    productId: 987654323,
    variantId: 123456791,
    title: "USB-C Charging Cable 3ft",
    price: 9.99,
    inventory: 250,
    attributes: { color: "Red", size: "3ft" },
    category: "Accessories",
    weight: "0.1 lbs"
  },
  {
    sku: "SHOP10004",
    productId: 987654324,
    variantId: 123456792,
    title: "Smart LED Light Bulb",
    price: 14.99,
    inventory: 180,
    attributes: { color: "Multicolor", size: "Standard" },
    category: "Home",
    weight: "0.2 lbs"
  },
  {
    sku: "SHOP10005",
    productId: 987654325,
    variantId: 123456793,
    title: "Portable Bluetooth Speaker",
    price: 34.99,
    inventory: 70,
    attributes: { color: "Blue", size: "Small" },
    category: "Electronics",
    weight: "1 lbs"
  },
  {
    sku: "SHOP10006",
    productId: 987654326,
    variantId: 123456794,
    title: "Wireless Gaming Mouse",
    price: 29.99,
    inventory: 130,
    attributes: { color: "Black", size: "Standard" },
    category: "Accessories",
    weight: "0.4 lbs"
  },
  {
    sku: "SHOP10007",
    productId: 987654327,
    variantId: 123456795,
    title: "Fitness Tracker Watch",
    price: 39.99,
    inventory: 50,
    attributes: { color: "Pink", size: "Adjustable" },
    category: "Fitness",
    weight: "0.2 lbs"
  },
  {
    sku: "SHOP10008",
    productId: 987654328,
    variantId: 123456796,
    title: "Bluetooth Earbuds",
    price: 44.99,
    inventory: 90,
    attributes: { color: "White", size: "One Size" },
    category: "Electronics",
    weight: "0.2 lbs"
  },
  {
    sku: "SHOP10009",
    productId: 987654329,
    variantId: 123456797,
    title: "Smart Thermostat",
    price: 109.99,
    inventory: 20,
    attributes: { color: "Silver", size: "Compact" },
    category: "Home",
    weight: "1.5 lbs"
  },
  {
    sku: "SHOP10010",
    productId: 987654330,
    variantId: 123456798,
    title: "Noise-Cancelling Headphones",
    price: 94.99,
    inventory: 35,
    attributes: { color: "Gray", size: "Over-Ear" },
    category: "Electronics",
    weight: "0.7 lbs"
  }
]

export const skuMapping: TSKUMappingProduct[] = [
  {
    amazonSku: "AMZ10001",
    shopifySku: "SHOP10001",
    amazonAsin: "B08QJHJXYZ",
    title: "Wireless Bluetooth Headphones",
    prices: {
      amazonPrice: 49.99,
      shopifyPrice: 54.99
    },
    inventory: {
      amazonInventory: 120,
      shopifyInventory: 100
    },
    attributes: {
      color: "Black",
      size: "One Size"
    }
  },
  {
    amazonSku: "AMZ10002",
    shopifySku: "SHOP10002",
    amazonAsin: "B08TRSTY56",
    title: "Portable Charger 10000mAh",
    prices: {
      amazonPrice: 19.99,
      shopifyPrice: 24.99
    },
    inventory: {
      amazonInventory: 75,
      shopifyInventory: 80
    },
    attributes: {
      color: "White",
      size: "Compact"
    }
  },
  {
    amazonSku: "AMZ10003",
    shopifySku: "SHOP10003",
    amazonAsin: "B07LMTYXLM",
    title: "USB-C Charging Cable 3ft",
    prices: {
      amazonPrice: 7.99,
      shopifyPrice: 9.99
    },
    inventory: {
      amazonInventory: 300,
      shopifyInventory: 250
    },
    attributes: {
      color: "Red",
      size: "3ft"
    }
  },
  {
    amazonSku: "AMZ10004",
    shopifySku: "SHOP10004",
    amazonAsin: "B08JGQ6DFD",
    title: "Smart LED Light Bulb",
    prices: {
      amazonPrice: 12.99,
      shopifyPrice: 14.99
    },
    inventory: {
      amazonInventory: 200,
      shopifyInventory: 180
    },
    attributes: {
      color: "Multicolor",
      size: "Standard"
    }
  },
  {
    amazonSku: "AMZ10005",
    shopifySku: "SHOP10005",
    amazonAsin: "B07PGL2ZSL",
    title: "Portable Bluetooth Speaker",
    prices: {
      amazonPrice: 29.99,
      shopifyPrice: 34.99
    },
    inventory: {
      amazonInventory: 90,
      shopifyInventory: 70
    },
    attributes: {
      color: "Blue",
      size: "Small"
    }
  },
  {
    amazonSku: "AMZ10006",
    shopifySku: "SHOP10006",
    amazonAsin: "B08FFM7CGX",
    title: "Wireless Gaming Mouse",
    prices: {
      amazonPrice: 24.99,
      shopifyPrice: 29.99
    },
    inventory: {
      amazonInventory: 150,
      shopifyInventory: 130
    },
    attributes: {
      color: "Black",
      size: "Standard"
    }
  },
  {
    amazonSku: "AMZ10007",
    shopifySku: "SHOP10007",
    amazonAsin: "B085RG7T5D",
    title: "Fitness Tracker Watch",
    prices: {
      amazonPrice: 34.99,
      shopifyPrice: 39.99
    },
    inventory: {
      amazonInventory: 65,
      shopifyInventory: 50
    },
    attributes: {
      color: "Pink",
      size: "Adjustable"
    }
  },
  {
    amazonSku: "AMZ10008",
    shopifySku: "SHOP10008",
    amazonAsin: "B08P1H8Q6G",
    title: "Bluetooth Earbuds",
    prices: {
      amazonPrice: 39.99,
      shopifyPrice: 44.99
    },
    inventory: {
      amazonInventory: 85,
      shopifyInventory: 90
    },
    attributes: {
      color: "White",
      size: "One Size"
    }
  },
  {
    amazonSku: "AMZ10009",
    shopifySku: "SHOP10009",
    amazonAsin: "B08DBQXZ8T",
    title: "Smart Thermostat",
    prices: {
      amazonPrice: 99.99,
      shopifyPrice: 109.99
    },
    inventory: {
      amazonInventory: 25,
      shopifyInventory: 20
    },
    attributes: {
      color: "Silver",
      size: "Compact"
    }
  },
  {
    amazonSku: "AMZ10010",
    shopifySku: "SHOP10010",
    amazonAsin: "B08X1XWHD3",
    title: "Noise-Cancelling Headphones",
    prices: {
      amazonPrice: 89.99,
      shopifyPrice: 94.99
    },
    inventory: {
      amazonInventory: 40,
      shopifyInventory: 35
    },
    attributes: {
      color: "Gray",
      size: "Over-Ear"
    }
  }
]