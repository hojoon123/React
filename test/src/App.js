import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, InputAdornment, IconButton, Icon } from "@mui/material";
import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const Component = () => {
  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onButtonClick = useCallback(() => {
    // Please sync "준_회원가입5" to the project
    navigate("/Sign_up_5");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "준_메인" to the project
    navigate("/Main"); 
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
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
        <Button
          className="button"
          autoFocus
          id="sign_in"
          onClick={onButtonClick}
          variant="contained"
        >
          회원가입
        </Button>
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
          type={showPassword ? "text" : "password"}
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
    </ThemeProvider>
  );
};

export default Component;