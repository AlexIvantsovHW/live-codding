import { memo } from "react";
type Props = {
  slide: number;
};
const SliderWidget = (props: Props) => {
  console.log("Slider widget");
  const { slide } = props;
  return (
    <div>
      <h1>Slider Widget</h1>
      <p>Slide number: {slide}</p>
    </div>
  );
};
export default memo(SliderWidget);
