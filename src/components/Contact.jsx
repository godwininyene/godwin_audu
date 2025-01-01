import { FaEnvelope, FaPhone } from "react-icons/fa"
import { FaMapLocation } from "react-icons/fa6"

const Contact = () => {
    const sendToWhatsApp = e =>{
        e.preventDefault();
        const number = '+2347063907095'
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const url = `https://wa.me/${number}?text=Name:${name} Email:${email} Message:${message} `;
        window.open(url, '_blank').focus();
       
    }
    return(
        <section id="Contact" className="py-[60px] lg:py-[100px] bg-[#f3f3f3]">
        <div className="mx-auto max-w-[1140px]">
            {/* Header */}
            <div className="flex justify-center mb-6 lg:mb-11">
                <div className="w-full lg:w-2/3 px-4">
                    <div className="text-center">
                        <h2
                            data-aos="fade-up"
                            className="font-semibold text-black relative inline-block text-[32px] after:w-[60px] after:m-auto after:h-[3px] after:absolute after:left-[52px] after:bottom-[-10px] after:bg-[#111]"
                        >
                            Contact<span className="text-primary"> Me</span>
                        </h2>
                    </div>
                </div>
            </div>
            {/* Contact Form and Info */}
            <div className="flex justify-center flex-wrap">
                {/* Contact Form */}
                <div
                    data-aos="fade-up"
                    className="w-full lg:w-7/12 px-4"
                >
                    <div className="shadow-lg bg-white p-8">
                        <div className="pb-6">
                            <h5 className="text-[28px] font-semibold text-[#111] mb-2">
                                Drop me a line
                            </h5>
                            <p>I'm here to answer any question you may have</p>
                        </div>
                        <form onSubmit={sendToWhatsApp}>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-2/4">
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            required
                                            placeholder="Name"
                                            id="name"
                                            className="h-11 w-full px-3 py-[6px] border border-gray-400 transition-all duration-300 focus:outline-0 focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="w-full lg:w-2/4 lg:pl-4">
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            required
                                            placeholder="Email"
                                            id="email"
                                            className="h-11 w-full px-3 py-[6px] border border-gray-400 transition-all duration-300 focus:outline-0 focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <div className="mb-4">
                                        <textarea
                                            required
                                            placeholder="Your Message"
                                            id="message"
                                            className="h-[150px] w-full px-3 py-[6px] border border-gray-400 transition-all duration-300 focus:outline-0 focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <div className="mb-4">
                                        <button className="inline-block rounded-lg font-semibold bg-primary border border-transparent py-3 px-[25px] transition-all duration-300 ease-in hover:bg-transparent hover:border-primary text-white hover:text-primary">
                                            Send Message!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Contact Information */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="w-full lg:w-2/6 px-4 mt-4 lg:mt-0"
                >
                    <div className="shadow-lg bg-white px-7 py-4 h-full">
                        {/* Address */}
                        <div className="flex py-5">
                            <div className="icon">
                                <span className="h-[50px] w-[50px] rounded-full flex justify-center items-center bg-[#111]">
                                    <FaMapLocation className="text-white" />
                                </span>
                            </div>
                            <div className="feature-content pl-4">
                                <h5 className="font-semibold mb-2 text-black">Address</h5>
                                <p>Area 10, Garki, Abuja 900103, Federal Capital Territory, Nigeria</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex py-5">
                            <div className="icon">
                                <span className="h-[50px] w-[50px] rounded-full flex justify-center items-center bg-[#111]">
                                    <FaEnvelope className="text-white" />
                                </span>
                            </div>
                            <div className="feature-content pl-4">
                                <h5 className="font-semibold mb-2 text-black">Email</h5>
                                <p>graphixhonesty@gmail.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex py-5">
                            <div className="icon">
                                <span className="h-[50px] w-[50px] rounded-full flex justify-center items-center bg-[#111]">
                                    <FaPhone className="text-white" />
                                </span>
                            </div>
                            <div className="feature-content pl-4">
                                <h5 className="font-semibold mb-2 text-black">Phone</h5>
                                <p>WhatsApp: +2347063907095</p>
                                <p>Mobile: 08144098649</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Contact