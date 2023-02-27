import AdvancedFeatures from "./components/AdvancedFeatures"
import CustomerCarousel from "./components/CustomerCarousel"
import Features from "./components/Features"
import GetInTouch from "./components/GetInTouch"
import Hero from "./components/Hero"
import Organizations from "./components/Organizations"
import Stats from "./components/Stats"
import TrustedBy from "./components/TrustedBy"

const Home = () => {
    return (
        <div>
            <Hero />
            {/* <div className="pt-14"> */}
            <Stats />
            {/* </div> */}
            <div className="px-32">
                <div className="pt-20" id="organizations">
                    <Organizations />
                </div>
                <div className="pt-20" id="highlights">
                    <Features />
                </div>
                <div className="pt-20" id="features">
                    <AdvancedFeatures />
                </div>
                <div className="pt-20" id="clients">
                    <TrustedBy />
                </div>
            </div>
            <div className="mt-14 mb-16">
                <CustomerCarousel />
            </div>
            <div className="px-32">
                <GetInTouch />
            </div>
        </div>
    )
}

export default Home