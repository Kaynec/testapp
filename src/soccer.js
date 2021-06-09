import React, { useState, useEffect } from "react";
import arrow from "./assets/arrow.svg";
import close from "./assets/close.svg";
// // // // // // // // / / / / / / / / /
export default function Soccer() {
  const [list, setList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
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
        style={{ background: visible ? "#09a9a0" : "" }}
      >
        <div className="inner">
          <input
            type="text"
            value={inputValue}
            placeholder="کشور خود را انتخاب کنید"
          />
          {visible ? (
            <img src={close} onClick={() => setVisible(false)} />
          ) : (
            <img src={arrow} onClick={() => setVisible(true)} />
          )}
        </div>
        {visible &&
          list.map((el) => {
            return <h3 onClick={(e) => setInputValue(el.name)}> {el.name}</h3>;
          })}
      </div>
    </div>
  );
}
