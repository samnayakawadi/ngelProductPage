const GetInTouch = () => {
    return (
        <div className="px-80" id="contact">
            <div className="card rounded-3xl bg-base-100 shadow-xl">
                <div className="flex flex-row justify-center items-center gap-5">
                    <div className="basis-6/12 p-10">
                        <h1 className="text-4xl font-bold">Serving Our Customers</h1>
                        <p className="pt-6">Our goal is to help customers optimize the use of YouTestMe, by providing a premium onboarding experience. At YouTestMe, we strive to integrate customer service into every aspect of our business.</p>
                        <a href="mailto:meghsikshak@cdac.in" alt="">
                            <button className="btn btn-primary mt-6">Get in Touch</button>
                        </a>
                    </div>
                    <div className="basis-6/12">
                        <img className="w-full" src="https://img.freepik.com/free-photo/business-woman-checkered-jacket-with-smile-while-sitting-desk-her-office_197531-10661.jpg?w=1380&t=st=1677497665~exp=1677498265~hmac=439f3bb7be92a946ee587f4ea306f14135a2300713d0f71c8b710f5ca9db1a83" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch