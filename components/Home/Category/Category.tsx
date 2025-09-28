import { FaLaptopCode } from "react-icons/fa"
import { GiTakeMyMoney } from "react-icons/gi"
import { IoMegaphoneOutline } from "react-icons/io5"
import { LuRocket } from "react-icons/lu"
import { PiPaintBrush } from "react-icons/pi"
import { RiCustomerService2Fill } from "react-icons/ri"
import SectionHeading from "../../Helper/SectionHeading"
import CategoryCard from "./CategoryCard"

const categoryData =[
    {
        id:1,
        categoryName: "Accounting / Finance",
        openPostion:2,
        icon: <GiTakeMyMoney className="w-10 h-10 text-blue-700 dark:text-white"/>
    },{
        id:2,
        categoryName: "Marketing",
        openPostion:2,
        icon: <IoMegaphoneOutline className="w-10 h-10 text-blue-700 dark:text-white"/>
    },
    {
        id:3,
        categoryName: "Design",
        openPostion:42,
        icon: <PiPaintBrush className="w-10 h-10 text-blue-700 dark:text-white"/>
    },
    {
        id:4,
        categoryName: "Project Management",
        openPostion:2,
        icon: <LuRocket className="w-10 h-10 text-blue-700 dark:text-white"/>
    },
    {
        id:5,
        categoryName: "Customer Service",
        openPostion:2,
        icon: <RiCustomerService2Fill className="w-10 h-10 text-blue-700 dark:text-white"/>
    },
    {
        id:6,
        categoryName: "Health and Care",
        openPostion:2,
        icon: <FaLaptopCode className="w-10 h-10 text-blue-700 dark:text-white"/>
    },
    {
        id:7,
        categoryName: "Health and Care",
        openPostion:2,
        icon: <FaLaptopCode className="w-10 h-10 text-blue-700 dark:text-white"/>
    },
    {
        id:8,
        categoryName: "Automotive Jobs",
        openPostion:2,
        icon: <FaLaptopCode className="w-10 h-10 text-blue-700 dark:text-white"/>
    },
]

const Category = () => {
  return (
    <div className="pt-16 pb-16">
     <SectionHeading heading="Popularr Job Categories" subHeading="2026 jobs live - 293 added"/> 
     <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3
     xl:grid-cols-4 gap-6">
      {categoryData.map((category, index)=>{
        return <div data-aos="fade-right" 
        data-aos-anchor-placement="top-center"
        data-aos-delay={index *100}
         key={category.id}>
          <CategoryCard category={category}/>
        </div>
      })}
     </div>
    </div>
  )
}

export default Category
