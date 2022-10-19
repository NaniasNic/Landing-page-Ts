export function Sobre() {
    return(
        <div className="w-full h-[55vh] bg-[#132751]">
            <div className="w-full h-full flex flex-col text-center justify-center items-center">
                <h1 className="text-white text-5xl">A Little Bit About Us</h1>
                <p className="text-white text-2xl mt-5 mb-10">
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this first true generator <br />
                    on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate <br />
                    Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or <br /> 
                    non-characteristic words there isn't anything embarrassing etc.
                </p>
                <button className="border border-white mt-10 px-5 py-3 w-96 text-xl uppercase text-white">
                    Learn More
                </button>
            </div>
        </div>
    )
}