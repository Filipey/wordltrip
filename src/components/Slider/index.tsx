import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import { SliderBox } from './SliderBox'

export function Slider() {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}
      h={['250px', '450px']}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <SliderBox
            imgPath="europe"
            name="Europa"
            description="O continente mais antigo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox imgPath="europe" name="Ásia" description="Super idol" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox
            imgPath="europe"
            name="África"
            description="Hakuna matata"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}
