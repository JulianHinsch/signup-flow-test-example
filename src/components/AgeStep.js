import { useEffect } from "react";
import { useSignupDispatch } from "../hooks"
import { useNavigate } from "react-router-dom";

function AgeStep() {
    const dispatch = useSignupDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      navigate('/age');
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'age', payload: { age: e.target[0].value } })
      };

    return <form onSubmit={handleSubmit} style={{ width: '200px', display: 'flex', flexDirection: 'column', rowGap: '20px', padding: '100px' }}>
        <label>age</label>
        <input type="text"></input>
        <button type="submit">next</button>
    </form>
}

export default AgeStep;
