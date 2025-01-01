import { useEffect, useState } from "react";
import { categories, projects } from '../data/data';
import useCustomSearchParams  from './../hooks/useCustomSearchParams'
const Portfolio = () => {
    
    const [searchParams, updateSearchParams, clearSearchParams] = useCustomSearchParams();
    const typeFilter = searchParams.category;
    const displayProjects = typeFilter ? projects.filter(project => project.type == typeFilter) : projects; 
    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("portfolio-grid");
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="Portfolio" className="py-[60px] lg:py-[100px]">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1140px]">
                {/* Title Section */}
                <div className="flex justify-center mb-6 lg:mb-11">
                    <div className="w-full lg:w-2/3 px-4">
                        <div className="text-center">
                            <h2 className="font-semibold text-black inline-block relative text-[32px] after:w-[60px] after:block after:left-[52px] after:mx-auto after:h-[3px] after:absolute  after:bottom-[-10px] after:bg-[#111]">
                                <span className="text-primary">My</span> Portfolio
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1140px]">
                <div className="mb-5">
                    <h2 className='mb-4 text-center text-2xl lg:text-4xl font-semibold'>
                        Some Of My Creative Work
                    </h2>
                   
                    <ul className='mb-10 flex flex-wrap justify-center text-center '>
                        <li className="py-[5px] mr-[15px]">
                            <button
                                onClick={()=> clearSearchParams()}
                                className={`inline-block text-black font-semibold uppercase transition-all duration-100 hover:text-primary ${typeFilter == undefined ? 'text-primary border-b border-primary': null}`}>
                                All
                            </button>
                        </li>
                        {
                            categories.map(category =>(
                                <li key={category.cat_id} className="mx-[15px] py-[5px]">
                                    <button 
                                        onClick={()=>updateSearchParams({category: category.cat_title})} 
                                        className={`text-black font-semibold cursor-pointer uppercase transition-all duration-100  hover:text-primary ${typeFilter == category.cat_title ? 'text-primary border-b border-primary' : null}  `}>
                                        {category.cat_title}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Portfolio Gallery */}
                <div
                    id="portfolio-grid"
                    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${isVisible ? "opacity-100 transition-opacity duration-1000" : "opacity-0"}`}
                >
                    {
                        (displayProjects.length > 0)?(
                            displayProjects.map(project=>(
                                <div className="relative transform transition-all duration-500 ease-in-out hover:scale-105">
                                    <img src={project.image} alt=""className="w-full h-auto object-cover rounded-lg"/>
                                </div>
                            ))
                        ):<h1 className="text-2xl mb-4 font-bold">No Project(s) for this category at the moment. Please check back later.</h1>
                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
