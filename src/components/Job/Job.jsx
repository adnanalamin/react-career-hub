import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
const Job = ({ job }) => {
  const { logo,job_title,company_name,remote_or_onsite,location,job_type,salary } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl border border-gray-600 pt-4">
      <figure className="flex w-1/3 h-10">
        <img
        className=" justify-items-start "
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 border rounded border-[#7E90FE] font-extrabold text-[#7E90FE] mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 border rounded border-[#7E90FE] font-extrabold text-[#7E90FE]">{job_type}</button>
        </div>
        <div className="flex gap-x-4 text-6 mt-4">
            <h4 className="flex items-center gap-x-2"><span><CiLocationOn /></span>{location}</h4>
            <h4 className="flex items-center gap-x-2"><span><AiOutlineDollar /></span>{salary}</h4>
        </div>
        <div className="card-actions">
          <button className="btn bg-[#7E90FE] text-white font-extrabold">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
