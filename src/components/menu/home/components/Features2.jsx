import girlPainting from "./images/features/girlPainting.jpg"
import announcement from "./images/features/announcement.jpg"
import digitalMarketing from "./images/features/digitalMarketing.jpg"
import business from "./images/features/business.jpg"
import fianance from "./images/features/fianance.jpg"
import selfGrowth from "./images/features/selfGrowth.jpg"

const Features = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold">Explore courses by category</h1>
            <p className="pt-4 pb-7">Browse top class courses by browsing our category which will be more easy for you.</p>
            <div className="grid grid-cols-3 gap-3">
                <div className="card flex flex-row justify-center items-center bg-base-100 shadow-xl">
                    <div className="basis-5/12 p-3">
                        <figure><img src={girlPainting} alt="Movie" /></figure>
                    </div>
                    <div className="basis-7/12">
                        <div className="card-body">
                            <h2 className="card-title">Design & Development</h2>
                            <p>250+ Courses Available</p>
                        </div>
                    </div>
                </div>
                <div className="card flex flex-row justify-center items-center bg-base-100 shadow-xl">
                    <div className="basis-5/12 p-3">
                        <figure><img src={announcement} alt="Movie" /></figure>
                    </div>
                    <div className="basis-7/12">
                        <div className="card-body">
                            <h2 className="card-title">Marketing & Communication</h2>
                            <p>300+ Courses Available</p>
                        </div>
                    </div>
                </div>
                <div className="card flex flex-row justify-center items-center bg-base-100 shadow-xl">
                    <div className="basis-5/12 p-3">
                        <figure><img src={digitalMarketing} alt="Movie" /></figure>
                    </div>
                    <div className="basis-7/12">
                        <div className="card-body">
                            <h2 className="card-title">Digital Marketing</h2>
                            <p>150+ Courses Available</p>
                        </div>
                    </div>
                </div>
                <div className="card flex flex-row justify-center items-center bg-base-100 shadow-xl">
                    <div className="basis-5/12 p-3">
                        <figure><img src={business} alt="Movie" /></figure>
                    </div>
                    <div className="basis-7/12">
                        <div className="card-body">
                            <h2 className="card-title">Business & Consulting</h2>
                            <p>170+ Courses Available</p>
                        </div>
                    </div>
                </div>
                <div className="card flex flex-row justify-center items-center bg-base-100 shadow-xl">
                    <div className="basis-5/12 p-3">
                        <figure><img src={fianance} alt="Movie" /></figure>
                    </div>
                    <div className="basis-7/12">
                        <div className="card-body">
                            <h2 className="card-title">Finance Management</h2>
                            <p>300+ Courses Available</p>
                        </div>
                    </div>
                </div>
                <div className="card flex flex-row justify-center items-center bg-base-100 shadow-xl">
                    <div className="basis-5/12 p-3">
                        <figure><img src={selfGrowth} alt="Movie" /></figure>
                    </div>
                    <div className="basis-7/12">
                        <div className="card-body">
                            <h2 className="card-title">Self Development</h2>
                            <p>50+ Courses Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features