import Page from '../components/Page';
import FormProfileData from '../components/profileComponent/FormProfileData';
import FormProfileEmail from '../components/profileComponent/FormProfileEmail';
import FormProfilePassword from '../components/profileComponent/FormProfilePassword';
import { system } from '../data/system';
import useProfile from '../hooks/useProfile';
import './style/profile.css';

const Profile = () => {
	const { dataDefault } = useProfile();
	return (
		<Page title={system.page.profile.title}>
			<section className='profile'>
				{dataDefault && (
					<FormProfileData
						initForm={{
							ci: dataDefault?.ci,
							name: dataDefault?.name,
							surname: dataDefault?.surname,
						}}
					/>
				)}
				{dataDefault && (
					<FormProfilePassword
						initForm={{
							oldPassword: '',
							newPassword: '',
						}}
					/>
				)}
				{dataDefault && (
					<FormProfileEmail
						initForm={{
							email: dataDefault?.email,
							password: '',
						}}
					/>
				)}
			</section>
		</Page>
	);
};
export default Profile;
