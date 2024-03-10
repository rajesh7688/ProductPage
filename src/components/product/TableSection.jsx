import React from "react";
import { data } from "../../utils/data";
import { MessageSquarePlus, MessagesSquare, Plus } from "lucide-react";

const TableSection = () => {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="[&>th]:text-[14px] [&>th]:font-[500] text-[#636363]">
            <th className="border-[1px] border-neutral-clr-300 w-fit pl-2 py-2 text-start  ">
              <input type="checkbox" className="text-center" />
            </th>
            <th className=" items-center border-[1px] border-neutral-clr-300 w-fit  px-1 py-2 text-start ">
              <div className="flex justify-between items-center">
                <span>Brand</span>
                <span>
                  <Plus size={16} />
                </span>
              </div>
            </th>
            <th className="border-[1px] border-neutral-clr-300 w-fit  px-1 py-2 text-start ">
              Description
            </th>
            <th className="border-[1px] border-neutral-clr-300 w-fit  px-1 py-2 text-start ">
              Members
            </th>
            <th className="border-[1px] border-neutral-clr-300 w-fit  px-1 py-2 text-start ">
              Categories
            </th>
            <th className="border-[1px] border-neutral-clr-300 w-fit  px-1 py-2 text-start ">
              Tags
            </th>
            <th className="border-[1px] border-neutral-clr-300 w-fit  px-1 py-2 text-start ">
              Next Meeting
            </th>
            <th className="border-[1px] border-neutral-clr-300 w-fit  px-1 py-2 text-start ">
              <Plus />
            </th>
          </tr>
        </thead>

        <tbody className="w-full ">
          {data.map((item) => (
            <tr
              className="[&>td]:text-start [&>td]:text-[13px] [&>td]:font-[700] text-black"
              key={item.id}
            >
              <td className="w-fit border-[1px] border-neutral-clr-300 px-2 py-1 text-[12px] font-medium ">
                <input className="w-fit" type="checkbox" />
              </td>
              <td className="w-fit border-[1px] border-neutral-clr-300 px-2 py-1 text-[12px] font-medium ">
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <img className="w-6 h-6" src={item.logo} alt="" />
                    <p>{item.name}</p>
                  </div>
                  <div className="flex gap-1 justify-center items-center">
                    <MessagesSquare size={14} />
                    <span>2</span>
                  </div>
                </div>
              </td>
              <td className="w-fit border-[1px] border-neutral-clr-300 px-2 py-1 text-[12px] font-medium ">
                {item.description}
              </td>
              <td className="border-[1px] border-neutral-clr-300 px-2 py-1 text-[12px] font-medium ">
                <div className="flex ">
                  {item.members.map((member, i) => (
                    <img
                      key={member}
                      className={`w-6 h-6 border-2 border-white rounded-full z-${i} `}
                      src={member}
                      alt=""
                    />
                  ))}
                </div>
              </td>
              <td className="w-fit border-[1px] border-neutral-clr-300 px-2 py-1 text-[12px] font-medium ">
                {item.categories}
              </td>
              <td className="w-fit border-[1px] border-neutral-clr-300 px-2 py-1 text-[12px] font-medium ">
                {item.tags}
              </td>
              <td className="w-fit border-[1px] border-neutral-clr-300 px-2 py-1 text-[12px] font-medium ">
                {item.nextMeeting}
              </td>
              <td className="w-fit border-[1px] border-neutral-clr-300 px-2 py-1 text-[12px] font-medium "></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="[&>th]:text-[14px] [&>th]:font-[500] [&>th]:text-end text-[#636363]">
            <th className="border-[1px] border-neutral-clr-300 w-fit pl-2 py-2   "></th>
            <th className=" border-[1px] border-neutral-clr-300 w-fit  px-1 py-2  ">
              10 Count
            </th>
            <th className="border-[1px] border-neutral-clr-300 w-fit  px-1 py-2  ">
              + Add calculation
            </th>
            <th className="border-[1px] border-neutral-clr-300 w-fit  px-1 py-2  ">
              + Add calculation
            </th>
            <th className="border-[1px] border-neutral-clr-300 w-fit  px-1 py-2  ">
              + Add calculation
            </th>
            <th className="border-[1px] border-neutral-clr-300 w-fit  px-1 py-2  ">
              + Add calculation
            </th>
            <th className="border-[1px] border-neutral-clr-300 w-fit  px-1 py-2  "></th>
            <th className="border-[1px] border-neutral-clr-300 w-fit  px-1 py-2  "></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TableSection;
