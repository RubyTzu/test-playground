import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "@/app/(ui)/shareComponent/CarouselDotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "@/app/(ui)/shareComponent/CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ProjectDetails } from "@/app/(data)/types";
import { Fragment } from "react";

export const ProjectPictures = ({ projectData, title }: { projectData: ProjectDetails; title: string }) => {
  const Imgs = title === "- Brainstorming" ? projectData.brainStormingImg : title === "- Making" ? projectData.makingImg : projectData.outComeImg;
  const description = title === "- Brainstorming" ? projectData.brainStormingDescription : title === "- Making" ? projectData.makingDescription : projectData.outComeDescription;
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = Imgs.length;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div>
      <div className="text-lg font-semibold pb-4">{title}</div>
      <div>
        {description?.split("\n").map((line: string, index: number) => {
          return (
            <Fragment key={index}>
              {line}
              <>
                &nbsp;
                <br />
              </>
            </Fragment>
          );
        })}
      </div>
      <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} imgs={Imgs} />
      </div>
    </div>
  );
};

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  imgs?: string[];
};

export const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, imgs } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="max-w-[1580px] mx-auto my-auto mt-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {slides.length !== 0 && slides.length > 1
            ? imgs?.map((img: string, index) => (
                <div className="w-full grow md:grow-0 shrink-0 basis-[90%] pl-2 md:min-w-0 md:pl-8 md:basis-[70%]" key={index}>
                  <div className="text-[4rem] font-medium flex items-center justify-center select-none border-2">
                    <Image width={1920} height={1080} src={img} alt="test image" className="w-full object-cover h-[19rem] bg-no-repeat md:h-fit" />
                  </div>
                </div>
              ))
            : imgs?.map((img: string, index) => (
                <div key={index} className="w-full flex items-center justify-center">
                  <Image width={1920} height={1080} src={img} alt="test image" className="md:w-[80%] border-2 object-cover h-[19rem] bg-no-repeat md:h-fit" />
                </div>
              ))}
        </div>
      </div>
      {slides.length !== 0 && slides.length > 1 ? (
        <div className="mt-10 flex flex-col items-center md:grid md:grid-cols-[auto_1fr] md:justify-between md:gap-4 md:mt-5">
          <div className="hidden grid-cols-2 gap-[0.6rem] items-center md:grid">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

          <div className="flex flex-wrap justify-end items-center mr-[-0.6rem]">
            {scrollSnaps.map((_, index) => (
              <DotButton key={index} onClick={() => onDotButtonClick(index)} className={"appearance-none bg-transparent touch-manipulation cursor-pointer border-0 p-0 m-0 w-[2rem] h-[2rem] flex items-center justify-center rounded-full relative after:content-[''] after:flex after:items-center after:rounded-full after:w-[1rem] after:h-[1rem] after:border after:border-primary-300 ".concat(index === selectedIndex ? "after:shadow-sm after:border-2 after:bg-primary-300 after:outline after:outline-primary-500" : "")} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
};
