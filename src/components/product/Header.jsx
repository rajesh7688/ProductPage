import { MessagesSquare, Search, Settings } from "lucide-react";
import React from "react";
import Input from "../ui/Input";

const Header = () => {
  return (
    <section className="flex justify-between px-4 py-2 border-b pb-2">
      <div>
        <p className="text-2xl font-semibold">Products</p>
      </div>
      <div className="flex gap-3">
        <div>
          <div className="border flex px-1 items-center rounded-md">
            <Search />
            <Input placeholder={"Search for..."} className={"px-1 py-1"} />
          </div>
        </div>
        <div className="flex">
          <div className="border py-1 px-1 rounded-md">
            <MessagesSquare />
          </div>
          <div className="py-1 px-1 rounded-md border">
            <Settings />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
