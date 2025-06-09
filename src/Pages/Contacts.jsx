import React from "react";
import Banner from "../Commom/Banner";
import Contactform from "../Components/Contactform";
import Branch from "../Components/Branch";
import Joinus from "../Components/Joinus";

function Contacts() {
  return (
    <section>
      <Banner title={"Contact Us"} content={"Home | Contact Us"} />
      <Contactform />
      <Branch />   
      <Joinus />
         
    </section>
  );
}

export default Contacts;
