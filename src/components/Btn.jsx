import Icons from './Icons';
import './style/btn.css';
const Btn = ({
	className = 'btn',
	disabled = false,
	handleClick,
	iconType = 'system',
	nameIcon,
	classIcon = 'btn__icon',
	title,
	text,
	type = 'button',
	name,
}) => {
	return (
		<button
			name={name}
			title={title}
			type={type}
			className={className}
			onClick={handleClick}
			disabled={disabled}
		>
			{text || ''}
			{nameIcon && (
				<Icons iconName={nameIcon} type={iconType} className={classIcon} />
			)}
		</button>
	);
};
export default Btn;
