import React from 'react'

const Neck = ({state, setState}) => {
    const handleChange = (e) => {
		setState(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}
    
    return (
        <div>
            Neck Tab
        </div>
    )
}

export default Neck
