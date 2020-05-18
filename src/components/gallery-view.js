import React from 'react';

const GalleryView = (props) => {

    const pictureDisplay = props.pictures.map((picture, index) =>{
       <div class="col-lg-6">
           {/* Abandoned for now because having this component
               means having to pull urls everytime and it doesn't
               make it worth it. Will try to implement a better
               solution in the future */}
      </div>
    }) 

return (
    <div></div>
)


}

export default GalleryView;