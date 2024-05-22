import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RichtextContent from "../helper/RichtextContent";

function Project() {
  const [project, setProject] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  let rtCnt1, rtCnt2, rtCnt3, featuredImageUrl;

	useEffect(() => {
		axios
			.get(`http://localhost:8000/contentful/projects/${id}`)
			.then((res) => {
				//console.log(res);
				setProject(res.data[0]);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
				setLoading(false);
			});
	}, []);

  if (!loading) {
    featuredImageUrl = project.featuredImage.fields.file.url;
    rtCnt1 =
      project.linkedContent &&
      project.linkedContent[0]?.fields.richtextPageContent;
    rtCnt2 =
      project.linkedContent &&
      project.linkedContent[1]?.fields.richtextPageContent;
    rtCnt3 =
      project.linkedContent &&
      project.linkedContent[2]?.fields.richtextPageContent;
  }

  const loadingTemplate = <p>Loading...</p>;

  const displayTemplate = (
    <div className="project-overview flex flex-col md:flex-row">
      <div className="md:w-1/3 bg-teal-950 pr-6 sm:text-center">
        <div className="left-content py-7 text-white">
          <h2 className="text-xl font-bold mb-4">{project.title}</h2>
          {rtCnt2 && <RichtextContent content={rtCnt2} />}
        </div>
      </div>
      <div className="md:w-2/3 bg-white p-6 flex justify-center items-center">
        <div>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <img
              src={featuredImageUrl}
              alt={project.title}
              className="project-img mb-4 mx-auto cursor-pointer"
            />
          </a>

          {rtCnt1 && <RichtextContent content={rtCnt1} />}

          {rtCnt3 && <RichtextContent content={rtCnt3} />}
          <button
            onClick={() => navigate("/")}
            className="bg-emerald-600 hover:bg-emerald-200 text-white font-bold py-2 px-4 rounded mt-4"
          >
            {"<< "}Back
          </button>
        </div>
      </div>
    </div>
  );

  return <div>{loading ? loadingTemplate : displayTemplate}</div>;

}

export default Project;
