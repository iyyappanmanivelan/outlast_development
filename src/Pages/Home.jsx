import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Getoknow from "../Components/Getoknow";
import Programms from "../Components/Programms";
import Whyjoin from "../Components/Whyjoin";
import Testimonal from "../Components/Testimonal";
import Latestnews from "../Components/Latestnews";
import Joinus from "../Components/Joinus";
import axios from "axios";
import { Instagram_Function } from "../Api/Insta_api";
import Gallery from "../Components/Gallery";
import Registerform from "../Components/Registerform";

function Home() {


  const [data , setdata] = useState()


  const Insta = ()=>{
       Instagram_Function()
       .then((res)=>{
         setdata(res?.data)
       })

       .catch((err)=>{
        console.log(err)
       })
  }


  useEffect(()=>{

    Insta()

  },[])


  return (
    <>
      <Banner/>
      <Getoknow/>
      <Whyjoin/>
      <Testimonal/>
      <Latestnews blogs={data}/>
      <Gallery data={data}/> 
      <Joinus/>

    </>
  );
}

export default Home;
