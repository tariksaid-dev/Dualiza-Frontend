import React from 'react'

const Spinner = () => {
	return (
		<div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-900 rounded-full" role="status" aria-label="loading">
			<span className="sr-only">Loading News...</span>
		</div>
	)
}

export default Spinner