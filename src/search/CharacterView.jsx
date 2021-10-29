import styled from "styled-components";
import arcana from "../Img/arcana.png";
import bard from "../Img/bard.png";
import battlemaster from "../Img/battlemaster.png";
import berserker from "../Img/berserker.png";
import blade from "../Img/blade.png";
import blaster from "../Img/blaster.png";
import demonic from "../Img/demonic.png";
import destroyer from "../Img/destroyer.png";
import gunslinger from "../Img/gunslinger.png";
import holyknight from "../Img/holyknight.png";
import infighter from "../Img/infighter.png";
import lancemaster from "../Img/lancemaster.png";
import reaper from "../Img/reaper.png";
import scouter from "../Img/scouter.png";
import soulmaster from "../Img/soulmaster.png";
import sorceress from "../Img/sorceress.png";
import striker from "../Img/striker.png";
import summoner from "../Img/summoner.png";
import warlord from "../Img/warlord.png";

import { useState, useEffect } from "react";
import {
  lvDefault,
  lv1325,
  lv1370,
  lv1385,
  lv1400,
  lv1415,
  lv1430,
  lv1445
} from "../content/ContentData";

const CharacterViewComponent = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const DetailInfoComponent = styled.div`
  width: 300px;
`;
const DetailInfoBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const DetailInfoTag = styled.div`
  width: 100px;
  height: 20px;
  padding: 10px;
  background: #8697a6;
  color: #ffffff;
  text-align: center;
  border: 0;
  border-radius: 30px;
  font-size: 14px;
`;
const DetailInfoText = styled.div`
  padding: 10px;
`;
const EnrollmentButton = styled.button`
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 20px;
  color: #ffffff;
  background: #4a5b8c;
  margin-top: 100px;
  cursor: pointer;
`;
const CharacterIllustrationComponent = styled.div``;
const CharacterIllustration = styled.img``;

const CharacterView = props => {
  const data = props.data;
  const [imgSrc, setImgSrc] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    if (data[0] !== undefined) {
      switch (data[3]) {
        case "디스트로이어":
          setImgSrc(destroyer);
          break;
        case "워로드":
          setImgSrc(warlord);
          break;
        case "버서커":
          setImgSrc(berserker);
          break;
        case "홀리나이트":
          setImgSrc(holyknight);
          break;
        case "배틀마스터":
          setImgSrc(battlemaster);
          break;
        case "인파이터":
          setImgSrc(infighter);
          break;
        case "기공사":
          setImgSrc(soulmaster);
          break;
        case "창술사":
          setImgSrc(lancemaster);
          break;
        case "스트라이커":
          setImgSrc(striker);
          break;
        case "데빌헌터":
          setImgSrc(striker);
          break;
        case "블래스터":
          setImgSrc(blaster);
          break;
        case "호크아이":
          setImgSrc(striker);
          break;
        case "스카우터":
          setImgSrc(scouter);
          break;
        case "건슬링어":
          setImgSrc(gunslinger);
          break;
        case "바드":
          setImgSrc(bard);
          break;
        case "서머너":
          setImgSrc(summoner);
          break;
        case "아르카나":
          setImgSrc(arcana);
          break;
        case "소서리스":
          setImgSrc(sorceress);
          break;
        case "블레이드":
          setImgSrc(blade);
          break;
        case "데모닉":
          setImgSrc(demonic);
          break;
        case "리퍼":
          setImgSrc(reaper);
          break;
        default:
          console.log("error");
      }
      const level = Number(data[6].replace(",", ""));
      if (1370 > level && level >= 1325) {
        setContent(lv1325);
      } else if (1385 > level && level >= 1370) {
        setContent(lv1370);
      } else if (1400 > level && level >= 1385) {
        setContent(lv1385);
      } else if (1415 > level && level >= 1400) {
        setContent(lv1400);
      } else if (1430 > level && level >= 1415) {
        setContent(lv1415);
      } else if (1445 > level && level >= 1430) {
        setContent(lv1430);
      } else if (level >= 1445) {
        setContent(lv1445);
      } else {
        setContent(lvDefault);
      }
    }
    setContent(
      content.map(content => {
        return <div>{content}</div>;
      })
    );
  }, [data]);

  return data[0] !== undefined ? (
    <CharacterViewComponent>
      <DetailInfoComponent>
        <DetailInfoBox>
          <DetailInfoTag>캐릭터명</DetailInfoTag>
          <DetailInfoText>{data[0]}</DetailInfoText>
        </DetailInfoBox>
        <DetailInfoBox>
          <DetailInfoTag>서버</DetailInfoTag>
          <DetailInfoText>{data[1]}</DetailInfoText>
        </DetailInfoBox>
        <DetailInfoBox>
          <DetailInfoTag>길드</DetailInfoTag>
          <DetailInfoText>{data[2]}</DetailInfoText>
        </DetailInfoBox>
        <DetailInfoBox>
          <DetailInfoTag>클래스</DetailInfoTag>
          <DetailInfoText>{data[3]}</DetailInfoText>
        </DetailInfoBox>
        <DetailInfoBox>
          <DetailInfoTag>전투레벨</DetailInfoTag>
          <DetailInfoText>Lv.{data[5]}</DetailInfoText>
        </DetailInfoBox>
        <DetailInfoBox>
          <DetailInfoTag>아이템 레벨</DetailInfoTag>
          <DetailInfoText>Lv.{data[6]}</DetailInfoText>
        </DetailInfoBox>
        <DetailInfoBox>
          <DetailInfoTag>원정대 레벨</DetailInfoTag>
          <DetailInfoText>Lv. {data[7]}</DetailInfoText>
        </DetailInfoBox>
        <DetailInfoBox>
          <DetailInfoTag>영지</DetailInfoTag>
          <DetailInfoText>{data[9]}</DetailInfoText>
        </DetailInfoBox>
        <DetailInfoBox>
          <DetailInfoTag>콘텐츠</DetailInfoTag>
          <DetailInfoText>{content}</DetailInfoText>
        </DetailInfoBox>
        <EnrollmentButton>등록</EnrollmentButton>
      </DetailInfoComponent>
      <CharacterIllustrationComponent>
        <CharacterIllustration src={imgSrc} />
      </CharacterIllustrationComponent>
    </CharacterViewComponent>
  ) : (
    <div>검색해주세요</div>
  );
};

export default CharacterView;
