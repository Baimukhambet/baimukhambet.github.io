import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'nFactorial School',
		description: 'Created AI-based application',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Almaty, Kazakhstan',
		period: { from: new Date(2023, 5, 1), to: new Date(2023, 7, 11) },
		skills: getSkills('swift'),
		name: 'iOS Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Swift,
		shortDescription: ''
	},
	{
		slug: 'mentorship',
		company: 'Self-employed',
		description: 'Tutoring and mentoring 1st year students',
		contract: ContractType.SelfEmployed,
		type: 'Programming Principles',
		location: 'Home',
		period: { from: new Date(2023, 8, 1) },
		skills: getSkills('cpp', 'python'),
		name: 'Tutoring/Mentorship',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'internship',
		company: 'One Tech',
		description: 'iOS Intern in One Tech',
		contract: ContractType.Internship,
		type: 'Internship',
		location: 'Home',
		period: { from: new Date(2024, 1, 1) },
		skills: getSkills('swift'),
		name: 'One Tech iOS Intern',
		color: '#ffffff',
		links: [],
		logo: Assets.Swift,
		shortDescription: ''
	},
];

export default MY_EXPERIENCES;
