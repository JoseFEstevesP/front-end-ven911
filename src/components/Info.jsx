import './style/Info.css';
const Info = ({ title, children, position = 'right' }) => {
	return (
		<>
			<section className='info'>
				<h2 className='info__title' style={{ '--position': position }}>
					{title}
				</h2>
				<p className='info__text'>{children}</p>
			</section>
		</>
	);
};
export default Info;
