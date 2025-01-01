import bg from './../assets/images/home.jpg'
// import bg from './../assets/images/home-2.jpg'
const Hero = () => {
    return(
        // <section id="Home" className="bg-cover bg-center bg-no-repeat py-24" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${bg})`}}>
        <section
            id="Home"
            className="bg-cover bg-center bg-no-repeat py-[120px]"
            data-aos="fade-in"
            data-aos-duration="2000"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.8), rgba(0, 0, 0, 0.6)), url(${bg})`,
            }}
        >
            <div className="mx-auto max-w-[1140px]">
                <div className="flex justify-center">
                    <div className="w-full lg:w-9/12">
                        <div className="text-white text-center mt-[50px] lg:mt-[70px] mx-auto px-6 lg:px-0 max-w-4xl">
                            <h2 
                                className="text-3xl capitalize font-light mb-5"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            >
                                Hi, I’m Godwin Audu
                            </h2>
                            <h1
                                className="text-[34px] lg:text-[100px] font-bold leading-[1.1] mb-8"
                                style={{
                                textShadow: '2px 4px 6px rgba(0, 0, 0, 0.5)',
                                fontFamily: '"Playfair Display", serif',
                                }}
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                Senior Graphics <span className="text-primary">Designer</span>
                            </h1>
                            <p className="text-[20px] leading-[1.8] text-gray-300"  data-aos="fade-in" data-aos-duration="1500">
                                Specializing in branding and packaging. Helping businesses tell their story.
                            </p>
                            <div className="pt-8">
                                <a
                                    href=""
                                    download={true}
                                    data-aos="zoom-in"
                                    data-aos-duration="1500"
                                    className="inline-block rounded-lg font-semibold bg-primary border border-transparent py-3 px-[25px] transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:border-primary hover:text-gold shadow-md"
                                >
                                Connect With Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero