import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "@/app/(ui)/shareComponent/CarouselDotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "@/app/(ui)/shareComponent/CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export const ProjectPictures = () => {
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div>
      <div className="text-lg font-semibold pb-4"> TEST</div>
      <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="max-w-[48rem] mx-auto my-auto ">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
          {slides.map((index) => (
            <div className="grow-0 shrink-0 basis-[70%] min-w-0 pl-4" key={index}>
              <div className="rounded-3xl text-[4rem] font-medium flex items-center justify-center h-[19rem] select-none border-2">
                <Image width={1920} height={1080} src={`/images/TEST_JPG.jpg`} alt="test image" className="w-full object-cover bg-no-repeat" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center md:grid md:grid-cols-[auto_1fr] md:justify-between md:gap-4 md:mt-5">
        <div className="grid grid-cols-2 gap-[0.6rem] items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex flex-wrap justify-end items-center mr-[-0.6rem]">
          {scrollSnaps.map((_, index) => (
            <DotButton key={index} onClick={() => onDotButtonClick(index)} className={"appearance-none bg-transparent touch-manipulation cursor-pointer border-0 p-0 m-0 w-[2.6rem] h-[2.6rem] flex items-center justify-center rounded-full relative after:content-[''] after:flex after:items-center after:rounded-full after:w-[1.4rem] after:h-[1.4rem] after:border".concat(index === selectedIndex ? " after:border-primary-500 after:shadow-sm" : "")} />
          ))}
        </div>
      </div>
    </section>
  );
};
