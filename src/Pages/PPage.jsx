import React from "react";
import Programms from "../Components/Programms";
import Banner from "../Commom/Banner";
import Joinus from "../Components/Joinus";
import OurTeam from "../Components/OurTeam";
import { LeagueData } from "../Constant/Leaguematch.constant";
import Ourunique from "../Components/Ourunique";
import { AboutData } from "../Constant/About.constant";

function PPage() {
  return (
    <>
      <Banner title={"Programms"} content={"Home | Programm"} />
      <Programms  />
      <Ourunique data={AboutData?.Unique} />
      <OurTeam data={LeagueData?.Team_member} />
      <Joinus />
    </>
  );
}

export default PPage;
