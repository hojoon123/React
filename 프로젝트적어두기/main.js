import { useCallback } from "react";
import { Button } from "@mui/material";
import "./Component1.css";
const Component1 = () => {
  const onDateClick = useCallback(() => {
    // Please sync "HJ_WC_GAME_1" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameButton']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end" });
    }
  }, []);

  const onFrameButton1Click = useCallback(() => {
    // Please sync "준 랭킹_1" to the project
  }, []);

  const onFrameButton2Click = useCallback(() => {
    // Please sync "HJ_WC_GAME_1" to the project
  }, []);

  return (
    <div className="div2">
      <img className="ellipse-icon" alt="" src="/ellipse@2x.png" />
      <img
        className="native-home-indicator"
        alt=""
        src="/native--home-indicator.svg"
      />
      <div className="chart">
        <div className="type12">2023-07-08 PM 4:33 3회차</div>
        <Button
          className="date"
          variant="contained"
          id="btn_main_start"
          color="warning"
          onClick={onDateClick}
        >
          게임 하러가기
        </Button>
      </div>
      <div className="n2-frame-parent">
        <div className="n2-frame">
          <div className="secondnum">만</div>
          <div className="secondnum1">56</div>
        </div>
        <div className="firstnum">1</div>
      </div>
      <div className="bar-frame">
        <div className="bar" />
      </div>
      <div className="income">
        <div className="bg" />
        <div className="type20">다른 게임명</div>
        <div className="type121">이상형 MBTI 테스트</div>
        <div className="bg1" />
        <img className="bg-icon" alt="" src="/bg@2x.png" />
      </div>
      <div className="outcome">
        <div className="type20">뭔가 다른 거</div>
        <div className="type121">핫게라던가 등등</div>
        <div className="bg1" />
      </div>
      <div className="recent-transaction">
        <div className="type12-parent">
          <div className="type123">최근 개인 랭킹</div>
          <div className="div3">{`더 보기 > `}</div>
        </div>
        <div className="send">
          <div className="type124">지마켓계란도둑</div>
          <div className="type125">융합소프트웨어학과</div>
          <div className="type202">324,817</div>
          <img className="line-icon" alt="" src="/line.svg" />
        </div>
        <div className="send1">
          <div className="type124">롯데리아케찹도둑</div>
          <div className="type125">정보보호학과</div>
          <img className="line-icon" alt="" src="/line.svg" />
          <div className="type202">256,712</div>
        </div>
      </div>
      <div className="recent-transaction1">
        <div className="type12-group">
          <div className="type123">핫게라던가 등등 뭔가 컨텐츠</div>
          <div className="div3">{`더 보기 > `}</div>
        </div>
        <div className="send2">
          <div className="type124">롯데리아 케찹 너무 맛있는 듯</div>
          <div className="type125">나는 롯데리아 케찹 2개씩 가져옴</div>
          <div className="type204">좋아요 5</div>
          <img className="line-icon" alt="" src="/line.svg" />
        </div>
      </div>
      <img className="ellipse-icon1" alt="" src="/ellipse1@2x.png" />
      <div className="navigation-menu">
        <button
          className="ellipse-parent"
          data-scroll-to="frameButton"
          onClick={onFrameButtonClick}
        >
          <div className="frame-child" />
          <div className="type1211">Home</div>
          <img
            className="iconlylighthome1"
            alt=""
            src="/iconlylighthome1.svg"
          />
        </button>
        <button className="ellipse-group" onClick={onFrameButton1Click}>
          <div className="frame-child" />
          <div className="type1212">Rank</div>
          <img
            className="iconlylighthome1"
            alt=""
            src="/iconlylightoutlinechart1.svg"
          />
        </button>
        <img className="navigation-menu-child" alt="" src="/group-363.svg" />
        <button className="ellipse-container" onClick={onFrameButton2Click}>
          <div className="frame-child" />
          <div className="type1212">Game</div>
          <img
            className="gamecontroller-icon"
            alt=""
            src="/gamecontroller.svg"
          />
        </button>
        <button className="frame-button">
          <div className="frame-child" />
          <div className="type1212">Profil</div>
          <img
            className="iconlylighthome1"
            alt=""
            src="/iconlylightprofile1.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default Component1;
