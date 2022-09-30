import Um from "/um.jpg";
import Dois from "/dois.jpg";
import Quimico from "/quimico.jpg";

export function Cards() {
    return (
        <div className="w-full h-[93vh] flex justify-evenly items-center">
            <div className="w-[400px] ml-60">
                <h1 className="mb-5 text-4xl font-semibold">Innovations</h1>
                <img className="w-[30rem] h-[25rem]" src={Um} alt="Innovations" />
                <p className="mt-5 text-[1.40rem] font-medium">
                    There are many variations of passages <br />
                    of Lorem Ipsum available, but majority <br />
                    have suffered alteration.
                </p>
            </div>

            <div className="w-[400px]">
                <h1 className="mb-5 text-4xl font-semibold">People & Culture</h1>
                <img className="w-[30rem] h-[25rem]" src={Dois} alt="People & Culture" />
                <p className="mt-5 text-[1.40rem] font-medium">
                    There are many variations of passages <br />
                    of Lorem Ipsum available, but majority <br />
                    have suffered alteration.
                </p>
            </div>

            <div className="w-[400px] mr-60">
                <h1 className="mb-5 text-4xl font-semibold">Solutions at a Glance</h1>
                <img className="w-[30rem] h-[25rem]" src={Quimico} alt="Solutions at a Glance" />
                <p className="mt-5 text-[1.40rem] font-medium">
                    There are many variations of passages <br />
                    of Lorem Ipsum available, but majority <br />
                    have suffered alteration.
                </p>
            </div>
        </div>
    )
}