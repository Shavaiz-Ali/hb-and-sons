import Discover from "../../layout/discover/Discover"
import Hero from "../../layout/hero/Hero"
import Clients from "../../layout/ourClients/Clients"
import Testimonials from "../../layout/testimonials/Testimonials"

export const Home = () => {
    return (
        <>
            <Hero />
            <Clients />
            <Discover />
            <Testimonials />
        </>
    )
}