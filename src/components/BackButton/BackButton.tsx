import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  
  return (
    <button className='cta' onClick={(e)=>{
      e.preventDefault();
      navigate(-1);
  }}>&larr; Back</button>
  )
}

export default BackButton