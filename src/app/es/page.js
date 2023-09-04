import react from 'react'
import HomeSeccion from '../seccionsEspañol/home/homeEs'
import AboutUs from '../seccionsEspañol/aboutUs/aboutUsEs'
import FruitsSeccion from '../seccionsEspañol/fruits/fruits'
import PackHouse from '../seccions/packHouse/packHouse'
import Calendar from '../seccionsEspañol/calendar/calenadar'
import Compromise from '../seccionsEspañol/compromise/compromise'
import OurFruits from '../seccions/OurFruits/OurFruits'
import OurPeople from '../seccionsEspañol/OurPeople/OurPeople'
import Testimonials from '../seccionsEspañol/Testimonials/Testimonials'
import WhyPachamamaFarms from '../seccionsEspañol/WhyPachamamaFarms/WhyPachamamaFarms'
import FloatingIcons from '@/components/FloatingIcons/FloatingIcons'
import ContactUs from '../seccionsEspañol/ContactUs/ContactUs'


const Es = () => {

    return(
        <main>
            <HomeSeccion></HomeSeccion>
            <AboutUs></AboutUs>
            <FruitsSeccion></FruitsSeccion>
            <PackHouse text={'Empacadora'}/>
            <Calendar></Calendar>
            <Compromise></Compromise>
            <OurFruits text={'Mangos Kent'} ></OurFruits>
            <OurPeople></OurPeople>
            <Testimonials></Testimonials>
            <WhyPachamamaFarms></WhyPachamamaFarms> 
            <ContactUs/>
            <FloatingIcons></FloatingIcons>
        </main>
    )
}



export default Es