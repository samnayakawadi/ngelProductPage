// import cloud from "./images/highlights/cloud.png"
// import compliant from "./images/highlights/compliant.png"
// import edit from "./images/highlights/edit.png"
// import integrate from "./images/highlights/integrate.png"
// import interfaceImage from "./images/highlights/interface.png"
// import secure from "./images/highlights/secure.png"


const Features = () => {
    return (
        <div>
            <div className="flex flex-col justify-items-center items-center gap-4">
                <div className="px-0 md:px-44">
                    <div className="text-3xl text-center">Designed for <span className="font-bold">Government Institutions</span> and <span className="font-bold">Military Organizations, Corporations,</span> and <span className="font-bold">Educational Institutions</span></div>
                    <div className="pt-2 text-center">
                        Our solutions are developed using superior enterprise technologies, and data security is of the highest priority
                    </div>
                </div>
                <div className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center px-0 md:px-10">
                        <div className="card bg-base-100 shadow-xl h-full">
                            <div className="card-body gap-5">
                                <div className="flex flex-row justify-start items-center gap-3">
                                    {/* <img src={cloud} alt="" /> */}
                                    {/* <i className="fa-solid fa-cloud" /> */}
                                    <img width={35} src="https://img.icons8.com/color/48/null/icloud.png" alt="" />
                                    <h2 className="card-title">Offered on Cloud or On-Premise</h2>
                                </div>
                                <p>Offers flexible models of platform access - Cloud-based service or a Standalone application hosted at your premise.</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl h-full">
                            <div className="card-body gap-5">
                                <div className="flex flex-row justify-start items-center gap-3">
                                    {/* <img src={edit} alt="" /> */}
                                    {/* <i className="fa-solid fa-file-pen" /> */}
                                    <img width={35} src="https://img.icons8.com/color/48/null/project-setup.png" alt=""/>
                                    <h2 className="card-title">Easy Customization</h2>
                                </div>
                                <p>Easy customization to meet your needs is our forte and Meghsikshak’s unique adaptability </p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl h-full">
                            <div className="card-body gap-5">
                                <div className="flex flex-row justify-start items-center gap-3">
                                    {/* <img src={integrate} alt="" /> */}
                                    {/* <i className="fa-solid fa-plug" /> */}
                                    <img width={35} src="https://img.icons8.com/color/48/null/puzzle-matching.png" alt=""/>
                                    <h2 className="card-title">Seamless Integrations</h2>
                                </div>
                                <p>Enables seamless integration with existing applications/services to minimize disruption on ongoing services </p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl h-full">
                            <div className="card-body gap-5">
                                <div className="flex flex-row justify-start items-center gap-3">
                                    {/* <img src={secure} alt="" /> */}
                                    {/* <i className="fa-solid fa-lock" /> */}
                                    <img width={35} src="https://img.icons8.com/color/48/null/security-checked--v1.png" alt=""/>
                                    <h2 className="card-title">Secure and Scalable</h2>
                                </div>
                                <p>Developed to be secure and scalable in all aspects.</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl h-full">
                            <div className="card-body gap-5">
                                <div className="flex flex-row justify-start items-center gap-3">
                                    {/* <img src={interfaceImage} alt="" /> */}
                                    {/* <i className="fa-solid fa-window-restore" /> */}
                                    <img width={35} src="https://img.icons8.com/color/48/null/dashboard-layout.png" alt=""/>
                                    <h2 className="card-title">Intuitive User Interface</h2>
                                </div>
                                <p>A responsive, user-friendly, and intuitive User interface that maximizes platform utility</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl h-full">
                            <div className="card-body gap-5">
                                <div className="flex flex-row justify-start items-center gap-3">
                                    {/* <img src={compliant} alt="" /> */}
                                    {/* <i className="fa-solid fa-compact-disc" /> */}
                                    <img width={35} src="https://img.icons8.com/color/48/null/inspection.png" alt=""/>
                                    <h2 className="card-title">Standards Compliance </h2>
                                </div>
                                <p>Compliant with major standards such as QTI for assessment and SCORM for content distribution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features