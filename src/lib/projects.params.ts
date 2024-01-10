import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';
import { base } from '$app/paths';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'portfolio-prompter-ai',
		color: '#5e95e3',
		description:
			'Application for enhancing prompts for AI',
		shortDescription:
			'Application for enhancing prompts for AI',
		links: [{ to: 'https://github.com/Baimukhambet/nFactorial-PrompterAI', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'PrompterAI',
		period: {
			from: new Date(2023, 6, 1)
		},
		skills: getSkills('swift'),
		type: 'iOS App'
	},
	{
		slug: 'portfolio-notes-pro',
		color: '#5e95e3',
		description:
			'Notes app with fancy design. Stack: UIKit, Swift, CoreData, programmatic UI',
		shortDescription:
			'Notes app with fancy design',
		links: [{ to: 'https://github.com/Baimukhambet/iOS-NotesPro', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'NotesPro',
		period: {
			from: new Date(2023, 7, 1)
		},
		skills: getSkills('swift'),
		type: 'iOS App',
		screenshots: [
			{
				label: 'Load Screen',
				src: `${base}/screenshots/notes-pro/main.png`
			},
			{
				label: 'Menu',
				src: `${base}/screenshots/notes-pro/tags.png`
			},
			{
				label: '',
				src: `${base}/screenshots/notes-pro/create.png`
			},
			{
				label: '',
				src: `${base}/screenshots/notes-pro/create2.png`
			},
			{
				label: '',
				src: `${base}/screenshots/notes-pro/created.png`
			},
			{
				label: '',
				src: `${base}/screenshots/notes-pro/folders.png`
			},
			{
				label: '',
				src: `${base}/screenshots/notes-pro/create-folder.png`
			},
			{
				label: '',
				src: `${base}/screenshots/notes-pro/folders2.png`
			},
			{
				label: '',
				src: `${base}/screenshots/notes-pro/notes.png`
			},
		]
	},
	{
		slug: 'portfolio-machikoro',
		color: '#ff3e00',
		description:
			'Mobile version of a table game \'Machikoro\'',
		shortDescription:
			'Mobile version of a table game \'Machikoro\'',
		links: [{ to: 'https://github.com/Baimukhambet/iOS-Machikoro', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Machikoro',
		period: {
			from: new Date(2023, 11, 1)
		},
		skills: getSkills('swift', 'firebase'),
		type: 'iOS Online Game',
		screenshots: [
			{
				label: 'Load Screen',
				src: `${base}/screenshots/machikoro/loadScreen.png`
			},
			{
				label: 'Menu',
				src: `${base}/screenshots/machikoro/menu.png`
			},
			{
				label: '',
				src: `${base}/screenshots/machikoro/createRoom.png`
			},
			{
				label: '',
				src: `${base}/screenshots/machikoro/joinRoom.png`
			},
			{
				label: '',
				src: `${base}/screenshots/machikoro/throw.png`
			},
			{
				label: '',
				src: `${base}/screenshots/machikoro/info.png`
			},
			{
				label: '',
				src: `${base}/screenshots/machikoro/store.png`
			},
		]
	}
];

export default MY_PROJECTS;
