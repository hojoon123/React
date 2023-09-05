import { useState, useCallback } from "react";
import React, { useEffect } from 'react';
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Component1.css";

function API_request() {
  // API 엔드포인트 정의
  const apiEndpoint = 'http://127.0.0.1:8000/auth/signup/';

  useEffect(() => {
    // API 요청 코드에서 apiEndpoint를 사용할 수 있음
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        // 데이터 처리 및 상태 업데이트
      })
      .catch((error) => {
        console.error('API 호출 중 오류 발생:', error);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  // 렌더링 로직
}

  
const Component1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="div2">
      <div className="component-2">
        <Button
          className="component-2-child"
          sx={{ width: 271 }}
          variant="contained"
          id="sign_up_btn"
          color="warning"
          onClick={onFrameButtonClick}
        >
          확인
        </Button>
        <TextField
          className="component-2-item"
          sx={{ width: 274 }}
          color="primary"
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
          id="in_password_1"
          label="비밀번호"
          placeholder="**********"
          size="medium"
          margin="none"
        />
        <TextField
          className="component-2-inner"
          sx={{ width: 274 }}
          color="primary"
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
          id="in_password_2"
          label="비밀번호 확인"
          placeholder="**********"
          size="medium"
          margin="none"
        />
        <TextField
          className="frame-textfield"
          sx={{ width: 274 }}
          color="primary"
          variant="outlined"
          type="text"
          id="in_nick"
          label="닉네임"
          placeholder="롯데리아케찹괴도"
          size="medium"
          margin="none"
        />
        <TextField
          className="component-2-child1"
          sx={{ width: 274 }}
          color="primary"
          variant="outlined"
          type="text"
          id="in_id"
          label="학번"
          placeholder="183701"
          size="medium"
          margin="none"
        />
        <FormControl className="parent" sx={{ width: 128.99996948242188 }} variant="outlined" id="in_colleges">
          <InputLabel color="primary">단과대학</InputLabel>
          <Select color="primary" id="in_colleges" size="medium" label="단과대학">
            {collegesData.map((college) => (
              <MenuItem key={college} value={college}>
                {college}
              </MenuItem>
            ))}
          </Select>
        <FormHelperText />
      </FormControl>

      <FormControl className="group" sx={{ width: 129 }} variant="outlined" id="in_major">
        <InputLabel color="primary">학과</InputLabel>
        <Select color="primary" id="in_major" size="medium" label="학과">
          {majorsData.map((major) => (
            <MenuItem key={major} value={major}>
              {major}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText />
      </FormControl>
      </div>
      <img className="vector-icon" alt="" src="/vector.svg" />
    </div>
  );
};

export default Component1;
