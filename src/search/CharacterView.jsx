import styled from "styled-components";

const TitleComponent = styled.div``;
const DetailInfoComponent = styled.div``;
const DetailInfoText = styled.div``;

const CharacterView = props => {
  const data = props.data;
  return (
    <div>
      <TitleComponent>{data[0]}</TitleComponent>
      <DetailInfoComponent>
        <DetailInfoText>서버 {data[1]}</DetailInfoText>
        <DetailInfoText>길드 {data[2]}</DetailInfoText>
        <DetailInfoText>클래스 {data[3]}</DetailInfoText>
        <DetailInfoText>전투레벨 Lv.{data[5]}</DetailInfoText>
        <DetailInfoText>아이템 레벨 Lv.{data[6]}</DetailInfoText>
        <DetailInfoText>원정대 레벨 Lv.{data[7]}</DetailInfoText>
        <DetailInfoText>영지 {data[9]}</DetailInfoText>
      </DetailInfoComponent>
    </div>
  );
};

export default CharacterView;
