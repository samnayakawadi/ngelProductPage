import courseStructure from "../images/advancedFeatures/courseStructure.png"

const Component4 = () => {
    return (
        <div className="px-5 md:px-20 py-10 md:py-0 bg-base-200">
            <div className="flex justify-center items-center gap-4 flex-row-reverse flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Course Structure</h2>
                    <p className="pt-4">Well structured and learner friendly organisation of course content to enable fruitful learning experience.</p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Parent-Child Hierarchy</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Intructor friendly content Organiser</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Supports Multiple Content Types (Images/Videos/Documents)</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Progressive display of content based on user consumption</li>
                        {/* <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Easy User Interface</li> */}
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Track Content Completion Progress</li>
                    </ul>
                    {/* <div className="flex flex-row justify-start gap-4 pt-4 flex-wrap md:flex-nowrap">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div> */}
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0 ">
                    <div className="flex flex-row justify-center items-center md:p-10">
                        <img src={courseStructure} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component4