import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import image2 from "../../assets/home.jpg";
import { Container } from "../../Themes/globalComponents.styled";
import {
  Containers,
  ExtraInfo, Heading,
  Headline, Image4, StyledHomeButton
} from "./home.styled";

const headlineVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, x: -200 },
};
const extraInfoVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, x: 200 },
};


const Home = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <Container>
      <Containers>
        <Headline
          ref={ref}
          variants={headlineVariant}
          initial="hidden"
          animate={control}
        >
          <Heading>
            Get the look
            <br />
            you want
            <br />
            faster and easier
            <br/>
            with our fashion
          </Heading>
          <StyledHomeButton>Shop Now</StyledHomeButton>
        </Headline>

        <ExtraInfo
          ref={ref}
          variants={extraInfoVariant}
          initial="hidden"
          animate={control}
        >
          
      <Image4 src={image2} alt="" />
        </ExtraInfo>
      </Containers>
    </Container>
  );
};
export default Home;
