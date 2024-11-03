import Shopify from 'shopify-api-node';

import settings from "./settings";

if (!settings.shopify.shopName || !settings.shopify.accessToken) {
  throw new Error("Missing required Shopify environment variables");
}

export const shopifyClient = new Shopify({
  shopName: settings.shopify.shopName,
  accessToken: settings.shopify.accessToken,
  apiVersion: settings.shopify.apiVersion
});

const testShopifyConnection = async () => {
  try {
    await shopifyClient.shop.get();
    console.log(`Connected to shopify shop ${settings.shopify.shopName}`);
  } catch (error) {
    console.log("Error connecting shopify connection");
    console.error(error);
  }
}

void testShopifyConnection();