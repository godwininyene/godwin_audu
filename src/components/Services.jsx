import { AiOutlineFilePdf } from "react-icons/ai"
import { FaPaintBrush, FaUserAstronaut } from "react-icons/fa"
import { FiBox, FiEdit, FiInstagram, FiShoppingBag } from "react-icons/fi"

const Services = () => {
    return(
        <section id="Services" className="py-[60px] lg:py-[100px] bg-[#f3f3f3]">
        <div className="mx-auto max-w-[1140px]">
            {/* Header */}
            <div className="flex justify-center mb-6 lg:mb-11">
                <div className="w-full lg:w-2/3 px-4">
                    <div className="text-center">
                        <h2
                            data-aos="fade-up"
                            className="font-semibold relative text-black inline-block text-[32px] after:w-[60px] after:m-auto after:h-[3px] after:absolute after:left-[52px] after:bottom-[-10px] after:bg-[#111]"
                        >
                            <span className="text-primary">My</span> Services
                        </h2>
                    </div>
                </div>
            </div>
            {/* Service Cards */}
            <div className="flex justify-center flex-wrap">
                {[
                    {
                        icon: <FaPaintBrush />,
                        title: "Brand Identity Design",
                        description:
                            "Crafting unique and memorable brand identities, including logos, color schemes, and typography, to help businesses stand out.",
                    },
                    {
                        icon: <AiOutlineFilePdf />,
                        title: "Print Design",
                        description:
                            "Designing eye-catching materials like brochures, flyers, business cards, and posters for both digital and print media.",
                    },
                    {
                        icon: <FiInstagram />,
                        title: "Social Media Graphics",
                        description:
                            "Designing engaging graphics to elevate your brand presence on social platforms.",
                    },
                    {
                        icon: <FiEdit />,
                        title: "Logo Design",
                        description:
                            "Crafting unique and memorable logos that embody your brand identity.",
                    },
                    {
                        icon: <FiBox />,
                        title: "Packaging Design",
                        description:
                            "Creating attractive and functional packaging designs that resonate with your audience.",
                    },
                    {
                        icon: <FiShoppingBag />,
                        title: "Custom Apparel Printing",
                        description:
                            "Creating personalized designs and printing them on clothes for individuals or businesses.",
                    },
                ].map((service, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="w-full lg:w-1/3 px-4 my-4"
                    >
                        <div className="bg-white rounded-md h-full py-10 px-5 shadow-md transition-all duration-[0.35s] ease-in-out border-[5px] border-transparent hover:border-primary hover:-translate-y-3">
                            <div className="mb-5 text-[54px] text-primary">
                                {service.icon}
                            </div>
                            <div>
                                <h6 className="mb-1 font-bold text-lg text-black">{service.title}</h6>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}
export default Services