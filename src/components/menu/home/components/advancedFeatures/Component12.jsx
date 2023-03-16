import eibrary from "../images/advancedFeatures/eibrary.png"

const Component12 = () => {
    return (
        <div className="px-5 md:px-20 py-10 bg-base-200">
            <div className="flex justify-center items-center gap-4 flex-row-reverse flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">eLibrary</h2>
                    {/* <p className="pt-4">Similar to a public library that we are all familiar with. The materials that all the instructors have submitted are visible to anyone who is logged in. The instructor can select the course and add the content. The instructors can import the images, documents, and videos into the eLibrary after uploading them to the drive. This enables students to access all of the LMS system's course resources.</p> */}
                    <p className="pt-4">Provides for managing a well catalogued and searchable digital library of learning resources.</p>
                    <ul className="flex flex-col gap-2 pt-4">
                        {/* <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Add Content & Import</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Create Categories</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Access to All Learners, Instructors</li> */}

                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Supports multiple Content forms </li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Filter based search functionality</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Structured management of Learning resources</li>
                    </ul>
                    {/* <div className="flex flex-row justify-start gap-4 pt-4 flex-wrap md:flex-nowrap">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div> */}
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-5">
                        <img src={eibrary} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component12