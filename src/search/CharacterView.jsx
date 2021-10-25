import styled from "styled-components";

const TitleComponent = styled.div``;
const DetailInfoComponent = styled.div``;
const DetailInfoText = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const DetailInfoTag = styled.div`
  width: 100px;
  padding: 10px;
  background: #8697a6;
  color: #ffffff;
  text-align: center;
  border: 0;
  border-radius: 30px;
  font-size: 14px;
`;

const CharacterView = props => {
  const data = props.data;
  return (
    <div>
      <TitleComponent>{data[0]}</TitleComponent>
      <DetailInfoComponent>
        <DetailInfoText>
          <DetailInfoTag>서버</DetailInfoTag> {data[1]}
        </DetailInfoText>
        <DetailInfoText>
          <DetailInfoTag>길드</DetailInfoTag> {data[2]}
        </DetailInfoText>
        <DetailInfoText>
          <DetailInfoTag>클래스</DetailInfoTag> {data[3]}
        </DetailInfoText>
        <DetailInfoText>
          <DetailInfoTag>전투레벨</DetailInfoTag> Lv.{data[5]}
        </DetailInfoText>
        <DetailInfoText>
          <DetailInfoTag>아이템 레벨</DetailInfoTag> Lv.{data[6]}
        </DetailInfoText>
        <DetailInfoText>
          <DetailInfoTag>원정대 레벨</DetailInfoTag> Lv.{data[7]}
        </DetailInfoText>
        <DetailInfoText>
          <DetailInfoTag>영지</DetailInfoTag> {data[9]}
        </DetailInfoText>
      </DetailInfoComponent>
    </div>
  );
};

export default CharacterView;
