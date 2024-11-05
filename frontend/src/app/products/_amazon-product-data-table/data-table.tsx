import DataTable from "@/components/table/DataTable";
import { getAmazonProducts } from "@/services/product";
import { columns } from "@/app/products/_amazon-product-data-table/columns";

const AmazonProductDataTable = () => {
  return (
    <DataTable fetcher={getAmazonProducts} columns={columns} />
  );
}

export default AmazonProductDataTable;