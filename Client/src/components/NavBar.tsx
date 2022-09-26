export function NavBar() {
    return (
        <div className="w-full h-16 grid grid-cols-2  place-items-center bg-[#184369]">
            <div className="w-full flex justify-end items-end uppercase text-white">
                <h1 className="text-4xl font-semibold">Industrial</h1>
                <h3 className="ml-2 mr-20">Integrated Solutions. Proven Results</h3>
            </div>
            <div className="w-full justify-start uppercase">
                <h1 className="text-4xl ml-20 text-white font-light">Questions? Call <span className="text-blue-500 font-normal cursor-pointer">XX-XXXXX-XXXX</span></h1>
            </div>
        </div>
    )
}