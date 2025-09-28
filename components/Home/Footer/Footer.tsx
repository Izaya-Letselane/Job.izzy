import { LuNetwork } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-200 dark:bg-gray-900">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-start">
        {/*First Part*/}
        <div className="xl:col-span-2">
          {/*Logo*/}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center flex-col">
              <LuNetwork className="w-5 h-5 text-white dark:text-black" />
            </div>
            <h1 className="text-2xl hidden sm:block md-text-2xl text-cyan-800 dark:text-white font-bold">
              DevHire
            </h1>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium provident,
             mollitia animi placeat corrupti fuga?
          </p>
          {/*call */}
          <div className="mt-5">
            <h1 className="lg:text-xl text-base text-gray-700 dark:text-gray-300 font-medium">Call Us</h1>
            <p className="mt-1 text-gray-600 dark:text-gray-300 lg:text-lg text-base font-bold">+015589463</p>
          </div>
          {/*Address */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">Pretoria</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Pretoria, Gauteng</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">cool@gmail.com</p>
        </div>
        {/*2nd part */}
        <div className="space-y-6">
            <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">For Candidates</h1>
            <p className="footer_link">Browse Jobs</p>
            <p className="footer_link">Browse Category</p>
            <p className="footer_link">Candidates Dashboard</p>
            <p className="footer_link">Jobs Alerts</p>
            <p className="footer_link">My Bookmarks</p>
        </div>
        {/*3rd part */}
        <div className="space-y-6">
            <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">For Employers</h1>
            <p className="footer_link">Browse Candidates</p>
            <p className="footer_link">Employer Dahboard</p>
            <p className="footer_link">Add Job</p>
            <p className="footer_link">Jobs Package</p>
            
        </div>
        {/*4th part */}
        <div className="space-y-6">
            <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">About Us</h1>
            <p className="footer_link">Job Page</p>
            <p className="footer_link">Job Page Alternative</p>
            <p className="footer_link">Resume Page</p>
            <p className="footer_link">Blog</p>
            <p className="footer_link">Contact</p>
        </div>
        {/*5th part */}
        <div className="space-y-6">
            <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">Helpful Resources</h1>
            <p className="footer_link">Site Maps</p>
            <p className="footer_link">Terms of use</p>
            <p className="footer_link">Privacy Center</p>
            <p className="footer_link">Security Center</p>
            <p className="footer_link">Accessibility Center</p>
        </div>
      </div>
      <div className="pt-6 mt-10 border-t w-[90%] mx-auto border-gray-300 dark:border-gray-800">
        <p className="text-gray-500">2025 izzy. All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
