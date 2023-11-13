import Discover from "../../layout/discover/Discover"
import FindUs from "../../layout/findUs/FindUs"
import Hero from "../../layout/hero/Hero"
import Clients from "../../layout/ourClients/Clients"
import Journey from "../../layout/ourjourney/Journey"
import Testimonials from "../../layout/testimonials/Testimonials"
import Needs from "../../layout/yourNeeds/Needs"
import Footer from "../../layout/footer/Footer"

export const Home = () => {
    return (
        <>
            <Hero />
            <Clients />
            <Discover />
            <Testimonials />
            <Journey />
            <FindUs />
            <Needs />
            <Footer />
        </>
    )
}