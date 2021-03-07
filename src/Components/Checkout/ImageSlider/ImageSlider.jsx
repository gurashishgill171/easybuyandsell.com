import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = ({images}) => {

    return (
        <div>
            <SimpleImageSlider 
                width={'100%'}
                height={'100%'}
                images={images}
                showNavs
                showBullets
            />
        </div>
    )
}

export default ImageSlider
