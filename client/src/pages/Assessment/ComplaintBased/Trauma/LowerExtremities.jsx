import React from 'react'

const LowerExtremities = ({state, setState}) => {
    const handleChange = (e) => {
		setState(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}
    
    return (
        <div>
            Lower Extremities Tab
        </div>
    )
}

export default LowerExtremities
