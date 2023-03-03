import getInTouchImage from "./images/getInTouch/contact-trans.png"
const GetInTouch = () => {
    return (
        <div className="px-80" id="contact">
            <div className="card rounded-3xl bg-base-100 shadow-xl">
                <div className="flex flex-row justify-center items-center">
                    <div className="basis-7/12 pl-10">
                        <h1 className="text-4xl font-bold">Serving Our Customers</h1>
                        <p className="pt-6">Our goal is to help customers optimize the use of YouTestMe, by providing a premium onboarding experience. At YouTestMe, we strive to integrate customer service into every aspect of our business.</p>
                        <a href="mailto:meghsikshak@cdac.in" alt="">
                            <button className="btn btn-primary mt-6">Get in Touch</button>
                        </a>
                    </div>
                    <div className="basis-5/12 flex flex-row justify-center items-center">
                        <img className="max-w-xs" src={getInTouchImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch