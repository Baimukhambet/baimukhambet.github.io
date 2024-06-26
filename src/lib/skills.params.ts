import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'swift',
		color: 'cyan',
		description:
			'',
		logo: Assets.Swift,
		name: 'Swift'
	}),
	s({
		slug: 'dart',
		color: 'cyan',
		description:
			'',
		logo: Assets.Dart,
		name: 'Dart'
	}),
	s({
		slug: 'flutter',
		color: 'cyan',
		description:
			'',
		logo: Assets.Flutter,
		name: 'Flutter'
	}),
	s({
		slug: 'cpp',
		color: 'cyan',
		description:
			'',
		logo: Assets.Cpp,
		name: 'C++'
	}),
	s({
		slug: 'python',
		color: 'cyan',
		description:
			'',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'Django',
		color: 'cyan',
		description:
			'',
		logo: Assets.Django,
		name: 'Django'
	}),
	s({
		slug: 'java',
		color: 'cyan',
		description:
			'',
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'firebase',
		color: 'cyan',
		description:
			'',
		logo: Assets.Firebase,
		name: 'Firebase'
	}),
	// s({
	// 	slug: 'sass',
	// 	color: 'pink',
	// 	description:
	// 		'',
	// 	logo: Assets.Sass,
	// 	name: 'Sass'
	// }),
	// s({
	// 	slug: 'reactjs',
	// 	color: 'cyan',
	// 	description:
	// 		'',
	// 	logo: Assets.ReactJs,
	// 	name: 'React Js'
	// }),
	// s({
	// 	slug: 'svelte',
	// 	color: 'orange',
	// 	description: svelte,
	// 	logo: Assets.Svelte,
	// 	name: 'Svelte'
	// }),
	//New

];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
