import Component1 from "./advancedFeatures/Component1"
import Component2 from "./advancedFeatures/Component2"
import Component3 from "./advancedFeatures/Component3"
import Component4 from "./advancedFeatures/Component4"
import Component5 from "./advancedFeatures/Component5"

const AdvancedFeatures = () => {
    return (
        <div>
            <div>
                <div className="px-44">
                    <div className="text-3xl text-center">Why Choose <span className="font-bold">YouTestMe?</span></div>
                    <div className="pt-2 text-center">
                        A flexible, one-stop solution for all types of online knowledge assessments.
                    </div>
                </div>
                <div>
                    <Component1 />
                    <Component2 />
                    <Component3 />
                    <Component4 />
                    <Component5 />
                </div>
            </div>
        </div>
    )
}

export default AdvancedFeatures