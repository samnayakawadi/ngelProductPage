import assessmentAuthoring from "../images/advancedFeatures/assessmentAuthoring.png"

const Component10 = () => {
    return (
        <div className="px-5 md:px-20 py-14 bg-base-200">
            <div className="flex justify-center items-center gap-4 flex-row-reverse flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Quiz Creation</h2>
                    <p className="pt-4">The assessment module has been separately built by us. It is built into our LMS by default. This module has the same roles as LMS. The quiz can be created by the instructor, who can then add the questions, assign the quiz to users retrieved from the LMS, and allow users to take the test. There are numerous features offered.</p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Question Editor</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Quiz & Section Editor</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Assign Editor</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Import Editor</li>
                    </ul>
                    {/* <div className="flex flex-row justify-start gap-4 pt-4 flex-wrap md:flex-nowrap">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div> */}
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-5">
                        <img src={assessmentAuthoring} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component10