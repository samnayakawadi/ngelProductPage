import multipleUsers from "../images/advancedFeatures/multipleUsers.png"

const Component13 = () => {
    return (
        <div className="px-5 md:px-20 py-14">
            <div className="flex justify-center items-center gap-4 flex-row flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Multiple Roles</h2>
                    <p className="pt-4">
                        Our learning platform has three responsibilities. The learner, instructor, and admin. The instructor develops, oversees, and submits the content to the admin for approval. It is either approved or denied by the admin. The learner can then consume the content as needed. The instructor prepares the quizzes, assigns them to the learners, and the learners take the quizzes on their own in the integrated assessment modules.
                    </p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Instructor</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Learner</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Admin</li>
                    </ul>
                    {/* <div className="flex flex-row justify-start gap-4 pt-4 flex-wrap md:flex-nowrap">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div> */}
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-5">
                        <img src={multipleUsers} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component13