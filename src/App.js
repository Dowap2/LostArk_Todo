import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import cheerio from "cheerio";
import { useState } from "react";

async function getHTML() {
  const characterName = "스태프로꽝";
  try {
    return await axios.get(
      `https://lostark.game.onstove.com/Profile/Character/${characterName}`
    );
  } catch (error) {
    console.error(error);
  }
}

function App() {
  const [level, setLevel] = useState(0);
  getHTML()
    .then(html => {
      let titleList = [];
      const $ = cheerio.load(html.data);
      const bodyList = $("div.level-info2__expedition");

      bodyList.each(function(i, elem) {
        titleList[i] = {
          level: $(this)
            .find("span")
            .text()
        };
      });
      return titleList;
    })
    .then(res => setLevel(res[0].level));
  return <div className="App">{level}</div>;
}

export default App;
