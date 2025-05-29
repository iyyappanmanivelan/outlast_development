import React from "react";
import Banner from "../Commom/Banner";
import Contactform from "../Components/Contactform";
import Branch from "../Components/Branch";

function Contacts() {
  return (
    <section>
      <Banner title={"Contact Us"} content={"Home | Contact Us"} />
      <Branch />
      <Contactform />
      
    </section>
  );
}

export default Contacts;
