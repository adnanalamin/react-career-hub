import { useLoaderData, useParams } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiSubtitles } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplications } from "../../utility/localStorage";







const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job)

    const handelApplyJobs = () => {
        saveJobApplications(idInt);
        toast('You have applyed job sucessfully')
    }
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-6 mb-28">
                <div className="border rounded-lg md:col-span-4 p-10">
                    <h2 className="font-medium text-base text-[#757575] "><span className="font-extrabold text-[#1A1919]">Job Descriptions:</span> {job.job_description}</h2>
                    <h2 className="font-medium text-base text-[#757575] mt-6"><span className="font-extrabold text-[#1A1919]">Job Descriptions:</span> {job.job_responsibility}</h2>

                    <h1 className="font-extrabold text-base text-[#1A1919] mt-6">Educational Requirements:</h1>
                    <h2 className="font-medium text-base text-[#757575] mt-6"> {job.educational_requirements}</h2>

                    <h1 className="font-extrabold text-base text-[#1A1919] mt-6">Experiences:</h1>
                    <h2 className="font-medium text-base text-[#757575] mt-6"> {job.experiences}</h2>

                </div>
                <div className="border md:col-span-2 ">
                    <div className="bg-[#7E90FE1A] mb-8">
                    <div className="p-8">
                    <h2 className="font-extrabold text-xl text-[#1A1919]">Job Details</h2>
                    <hr className="mt-6 bg-[#7E90FE]" />
                    <h2 className="w-full mt-6 flex items-center"><RiMoneyDollarCircleLine className="text-[#7E90FE] text-lg mr-1" /><span className="font-bold text-lg">Salary :  </span>  {job.salary} (Per Month)</h2>
                    <h2 className="w-full flex items-center"><PiSubtitles /> Job Title : {job.job_title}</h2>
                    <h2 className="font-extrabold text-xl text-[#1A1919]">Contact Information</h2>
                    <hr className="mt-6 bg-[#7E90FE]" />
                    <h4 className="flex items-center"><FiPhone />Phone : 01750-00 00 00</h4>
                    <h4 className="flex items-center"><MdOutlineMail />Email : info@gmail.com</h4>
                    <h4 className="flex"><IoLocationOutline />Address : Dhanmondi 32, Sukrabad Dhaka, Bangladesh
                    </h4>
                    </div>
                    </div>
                    <button onClick={handelApplyJobs} className="btn font-extrabold text-xl text-white w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;