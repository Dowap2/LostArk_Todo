import axios from "axios";
import cheerio from "cheerio";
import { useEffect, useState } from "react";
import styled from "styled-components";

import CharacterView from "./CharacterView";
const InputBackground = styled.div`
  background: #4a5b8c;
  width: 100vw;
  height: 30vh;
`;
const InputComponent = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InputContainer = styled.input`
  width: 500px;
  height: 40px;
  outline: none;
  border-radius: 5px;
  border: 0;
  padding-left: 10px;
`;
const SearchCharacter = () => {
  const [result, setResult] = useState([]);
  const [inputChracterName, setInputChracterName] = useState("");
  const [characterName, setCharacterName] = useState("");

  useEffect(() => {
    if (characterName !== "") {
      async function getHTML() {
        try {
          return await axios.get(`https://loawa.com/char/${characterName}`);
        } catch (error) {
          console.error(error);
        }
      }
      getHTML()
        .then(html => {
          let titleList = [];
          const $ = cheerio.load(html.data);
          const bodyList = $("div.pl-2");

          bodyList.each(function(i) {
            titleList[i] = $(this)
              .find("span.text-theme-0")
              .text()
              .trim();
          });
          return titleList;
        })
        .then(res => {
          setResult(res);
        });
    }
  }, [characterName]);

  return (
    <div>
      <InputBackground>
        <InputComponent>
          <InputContainer
            type="text"
            placeholder="search"
            onChange={e => setInputChracterName(e.target.value)}
            onKeyPress={e =>
              e.charCode === 13 ? setCharacterName(inputChracterName) : null
            }
          />
        </InputComponent>
      </InputBackground>
      <CharacterView data={result} />
    </div>
  );
};

export default SearchCharacter;
