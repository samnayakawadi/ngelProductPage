const Component4 = () => {
    return (
        <div className="px-20 py-14 bg-base-200">
            <div className="flex justify-center items-center gap-4 flex-row-reverse">
                <div className="basis-6/12">
                    <h2 className="text-3xl font-bold">High-Stakes Stress-Free Examination for Candidates</h2>
                    <p className="pt-4">A premium experience ensured by test reminders, booking deadlines, test instructions, and equipment check.</p>
                    <ul className="flex flex-col gap-2 pt-4">
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Candidates are informed of the instructions for taking the test in advance and reminded by email not to forget the appointed time</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Candidates can start the test directly from the invitation email, without the need to enter the password and username</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Create a trial test for candidates to familiarize themselves with the application and try out the equipment check</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> With live proctoring, candidates are greeted by the proctor with whom they can communicate at any time during the test</li>
                        <li className="flex flex-row gap-4 justify-start items-center"><i className="fa-solid fa-circle-check" /> Full compliance with WCAG standards for supporting people with disabilities</li>
                    </ul>
                    <div className="flex flex-row justify-start gap-4 pt-4">
                        <button className="btn btn-primary">See All Features</button>
                        <button className="btn btn-primary">Watch Demo</button>
                    </div>
                </div>
                <div className="basis-6/12 flex flex-row justify-center">
                    <img src="https://www.youtestme.com/wp-content/uploads/2022/12/Passed-the-test-screen.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Component4