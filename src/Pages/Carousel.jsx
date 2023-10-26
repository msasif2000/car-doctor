import img1 from '../assets/images/banner/1.jpg'
import img2 from '../assets/images/banner/2.jpg'
import img3 from '../assets/images/banner/3.jpg'
import img4 from '../assets/images/banner/4.jpg'
import img5 from '../assets/images/banner/5.jpg'
import img6 from '../assets/images/banner/6.jpg'

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full h-[600px] rounded-xl" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn btn-circle mr-8 hover:bg-[#FF3811] hover:text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                    </div>
                    <div className='rounded-xl space-y-6 absolute h-full flex flex-col  left-0  pt-28 w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ...'>
                        <div className="space-y-6">
                            <h1 className='pl-6 text-5xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                            <p className='text-white text-xl pl-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        </div>
                        <div className="flex gap-5 pl-6">
                            <button className=" text-white py-2  px-4 bg-[#FF3811] rounded">Discover More</button>
                            <button className="py-2 px-4 bg-transparent bg-slate-50 text-white border-white rounded border-2">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-[600px] rounded-xl" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-8 hover:bg-[#FF3811] hover:text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                    </div>
                    <div className='rounded-xl space-y-6 absolute h-full flex flex-col  left-0  pt-28 w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ...'>
                        <div className="space-y-6">
                            <h1 className='pl-6 text-5xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                            <p className='text-white text-xl pl-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        </div>
                        <div className="flex gap-5 pl-6">
                            <button className=" text-white py-2  px-4 bg-[#FF3811] rounded">Discover More</button>
                            <button className="py-2 px-4 bg-transparent bg-slate-50 text-white border-white rounded border-2">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full h-[600px] rounded-xl" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-8 hover:bg-[#FF3811] hover:text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                    </div>
                    <div className='rounded-xl space-y-6 absolute h-full flex flex-col  left-0  pt-28 w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ...'>
                        <div className="space-y-6">
                            <h1 className='pl-6 text-5xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                            <p className='text-white text-xl pl-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        </div>
                        <div className="flex gap-5 pl-6">
                            <button className=" text-white py-2  px-4 bg-[#FF3811] rounded">Discover More</button>
                            <button className="py-2 px-4 bg-transparent bg-slate-50 text-white border-white rounded border-2">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full h-[600px] rounded-xl" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-8 hover:bg-[#FF3811] hover:text-white">❮</a>
                        <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                    </div>
                    <div className='rounded-xl space-y-6 absolute h-full flex flex-col  left-0  pt-28 w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ...'>
                        <div className="space-y-6">
                            <h1 className='pl-6 text-5xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                            <p className='text-white text-xl pl-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        </div>
                        <div className="flex gap-5 pl-6">
                            <button className=" text-white py-2  px-4 bg-[#FF3811] rounded">Discover More</button>
                            <button className="py-2 px-4 bg-transparent bg-slate-50 text-white border-white rounded border-2">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full h-[600px] rounded-xl" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-8 hover:bg-[#FF3811] hover:text-white">❮</a>
                        <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                    </div>
                    <div className='rounded-xl space-y-6 absolute h-full flex flex-col  left-0  pt-28 w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ...'>
                        <div className="space-y-6">
                            <h1 className='pl-6 text-5xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                            <p className='text-white text-xl pl-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        </div>
                        <div className="flex gap-5 pl-6">
                            <button className=" text-white py-2  px-4 bg-[#FF3811] rounded">Discover More</button>
                            <button className="py-2 px-4 bg-transparent bg-slate-50 text-white border-white rounded border-2">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full h-[600px] rounded-xl" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle mr-8 hover:bg-[#FF3811] hover:text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                    </div>
                    <div className='rounded-xl space-y-6 absolute h-full flex flex-col  left-0  pt-28 w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ...'>
                        <div className="space-y-6">
                            <h1 className='pl-6 text-5xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                            <p className='text-white text-xl pl-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        </div>
                        <div className="flex gap-5 pl-6">
                            <button className=" text-white py-2  px-4 bg-[#FF3811] rounded">Discover More</button>
                            <button className="py-2 px-4 bg-transparent bg-slate-50 text-white border-white rounded border-2">Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;