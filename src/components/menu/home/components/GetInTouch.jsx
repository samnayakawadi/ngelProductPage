import getInTouchImage from "./images/getInTouch/contact-trans.png"
import GetInTouchModal from "./modal/GetInTouchModal"
const GetInTouch = () => {
    return (
        <div className="px-0 sm:px-1 md:px-5 lg:px-20 xl:px-40 2xl:px-80">
            <GetInTouchModal />
            <div className="card bg-base-100 shadow-md">
                <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-center">
                    <div className="basis-full md:basis-7/12 p-10 md:pl-10">
                        <h1 className="text-4xl font-bold">Serving Our Customers</h1>
                        <p className="pt-6">We want to give consumers a first-rate onboarding experience so they can get the most out of MeghSikshak. Customer service is something we work to include in every aspect of our business at MeghSikshak.</p>
                        <label htmlFor="getInTouchModal" className="btn btn-primary mt-6 normal-case">Get in Touch</label>
                        {/* <a href="mailto:meghsikshak@cdac.in" alt="">
                        </a> */}
                    </div>
                    <div className="basis-full md:basis-5/12 flex flex-row justify-center items-center p-10">
                        <img className="" src={getInTouchImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch