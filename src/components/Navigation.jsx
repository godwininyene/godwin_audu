import React from 'react';
// import resume from './../assets/Godwin-Inyene-resume.pdf'
import { MdClose } from 'react-icons/md';
import {LuMenu} from 'react-icons/lu';
import { Link } from 'react-scroll';
const Navigation = () => {

    const[isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = ()=> setIsOpen(prev => !prev);

    const[isFixedClass, setiSFixedClass] = React.useState(false);

    const addFixedClass = ()=> window.pageYOffset > 200 ? setiSFixedClass(true) :setiSFixedClass(false);

    window.addEventListener('scroll', addFixedClass	)
    
    const fixedHeader ={
        // position: "fixed",
        // top: "0", 
        // left: "0",
        // width:"100%",
        // zIndex: "9999",
        // borderBottom: "2px solid #FFB400",
        background:'#fff',
        color:"black",
        boxShadow:"0 10px 5px rgba(15, 16, 24, 0.1)"
    }
    const nav_items = [
       {id:0,title:"Home"},
       { id:1,title:"About"},
       {id:2,title:"Services"},
       {id:3,title:"Portfolio"},
       {id:6,title:"Contact"}
    ]

  return (
    <div id='' className={`header border-b fixed z-50 left-0 top-0 w-full border-[rgba(255,255,255,0.17)]  ${isFixedClass ? 'animate-fadeInDown' :''}`} style={isFixedClass ? fixedHeader : {}}>
       <div className='max-w-[1140px] mx-auto w-full'> 
            <nav className='flex items-center  justify-between flex-wrap lg:flex-nowrap px-5 py-3 relative'>
                <a href="" className='py-2  text-2xl text-primary font-bold'>
                    GODWIN
                </a>

                {/*Mobile Nav Icon */}
                <button className=' border-0 outline-0 shadow-none block lg:hidden' onClick={toggleMenu}>
                    {
                        (!isOpen) ?(
                                <LuMenu className={`text-3xl ${isFixedClass ? 'text-primary' : 'text-white'}`}/>
                            )
                            
                            :(
                                <MdClose className={`text-3xl ${isFixedClass ? 'text-primary' : 'text-white'}`}/>
                        ) 
                    }
                   
                </button>

                <div className={`${isOpen ? 'h-[195px] bg-white': 'h-0'} overflow-hidden  lg:h-auto lg:flex items-center basis-full grow transition-all duration-300 ease-linear`}>
                    <ul className='flex-col  lg:flex-row flex lg:items-center ml-auto ' id='header-nav'>
                        {nav_items.map((el)=>(
                            <li key={el.id} className='border-t lg:border-t-0 border-[#e6e6e6] py-2'>
                            <Link to={`${el.title}`} activeClass={'text-primary'}spy={true} smooth={true} offset={0} duration={1000} className={`text-[15px] font-semibold ${isFixedClass || isOpen ? 'text-black' :'text-white '} py-8 px-4 hover:text-primary cursor-pointer`} >{el.title}</Link>
                        </li>
                        ))}
                    </ul>
                    <a href='' download={true} className={`hidden lg:inline-block  leading-[46px]  rounded-lg font-semibold  border border-primary ml-4 ps-6 pe-6 transition-all duration-300 ease-in hover:bg-primary ${isFixedClass ? 'text-primary' : 'text-white'}`}>Download Cv</a>
                </div>
            </nav>
       </div>
    </div>
  )
}

export default Navigation