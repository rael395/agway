import React from "react";
import Link from 'next/link';

const CTA = ({ className, title, description, cta_label, cta_link }) => {
    return (
        <section className={`${className}`}>
            <div className="container px-4 mx-auto">
                <div className="flex justfify-center">
                    <div className="w-full max-w-2xl items-center mx-auto text-center">
                        <h2 className="text-white text-6xl font-medium mb-8">
                            {title}
                        </h2>
                        <p className="text-white text-lg opacity-60 leading-realxed mb-8">{description}</p>
                        <p>
                            <Link 
                            href={cta_link}
                            className="transition-all duration-300 ease-in-out inline-block text-[11.5px] tracking-[2px] font-bold uppercase bg-[#FB2576] py-4
                            px-5 text-white hover:bg-white hover:text-blue-500 hover:shadow-2xl"
                            >
                            {cta_label}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};
export default CTA;