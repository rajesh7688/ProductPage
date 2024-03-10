import React, { useMemo } from "react";
import { data } from "../utils/data";
import Header from "../components/product/Header";
import SelectionAndFilter from "../components/product/SelectionAndFilter";
import TableSection from "../components/product/TableSection";
import {
  Archive,
  Cross,
  CrossIcon,
  Delete,
  Plus,
  Trash,
  X,
} from "lucide-react";

const ProductSection = () => {
  const column = useMemo(
    () => [
      {
        accessorKey: "id",
        Header: () => (
          <span>
            <input type="checkbox" />
          </span>
        ),
        cell: (info) => <span>{info.getValue()}</span>,
      },
      {
        accessorKey: "logo",
        Header: () => (
          <span>
            Brand
            <p>
              <Plus />
            </p>
          </span>
        ),
        cell: (info) => <span>{info.getValue()}</span>,
      },
      {
        accessorKey: "description",
        Header: () => <span>Description</span>,
        cell: (info) => <span>{info.getValue()}</span>,
      },
    ],
    []
  );

  return (
    <div className="w-full border rounded-md">
      <Header />
      <SelectionAndFilter />
      <TableSection column={column} />
      <div className="flex  justify-center mt-20 mb-8 items-center py-1">
        <div className="flex border rounded-md py-1 px-2 justify-center items-center gap-2">
          <div className="flex gap-2 ">
            <span className="py- px-2 bg-black rounded-md text-white">3</span>
            Selected
          </div>
          <button className="flex gap-2 border rounded-md px-1 items-center">
            <Archive size={21} />
            Archive
          </button>
          <button className="flex gap-2 border rounded-md px-1 items-center">
            <Trash size={21} />
            Delete
          </button>
          <select className="border rounded-md" id="">
            <option value="">More</option>
          </select>
          <button>
            <X size={21} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
