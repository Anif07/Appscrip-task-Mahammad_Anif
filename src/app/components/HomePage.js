"use client";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsDown,
  IconDirection,
  IconHeart,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import Accordion from "./Accordion";
import axios from "axios";
import "../styles/home.css";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [data, setData] = useState([]);

  const FetchHandle = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = await response.data;
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    FetchHandle();
  }, []);

  const toggleVisibility = () => {
    console.log("Toggling visibility");
    setIsVisible(!isVisible);
  };

  const toggleBox = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <>
      <div className="mainBody">
        <div className="bodyContent">
          <div className="bodyContentHead">
            <div className="filterRecommended">
              <div className="filterDiv">
                <p>3425 ITEMS</p>

                {isVisible ? (
                  <div className="showFilter" onClick={toggleVisibility}>
                    <IconChevronLeft /> <span>HIDE FILTER</span>
                  </div>
                ) : (
                  <div className="showFilter" onClick={toggleVisibility}>
                    <IconChevronRight /> <span>SHOW FILTER</span>
                  </div>
                )}

                <div className="filterMobile" onClick={toggleVisibility}>
                  <a>FILTER</a>
                </div>
              </div>

              <div className="recommendedPDiv">
                <p className="recommendedP" onClick={toggleBox}>
                  RECOMMENDED
                </p>{" "}
                <IconChevronDown />
              </div>
            </div>

            <hr className="lineHr" />
          </div>

          <div className={`bodySidebar ${isVisible ? "visible" : "hidden"}`}>
            <div className="sidebarContent">
              <div className="sidebarRowCheckbox">
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox">CUSTOMIZBLE</label>
              </div>

              <Accordion />
            </div>
          </div>

          <div
            className={
              isVisible ? "mainBodyContents" : "hideFilterMainBodyContents"
            }
          >
            {isBoxVisible && (
              <div className={isVisible ? "box" : "boxChange"}>
                <div className="recommendedBox">
                  <IconCheck /> <p>RECOMMENDED</p>
                </div>
                <p>NEWEST FIRST</p>
                <p>POPULAR</p>
                <p>PRICE : HIGH TO LOW</p>
                <p>PRICE : LOW TO HIGH</p>
              </div>
            )}

            <div className="productListDiv">
              {data.map((obj, index) => (
                <div className="product" key={index}>
                  <div className="productImage">
                    <img src={obj.image} alt="" height={400} width={300} />
                  </div>

                  <div className="productBottom">
                    <div className="productDetails">
                      <p className="productName">PPXOC MILKEYWAY DRESS IN..</p>
                      <p className="productDescription">
                        <a>Sign in</a> or Create an account to see pricing
                      </p>
                    </div>
                    <div className="icon">
                      <IconHeart />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
