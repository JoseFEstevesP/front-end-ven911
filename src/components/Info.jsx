import './style/Info.css';
const Info = ({ title, children }) => {
	return (
		<>
			<section className='info'>
				<h2 className='info__title'>{title}</h2>
				<p className='info__text'>{children}</p>
			</section>
		</>
	);
};
export default Info;
