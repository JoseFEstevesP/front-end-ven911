const Icon = ({ className, iconName }) => {
	const icons = {
		user: (
			<svg className={`${className}`} viewBox='0 0 17 17' fill='none'>
				<path d='M8.5332 0.5C9.59407 0.5 10.6115 0.921427 11.3616 1.67157C12.1118 2.42172 12.5332 3.43913 12.5332 4.5C12.5332 5.56087 12.1118 6.57828 11.3616 7.32843C10.6115 8.07857 9.59407 8.5 8.5332 8.5C7.47234 8.5 6.45492 8.07857 5.70478 7.32843C4.95463 6.57828 4.5332 5.56087 4.5332 4.5C4.5332 3.43913 4.95463 2.42172 5.70478 1.67157C6.45492 0.921427 7.47234 0.5 8.5332 0.5ZM8.5332 10.5C12.9532 10.5 16.5332 12.29 16.5332 14.5V16.5H0.533203V14.5C0.533203 12.29 4.1132 10.5 8.5332 10.5Z' />
			</svg>
		),
		sun: (
			<svg className={`${className}`} viewBox='0 0 21 21' fill='none'>
				<path d='M9.56546 2.75806V1.46774C9.56546 1.21108 9.66742 0.964932 9.84891 0.783445C10.0304 0.601958 10.2765 0.5 10.5332 0.5C10.7899 0.5 11.036 0.601958 11.2175 0.783445C11.399 0.964932 11.5009 1.21108 11.5009 1.46774V2.75806C11.5009 3.01473 11.399 3.26087 11.2175 3.44236C11.036 3.62385 10.7899 3.72581 10.5332 3.72581C10.2765 3.72581 10.0304 3.62385 9.84891 3.44236C9.66742 3.26087 9.56546 3.01473 9.56546 2.75806ZM16.0171 10.5C16.0171 11.5846 15.6954 12.6449 15.0929 13.5467C14.4903 14.4485 13.6338 15.1514 12.6318 15.5664C11.6297 15.9815 10.5271 16.0901 9.46335 15.8785C8.39959 15.6669 7.42245 15.1446 6.65552 14.3777C5.88859 13.6107 5.3663 12.6336 5.1547 11.5698C4.94311 10.5061 5.05171 9.40346 5.46677 8.40141C5.88183 7.39937 6.58471 6.5429 7.48653 5.94033C8.38835 5.33775 9.4486 5.01613 10.5332 5.01613C11.9872 5.01762 13.3811 5.59587 14.4092 6.62397C15.4373 7.65207 16.0156 9.04605 16.0171 10.5ZM14.0816 10.5C14.0816 9.79819 13.8735 9.11215 13.4836 8.52862C13.0937 7.94509 12.5395 7.49029 11.8911 7.22172C11.2427 6.95315 10.5293 6.88288 9.84095 7.01979C9.15263 7.15671 8.52036 7.49466 8.02411 7.99091C7.52786 8.48716 7.18991 9.11942 7.053 9.80774C6.91608 10.4961 6.98635 11.2095 7.25492 11.8579C7.52349 12.5063 7.9783 13.0605 8.56182 13.4504C9.14535 13.8403 9.8314 14.0484 10.5332 14.0484C11.474 14.0473 12.3759 13.6731 13.0411 13.0079C13.7063 12.3427 14.0805 11.4408 14.0816 10.5ZM4.36465 5.70081C4.45467 5.79083 4.56154 5.86223 4.67916 5.91095C4.79677 5.95967 4.92283 5.98474 5.05014 5.98474C5.17744 5.98474 5.3035 5.95967 5.42112 5.91095C5.53874 5.86223 5.6456 5.79083 5.73562 5.70081C5.82564 5.61079 5.89705 5.50392 5.94577 5.3863C5.99448 5.26869 6.01956 5.14263 6.01956 5.01532C6.01956 4.88802 5.99448 4.76196 5.94577 4.64434C5.89705 4.52673 5.82564 4.41986 5.73562 4.32984L4.76788 3.3621C4.58608 3.1803 4.3395 3.07816 4.0824 3.07816C3.82529 3.07816 3.57871 3.1803 3.39691 3.3621C3.21511 3.5439 3.11298 3.79047 3.11298 4.04758C3.11298 4.30469 3.21511 4.55126 3.39691 4.73306L4.36465 5.70081ZM4.36465 15.2976L3.39691 16.2653C3.30689 16.3553 3.23549 16.4622 3.18677 16.5798C3.13805 16.6974 3.11298 16.8235 3.11298 16.9508C3.11298 17.0781 3.13805 17.2042 3.18677 17.3218C3.23549 17.4394 3.30689 17.5463 3.39691 17.6363C3.57871 17.8181 3.82529 17.9202 4.0824 17.9202C4.2097 17.9202 4.33576 17.8952 4.45338 17.8464C4.57099 17.7977 4.67786 17.7263 4.76788 17.6363L5.73562 16.6685C5.91742 16.4867 6.01956 16.2402 6.01956 15.9831C6.01956 15.726 5.91742 15.4794 5.73562 15.2976C5.55382 15.1158 5.30724 15.0136 5.05014 15.0136C4.79303 15.0136 4.54646 15.1158 4.36465 15.2976ZM16.0171 5.98387C16.1442 5.98397 16.2701 5.95902 16.3876 5.91045C16.5051 5.86189 16.6118 5.79065 16.7018 5.70081L17.6695 4.73306C17.7595 4.64305 17.8309 4.53618 17.8796 4.41856C17.9284 4.30095 17.9534 4.17489 17.9534 4.04758C17.9534 3.92027 17.9284 3.79421 17.8796 3.6766C17.8309 3.55898 17.7595 3.45212 17.6695 3.3621C17.5795 3.27208 17.4726 3.20067 17.355 3.15195C17.2374 3.10323 17.1113 3.07816 16.984 3.07816C16.8567 3.07816 16.7306 3.10323 16.613 3.15195C16.4954 3.20067 16.3885 3.27208 16.2985 3.3621L15.3308 4.32984C15.1946 4.46519 15.1018 4.63798 15.0641 4.82624C15.0265 5.01449 15.0456 5.20969 15.1192 5.38701C15.1928 5.56434 15.3175 5.71577 15.4773 5.82206C15.6372 5.92834 15.8251 5.98466 16.0171 5.98387ZM16.7018 15.2992C16.5199 15.1174 16.2734 15.0153 16.0163 15.0153C15.7592 15.0153 15.5126 15.1174 15.3308 15.2992C15.149 15.481 15.0468 15.7276 15.0468 15.9847C15.0468 16.2418 15.149 16.4884 15.3308 16.6702L16.2985 17.6379C16.4803 17.8197 16.7269 17.9218 16.984 17.9218C17.2411 17.9218 17.4877 17.8197 17.6695 17.6379C17.8513 17.4561 17.9534 17.2095 17.9534 16.9524C17.9534 16.6953 17.8513 16.4487 17.6695 16.2669L16.7018 15.2992ZM3.75901 10.5C3.75901 10.2433 3.65705 9.99719 3.47556 9.8157C3.29408 9.63422 3.04793 9.53226 2.79127 9.53226H1.50095C1.24428 9.53226 0.998135 9.63422 0.816648 9.8157C0.635161 9.99719 0.533203 10.2433 0.533203 10.5C0.533203 10.7567 0.635161 11.0028 0.816648 11.1843C0.998135 11.3658 1.24428 11.4677 1.50095 11.4677H2.79127C3.04793 11.4677 3.29408 11.3658 3.47556 11.1843C3.65705 11.0028 3.75901 10.7567 3.75901 10.5ZM10.5332 17.2742C10.2765 17.2742 10.0304 17.3762 9.84891 17.5576C9.66742 17.7391 9.56546 17.9853 9.56546 18.2419V19.5323C9.56546 19.7889 9.66742 20.0351 9.84891 20.2166C10.0304 20.398 10.2765 20.5 10.5332 20.5C10.7899 20.5 11.036 20.398 11.2175 20.2166C11.399 20.0351 11.5009 19.7889 11.5009 19.5323V18.2419C11.5009 17.9853 11.399 17.7391 11.2175 17.5576C11.036 17.3762 10.7899 17.2742 10.5332 17.2742ZM19.5655 9.53226H18.2751C18.0185 9.53226 17.7723 9.63422 17.5908 9.8157C17.4094 9.99719 17.3074 10.2433 17.3074 10.5C17.3074 10.7567 17.4094 11.0028 17.5908 11.1843C17.7723 11.3658 18.0185 11.4677 18.2751 11.4677H19.5655C19.8221 11.4677 20.0683 11.3658 20.2498 11.1843C20.4312 11.0028 20.5332 10.7567 20.5332 10.5C20.5332 10.2433 20.4312 9.99719 20.2498 9.8157C20.0683 9.63422 19.8221 9.53226 19.5655 9.53226Z' />
			</svg>
		),
		moon: (
			<svg className={`${className}`} viewBox='0 0 17 17' fill='none'>
				<path d='M16.2677 9.81134C16.1514 9.69489 16.0057 9.61228 15.8461 9.57238C15.6864 9.53248 15.5189 9.5368 15.3616 9.58486C14.2622 9.91666 13.0935 9.94412 11.9798 9.66431C10.8661 9.3845 9.84914 8.80791 9.0373 7.99594C8.22547 7.18398 7.64913 6.16706 7.36968 5.0535C7.09024 3.93994 7.11815 2.77145 7.45044 1.6725C7.49892 1.5151 7.50356 1.34747 7.46387 1.18763C7.42418 1.02779 7.34165 0.88179 7.22517 0.765335C7.10869 0.64888 6.96266 0.566374 6.80278 0.526691C6.64291 0.487008 6.47524 0.491649 6.3178 0.540115C4.66445 1.04817 3.21353 2.06473 2.17158 3.44506C1.26041 4.65588 0.704762 6.0966 0.566978 7.60556C0.429193 9.11452 0.714727 10.632 1.39154 11.9878C2.06835 13.3435 3.10967 14.4839 4.39863 15.2809C5.6876 16.0779 7.17322 16.5001 8.6888 16.5C10.4582 16.5052 12.1806 15.9299 13.5916 14.8625C14.9715 13.8198 15.9873 12.3684 16.4942 10.715C16.5418 10.558 16.5459 10.391 16.506 10.2318C16.4661 10.0727 16.3837 9.92733 16.2677 9.81134ZM12.5013 13.4153C11.2799 14.3346 9.76755 14.7819 8.24253 14.6749C6.71751 14.5679 5.28245 13.9139 4.20145 12.8331C3.12045 11.7524 2.46625 10.3176 2.35925 8.79295C2.25225 7.26828 2.69964 5.75626 3.6191 4.53517C4.10291 3.89535 4.70251 3.35196 5.38677 2.93322C5.37318 3.12648 5.36638 3.3205 5.36638 3.51527C5.36878 5.67689 6.22874 7.74929 7.75758 9.27779C9.28642 10.8063 11.3593 11.6661 13.5214 11.6685C13.7162 11.6685 13.9103 11.6617 14.1036 11.6481C13.6849 12.3323 13.1414 12.9318 12.5013 13.4153Z' />
			</svg>
		),
	};
	return icons[iconName];
};
export default Icon;