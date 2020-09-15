import React, {useContext} from "react";
import Context from "./context";

const styles = {
    img: {
        width: 'auto',
        margin: 'auto',
        display: 'block'
    }
}

function Background(){

    const changeBackImg = useContext(Context)
    const nightImgLink = 'https://img.freepik.com/free-vector/dark-starry-night-landscape-with-stars-moon-vector_136277-126.jpg?size=626&ext=jpg'
    const dayImgLink = 'https://image.freepik.com/free-vector/sunset-sunrise-ocean-nature-landscape_33099-2244.jpg'

    return (
        <div className='backImg'>
            <img src={nightImgLink}
                 style={styles.img}
                 alt="should be an image here"
            onClick={console.log.bind(null,'you have clicked an image')}/>
        </div>
    );
}

export default Background