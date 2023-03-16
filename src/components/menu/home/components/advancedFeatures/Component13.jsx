import multipleUsers from "../images/advancedFeatures/multipleUsers.png"

const Component13 = () => {
    return (
        <div className="px-5 md:px-20 py-14">
            <div className="flex justify-center items-center gap-4 flex-row flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Multiple Roles</h2>
                    {/* <p className="pt-4">
                        Our learning platform has three user roles. The learner, instructor, and admin.
                    </p> */}
                    <p className="pt-4">
                        Our learning platform has primarily, three user roles - Learner, Instructor and Admin.
                    </p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Instructor - Develops, oversees, and submits the content to the admin for approval</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Learner - Consumes the content on a self-paced manner</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Admin - Overall administration of the platform</li>
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