export default function PosterText({제목, 개요, 평점, 개봉, 출연} ) {
  return (
    <>
        <h3 tabIndex={0}>{제목}</h3>
        <p tabIndex={0}><strong>개요</strong>{개요}</p>
        <p tabIndex={0}><strong>평점</strong>{평점}</p>
        <p tabIndex={0}><strong>개봉</strong>{개봉}</p>
        <p tabIndex={0}><strong>출연</strong>{출연}</p>
    </>
  )
}
