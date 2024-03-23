import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStroedJobApplications } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handelJobFilter = filter => {
    if(filter === 'all'){
        setDisplayJobs(appliedJobs);
    }
    else if(filter === 'remote'){
        const remoteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayJobs(remoteJob)
    }
    else if(filter === 'onSite'){
        const onSiteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
        setDisplayJobs(onSiteJob)
    }
  }

  useEffect(() => {
    const storedJobId = getStroedJobApplications();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobId.includes(job.id))
      const jobsApplied = [];
      for (const id of storedJobId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied)
      // console.log(jobsApplied)
    }
  }, [jobs]);
  return (
    <div>
      <h2 className="text-2xl">Applied in Jobs: {appliedJobs.length}</h2>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handelJobFilter('all')}><a>All</a></li>
          <li onClick={() => handelJobFilter('remote')}><a>Remote</a></li>
          <li onClick={() => handelJobFilter('onSite')}><a>onSite</a></li>
        </ul>
      </details>
      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} {job.company_name} : {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
