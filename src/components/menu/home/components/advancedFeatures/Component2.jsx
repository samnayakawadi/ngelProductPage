import multilingual from "../images/advancedFeatures/multilingual.png"

const Component2 = () => {
    return (
        <div className="px-5 md:px-20 py-10 md:py-0 bg-base-200">
            <div className="flex justify-center items-center gap-10 flex-row-reverse flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Multilingual Application</h2>
                    <p className="pt-4">Truly multilingual with support to all constitutionally recognised Indian languages, besides English. </p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Multiple Languages</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Supports Adding New Language</li>
                    </ul>
                    {/* <div className="flex flex-row justify-start gap-4 pt-4 flex-wrap md:flex-nowrap">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div> */}
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0 ">
                    <div className="flex flex-row justify-center items-center md:p-10">
                        <img  src={multilingual} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component2