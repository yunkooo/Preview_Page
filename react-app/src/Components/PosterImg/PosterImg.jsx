


export default function PosterImg({img}) {
    console.log(img)
    const imgSrc = `img/PosterImg/${img}`
    // react-app/src/img/posterImg/poster_mbti.png
    // react-app/src/Components/PosterImg/PosterImg.jsx
    console.log(imgSrc)
    return (
        <>
            <img tabIndex={0} src={imgSrc}/>
        </>
    )
}
