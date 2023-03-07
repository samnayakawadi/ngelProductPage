import courseStructure from "../images/advancedFeatures/courseStructure.png"

const Component4 = () => {
    return (
        <div className="px-5 md:px-20 py-14 bg-base-200">
            <div className="flex justify-center items-center gap-4 flex-row-reverse flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Course Structure</h2>
                    <p className="pt-4">The parent-child hierarchy of the content can be used to organize the course material. Since there are several chapters to memorize, this is incredibly helpful. Also, if a learner hasn't finished the preceding material, the instructor can restrict how much of it is shown to them.
                        Similarly to this, it aids learners in fully consuming the course material offered by the instructor</p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Parent-Child Hierarchy</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Easy to Add The Content</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Multiple Content Types (Images/Videos/Documents)</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Restrict Content Based on User Consumption</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Easy User Interface</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> See Completion Progress</li>
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