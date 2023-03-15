import query from "../images/advancedFeatures/query.png"

const Component8 = () => {
    return (
        <div className="px-5 md:px-20 py-10 md:py-0 bg-base-200">
            <div className="flex justify-center items-center gap-4 flex-row-reverse flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Ask the Instructor</h2>
                    <p className="pt-4">Enables the learners to post questions to the course instructor on a one-to-one mode.</p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Query management module</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Personalised communication between Instructor & Learner</li>
                    </ul>
                    {/* <div className="flex flex-row justify-start gap-4 pt-4 flex-wrap md:flex-nowrap">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div> */}
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-10">
                        <img src={query} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component8