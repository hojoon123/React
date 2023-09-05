import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Component.css";
const Component = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="div">
      <img
        className="httpslottiefilescom92123-icon"
        alt=""
        src="/httpslottiefilescom92123done@2x.png"
      />
      <b className="success">Success!</b>
      <img
        className="httpslottiefilescom92123-icon1"
        alt=""
        src="/httpslottiefilescom92123done@2x.png"
      />
      <div className="div1">계정 생성이 완료되었습니다</div>
      <Button
        className="child"
        sx={{ width: 271 }}
        variant="contained"
        id="sign_up_8_btn"
        color="warning"
        onClick={onFrameButtonClick}
      >
        로그인
      </Button>
      <img className="item" alt="" src="/rectangle-86@2x.png" />
      <div className="with-campus">With Campus</div>
    </div>
  );
};

export default Component;
