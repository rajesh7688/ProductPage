import {
  BadgeHelp,
  MessageCircleQuestion,
  PersonStanding,
  UserRoundPlus,
} from "lucide-react";
import React from "react";
import Button from "../ui/Button";

const Bottom = () => {
  return (
    <div className="mt-6">
      <div className="flex py-1 rounded-md hover:bg-slate-200 hover:border gap-2">
        <UserRoundPlus />
        <p className="font-semibold text-start">Invite teammates</p>
      </div>
      <div className="flex rounded-md hover:bg-slate-200 hover:border justify-between">
        <div className="flex py-1 gap-2">
          <BadgeHelp />
          <p className="font-semibold text-start">Help and first steps</p>
        </div>
        <MessageCircleQuestion />
      </div>
      <div className="flex justify-between">
        <div className="flex py-1 rounded-md hover:bg-slate-200 hover:border gap-1">
          <p className="text-center px-1">7</p>
          <p className="font-semibold text-start">Days left on trial</p>
        </div>
        <Button
          className="bg-black px-2 py-1 text-white rounded-lg"
          text="Add billing"
        />
      </div>
    </div>
  );
};

export default Bottom;
