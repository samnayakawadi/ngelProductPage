import registration from "../images/advancedFeatures/registrationLogin.png"

const Component1 = () => {
    return (
        <div className="px-5 md:px-20 py-14">
            <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-center gap-4">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Secure Registration & Login</h2>
                    <p className="pt-4">Well-designed secure registration and login ensure swift onboarding of users with analytics to learn more about them.</p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Accommodates multiple login methods </li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Upload User Photograph & Document</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Secured with Captcha</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Error Validations</li>
                    </ul>
                    {/* <div className="flex flex-row justify-start gap-4 pt-4 flex-wrap md:flex-nowrap">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div> */}
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0">
                    <div className="flex flex-row justify-center items-center md:p-10">
                        <img src={registration} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component1