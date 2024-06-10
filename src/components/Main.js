import { CCarousel,CCarouselItem,CImage  } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'

import ImgMain1 from '../assets/images/Main1.png'
import ImgMain2 from '../assets/images/Main2.png'
import ImgMain3 from '../assets/images/Main3.png'

function Main() { 
  return (
<CCarousel controls>
  <CCarouselItem>
    <CImage className="d-block h-20 w-100" src={ImgMain1} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block h-20 w-100" src={ImgMain2} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block h-20 w-100" src={ImgMain3} alt="slide 3" />
  </CCarouselItem>
</CCarousel>
  );
}

export default Main;