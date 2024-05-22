import { Icon } from "@iconify/react";
function SocialIconNav({ socialMediaProfiles, iconClassNames }) {
  const socialMediaItems = socialMediaProfiles.fields.json.data.map((item) => {
    return {
      name: Object.values(item)[0][0],
      url: Object.values(item)[0][1],
      icon: Object.values(item)[0][2],
    };
  });

  return (
    <nav>
      <ul className='flex gap-2'>
        {socialMediaItems.map((item, i) => (
          <li key={i} className={item.class}>
            <a href={item.url} target='_blank'>
              <Icon
                icon={item.icon}
                className={iconClassNames}
              />
              <span className='sr-only'>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SocialIconNav;
