const Component1 = () => {
    return (
        <div className="px-20 py-14">
            <div className="flex flex-row justify-center items-center gap-4">
                <div className="basis-6/12">
                    <h2 className="text-3xl font-bold">The Most Complete Set of Tools for Online Assessments</h2>
                    <p className="pt-4">YouTestMe features automated test and answer randomizer, a secure environment for test-taking and training, a customizable reporting system, and much more.</p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Organize departments into workspaces and user groups with modular permission control</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Store questions for automated test creation and item analysis</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Automate the creation of a large number of exams based on a one-off setup</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Prevent cheating using lockdown browser and AI proctoring</li>
                    </ul>
                    <div className="flex flex-row justify-start gap-4 pt-4">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div>
                </div>
                <div className="basis-6/12 flex flex-row justify-center">
                    <img src="https://www.youtestme.com/wp-content/uploads/2022/11/Homepage-Cards.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Component1