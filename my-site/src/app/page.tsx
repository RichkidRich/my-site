'use client'

import Image from "next/image";
import "./main.css";

import { TRAVEL, PROJECTS, APPS, THINGS } from "./pages";

import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Client } from "appwrite";

import { AnimatePresence, motion } from "framer-motion"

import { travelGallery } from "./travelGallery.js";

const GALLERY_SELECTOR = 0;
const PHOTO_VIEW = 1;
const VIDEO_VIEW = 2;

export default function Home() {

  const [pageState, setPageState] = useState(0);
  const [prevPageState, setPrevPageState] = useState([]);
  const [gallery, setGallery] = useState<any[]>([]);
  const [gallerySelection, setGallerySelection] = useState<any>(GALLERY_SELECTOR);

  const handleBackButton = () => {
    const prevPageQueue = prevPageState;
    const prevPageToSet = prevPageQueue.pop();
    console.log(prevPageToSet);
    if (prevPageToSet) {
      setPageState(prevPageToSet);
      if (prevPageToSet === TRAVEL) {
        setGallerySelection(GALLERY_SELECTOR);
      }
    } else {
      setPageState(0);
    }
    setPrevPageState(prevPageQueue);
  }

  useEffect(() => {
    let tempGallery: any[] = [];
    travelGallery.forEach((picture: any) => {
      if (picture.height > picture.width) {
        tempGallery.push(
          <motion.div
            initial={false}
            whileInView={{ opacity: 1 }}
            className={`card card-tall-${picture.height}`}
            style={{backgroundImage:`url(${picture.url})`}}
          >
            <span>{picture.text}</span>
          </motion.div>
        );
      } else if (picture.width > picture.height) {
        tempGallery.push(
          <motion.div
            initial={false}
            whileInView={{ opacity: 1 }}
            className={`card card-wide-${picture.width}`}
            style={{backgroundImage:`url(${picture.url})`}}
          >
            <span>{picture.text}</span>
          </motion.div>
        );
      } else if (picture.height > 1) {
        tempGallery.push(
          <motion.div
            initial={false}
            whileInView={{ opacity: 1 }}
            className={`card card-large-${picture.height}`}
            style={{backgroundImage:`url(${picture.url})`}}
          >
            <span>{picture.text}</span>
          </motion.div>
        );
      } else {
        tempGallery.push(
          <motion.div
            initial={false}
            whileInView={{ opacity: 1 }}
            className={`card`}
            style={{backgroundImage:`url(${picture.url})`}}
          >
            <span>{picture.text}</span>
          </motion.div>
        )
      }
    });

    setGallery(tempGallery);
  }, []);

  const photoGrid = 
    <section className="travel-grid">
      {gallery}
    </section>

  return (
    <AnimatePresence>
      <motion.div layout className="main-bg">
        {pageState === TRAVEL ? 
          (gallerySelection === GALLERY_SELECTOR ? 
            <section className="initial-travel-grid">
              <div className="initial-grid-card" onClick={() => {setGallerySelection(PHOTO_VIEW)}}>
                Photos
              </div>
              <div className="initial-grid-card" onClick={() => {setGallerySelection(VIDEO_VIEW)}}>
                Videos
              </div>
            </section> :
            (
              gallerySelection === PHOTO_VIEW ?
              <section className="travel-grid">
                {gallery}
              </section> :
              (
                gallerySelection === VIDEO_VIEW ?
                <>
                <section className="travel-video-grid">
                  <iframe 
                    id="2023"
                    className="video-card"
                    src="https://www.youtube.com/embed/HVj72Q1828Y?si=6jZyFh4u2YCYHKOv&hd=1"
                    title="2023 Annual Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
                  <iframe 
                    id="2022"
                    className="video-card"
                    src="https://www.youtube.com/embed/Wn5lG4cCcgM?si=p1f16aU2AgtqHOqw&hd=1"
                    title="2022 Annual Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
                  <iframe 
                    id="2021"
                    className="video-card"
                    src="https://www.youtube.com/embed/JnLY4teC_zY?si=oCoKQCgflRA7Jb-L&hd=1"
                    title="2021 Summer Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
                  <iframe 
                    id="2020"
                    className="video-card"
                    src="https://www.youtube.com/embed/Dfa4XD1OWnA?si=h7p_Am-80t4l4Ntm&hd=1"
                    title="2020 Covid/Summer Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
                  <iframe 
                    id="2019"
                    className="video-card"
                    src="https://www.youtube.com/embed/rXHjK8NfZiw?si=eVfxjoLhXFyGpEuZ&hd=1"
                    title="2019 Summer Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
                  <iframe 
                    id="2018"
                    className="video-card"
                    src="https://www.youtube.com/embed/NwhpJqHffLU?si=ejB72WRfqe-wzcuZ&hd=1"
                    title="2018 Summer Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
                </section></> : <></>
              )
            )
          )
          : <></>}
        <Navbar setPageState={setPageState} currentPageState={pageState} setPrevPageState={setPrevPageState} prevPageState={prevPageState} setGallerySelection={setGallerySelection}/>
        {
          prevPageState.length > 0 ?
          <AnimatePresence>
          <motion.div
            initial={{ x: -520 }}
            animate={{ x: 0 }}
            exit={{ x: -520 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackButton}
            className="back-button">
            {"BACK"}
          </motion.div></AnimatePresence> : <></>
        }
      </motion.div>
    </AnimatePresence>
  );
}
