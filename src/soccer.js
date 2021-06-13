import React, { useState, useEffect } from "react";
import arrow from "./assets/arrow.svg";
import close from "./assets/close.svg";
// // // // // // // // / / / / / / / / /
export default function Soccer() {
  // out 3 states
  const [list, setList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("کشور خود را انتخاب کنید");
  // fetch Data from api and set to state
  useEffect(async () => {
    const result = await fetch("https://restcountries.eu/rest/v2/all");
    const parsed = await result.json();
    setList((prev) => parsed);
  }, []);

  return (
    <div id="soccer">
      <h1> باشگاه خود را جستجو کنید</h1>
      <div
        className="soccer-input"
        style={{
          background: visible ? "#09a9a0" : "",
        }}
      >
        <div
          style={{
            border: visible ? "none" : "3px solid  rgb(222, 255, 92)",
            background: visible === false ? "#09a9a0" : "rgb(222, 255, 92)",
          }}
          className="inner"
        >
          <input
            type="text"
            value={inputValue}
            style={{
              color: visible ? "#09a9a0" : "rgb(222, 255, 92)",
              fontSize: "1.25rem",
              fontWeight: "700",
            }}
          />
          {visible ? (
            <>
              <h2
                style={{
                  color: "#09a9a0",
                  position: "absolute",
                  right: "10%",
                }}
              >
                Close
              </h2>
              <img src={close} onClick={() => setVisible(false)} />
            </>
          ) : (
            <img src={arrow} onClick={() => setVisible(true)} />
          )}
        </div>
        {visible &&
          list.map((el) => {
            return (
              <h3
                key={el.name}
                onClick={(e) => {
                  setInputValue(el.name);
                  setVisible(false);
                }}
              >
                {" "}
                {el.name}
              </h3>
            );
          })}
      </div>
    </div>
  );
}
