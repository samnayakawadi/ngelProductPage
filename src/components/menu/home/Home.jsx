import AdvancedFeatures from "./components/AdvancedFeatures"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Organizations from "./components/Organizations"
import TrustedBy from "./components/TrustedBy"

const Home = () => {
    return (
        <div>
            <Hero />
            <div className="px-20">
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
                <div className="pt-20">

                </div>
            </div>
        </div>
    )
}

export default Home