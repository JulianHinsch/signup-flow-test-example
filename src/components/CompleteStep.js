import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CompleteStep() {
    const navigate = useNavigate();

    useEffect(() => {
      navigate('/complete');
    }, [navigate]);

    return <div style={{ padding: '100px' }}>signup complete! 🎉</div>
}

export default CompleteStep;