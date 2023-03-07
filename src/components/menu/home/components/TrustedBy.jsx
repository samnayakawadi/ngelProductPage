import client1 from "./images/clients/bpsa.png"
import client2 from "./images/clients/brpd.png"
import client3 from "./images/clients/cdac.png"
import client4 from "./images/clients/chariot.png"
import client5 from "./images/clients/cmet.png"
import client6 from "./images/clients/dcu.png"
import client7 from "./images/clients/dop.png"
import client8 from "./images/clients/kepa.png"
import client9 from "./images/clients/mpa.png"
import client10 from "./images/clients/nsfu.png"
import client11 from "./images/clients/ppa.png"

const TrustedBy = () => {
    return (
        <div>
            <div className="flex flex-col justify-items-center items-center gap-4 text-center">
                <div className="text-4xl font-bold">Trusted By Top Institutions</div>
                <div className="">
                    Our goal is to ensure our clients are guided and empowered to automate learning processes.
                </div>
                <div className="pt-6">
                    <div className="carousel w-full mt-2">
                        <div id="clientSlide1" className="carousel-item relative w-full">
                            <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-evenly items-center gap-12 w-full">
                                <img width="150" src={client1} alt="" className="tooltip" data-tip="vcvcvcvcvcvvccvcv"/>
                                <img width="150" src={client2} alt="" />
                                <img width="150" src={client3} alt="" />
                                <img width="150" src={client4} alt="" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#clientSlide3" className="btn btn-circle">❮</a>
                                <a href="#clientSlide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="clientSlide2" className="carousel-item relative w-full">
                            <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-evenly items-center gap-12 w-full">
                                <img width="150" src={client5} alt="" />
                                <img width="150" src={client6} alt="" />
                                <img width="150" src={client7} alt="" />
                                <img width="150" src={client8} alt="" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#clientSlide1" className="btn btn-circle">❮</a>
                                <a href="#clientSlide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="clientSlide3" className="carousel-item relative w-full">
                            <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-evenly items-center gap-12 w-full">
                                <img width="150" src={client9} alt="" />
                                <img width="150" src={client10} alt="" />
                                <img width="150" src={client11} alt="" />
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#clientSlide2" className="btn btn-circle">❮</a>
                                <a href="#clientSlide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-1 md:grid-cols-7 gap-3 items-center">
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default TrustedBy