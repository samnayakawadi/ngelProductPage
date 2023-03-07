const Stats = () => {
    return (
        <div id="statistics">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-base-200 text-center pb-14 md:py-14">
                <div>
                    <h2 className="text-3xl font-bold pb-2">270000+</h2>
                    <p className="text-xl font-bold">Users</p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold pb-2">130+</h2>
                    <p className="text-xl font-bold">Courses</p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold pb-2">225000+</h2>
                    <p className="text-xl font-bold">Certifications</p>
                </div>
            </div>
        </div>
    )
}

export default Stats