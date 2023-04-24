import React, {useState, useEffect} from 'react';

const ProjectItem = ({ projectObject, formatDate }) => {

  const [skills, setSkills] = useState([])

  const extractSkillNames = (arr) => {
    return arr.map(item => item.name);
  }

  const listSkills = (skills) => {
    return skills.join(', ');
  }


  useEffect(() => {
    setSkills(extractSkillNames(projectObject.skills))
  }, [projectObject.skills])

  return (
    <div className="max-w-lg min-w-min bg-white border border-gray-200 rounded-lg shadow m-4">
      <a href="https://www.strathmore.ac.ke/" className="flex justify-center">
        <img
          className="w-[300px] h-[150px] mt-4"
          src={require(`../${projectObject.coverImage}`)}
          alt="Project Preview"
        />
      </a>
      <div className="px-5 py-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {projectObject.title}
        </h5>
        <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-500">
          {listSkills(skills)}
        </h6>
        <p className="mb-2 text-sm text-gray-600 min-w-[250px]">
          {projectObject.description}
        </p>
      </div>
      <p className="px-5 py-4 text-xs font-normal text-gray-500">
        Github:{' '}
        <a
          className="font-medium text-blue-600 hover:underline"
          href={projectObject.githubLink}
        >
          {projectObject.githubLink}
        </a>
      </p>
      <p className="px-5 py-4 text-xs font-normal text-gray-500">
        {formatDate(projectObject.startDate)} - {formatDate(projectObject.endDate)}
      </p>
      <p className="mx-5 my-4 bg-blue-100 text-blue-800 text-xs font-medium w-fit px-2.5 py-0.5 rounded">
        {projectObject.openSource ? 'Open Source' : 'Closed Source'}
      </p>
    </div>
  );
};

export default ProjectItem;
