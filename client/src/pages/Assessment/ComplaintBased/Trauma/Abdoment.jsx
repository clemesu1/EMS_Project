import React from 'react'

const Abdoment = ({state, setState}) => {
    const handleChange = (e) => {
		setState(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}
    
    return (
        <div>
            Abdoment Tab
        </div>
    )
}

export default Abdoment
