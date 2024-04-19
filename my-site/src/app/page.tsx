'use client'

import Image from "next/image";
import "./main.css";

import { TRAVEL, PROJECTS, APPS, THINGS } from "./pages";

import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Client } from "appwrite";

import { travelGallery } from "./travelGallery.js"

export default function Home() {

  const [pageState, setPageState] = useState(0);
  const [gallery, setGallery] = useState<any[]>([]);

  useEffect(() => {
    let tempGallery: any[] = [];
    travelGallery.forEach((picture: any) => {
      if (picture.height > picture.width) {
        tempGallery.push(
          <div className={`card card-tall-${picture.height}`}
            style={{backgroundImage:`url(${picture.url})`}}
          >
            <span>{picture.text}</span>
          </div>
        );
      } else if (picture.width > picture.height) {
        tempGallery.push(
          <div className={`card card-wide-${picture.width}`}
            style={{backgroundImage:`url(${picture.url})`}}
          >
            <span>{picture.text}</span>
          </div>
        );
      } else if (picture.height > 1) {
        tempGallery.push(
          <div className={`card card-large-${picture.height}`}
            style={{backgroundImage:`url(${picture.url})`}}
          >
            <span>{picture.text}</span>
          </div>
        );
      } else {
        tempGallery.push(
          <div className={`card`}
            style={{backgroundImage:`url(${picture.url})`}}
          >
            <span>{picture.text}</span>
          </div>
        )
      }
    });

    setGallery(tempGallery);
  });

  return (
    <div className="main-bg">
      {pageState === TRAVEL ? 
        <section className="travel-grid">
          {gallery}
        </section> : <></>}
      <Navbar setPageState={setPageState}/>
    </div>
  );
}
