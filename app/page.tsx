
import React from "react";

import { Banner } from "./sections/banner";

import { Carrousel } from "./sections/carrousel";
import { Comments } from "./sections/comments";
import { WelcomeBanner } from "./sections/welcomeBanner";
import { NavBar } from "./sections/navBar";
import { Delivery } from "./sections/delivery";

export default function Home() {
  return (
    <>
      <Banner />
      <WelcomeBanner />
      <Carrousel />
      <Comments />
      <Delivery />
    </>
  );
}
