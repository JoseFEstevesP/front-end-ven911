import { system } from '../data/system';
import useModal from '../hooks/useModal';
import Btn from './Btn';
import Creators from './Creators';
import Credit from './Credit';
import Icons from './Icons';
import Modal from './Modal';
import './style/footer.css';
const Footer = () => {
	const [isOpenCredit, handleOpenCredit, handelCloseCredit] = useModal();
	const [isOpenCreator, handleOpenCreator, handelCloseCreator] = useModal();
	return (
		<>
			<Modal isOpen={isOpenCredit} close={handelCloseCredit}>
				<Credit />
			</Modal>
			<Modal isOpen={isOpenCreator} close={handelCloseCreator}>
				<Creators />
			</Modal>
			<section className='footer'>
				<div className='footer__contentBtn'>
					<Btn
						text={system.component.footer.credit.title}
						className='footer__btn'
						handleClick={handleOpenCredit}
					/>
					<Btn
						text={system.component.footer.creator.title}
						className='footer__btn'
						handleClick={handleOpenCreator}
					/>
				</div>
				<div className='footer__socialMedia'>
					<a
						href='https://www.youtube.com/channel/UCZQjUsBqIrV2JOJJT-jj5_w'
						rel='noopener noreferrer'
						target='_blank'
						className='footer__social'
					>
						<Icons iconName={'youtube'} />
					</a>
					<a
						href='https://www.instagram.com/ven911oficial/?hl=es-la'
						rel='noopener noreferrer'
						target='_blank'
						className='footer__social'
					>
						<Icons iconName={'instagram'} />
					</a>
					<a
						href='https://twitter.com/oficialven911'
						rel='noopener noreferrer'
						target='_blank'
						className='footer__social'
					>
						<Icons iconName={'twitter'} />
					</a>
					<a
						href='https://www.facebook.com/PrensaVen911'
						rel='noopener noreferrer'
						target='_blank'
						className='footer__social'
					>
						<Icons iconName={'facebook'} />
					</a>
				</div>
			</section>
		</>
	);
};
export default Footer;
