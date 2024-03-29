import React from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get("id");
  console.log("id : ", id)
  const mode = searchParams.get("mode");
  console.log("mode : ", mode)
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 Edit Page 입니다.</p>
      <button onClick={() => setSearchParams({ who: "Kyoo" })}>QS 바꾸기</button>
      <button onClick={() => {
        navigate("/home")
      }}>HOME으로 가기</button>
    </div>
  );
};

export default Edit;
