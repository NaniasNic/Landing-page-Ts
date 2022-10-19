import Primeiro from "../../public/primeiro.jpg";
import Segundo from "../../public/segundo.jpg";

export function Info(){
    return(
        <div>
            <div className="flex items-center">
                <div className="w-[50%] flex justify-end">
                    <img src={Primeiro} alt="Industry" className="w-[42rem] h-[36rem]" />
                </div>

                <div className="w-[50%] px-20">
                    <h1 className="mb-14 font-semibold text-5xl">Lorem ipsum dolor</h1>
                    <p className="text-justify text-2xl">
                        All the Lorem Ipsum generators on the Internet tend to <br />
                        repeat predefined chunks as necessary, making this the <br /> 
                        first true generator on the Internet. It uses a dictionary of <br />
                        over 200 Latin words, combined with a handful of model <br />
                        sentence structures, to generate Lorem Ipsum which <br />
                        looks reasonable. The generated Lorem Ipsum is there <br />
                        fore always free from repetition. <br />
                    </p>
                </div>
            </div>

            <div className="flex items-center">
                <div className="w-[50%] flex flex-col pl-[17rem]">
                    <h1 className="mb-14 font-semibold text-5xl">Lorem ipsum dolor</h1>
                    <p className="text-justify text-2xl">
                        All the Lorem Ipsum generators on the Internet tend to <br />
                        repeat predefined chunks as necessary, making this the <br /> 
                        first true generator on the Internet. It uses a dictionary of <br />
                        over 200 Latin words, combined with a handful of model <br />
                        sentence structures, to generate Lorem Ipsum which <br />
                        looks reasonable. The generated Lorem Ipsum is there <br />
                        fore always free from repetition. <br />
                    </p>
                </div>
                
                <div className="w-[50%] flex justify-start">
                    <img src={Segundo} alt="Industry" className="w-[42rem] h-[36rem]" />
                </div>
            </div>
        </div>
    )
}