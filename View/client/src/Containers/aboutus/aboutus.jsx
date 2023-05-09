
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import aboutImage from '../../assets/aboutus.jpg';
import { Container } from '../../Themes/globalComponents.styled';
import { AboutContainer, AboutDetail, AboutImage } from './aboutus.styled';


const aboutVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 }
};
const about2Variant = {
  visible: { opacity: 1,x:0, transition: { duration: 0.7 } },
  hidden: { opacity: 0,x:200 }
};




const Aboutus = () => {
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
    <>
      <Container>
        <AboutContainer>
          <AboutImage
            ref={ref}
            variants={aboutVariant}
            initial="hidden"
            animate={control}
          >
            <img src={aboutImage} alt="" />
          </AboutImage>
          <AboutDetail
            ref={ref}
            variants={about2Variant}
            initial="hidden"
            animate={control}
          >
            <h2>Welcome to our </h2>
            <h2>cozy shop</h2>
            <p>
              Our shop is a leading edge fashion specialist, providing style
              conscious customers with innovative dresses to suit every
              occasion. We pride ourselves on our unique product range — created
              by our in-house design team ond global brand partnerships. all of
              which are recognisable by their individuality,design and quality.
            </p>
            <h3> We hope to see you all soon</h3>
          </AboutDetail>
        </AboutContainer>
      </Container>
    </>
  );

}
export default Aboutus 
