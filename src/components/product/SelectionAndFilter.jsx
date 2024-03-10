import {
  ArrowDownZA,
  BrickWall,
  Import,
  SlidersHorizontal,
  Video,
} from "lucide-react";
import React from "react";

const SelectionAndFilter = () => {
  return (
    <section className="flex justify-between px-4 py-4 gap-4">
      <div className="flex gap-4 [&>div]:border-2 [&>div]:border-grey-clr  [&>div]:rounded-md [&>div]: [&>div]:py-1 [&>div]:px-1">
        <div className="flex gap-2">
          <div className="">
            <BrickWall />
          </div>

          <select>
            <option value="">All Brands</option>
          </select>
        </div>
        <div>
          <select>
            <option value="">Desk</option>
          </select>
        </div>
        <div>
          {" "}
          <select>
            <option value="">Tag</option>
          </select>
        </div>
        <div className="flex gap-2">
          <ArrowDownZA />
          <p>Sort</p>
        </div>
        <div className="flex gap-2">
          <SlidersHorizontal />
          <p>Filter</p>
        </div>
      </div>
      <div className="flex gap-4 [&>div]:border-2 [&>div]:border-grey-clr [&>div]:rounded-md [&>div]: [&>div]:py-1 [&>div]:px-1">
        <div className="flex gap-2">
          <Video />
          <p>Meeting</p>
        </div>
        <div className="flex gap-2">
          <Import />
          <p>Import/Export</p>
        </div>
      </div>
    </section>
  );
};

export default SelectionAndFilter;
