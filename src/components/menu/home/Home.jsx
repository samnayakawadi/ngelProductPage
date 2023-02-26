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
            </div>
        </div>
    )
}

export default Home