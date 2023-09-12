import Icons from './Icons';
import './style/btn.css';
const Btn = ({
	className = '',
	disabled = false,
	handleClick,
	typeIcon = 'system',
	nameIcon,
	classIcon = '',
	title,
	text,
	type = 'button',
	name,
	sizeIcon,
}) => {
	return (
		<button
			name={name}
			title={title}
			type={type}
			className={`btn ${className}`}
			onClick={handleClick}
			disabled={disabled}
		>
			{text || ''}
			{nameIcon && (
				<Icons
					iconName={nameIcon}
					type={typeIcon}
					className={classIcon}
					size={sizeIcon}
				/>
			)}
		</button>
	);
};
export default Btn;
