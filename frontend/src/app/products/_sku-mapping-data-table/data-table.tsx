import DataTable from "@/components/table/DataTable";
import { getSKUMappingProducts } from "@/services/product";
import { columns } from "@/app/products/_sku-mapping-data-table/columns";

const SKUMappingProductDataTable = () => {
  return (
    <DataTable fetcher={getSKUMappingProducts} columns={columns} />
  );
}

export default SKUMappingProductDataTable;