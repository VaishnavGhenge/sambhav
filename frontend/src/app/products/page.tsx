'use client'

import AmazonProductDataTable from "@/app/products/_amazon-product-data-table/data-table";
import ShopifyProductDataTable from "@/app/products/_shopify-product-data-table/data-table";
import SKUMappingProductDataTable from "@/app/products/_sku-mapping-data-table/data-table";

const ProductMapping = () => {
  return (
    <div className="container p-4 space-y-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Amazon Products</h1>
        <AmazonProductDataTable />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Shopify Products</h1>
        <ShopifyProductDataTable />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">SKU Mapping of Products</h1>
        <SKUMappingProductDataTable />
      </div>
    </div>
  );
}

export default ProductMapping;