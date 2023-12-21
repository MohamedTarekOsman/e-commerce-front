import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import LeftButton from './LeftButton'
import RightButton from './RightButton'
import { useParams } from 'react-router-dom'
import ViewProductDetailsHook from '../../Hook/products/view-product-details-hook'
export default function ProductGallery() {
    const {id}=useParams()
    const [images]=ViewProductDetailsHook(id);
    
  return (
    <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2">
        <ImageGallery
            items={images}
            showFullscreenButton={false}
            isRTL={true}
            showPlayButton={false}
            showThumbnails={false}
            renderRightNav={RightButton}
            renderLeftNav={LeftButton}
        />
    </div>
  )
}
