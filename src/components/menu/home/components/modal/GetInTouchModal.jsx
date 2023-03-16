const GetInTouchModal = () => {
    return (
        <div>
            <input type="checkbox" id="getInTouchModal" className="modal-toggle" />
            <label htmlFor="getInTouchModal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    {/* <label htmlFor="getInTouchModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
                    <p className="pt-4 pb-2 font-bold">Address</p>
                    <p className="">
                        <span>Plot No. 6 & 7, Hardware Park, Sy No. 1/1, Srisailam Highway Pahadi Shareef, Via, Keshavagiri Post, Hyderabad, Telangana 501510</span>
                        <a href="https://goo.gl/maps/GkNyAa6Q6GebAtu1A" target="_blank" rel="noreferrer"><i className="pl-2 fa-solid fa-arrow-up-right-from-square" /></a>
                    </p>
                    <p className="pt-4 pb-2 font-bold">Email</p>
                    <p className="">
                        <span>meghsikshak@cdac.in</span>
                        <a href="mailto:meghsikshak@cdac.in" ><i className="pl-2 fa-solid fa-arrow-up-right-from-square" /></a>
                    </p>
                    <p className="">
                        <span>chariot@cdac.in</span>
                        <a href="mailto:chariot@cdac.in" ><i className="pl-2 fa-solid fa-arrow-up-right-from-square" /></a>
                    </p>
                    <p className="pt-4 pb-2 font-bold">
                        Mobile
                    </p>
                    <p className="">
                        <span>+91 9182561076</span>
                        <a href="tel:+919182561076" ><i className="pl-2 fa-solid fa-arrow-up-right-from-square" /></a>
                    </p>
                    <div className="modal-action">
                        <label htmlFor="getInTouchModal" className="btn no-animation normal-case w-full">Close</label>
                    </div>
                </label>
            </label>
        </div>
    )
}

export default GetInTouchModal