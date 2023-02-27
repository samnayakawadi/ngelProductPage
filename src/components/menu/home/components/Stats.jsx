const Stats = () => {
    return (
        <div id="statistics">
            <div className="grid grid-cols-3 gap-5 bg-base-200 text-center py-14">
                <div>
                    <h2 className="text-3xl font-bold pb-2">300,000+</h2>
                    <p className="text-xl font-bold">Users</p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold pb-2">1,500,000+</h2>
                    <p className="text-xl font-bold">Tests delivered</p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold pb-2">130+</h2>
                    <p className="text-xl font-bold">Languages</p>
                </div>
            </div>
        </div>
    )
}

export default Stats