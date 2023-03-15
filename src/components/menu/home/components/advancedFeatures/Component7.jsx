import feedback from "../images/advancedFeatures/feedback.png"

const Component7 = () => {
    return (
        <div className="px-5 md:px-20 py-14 md:py-0">
            <div className="flex justify-center items-center gap-4 flex-row flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Course Feedback & Review</h2>
                    <p className="pt-4">Faciliates instructors to seek course feedback and learners to register their feedback. </p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Standardised Feedback templates</li>
                        {/* <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Add Different Types of Questions (SCQ/ MCQ/ TF)</li> */}
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Moderated view of learner feedback</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Extensive Feedback Analytics</li>
                    </ul>
                    {/* <div className="flex flex-row justify-start gap-4 pt-4 flex-wrap md:flex-nowrap">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div> */}
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0 ">
                    <div className="flex flex-row justify-center items-center md:p-20">
                        <img src={feedback} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component7