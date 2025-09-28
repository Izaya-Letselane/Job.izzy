import SectionHeading from "../../Helper/SectionHeading"
import JobCard from "./JobCard"

const jobs = [{
    id: 1,
    image: '/images/j1.png',
    title: 'Software Engineer',
    Location: "london, UK",
    jobType: "full-Time",
    urgency: "Urgent"
},{
    id: 2,
    image: '/images/j2.png',
    title: 'Recruiting Coordinator',
    Location: "Manchester, UK",
    jobType: "full-Time",
    urgency: "Private"
},{
    id: 3,
    image: '/images/j3.png',
    title: 'Product Manager Audio',
    Location: "london, UK",
    jobType: "full-Time",
    urgency: "Urgent"
},{
    id: 4,
    image: '/images/j4.png',
    title: 'Senior Product Designer',
    Location: "london, UK",
    jobType: "Part-time",
    urgency: "private"
},
{
    id: 5,
    image: '/images/j5.png',
    title: 'Product Manager, Risk',
    Location: "london, UK",
    jobType: "full-Time",
    urgency: "Urgent"
},
{
    id: 6,
    image: '/images/j6.png',
    title: 'Technical Architect',
    Location: "london, UK",
    jobType: "Contract",
    urgency: "Private"
},
{
    id: 7,
    image: '/images/j7.png',
    title: 'Web Developer',
    Location: "london, UK",
    jobType: "full-Time",
    urgency: "Urgent"
},
{
    id: 8,
    image: '/images/j8.png',
    title: 'Senior Product Manager',
    Location: "london, UK",
    jobType: "full-Time",
    urgency: "Private"
},
{
    id: 9,
    image: '/images/j9.png',
    title: 'Senior BI Designer',
    Location: "london, UK",
    jobType: "full-Time",
    urgency: "Private"
},

]

const Job = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading heading="Featured Jobs" subHeading="Know your worth and find job that qualify your life"/>
      <div className="w-[95%] sm:w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
        {jobs.map((job,index)=>{
           return <div
           data-aos="fade-up" 
        data-aos-anchor-placement="top-center"
        data-aos-delay={index *100}
            key={job.id}>
            <JobCard job={job}/>
           </div> 
        })}
      </div>
      <div className="mt-10 text-center">
        <button className="px-10 py-4 bg-blue-700 text-white cursor-pointer rounded-lg hover:bg-blue-800 transition-all
        duration-200"> Load More Listing</button>
      </div>
    </div>
  )
}

export default Job
