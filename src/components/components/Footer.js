import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faSquareXTwitter,faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faSquareXTwitter,faFacebook, faYoutube, faInstagram)

// import { faInstagram, faSquareXTwitter, faYoutube, faFacebook } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
    return (
        <div className="bg-black text-white p-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-4 gap-4 m-4 mx-10 justify-center items-start" >
                    <div className="flex flex-col justify-center" >
                        <p className="p-2 text-white text-semibold text-start font-sans uppercase">Find A Store</p>
                        <p className="p-2 text-white text-semibold text-start font-sans uppercase">Become A Member</p>
                        <p className="p-2 text-white text-semibold text-start font-sans">Send Us Feedback</p>
                        <p className="p-2 text-white text-semibold text-start font-sans uppercase">Student Discounts</p>
                    </div>
                    <div className="flex flex-col justify-center" >
                        <p className="p-2 text-white text-semibold text-start font-sans uppercase">Get Help</p>
                        <div className="flex flex-col justify-center my-2">
                        <p className=" p-1 text-zinc-400 text-start font-sans">Order Status</p> 
                        <p className=" p-1 text-zinc-400 text-start font-sans">Delivery</p> 
                        <p className=" p-1 text-zinc-400 text-start font-sans">Payment Options</p> 
                        <p className=" p-1 text-zinc-400 text-start font-sans">Contact Us on Nike.com</p> 
                        <p className=" p-1 text-zinc-400 text-start font-sans">Inquires</p> 
                        <p className=" p-1 text-zinc-400 text-start font-sans">Contact Us on All Other</p> 
                        </div>
                    </div>
                    <div className="flex flex-col justify-center" >
                        <p className="p-2 text-white text-semibold text-start font-sans uppercase">About Nike</p>
                        <div className="flex flex-col justify-center my-2">
                        <p className=" p-1 text-zinc-400 text-start font-sans">News</p> 
                        <p className=" p-1 text-zinc-400 text-start font-sans">Careers</p> 
                        <p className=" p-1 text-zinc-400 text-start font-sans">Investor</p> 
                        <p className=" p-1 text-zinc-400 text-start font-sans">Sustainablity</p> 
                        </div>
                    </div>
                    <div className="flex flex-row justify-center" >
                        <p className="p-2 text-white text-semibold text-center font-sans uppercase"><FontAwesomeIcon icon={faSquareXTwitter} style={{color: "#a1a1aa",}} size="lg" /></p>
                        <p className="p-2 text-white text-semibold text-center font-sans uppercase"><FontAwesomeIcon icon={faInstagram} style={{color: "#a1a1aa",}} size="lg" /></p>
                        <p className="p-2 text-white text-semibold text-center font-sans"><FontAwesomeIcon icon={faYoutube} style={{color: "#a1a1aa",}} size="lg" /></p>
                        <p className="p-2 text-white text-semibold text-center font-sans uppercase"><FontAwesomeIcon icon={faFacebook} style={{color: "#a1a1aa",}} size="lg" /></p>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row m-2 justify-between items-center gap-2">
                    <div  className="flex flex-row justify-center">
                        <p className="text-gray-300 font-sans">Manvendra Pratap Singh💟</p>
                        
                    </div>
                    <div className="flex flex-row justify-center">
                        <p className="text-gray-500 px-2">Guides</p>
                        <p className="text-gray-500 px-2">Terms of Sale</p>
                        <p className="text-gray-500 px-2">Terms of Use</p>
                        <p className="text-gray-500 px-2"> Nike Privacy Policy</p>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}