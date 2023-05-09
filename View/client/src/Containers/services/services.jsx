import { useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import premium from '../../assets/premium1.png'
import delivery from '../../assets/delivery-truck.png'
import return1 from '../../assets/return1.png'
import { Container } from '../../Themes/globalComponents.styled'
import { Service, ServiceCard, ServiceCards, ServiceHeadline } from './services.styled'

const serviceVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

const Services = () => {
    const serviceList=[
        {
            name:'Premium Quality',
            image: premium,
            details:'Everything in our shop is 100% premium'
        },
        {
            name:'Home Delivery',
            image:delivery,
            details:'we ensure quick home delivery'
        },
        {
            name:'Free Return',
            image:return1,
            details:'We can ensure free return'
        }
    ]
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
        <Service>
        <ServiceHeadline>Our Services
        </ServiceHeadline>
        <ServiceCards>
            {
               serviceList.map((e,i)=>(
                  <ServiceCard key={i}
                  ref={ref}
                  variants={serviceVariant}
                  initial="hidden"
                  animate={control}>
                      <img src={e.image}  alt=''/>
                      <h3>{e.name}</h3>
                      <p>{e.details}</p> 
                  </ServiceCard>
               )) 
                 
                  
              
            }
        </ServiceCards>
        


        </Service>

    </Container>
   
    
  )
}
export default Services
