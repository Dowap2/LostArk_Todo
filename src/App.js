import axios from "axios";
import cheerio from "cheerio";
import { useEffect, useState } from "react";

const lvDefault = ["도전어비스", "도전가디언"];
const lv1325 = ["아이라의눈", "오레하 프라바사"];
const lv1370 = ["아르고스"];
const lv1385 = ["쿠크세이튼리허설"];
const lv1415 = ["발탄"];
const lv1430 = ["아브렐슈드데자뷰", "비아키스"];

function App() {
  const [level, setLevel] = useState(0);
  const [character, setCharacter] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [content, setContent] = useState([]);
  const [contentToCheckBox, setContentToCheckBox] = useState([]);

  useEffect(() => {
    if (characterName !== "") {
      async function getHTML() {
        try {
          return await axios.get(
            `https://lostark.game.onstove.com/Profile/Character/${characterName}`
          );
        } catch (error) {
          console.error(error);
        }
      }
      getHTML()
        .then(html => {
          let titleList = [];
          const $ = cheerio.load(html.data);
          const bodyList = $("div.level-info2__expedition");

          bodyList.each(function(i) {
            titleList[i] = {
              level: $(this)
                .find("span")
                .text()
            };
          });
          return titleList;
        })
        .then(res => {
          const regex = /[^0-9]/g;
          var result = res[0].level.replace(regex, "") / 100;
          setLevel(result);
          setContentList(result);
        });
    }
    const setContentList = level => {
      if (level >= 1325) {
        setContent(content.concat(lvDefault, lv1325));
      }
      if (level >= 1370) {
        setContent(content.concat(lvDefault, lv1325, lv1370));
      }
      if (level >= 1385) {
        setContent(content.concat(lvDefault, lv1325, lv1370, lv1385));
      }
      if (level >= 1415) {
        setContent(content.concat(lvDefault, lv1325, lv1370, lv1385, lv1415));
      }
      if (level >= 1430) {
        setContent(
          content.concat(lvDefault, lv1325, lv1370, lv1385, lv1415, lv1430)
        );
      }
    };
  }, [characterName]);

  useEffect(() => {
    const html = content.map(content => {
      return (
        <div>
          <label>{content}</label>
          <input type="checkbox"></input>
        </div>
      );
    });
    setContentToCheckBox(html);
  }, [content]);

  return (
    <div className="App">
      <input type="text" onChange={e => setCharacter(e.target.value)}></input>
      <button onClick={e => setCharacterName(character)}></button>
      Lv.{level}
      <button onClick={e => console.log(content)}></button>
      <button onClick={e => setContent([])}></button>
      <div>{contentToCheckBox}</div>
    </div>
  );
}

export default App;
