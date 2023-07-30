import React from 'react';


const SearchBox = ({searchChange}) =>{

	return (
		<div className='pa2'>
			<input 
				className='Pa3 bg-lightest-blue b--green ba'
				type='serach' 
				placeholder='search robots'
				onChange = {searchChange}
			/>

		</div>
		);
}
export default SearchBox;