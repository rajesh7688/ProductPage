import React from "react";
import TopContent from "../components/sidebar/TopContent";
import Bottom from "../components/sidebar/Bottom";
import FolderSection from "../components/sidebar/FolderSection";

const Sidebar = () => {
  return (
    <section className="border w-full max-w-[20rem] rounded-md px-4 py-2 flex flex-col justify-between">
      <div>
        <TopContent />
        <FolderSection />
      </div>
      <Bottom />
    </section>
  );
};

export default Sidebar;
