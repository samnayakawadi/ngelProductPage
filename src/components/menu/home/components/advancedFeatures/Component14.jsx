import administrationAnalytics from "../images/advancedFeatures/administrationAnalytics.png"

const Component14 = () => {
    return (
        <div className="px-5 md:px-20 py-14">
            <div className="flex justify-center items-center gap-4 flex-row flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Administration & Analytics</h2>
                    {/* <p className="pt-4">As we already know, the administrator is in charge of confirming and approving the content that the teachers have requested. The learner experiences a safe learning environment as a result. Also, by creating numerous reports using the admin dashboard, the admin can examine the learners.</p> */}
                    <p className="pt-4">Features to support efficient administration of the platform with data driven analytics.</p>
                    <ul className="flex flex-col gap-2 pt-4">
                        {/* <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Approval System</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Complete Control</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Analysis</li> */}

                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> End-to-end platform administration</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Intuitive dashboards</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Elaborate Report generation module</li>
                    </ul>
                    {/* <div className="flex flex-row justify-start gap-4 pt-4 flex-wrap md:flex-nowrap">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div> */}
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-5">
                        <img src={administrationAnalytics} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component14