import announcement from "../images/advancedFeatures/announcement.png"

const Component5 = () => {
    return (
        <div className="px-5 md:px-20 py-14">
            <div className="flex justify-center items-center gap-4 flex-row flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Announcement</h2>
                    <p className="pt-4">Enables seamless communication of key announcements by Instructors to the learners. </p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Chronologically sequenced</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Transmitted instantly</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Multiple variants to suit user needs</li>
                        {/* <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Publish Upto</li> */}
                    </ul>
                    {/* <div className="flex flex-row justify-start gap-4 pt-4 flex-wrap md:flex-nowrap">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div> */}
                </div>
                <div className="basis-full md:basis-6/12 pt-10 md:pt-0 ">
                    <div className="flex flex-row justify-center items-center md:p-10">
                        <img src={announcement} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component5