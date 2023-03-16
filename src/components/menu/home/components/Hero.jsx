import meghsikshak from "./images/hero/meghsikshak.png"

const Hero = () => {
    return (
        <div id="home">
            <div className="pt-40 pb-10 bg-base-200 px-10 md:px-32">
                <div className="flex flex-row flex-wrap justify-center items-center">
                    <div className="basis-full md:basis-7/12">
                        <div className="p-0 md:px-20">
                            <h1 className="text-4xl font-bold">The Best Enterprise Software for Online Learning</h1>
                            {/* <p className="pt-6">Web-based enterprise application for training, knowledge evaluation, certification, and examinations.</p> */}
                            <p className="pt-6">A one-stop web-based enterprise application to fulfil your online education goals - training, skill upgradation, knowledge evaluation, certification, and examinations.</p>
                            {/* <p className="pt-2 pb-6">Have full control over your application and data. Designed for large corporations and government institutions.</p> */}
                            <p className="pt-2">Ensures full control over your application and data.</p>
                            <p className="pt-2 pb-6">Designed for government institutions and large corporations.</p>
                            <div className="flex flex-start gap-3 flex-wrap">
                                {/* <button className="btn btn-primary">Watch a Video</button> */}
                                <a href="mailto:meghsikshak@cdac.in">
                                    <label htmlFor="getInTouchModal" className="btn btn-primary normal-case">Get In Touch</label>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="basis-full md:basis-5/12 pt-20 md:py-0 flex flex-row justify-center flex-wrap">
                        <img alt="" className="" src={meghsikshak} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero