import React from 'react'

const UpperExtremities = ({state, setState}) => {
    const handleChange = (e) => {
		setState(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}
    
    return (
        <div>
            Upper Extremities Tab
        </div>
    )
}

export default UpperExtremities
