import React from "react";
import { logo } from "../../assets/images/index";
import {
  Asterisk,
  BadgeIndianRupee,
  Code,
  PaintBucket,
  PlusSquare,
} from "lucide-react";

const teamData = [
  {
    id: 1,
    team: "Design Team",
    count: 1,
    logo: <PaintBucket />,
  },
  {
    id: 2,
    team: "Marketing Team",
    count: 2,
    logo: <BadgeIndianRupee />,
  },
  {
    id: 3,
    team: "Development Team",
    count: 3,
    logo: <Code />,
  },
];

const TopContent = () => {
  return (
    <section>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src={logo} className="w-10 border rounded-md p-1 h-10" alt="" />
          <div className="space-y-[-8px]">
            <p className="text-start">INC</p>
            <h1 className="text-lg font-bold">InnovateHub</h1>
          </div>
        </div>
        <img className="w-8 h-8" src={logo} alt="" />
      </div>
      <div>
        {teamData.map((team) => (
          <div
            className="flex justify-between py-1 rounded-md hover:bg-slate-200 hover:border"
            key={team.id}
          >
            <div className="flex gap-2  ">
              {team.logo}
              <p className="font-semibold text-start">{team.team}</p>
            </div>
            <p className="text-end justify-center items-center gap-2 rounded-md text-sm flex border px-2 ">
              <Asterisk size={16} /> {team.count}
            </p>
          </div>
        ))}
        <div className="flex gap-2 py-1 mt-2">
          <PlusSquare />
          <p className="text-neutral-500 ">Create a Team</p>
        </div>
      </div>
    </section>
  );
};

export default TopContent;
