const Hero = () => {
    return (
        <div id="home">
            <div className="py-20 bg-base-200 px-32">
                <div className="flex flex-row justify-center items-center">
                    <div className="basis-7/12">
                        <div className="px-20">
                            <h1 className="text-4xl font-bold">The Best Enterprise Software for Knowledge Examination</h1>
                            <p className="pt-6">Web-based enterprise application for training, knowledge evaluation, certification, automated and live proctoring.</p>
                            <p className="pt-2 pb-6">Have full control over your application and data.
                                Designed for large corporations and government institutions.</p>
                            <div className="flex flex-start gap-3">
                                <button className="btn btn-primary">Schedule a Call</button>
                                <button className="btn btn-primary">30-Day Free Trail</button>
                            </div>
                        </div>
                    </div>
                    <div className="basis-5/12">
                        <img alt="" src="https://www.youtestme.com/wp-content/uploads/2022/12/homepage-banner-1500x1122-1.png" className="max-w-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero