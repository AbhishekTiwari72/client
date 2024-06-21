'use client';
import React from 'react'
import CountUp from 'react-countup'

interface BadgeProps {
    endCountNum: number;
    endCountText: string;
}

const Badge: React.FC<BadgeProps> = ({ endCountNum, endCountText }) => {
    return (
        <div >
            <div className='flex items-center justify-center gap-x-2'>
                <div className='text-4xl leading-none font-sans'>
                    <CountUp end={endCountNum} delay={1} />
                </div>
                <div className="text-4xl leading-none font-sans ml-2">
                    {endCountText}
                </div>
            </div>
        </div>
    )
}

export default Badge