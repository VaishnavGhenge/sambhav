import { amazonProducts, shopifyProducts, skuMapping } from "@/mocks/products";

export const getAmazonProducts = async () => {
  return amazonProducts;
}

export const getShopifyProducts = async () => {
  return shopifyProducts;
}

export const getSKUMappingProducts = async () => {
  return skuMapping;
}