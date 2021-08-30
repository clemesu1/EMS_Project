import React from 'react'

const Chest = ({state, setState}) => {
    const handleChange = (e) => {
		setState(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}
    
    return (
        <div>
            Chest Tab
        </div>
    )
}

export default Chest
