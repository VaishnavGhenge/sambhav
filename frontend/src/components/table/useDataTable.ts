import { useContext } from "react";
import { DataTableContext, DataTableProviderProps } from "@/components/table/DataTable";

export const useDataTable = <T>() => {
  const context = useContext<DataTableProviderProps<T> | null>(DataTableContext);

  if(!context)
    throw new Error('Sorry We didn\'t find any Context Store');

  return context;
}