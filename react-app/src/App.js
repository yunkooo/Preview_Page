import Poster from "./Components/Poster/Poster";
import { useContext } from "react";
import { data } from './data'



function App() {
  console.log(data._currentValue[0])
  return (
    <li>
      {useContext(data).map(({id, 제목, 개요, 이미지, 개봉, 출연, 평점}) => <Poster key={id} 제목={제목} 개요={개요} 이미지={이미지} 개봉={개봉} 출연={출연}/>)}
    </li>
  );
}
export default App;
