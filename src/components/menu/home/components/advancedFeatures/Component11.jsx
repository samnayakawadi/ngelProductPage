import assessmentDelivery from "../images/advancedFeatures/assessmentDelivery.png"

const Component11 = () => {
    return (
        <div className="px-5 md:px-20 py-14">
            <div className="flex justify-center items-center gap-4 flex-row flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Quiz Delivery</h2>
                    {/* <p className="pt-4">The learner can give the exam in accordance with the guidelines and requirements specified by the instructor by using the delivery tool.
                        This system allows the learner to choose the quizzes they want to take, and it then checks the date, time, and permitted attempts. The learner can then begin the new exam after this step. The learner will then be led to the exam delivery. There are several sections here. And after that, there is a question-and-answer area. Via the navigation panel, the learner can access any question or section. The moment the allotted time has expired, the quiz will be automatically submitted. if it's a practice quiz,  The student will then see more options, such as feedback.
                    </p> */}
                    <p className="pt-4">
                        An elaborate quiz delivery module streamlines the assessment process to offer a context-aware, learner friendly, secure and transparent evaluation.
                    </p>
                    <ul className="flex flex-col gap-2 pt-4">
                        {/* <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Assigned Quizzes</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Exam Portal</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Section & Question Selection</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Question Feedback</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Quiz Score</li> */}

                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Serves multiple evaluation processes </li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Usable as an online Exam Portal</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Intuitive and engaging quiz presentation</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Elaborate analytics to understand learner performance</li>
                        
                    </ul>
                    {/* <div className="flex flex-row justify-start gap-4 pt-4 flex-wrap md:flex-nowrap">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div> */}
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-5">
                        <img src={assessmentDelivery} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component11