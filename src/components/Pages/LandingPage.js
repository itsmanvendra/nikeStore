import React, {useState, useEffect} from "react";
import {collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import CategoryItem from "../components/CategoryItem";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { set } from "lodash";
import OtherImpLinks from "../components/OtherImpLinks";
import Footer from "../components/Footer";

export default function LandingPage() {
    const [showCategories, setShowCategories] = useState();
    const categoriesRef = collection(db, "categories");
    const getData = async () => {
    try{
        const categoriesDocData = await getDocs(categoriesRef)
        const categories = categoriesDocData.docs.map((doc) => ({
        ...doc.data(), id: doc.id
        }))
        console.log(categories)
        setShowCategories(categories)
    }
    catch(error){
        console.log(error)
        console.log("no data")
    }
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <>  
            <Navigation />
            <Header />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <img className="p-2 mx-auto " src={require("../../images/jordan.jpeg")} alt="Jordan 1 Mid SE" />
                <div className="flex flex-col m-4 justify-center items-center" >
                    <p className=" text-start font-sans font-bold text-slate-900 m-1">JORDAN MEN</p>
                    <p className="text-3xl text-start font-sans font-bold text-slate-900 m-1">JORDAN MAX AURA 5</p>
                    <p className="text-start font-sans text-slate-900 m-1">Next-gen comfort meets ever-iconic heritage details.</p>
                    <button className="bg-slate-900 hover:opacity-50 text-white font-bold py-2 px-4 rounded-full m-5">SHOP</button>
                </div>
            </div>  
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col mx-4 mb-0" >
                    <h1 className="text-2xl text-start font-sans font-bold text-slate-900">SHOP JORDAN ESSENTIALS</h1>
                </div> 
                <div className="grid grid-cols-3 gap-4 justify-evenly content-center my-2 mx-4">
                    {showCategories && showCategories.map((category, index) => (
                        <div key={index} className="justify-items-center items-center">
                                <CategoryItem category={category}/>
                            </div>
                    ))}
                </div> 
            </div>
            <div className="m-20"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col mx-2 mb-0" >
                    <h1 className="text-2xl text-start font-sans font-bold text-slate-900">TRENDING</h1>
                </div> 
                <img className="p-2 mx-auto " src={"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1423,c_limit/acafe794-802c-40b9-a097-bec7778e6b07/jordan.png"} alt="Jordan 1 Mid SE" />
                <div className="flex flex-col m-4 justify-center items-center" >
                    <p className=" text-start font-sans font-bold text-slate-900 m-1">JORDAN MEN</p>
                    <p className="text-3xl text-start font-sans font-bold text-slate-900 m-1">STATEMENT FLEECE</p>
                    <p className="text-center font-sans text-slate-900 m-1">Make a statement while staying comfortable in Jordan's roomy Statement Fleece. Made with premium
cotton, metal tip drawcords and Jumpman patches, you can flex your style however you like.</p>
                    <button className="bg-slate-900 hover:opacity-50 text-white font-bold py-2 px-4 rounded-full m-5">SHOP</button>
                </div>
            </div>  
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col mx-2 mb-0" >
                    <h1 className="text-2xl text-start font-sans font-bold text-slate-900">THE LATEST</h1>
                </div> 
                <img className="p-2 mx-auto " src={"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1423,c_limit/64a15e14-8901-4446-a5a7-0d736370eac8/jordan.png"} alt="Jordan 1 Mid SE" />
                <div className="flex flex-col m-4 justify-center items-center" >
                    <p className=" text-start font-sans font-bold text-slate-900 m-1">JORDAN WOMEN</p>
                    <p className="text-3xl text-start font-sans font-bold text-slate-900 m-1">WOMEN'S SPORT</p>
                    <p className="text-center font-sans text-slate-900 m-1">Defy gravity in pieces that are made to move as effortlessly as you do.</p>
                    <button className="bg-slate-900 hover:opacity-50 text-white font-bold py-2 px-4 rounded-full m-5">SHOP</button>
                </div>
            </div>
            <OtherImpLinks />
            <Footer />  
            
            
            
        </>

    )
}





    