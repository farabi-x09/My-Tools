import Banner from "@/components/Banner";
import CardPartPage from "@/components/CardPart";
import Count from "@/components/Count";

import GetStarted from "@/components/GetStarted";
import MainCardHeaderPage from "@/components/MainCardHeader";

import Ready from "@/components/Ready";
import Simple from "@/components/Simple";


export default function Home() {
  return (
  <div>
  

    <Banner></Banner>
    <Count></Count>
    <MainCardHeaderPage></MainCardHeaderPage>
    <CardPartPage></CardPartPage>
    <GetStarted></GetStarted>
    <Simple></Simple>
    <Ready></Ready>
 
  </div>
  );
}
