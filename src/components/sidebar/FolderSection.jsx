import { ChevronDown, DropletsIcon, Folder, Plus } from "lucide-react";
import React from "react";

const folders = [
  { id: 1, name: "Products" },
  { id: 2, name: "Sales" },
  { id: 3, name: "Design" },
  { id: 4, name: "Office" },
  { id: 5, name: "Legal" },
];

const FolderSection = () => {
  return (
    <section className="mt-4">
      <div className="flex py-2 justify-between">
        <p className="uppercase">Folders</p>
        <Plus />
      </div>
      <div>
        {folders.map((folder) => (
          <div className="flex justify-between rounded-md hover:bg-slate-200 hover:border">
            <div className="flex gap-2 py-1">
              <Folder />
              <p className="font-semibold text-start">{folder.name}</p>
            </div>
            <ChevronDown />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FolderSection;
