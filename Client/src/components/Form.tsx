import { Input } from "./Form/Input";

export function Form() {
    return (
        <div className="w-full h-[93vh] grid place-items-center grid-cols-2 gap-6 bg-industrial bg-no-repeat bg-cover">
            <div>
                <h1 className="text-white">
                    <span className="text-7xl font-light">A Complete line of</span> <br />
                    <span className="text-9xl font-semibold uppercase">Industrial</span> <br />
                    <span className="text-8xl font-light uppercase">Safety Products</span>
                </h1>
            </div>

            <form className="w-[520px] h-[560px] py-8 px-10 mt-8 flex flex-col gap-4 shadow-lg shadow-black/25 bg-[#184369]">
                <div className="flex justify-center">
                    <h1 className="text-white text-5xl uppercase">Contact Us Today</h1>
                </div>

                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <Input id='yearsPlaying' name='yearsPlaying' type='text' placeholder='First Name' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Input id='discord' name='discord' type='text' placeholder='Last Name' />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <Input id='name' name='name' placeholder='Company' />
                </div>

                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <Input id='yearsPlaying' name='yearsPlaying' type='text' placeholder='E-mail' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Input id='discord' name='discord' type='text' placeholder='Phone' />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <textarea
                        id='name'
                        name='name'
                        placeholder='Message'
                        className="resize-none py-3 px-4 h-36 placeholder:text-zinc-500 placeholder:font-semibold placeholder:uppercase"
                    />
                </div>

                <footer className='mt-4 flex justify-center gap-4'>
                    <button
                        type='submit'
                        className='bg-[#00A1E5] text-white font-semibold uppercase text-2xl px-5 h-14 w-full justify-center rounded-md flex items-center gap-3 hover:bg-violet-600'
                    >
                    Submit
                    </button>
                </footer>
            </form>
        </div>
    )
}