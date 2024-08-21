"use client";
import Image from "next/image";
import EarthIcon from "/public/assets/Earth.svg";
export function FootprintResult({
    name,
    annualFootprint,
}: { name: string; annualFootprint: number | null }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-[330] flex flex-col items-center justify-center">
                {annualFootprint && (
                    <>
                        <h2>Hello, {name}</h2>

                        <div>
                            <p>Annual</p>
                            <hr />
                            <p>daily</p>
                        </div>
                    </>
                )}
            </div>
            <Image width={189} height={189} alt="Earth Image" src={EarthIcon} />
        </div>
    );
}
