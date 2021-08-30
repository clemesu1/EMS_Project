import React from 'react'

const Pelvis = ({state, setState}) => {
    const handleChange = (e) => {
		setState(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}
    
    return (
        <div>
            Pelvis Tab
        </div>
    )
}

export default Pelvis
