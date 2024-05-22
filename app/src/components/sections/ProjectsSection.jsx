import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard.jsx";
import Experience from "../Experience.jsx";

function ProjectsSection({ props }) {

  const { title, subTitle, linkedContent } = props;
  const experience = linkedContent.filter(
    (entry) => entry.fields.slug === "experience"
  )[0];

  const [entries, setEntries] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get('http://localhost:8000/contentful/projects')
			.then((res) => {
				setEntries(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
				setLoading(false);
			});
	}, []);

  const loadingTemplate = <p>Loading...</p>;

  const displayTemplate = (
    <>
      <div className="grid gap-4 sm:gap-8 sm:grid-cols-2">
        {entries.map((entry) => (
          <div key={entry.id}>
            <Link to={"/project/" + entry.slug}>
              <ProjectCard entry={entry} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );

  return (
    // Container für die ProjectsSection
    <section className="bg-teal-950 px-4 py-8" id="projects">
      <div className="container mx-auto flex flex-col place-items-center text-center mt-12 mb-36">
        {/* Experience With Schriftzug */}
        <p className="text-gray-400 uppercase font-semibold text-xl drop-shadow-lg mb-4">
          {subTitle}
        </p>
        <Experience experience={experience} />
        {/* Projects Schriftzug */}
        <h1 className="text-white text-3xl uppercase font-bold mb-12 mt-6 drop-shadow-lg">
          {title}
        </h1>
        {loading ? loadingTemplate : displayTemplate}
      </div>
    </section>
  );
}

export default ProjectsSection;
