"use client";
import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, titileVariants } from "@/utils/animation";
export default function CatalogSwiperSection() {
  return (
    <div className="py-8 lg:py-28">
      <div className="container grid pb-8 lg:grid-cols-1">
        {" "}
        <div className="text-left">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titileVariants}
            className="py-4 text-4xl font-medium lg:text-6xl lg:py-0"
          >
            Modern Classic
          </motion.h1>{" "}
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="pb-6 text-xl font-bold tracking-wider mt-5"
          >
            LUXURY DECOR TO CREATE COMFORT IN OUR HOME
          </motion.h2>
        </div>
        <div className="grid grid-cols-2 text-gray-500 gap-x-8">
          <p>
            With our passion for design and decor, we have created a collection
            of furniture and accessories that will help you create a comfortable
            and stylish home. With our passion for design and decor, we have
            created a collection of furniture and accessories that will help you
            create a comfortable and stylish home.
          </p>
          <p>
            With our passion for design and decor, we have created a collection
            of furniture and accessories that will help you create a comfortable
            and stylish home. With our passion for design and decor, we have
            created a collection of furniture and accessories that will help you
            create a comfortable and stylish home.
          </p>
        </div>
        <a href="/gallery">
          <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            View Gallery <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </a>
      </div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            // slidesPerGroup: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            // slidesPerGroup: 3,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 4,
            // slidesPerGroup: 4,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src="/swiper1.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/swiper2.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/swiper3.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/swiper4.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/swiper5.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
