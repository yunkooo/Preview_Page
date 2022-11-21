import PosterImg from "../PosterImg/PosterImg"
import PosterText from "../PosterText/PosterText.jsx"
import PosterButton from "../PosterButton/PosterButton"


export default function Poster ({제목, 개요, 이미지, 개봉, 출연, 평점}) {    
    return(
        <>
            <PosterImg img={이미지} />
            <PosterText 제목={제목} 개요={개요} 평점={평점} 개봉={개봉} 출연={출연} />
            <div>
                <PosterButton 내용="예매하기"/>
                <PosterButton 내용="예고편"/>
            </div>
        </>
    )

}

