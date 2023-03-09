import discussion from "../images/advancedFeatures/discussion.png"

const Component6 = () => {
    return (
        <div className="px-5 md:px-20 py-10 md:py-0 bg-base-200">
            <div className="flex justify-center items-center gap-4 flex-row-reverse flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Discussion</h2>
                    <p className="pt-4">The discussion module facilitates communication between learners. Any comments pertaining to the course may be included here. All of the conversations and interactions can be seen by the instructor as well. This improves learner communication.</p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Better Communication</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Discussion Title</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Discussion Description</li>
                    </ul>
                    {/* <div className="flex flex-row justify-start gap-4 pt-4 flex-wrap md:flex-nowrap">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div> */}
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0 ">
                    <div className="flex flex-row justify-center items-center md:p-10">
                        <img src={discussion} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component6