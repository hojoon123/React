import { useState, useCallback } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import "./Component.css";
const Component = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onButtonClick = useCallback(() => {
    // Please sync "준_회원가입5" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "준_메인" to the project
  }, []);

  return (
    <div className="div">
      <div className="child" />
      <b className="b">아이디와 비밀번호를 입력해주세요</b>
      <div className="have-a-nice">Have a nice day. by. 지마켓계란도둑</div>
      <TextField
        className="item"
        sx={{ width: 271 }}
        color="info"
        variant="outlined"
        type="text"
        id="in_email"
        label="학번"
        placeholder="183701"
        size="medium"
        margin="none"
      />
      <button className="button" autoFocus id="sign_in" onClick={onButtonClick}>
        회원가입
      </button>
      <div className="div1" />
      <Button
        className="inner"
        sx={{ width: 271 }}
        variant="contained"
        id="log_in"
        color="warning"
        href="/"
        onClick={onFrameButtonClick}
      >
        LOG IN
      </Button>
      <TextField
        className="frame-textfield"
        sx={{ width: 271 }}
        color="info"
        variant="outlined"
        type={showPassword ? "text" : "text"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleShowPasswordClick}
                aria-label="toggle password visibility"
              >
                <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="비밀번호"
        placeholder="비밀번호를 입력하세요."
        size="medium"
        margin="none"
      />
      <img className="rectangle-icon" alt="" src="/rectangle-84@2x.png" />
      <div className="with-campus">With Campus</div>
    </div>
  );
};

export default Component;
