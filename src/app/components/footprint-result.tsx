"use client";
import Image from "next/image";
import EarthIcon from "/public/assets/Earth.svg";
import { numberWithComma } from "@/utils";

export function FootprintResult({
    name,
    annualFootprint,
    formIsValid,
}: {
    name: string | null;
    annualFootprint: number | null;
    formIsValid: boolean;
}) {
    return (
        <div className="flex flex-col items-center justify-center text-[#004050] text-2xl font-extralight">
            <div className="w-[330] flex flex-col items-start justify-center space-y-6">
                {formIsValid && name && annualFootprint && (
                    <>
                        <h2>Hi {name}!</h2>

                        <div className="flex flex-col space-y-0">
                            <p>
                                Your <strong className="font-bold">annual</strong> footprint is
                            </p>
                            <div className="flex items-center space-x-2">
                                <div className="text-5xl font-bold">
                                    {numberWithComma(Math.round(annualFootprint))}
                                </div>
                                <div>kgCO₂e</div>
                            </div>
                        </div>

                        <hr className="w-full h-[1px] my-8 bg-[#008290] border-0" />
                        <div className="flex flex-col space-y-0">
                            <p>
                                Your <strong className="font-bold">daily</strong> footprint is
                            </p>
                            <div className="flex items-center space-x-2">
                                <div className="text-5xl font-bold">
                                    {numberWithComma(Math.round(annualFootprint / 365.24))}
                                </div>
                                <div>kgCO₂e</div>
                            </div>
                        </div>
                    </>
                )}
                <div className="flex w-full justify-center">
                    <Image width={189} height={189} alt="Earth Image" src={EarthIcon} />
                </div>
            </div>
        </div>
    );
}
