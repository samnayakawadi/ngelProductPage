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
                <div className="text-4xl font-bold px-10 md:px-0">Trusted By Prestigious Institutions</div>
                <div className="px-10 md:px-0">
                    Our goal is to ensure our clients are guided and empowered to automate learning processes.
                </div>
                <div className="pt-0 md:px-16">
                    <div className="carousel w-full mt-2">
                        <div id="clientSlide1" className="carousel-item relative w-full pt-10">
                            <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-evenly items-center gap-12 w-full">
                                <div className="flex flex-col justify-center items-center">
                                    <img width="150" src={client1} alt="" />
                                    <a href="http://bpspaorissa.gov.in/" target="_blank" rel="noreferrer">
                                        Biju Patnaik State Police Academy, Orissa
                                    </a>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <img width="150" src={client2} alt="" />
                                    <a href="https://eustad.in/" target="_blank" rel="noreferrer">
                                        Bureau of Police Research & Development, MHA
                                    </a>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <img width="150" src={client3} alt="" />
                                    <a href="https://cakes.cdac.in/MeghSikshak/" target="_blank" rel="noreferrer">
                                        Centre for Development of Advanced Computing, MeitY
                                    </a>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <img width="150" src={client4} alt="" />
                                    <a href="https://meghsikshak.in/chariot/" target="_blank" rel="noreferrer">
                                        Chariot Program
                                    </a>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 pt-16">
                                <a href="#clientSlide3" className="btn btn-circle">❮</a>
                                <a href="#clientSlide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="clientSlide2" className="carousel-item relative w-full pt-16">
                            <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-evenly items-center gap-12 w-full">
                                <div className="flex flex-col justify-center items-center">
                                    <img width="150" src={client5} alt="" />
                                    <a href="https://kaushalvikas.coeonewaste.com/MeghSikshak/" target="_blank" rel="noreferrer">
                                        Centre for Materials for Electronics Technology, GoI
                                    </a>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <img width="150" src={client6} alt="" />
                                    <a href="https://mfa.gov.mn/en/" target="_blank" rel="noreferrer">
                                        National Defence University, Ulaanbaatar Mongolia
                                    </a>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <img width="150" src={client7} alt="" />
                                    <a href="https://dakshiksha.gov.in/DakShiksha/" target="_blank" rel="noreferrer">
                                        Department of Post, India
                                    </a>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <img width="150" src={client8} alt="" />
                                    <a href="https://lms.keralapoliceacademy.gov.in/DKMS/" target="_blank" rel="noreferrer">
                                        Kerala Police Academy, Thrissur
                                    </a>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 pt-16">
                                <a href="#clientSlide1" className="btn btn-circle">❮</a>
                                <a href="#clientSlide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="clientSlide3" className="carousel-item relative w-full pt-16">
                            <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-evenly items-center gap-12 w-full">
                                <div className="flex flex-col justify-center items-center">
                                    <img width="150" src={client9} alt="" />
                                    <a href="https://eacademy.mpanashik.gov.in/MPAmeghsikshak/" target="_blank" rel="noreferrer">
                                        Maharashtra Police Academy, Nashik
                                    </a>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <img width="150" src={client10} alt="" />
                                    <a href="https://www.nfsu.ac.in/" target="_blank" rel="noreferrer">
                                        National Forensic Sciences University, Gujarat
                                    </a>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <img width="150" src={client11} alt="" />
                                    <a href="http://www.punjabpoliceacademy.com/" target="_blank" rel="noreferrer">
                                        Punjab Police Academy, Phillaur
                                    </a>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 pt-16">
                                <a href="#clientSlide2" className="btn btn-circle">❮</a>
                                <a href="#clientSlide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustedBy