import styled from "@emotion/styled"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const CroselBox = () => {

  const CarosuelImages = styled("img")({
    width: "100%",
    height: "275px"
  })
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} swipeable={true}>
        <CarosuelImages src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/ada907138b80019b.jpg?q=50" alt="imamge1" />
        <CarosuelImages src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/c176b22443423a06.jpg?q=50" alt="imamge2" />
        <CarosuelImages src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/f08592fd8235800f.jpg?q=50" alt="imamge3" />
        <CarosuelImages src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/9c06db25774a1ea8.png?q=50" alt="imamge4" />
        <CarosuelImages src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/0af653e5140747b0.jpg?q=50" alt="imamge5" />
      </Carousel>

  )
}
export default CroselBox