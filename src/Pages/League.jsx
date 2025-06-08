import React from "react";
import Banner from "../Commom/Banner";
import Leagestructure from "../Components/Leagestructure";
import { Leaguestructure } from "../Constant/Leagestructre.constant";
import Outlastsuperleague from "../Components/Outlastsuperleague";
import Leaguematch from "../Components/Leaguematch";
import { LeagueData } from "../Constant/Leaguematch.constant";
import Scoreboard from "../Components/Scoreboard";
import Joinus from "../Components/Joinus";


function League() {
  return (
    <section>
      <Banner title={"Our League"} content={"Home | League"} />
      <Leagestructure data={Leaguestructure} />
      <Outlastsuperleague data={Leaguestructure} />
      <Scoreboard table={LeagueData?.scoreboard} />
      <Leaguematch LeagueData={LeagueData} />
      <Joinus />
    </section>
  );
}

export default League;
