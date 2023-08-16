import React from "react";
import JordanLogo from "../../images/JordanLogo"

export default function Header() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col m-4 justify-center items-center" >
                <JordanLogo />
                <div className="flex flex-row m-2 justify-center items-center gap-2">
                    <h4 className="text-slate-950 hover:text-slate-500 active:text-blue-600 active:underline hover:decoration-blue-700 font-medium 
                    p-2">New Releases</h4>
                    <h4 className="text-slate-950 hover:text-slate-500 font-medium 
                    p-2">Jordan Sport</h4>
                    <h4 className="text-slate-950 hover:text-slate-500 font-medium 
                    p-2">Men</h4>
                    <h4 className="text-slate-950 hover:text-slate-500 font-medium 
                    p-2">Women</h4>
                    <h4 className="text-slate-950 hover:text-slate-500 font-medium 
                    p-2">Kids</h4>
                </div>
            </div>
        </div>
    )
}