import React from 'react';
import 'tachyons';

const Card = ({id,name, email})=>{
	return(
		<div className="bg-light-green dib ma3 pa3 bw2 shadow-5 grow br2 tc">
			<img src={`https://robohash.org/${id}`} alt='robots' width='200px' height='200'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card;