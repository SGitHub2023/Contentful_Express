function Skills({skills}) {

	const mySkills = skills.fields.json.data.map(item => {
		return {
			skill: Object.keys(item)[0],
			value: Object.values(item)[0]
		}
	});

	return (
		<div className="grid grid-cols-2 gap-4">
			{mySkills.map((item, i) => (
				<div key={i} className="border-teal-600 border-4 rounded-xl text-center p-6">
					<span className="block font-bold text-4xl">{item.value}</span>
					<span className="block">{item.skill}</span>
				</div>
			))}
		</div>
	)
}

export default Skills;
