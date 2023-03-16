const Stats = () => {
    return (
        <div className="bg-base-300">
            <div className="px-0 md:px-44 pt-5">
                <div className="text-3xl text-center"><span className="font-bold">Our Stats</span></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center py-14">
                <div>
                    <h2 className="text-3xl font-bold pb-2">15+</h2>
                    <p className="text-xl font-bold">Clients</p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold pb-2">130+</h2>
                    <p className="text-xl font-bold">Courses</p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold pb-2">225000+</h2>
                    <p className="text-xl font-bold">Certifications</p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold pb-2">270000+</h2>
                    <p className="text-xl font-bold">Users</p>
                </div>
            </div>
        </div>
    )
}

export default Stats