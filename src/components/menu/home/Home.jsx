import AdvancedFeatures from "./components/AdvancedFeatures"
import CustomerCarousel from "./components/CustomerCarousel"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Organizations from "./components/Organizations"
import Stats from "./components/Stats"
import TrustedBy from "./components/TrustedBy"

const Home = () => {
    return (
        <div>
            <Hero />
            <div className="px-32">
                <div className="pt-20">
                    <TrustedBy />
                </div>
                <div className="pt-20">
                    <Organizations />
                </div>
                <div className="pt-20">
                    <Features />
                </div>
                <div className="pt-20">
                    <AdvancedFeatures />
                </div>
            </div>
            <div className="pt-14">
                <Stats />
            </div>
            <div className="mb-16">
                <CustomerCarousel />
            </div>
        </div>
    )
}

export default Home