import './css/Main.css'
import {} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const data = [
  { id: "1", image: '../assets/images/Main1.png' },
  { id: "2", image: '../assets/images/Main2.png' },
  { id: "3", image: '../assets/images/Main3.png' },
  { id: "4", image: '../assets/images/Main4.png' },

]
function Main() {
  return (
    <Swiper
      slidesPerview={1}
      pagination ={{clickable:true}}
      navigation
      >
      {data.map ( (item) => (
        <SwiperSlide key={item.id}>
          <img src={item.image} 
          alt="Slider"
          className="slide-item"/>

        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Main;