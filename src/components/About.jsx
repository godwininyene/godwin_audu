// import user from './../assets/images/user.jpg'
import user from './../assets/images/user-2.png'
import wave_1 from './../assets/images/bg-green-wave-1.png'
import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
const About = () => {
    return (
        <section id="About" className="py-[60px] lg:py-[100px] relative z-0 bg-left" style={{backgroundImage:`linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url(${wave_1})`}}>
            <div class="mx-auto   max-w-[1140px]">
                <div className="flex flex-wrap items-center">
                    {/* Left content */}
                    <div className="w-full lg:w-5/12 px-4">
                        <div 
                            className="p-[10px] bg-white shadow-xl rounded-lg overflow-hidden"
                            data-aos="zoom-in"
                            data-aos-duration="1200"
                        >
                            <img src={user}  alt="Godwin Audu" className='max-w-full w-full rounded-r-lg'/>
                        </div>
                    </div>
                    {/* Right Content */}
                    <div class="w-full lg:w-7/12 px-4 lg:px-8 mt-10 lg:mt-0">
                        <div class="pl-0 lg:pl-[30px]">
                           <div className='pb-8'>
                                <h2 
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    className='font-semibold relative text-[32px] text-black after:w-[60px] after:h-[3px] after:absolute after:left-0 after:bottom-[-10px] after:bg-[#111]'
                                >
                                    About <span className='text-primary'>Me</span>
                                </h2>
                           </div>
                           <h5 className='pb-1 mb-2 text-xl font-medium text-black'  data-aos="fade-right" data-aos-duration="1000">
                                Hello! i'm Godwin Audu
                            </h5>
                            <p className='mb-4'  data-aos="fade-in" data-aos-duration="1200">
                                A dedicated graphic designer with a knack for
                                bringing ideas to life through striking visuals. With 7 years of experience,
                                I specialize in logo design, brand identity,
                                and custom apparel printing, helping businesses and individuals stand
                                out with unique, professional designs.
                            </p>
                            <p className='mb-4'  data-aos="fade-in" data-aos-duration="1200" data-aos-delay="200">
                                From crafting memorable logos to designing eye-catching prints on clothes,
                                I believe every design tells a story. My goal is to combine creativity
                                with strategy to create visuals that not only look amazing
                                but also resonate deeply with audiences.
                            </p>
                            {/*Social Icons start */}
                            <ul className='flex flex-wrap gap-4'  data-aos="zoom-in" data-aos-duration="1500">
                                <li>
                                    <a href="https://www.linkedin.com/in/godwin-inyene-598714233 " className='inline-block rounded w-10 h-10 leading-10 text-center text-base font-normal text-white bg-primary transition-all duration-300 border border-transparent hover:bg-transparent hover:border-primary hover:text-black'>
                                        <FaLinkedin className='text-base inline'/>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://github.com/godwininyene" className='inline-block rounded w-10 h-10 leading-10 text-center text-base font-normal text-white bg-primary transition-all duration-300 border border-transparent hover:bg-transparent hover:border-primary hover:text-black'>
                                        <FaTwitterSquare className='text-base inline'/>
                                        
                                    </a>
                                </li>

                                <li>
                                    <a href="https://web.facebook.com/godwin.inyene.5/" className='inline-block rounded w-10 h-10 leading-10 text-center text-base font-normal text-white bg-primary transition-all duration-300 border border-transparent hover:bg-transparent hover:border-primary hover:text-black'>
                                        <FaFacebook className='text-base inline'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:godwinhigh2@gmail.com" className='inline-block rounded w-10 h-10 leading-10 text-center text-base font-normal text-white bg-primary transition-all duration-300 border border-transparent hover:bg-transparent hover:border-primary hover:text-black'>
                                        <FaEnvelope className='text-base inline'/>
                                    </a>
                                </li>
                            </ul>
                            {/*Social Icons End */}
                            <div className='pt-6' data-aos="fade-up" data-aos-duration="1500">
                                <a href='' download={true} className='inline-block rounded-lg font-semibold bg-primary  border border-transparent py-3  px-4 lg:px-[25px] transition-all duration-300 ease-in hover:bg-transparent hover:border-primary text-white hover:text-primary'>Connect With Me</a>
                                <a href='' download={true} className='inline-block rounded-lg font-semibold bg-transparent  border border-primary ml-2 lg:ml-4 py-3 px-4 lg:px-[25px] transition-all duration-300 ease-in hover:bg-transparent hover:bg-primary text-primary hover:text-black'>Connect With Me</a>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
           
        </section>
    )
}
export default About