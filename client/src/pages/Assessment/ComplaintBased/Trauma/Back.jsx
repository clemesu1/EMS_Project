import React from 'react'

const Back = ({state, setState}) => {
    const handleChange = (e) => {
		setState(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}
    
    return (
        <div>
            Back Tab
        </div>
    )
}

export default Back
