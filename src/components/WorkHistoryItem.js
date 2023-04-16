import React from 'react';

const WorkHistoryItem = ({workHistoryObject, index}) => {
  return (     
    <div key={index} id="work-history" className="max-w-lg min-w-min bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <a href={workHistoryObject.link} className="flex justify-center">
            <img className="w-[56px] h-[56px] rounded-t-lg mt-4" src={require(`../${workHistoryObject.logo}`)} alt="Company Logo" />
        </a>
        <div className="px-5 py-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{workHistoryObject.company}</h5>
            <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-500">{workHistoryObject.position}</h6>
            <p className="mb-1 text-sm text-gray-600 dark:text-gray-400 min-w-[250px]">{workHistoryObject.description}</p>
        </div> 
        <p className="px-5 py-4 text-xs font-normal text-gray-500">{workHistoryObject.startDate} - {workHistoryObject.endDate}</p>
    </div>
  );
};

export default WorkHistoryItem;