import customer_1 from "./images/customerCarousel/customer-1.jpg"
import customer_2 from "./images/customerCarousel/customer-2.jpg"
import customer_3 from "./images/customerCarousel/customer-3.jpg"
import customer_4 from "./images/customerCarousel/customer-4.jpg"

const CustomerCarousel = () => {
    return (
        <div>
            <div className="hero px-40 pt-16">
                <div className="hero-content text-center">
                    <div className="max-w-none">
                        <h1 className="text-5xl font-bold">What Our Customers Are Saying</h1>
                        <p className="py-6">At YouTestMe, we strive to integrate customer service into every aspect of our bussiness.</p>
                    </div>
                </div>
            </div>
            <div className="px-10">
                <div className="carousel w-full mt-2">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-row justify-center items-center gap-5">
                            <div className="basis-3/12">
                                <img className="rounded-3xl" src={customer_3} alt="" />
                            </div>
                            <div className="basis-7/12">
                                <p className="text-2xl">Faiza Venzant</p>
                                <p className="text-xl">CCVA, Executive Director</p>
                                <br></br>
                                <p className="">"Customer service at its best! GInI is the world’s leading professional certification, accreditation, and membership association in the field of innovation. Therefore, our exam center has to be secure, professional, and full of features that reflect the nature of our work and YouTestMe sure did provide that. Their support team work hard to deliver on time while coming up with new ideas and updates the whole time. If you are looking for a software that would upgrade your work then it is definitely the one."</p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex flex-row justify-center items-center gap-5">
                            <div className="basis-3/12">
                                <img className="rounded-3xl" src={customer_2} alt="" />
                            </div>
                            <div className="basis-7/12">
                                <p className="text-2xl">Scot Jones</p>
                                <p className="text-xl">Oakes Academy, Author/Educator</p>
                                <br></br>
                                <p className="">"Many alternatives were considered. Each one has had strengths, but for us, only YouTestMe has come close to being able to offer a combination of question branching, real-time data display, etc. It has been the most complete package. Overall very responsive team, excellent onboarding with video training included if needed. Lots of features for testing – much more robust than most other similar options.
                                    Customizations are included; I have found the team very engaged in getting the environment, including some unique elements, integrated."</p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex flex-row justify-center items-center gap-5">
                            <div className="basis-3/12">
                                <img className="rounded-3xl" src={customer_1} alt="" />
                            </div>
                            <div className="basis-7/12">
                                <p className="text-2xl">Christi McAdams</p>
                                <p className="text-xl">Global Cannabis Industry Networking Group, CEO</p>
                                <br></br>
                                <p className="">"A software that delivers and a support team that cares! The features cover all our needs and so much more at an affordable rate with the option to grow and expand based on the number of users, so it grows with your company. It is a learning curve, but I am impatient and want to know everything right away. The support team, however, is excellent and very responsive! The main reasons for switching to YouTestMe GetCertified are its features, functions, reliability, support services, and ability to scale."</p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex flex-row justify-center items-center gap-5">
                            <div className="basis-3/12">
                                <img className="rounded-3xl" src={customer_4} alt="" />
                            </div>
                            <div className="basis-7/12">
                                <p className="text-2xl">Nicholas Passalacqua</p>
                                <p className="text-xl">The American Board of Forensic Anthropology, Vice President</p>
                                <br></br>
                                <p className="">"YouTestMe is great for online testing. Overall using YouTestMe has been a great experience .YouTestMe is a really great, affordable platform for online testing, with or without remote proctoring. It would be nice if the system allowed for viewing of 3D models as part of questions. We chose YouTestMe based on its affordable cost combined with its functionality."</p>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerCarousel