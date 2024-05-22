function ProjectCard({ entry }) {
  const featuredImageUrl = entry.featuredImage.fields.file.url;

  return (
    // Projectcard Element fährt 4px nach oben beim drüber fahren, mit der duration kann man die Dauer des Übergangs einstellen und die "ease-in" sorgt dafür das der Übergang erst beschleunigt und dann verlangsamt.
    <div className='project-card rounded overflow-hidden group-hover:ease-in group-hover:transform transition duration-300 transform hover:-translate-y-4'>
      <div className='aspect-video overflow-hidden'>
        <img src={featuredImageUrl} alt={entry.title} />
      </div>
      {/* Containerstyling für den Streifen unter der Projectcard */}
      <div className='bg-zinc-800 rounded-b-2xl pt-2 pb-2'>
        {/* Click here to Visit Schriftzug */}
        <p className='text-[10px] text-stone-300 text-start font-normal uppercase ml-4 pt-3 pl-2'>
          click here to visit
        </p>
        {/* Projectcard Hauptschriftzug (Power of HTML/CSS Tutorial) */}
        <h2 className='text-xl text-white text-start uppercase ml-4 pb-3 pl-2'>
          {entry.title}
        </h2>
      </div>
    </div>
  );
}

export default ProjectCard;
