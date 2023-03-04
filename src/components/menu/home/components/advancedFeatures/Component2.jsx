const Component2 = () => {
    return (
        <div className="px-5 md:px-20 py-14 bg-base-200">
            <div className="flex justify-center items-center gap-4 flex-row-reverse flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-6/12">
                    <h2 className="text-3xl font-bold">Examination and Training That Match Your Business Use Case</h2>
                    <p className="pt-4">Organize training courses and certifications, and sync data across the enterprise. Build a high-performance culture and scale your business</p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Automated recertification, test result expiration, and re-taking process with reminders</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Sell tests and training courses online using a Stripe integration with e-mail notifications</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Automated employee training and onboarding through step by step multimedia lessons with tests</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Distribute a single test in different languages and time zones for multinational organizations</li>
                    </ul>
                    <div className="flex flex-row justify-start gap-4 pt-4 flex-wrap md:flex-nowrap">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div>
                </div>
                <div className="basis-full md:basis-6/12 flex flex-row justify-center pt-10 md:pt-0">
                    <img src="https://www.youtestme.com/wp-content/uploads/2022/07/TRAIN-ONOBARD-landing2.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Component2