import { Icon } from "@iconify/react";

function Experience({ experience }) {
  const experienceItems = experience.fields.json.data.map((item) => {
    return {
      name: Object.values(item)[0][0],
      icon: Object.values(item)[0][1],
    };
  });

  return (
    <ul className='flex gap-10 drop-shadow-xl mt-6'>
      {experienceItems.map((item, i) => (
        <li key={i} className={item.class}>
          {/* Anpassung des Icon Stylings */}
          <Icon
            icon={item.icon}
            className='text-5xl text-stone-300 hover:text-black mb-14 drop-shadow-xl'
          />
          <span className='sr-only '>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Experience;
