import React from "react";
import ImageWithOverlay from "./ImageWithOverlay";

export default function CategoryItem({ category}) {
    return (
        
            <div className="flex flex-col justify-evenly" >
                <ImageWithOverlay imageUrl={category.imageUrl} altText={category.title} />
                {/* <img className="p-2 mx-auto " src={category.imageUrl} alt="Jordan 1 Mid SE" /> */}
                <h2 className="px-2 pb-1 text-slate-750 font-sans font-semibold uppercase">{category.title}</h2>
            </div>
            
            
        
    )
}