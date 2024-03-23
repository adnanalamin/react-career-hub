const getStroedJobApplications = () => {
    const storedJobApplications = localStorage.getItem('job-applications');
    if(storedJobApplications){
        return JSON.parse(storedJobApplications)
    }
    return []
}

const saveJobApplications = id => {
    const storedJobApplications = getStroedJobApplications();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if(!exists){
        storedJobApplications.push(id)
        localStorage.setItem('job-applications',JSON.stringify(storedJobApplications))
    }
}

export {getStroedJobApplications, saveJobApplications}