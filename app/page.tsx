"use client";
import React from "react";

import { Header } from "./sections/header";

import { Carrousel } from "./sections/carrousel";
import { Comments } from "./sections/comments";
import { WelcomeBanner } from "./sections/welcomeBanner";

export default function Home() {
  return (
    <>
      <Header /> 

      <WelcomeBanner />  

      <Carrousel />

      <Comments/>
    </>
  );
}
