import React from "react";

const styles = {
    img: {
        width: 'auto',
        margin: 'auto',
        display: 'block'
    }
}

function Background(){

    const nightImgLink = 'https://img.freepik.com/free-vector/dark-starry-night-landscape-with-stars-moon-vector_136277-126.jpg?size=626&ext=jpg'
    const dayImgLink = 'https://image.freepik.com/free-vector/sunset-sunrise-ocean-nature-landscape_33099-2244.jpg'

    return (
        <div className='backImg'>
            <img src={dayImgLink}
                 style={styles.img}
                 alt="should be an image here"/>
        </div>
    )
}

export default Background