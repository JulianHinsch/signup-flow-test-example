import { useEffect } from "react";
import { useSignupDispatch } from "../hooks";
import { useNavigate } from "react-router-dom";

function LastNameStep() {
  const dispatch = useSignupDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/last-name');
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    dispatch({ type: "lastName", payload: { lastName: e.target[0].value } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
        padding: "100px",
      }}
    >
      <label>last name</label>
      <input type="text"></input>
      <button type="submit">next</button>
    </form>
  );
}

export default LastNameStep;
