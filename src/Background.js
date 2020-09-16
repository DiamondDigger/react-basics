import React, {useContext, useState} from "react";

const styles = {
    img: {
        width: '600px',
        height: '300px',
        margin: 'auto',
        display: 'block'
    }
}

function Background() {

    let [day, setDay] = useState(true)

    const nightImgLink = 'https://img.freepik.com/free-vector/dark-starry-night-landscape-with-stars-moon-vector_136277-126.jpg?size=626&ext=jpg'
    const dayImgLink = 'https://image.freepik.com/free-vector/sunset-sunrise-ocean-nature-landscape_33099-2244.jpg'
    let link

    return (
        <div className='backImg'>
            <img
                onClick={() => setDay(
                    day = !day
                )}
                src={day ? link = dayImgLink : link = nightImgLink}
                style={styles.img}
                alt="should be an image here"/>
        </div>
    );
}

export default Background