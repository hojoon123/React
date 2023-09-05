import './App.css';
import { useState } from 'react';

function Modal(props){
  // <></>하면 이거 안에 div 여러개 넣기 가능
  return(
    <div className='modal'style={{background: props.color}}>
        <h4>{props.tmp[props.title]}</h4>
        <p>날짜</p>
        <p>상세 내용</p>
        <button>글수정</button>
      </div>
  )
}


function App() {
  let postTime = '2월 17일 발행'
  // post는 오른쪽에 지정한 변수
  // b는 state 변경 도와주는 함수
  // useState() -> 사용하면 [a,b] 형태로 들어옴
  // () => {} 이거 람다임
  let [post, postChange] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬 독학']);
  let [like, likeChange] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [in_value, set_value] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      
      {
        post.map(function(e, i){  
          return(
            <div className="list">
              <h4 onClick={()=>{ 
                setModal(!modal); setTitle(i) }}>{post[i]}
              <span onClick={(e) => { 
                //stopPropagation 이벤트 버블링 방지
                e.stopPropagation(); let copyLike = [...like];
                copyLike[i] = copyLike[i] + 1;
                likeChange(copyLike)}}>👍</span> {like[i]}
              </h4>
              <p>{postTime}</p>
              <button onClick={()=>{
                let copyLike = [...like];
                // i번째 인덱스 값 0 유지 1 삭제.
                copyLike.splice(i, 1);
                likeChange(copyLike);
                let copyPost = [...post];
                copyPost.splice(i, 1);
                postChange(copyPost);
              }}>삭제</button>
            </div>
          )
        })  
      }

      <div className="addPost">
        <input 
          style={{ marginRight: '20px' }} 
          value={in_value}
          onChange={ (e)=>{
          set_value(e.target.value);
        } }></input>
        <button onClick={ ()=>{
          // trim 공백제거
          if (in_value.trim() === '') {
            return;
          }
          // [...] 리스트 벗겼다가 다시 입히기
          let copyLike = [...like];
          copyLike.unshift(0);
          likeChange(copyLike);

          let copyPost = [...post];
          copyPost.unshift(in_value);
          postChange(copyPost);

          set_value('');
        }}>추가</button>
      </div>

      { 
      // 컴포넌트 사용
        modal === true ? <Modal tmp={post} tmpChange = {postChange} title={title}></Modal> : null
      }

    </div>

  );
}


export default App;
