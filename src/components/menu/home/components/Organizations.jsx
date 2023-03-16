import government from "./images/organizations/government.png"
import corporate from "./images/organizations/corporate.jpg"
import school from "./images/organizations/education.jpg"

const Organizations = () => {
    return (
        <div className="px-0 md:px-14">
            <div className="px-0 md:px-44 pb-20">
                <div className="text-3xl text-center">Designed for <span className="font-bold">Government Institutions, Defence Organizations, Corporates</span> and <span className="font-bold">Educational Institutions</span></div>
                <div className="pt-2 text-center">
                    Our solutions are developed using superior enterprise technologies to suit a wide range of target users
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                <div className="card bg-base-100 shadow-xl h-full">
                    <figure className="h-60"><img src={government} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Government</h2>
                        <p className="pt-4">Meghsikshak is a versatile tool that serves multiple needs of delivering online education for skill upgradation, capacity building, training, campaigns, credential programs, knowledge enhancement, etc. </p>
                        <ul className="flex flex-col gap-2 pt-4">
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Complete application control</li>
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Seamless Content Distribution </li>
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Secure and Scalable </li>
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Multilingual support</li>
                            {/* <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Complete Control</li> */}
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Easy to Manage</li>
                        </ul>
                        {/* <div className="card-actions justify-end pt-4">
                            <button className="btn btn-primary w-full">Learn More</button>
                        </div> */}
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl h-full">
                    <figure className="h-60"><img src={corporate} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Corporates</h2>
                        <p className="pt-4">Meghsikshak comes in handy to Corporates to offer job-based skills, knowledge management, skill evaluation leading to promotion, etc.</p>
                        <ul className="flex flex-col gap-2 pt-4">
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Cloud-enabled </li>
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Easy Integration and Customization</li>
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Custom branding</li>
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Intuitive User interface</li>
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Compliance to Standards</li>
                        </ul>
                        {/* <div className="card-actions justify-end pt-4">
                            <button className="btn btn-primary w-full">Learn More</button>
                        </div> */}
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl h-full">
                    <figure className="h-60"><img src={school} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Academia</h2>
                        <p className="pt-4">Meghsikshak enables anytime anywhere access to online content to students in a structured manner for self-paced learning. </p>
                        <ul className="flex flex-col gap-2 pt-4">
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Supports Multiple Content Formats</li>
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Modular Content Presentation </li>
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Elaborate Performance Tracking</li>
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Multiformat Assessment</li>
                            <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> User Communication Services</li>
                        </ul>
                        {/* <div className="card-actions justify-end pt-4">
                            <button className="btn btn-primary w-full">Learn More</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organizations