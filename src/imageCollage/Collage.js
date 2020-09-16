import React, {useState} from "react";

const styles = {
    img: {
        display: 'block',
        width: '500px',
        height: '250px',
        margin: 'auto'
    }
}

function Collage() {
    const images = [
        './images/img1-1.jpg',
        './images/img1-2.jpg',
        './images/img2-1.jpg',
        './images/img2-2.jpg',
        './images/img3-1.jpg',
        './images/img3-2.jpg',
        './images/img4-1.jpg',
        './images/img4-2.jpg',
    ]
    let [index, setIndex] = useState(0)

    return (
        <div className='collage'>
            <img style={styles.img} src={require('./images/img3-2.jpg')} alt="your image could be there =)"/>
            {console.log(images[index])}
        </div>
    )
}

export default Collage