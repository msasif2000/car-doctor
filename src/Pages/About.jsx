import img1 from '../assets/images/about_us/person.jpg'
import img2 from '../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={img2} alt="" className='w-1/2 absolute right-8 border-white border-8 rounded top-1/2' />
                    </div>
                    <div className='lg:w-1/2 lg:pr-10 md:pt-16 lg:pt-0 pt-16'>

                        <h1 className="md:text-6xl text-5xl lg:text-left text-center font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable.</p>
                        <p className='pb-6'>The majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. </p>
                        <div className='flex lg:justify-start justify-center'>
                            <button className="btn rounded-xl bg-[#FF3811] text-white">Get More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;