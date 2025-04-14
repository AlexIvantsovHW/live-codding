import { memo } from "react";
type Props = {
  slide: number;
  setSlide: React.Dispatch<React.SetStateAction<number>>;
};
const SliderWidget = (props: Props) => {
  console.log("Slider widget");
  const { slide, setSlide } = props;
  return (
    <div>
      <h1>Slider Widget</h1>
      <p>Slide number: {slide}</p>
      <div className="flex items-center justify-center gap-[10px]">
        <button onClick={() => setSlide(slide - 1)}>Previous slide</button>
        <button onClick={() => setSlide(slide + 1)}>Next slide</button>
      </div>
    </div>
  );
};
export default memo(SliderWidget);
