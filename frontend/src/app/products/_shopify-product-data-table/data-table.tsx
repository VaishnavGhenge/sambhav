import DataTable from "@/components/table/DataTable";
import { getShopifyProducts } from "@/services/product";
import { columns } from "@/app/products/_shopify-product-data-table/columns";

const ShopifyProductDataTable = () => {
  return (
    <DataTable fetcher={getShopifyProducts} columns={columns} />
  );
}

export default ShopifyProductDataTable;