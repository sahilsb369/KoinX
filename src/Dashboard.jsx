import greater from "./assets/greater.svg";
import LeftComponent from "./Leftcomponent";
import RightComponent from "./Rightcomponent";
import YouMayAlsoLike from "./Likecharts";
import YouMayLike from "./Likecharts2";
function Dashboard() {
  return (
    <>
      <div className='px-4 lg:px-8  bg-[#EFF2F5]'>
        {/* Breadcrumb Section */}
        <div className='flex flex-row items-center gap-1 top-2 text-sm py-4'>
          <p className='font-normal text-[#3E5765]'>Cryptocurrencies</p>
          <img src={greater} alt='logo' className='w-3 h-3' />
          <p className='font-normal'>Bitcoin</p>
        </div>

        {/* Main Content Section */}
        <div className='flex flex-row w-full gap-3'>
          {/* Left Component: 3/4 width */}
          <div className=' w-full lg:w-4/6 '>
            <LeftComponent />
          </div>

          {/* Right Component: 1/4 width */}
          <div className='hidden lg:block '>
            <RightComponent />
          </div>
        </div>
        {/* <YouMayAlsoLike /> */}
        {/* Add other components here */}
      </div>
      <YouMayAlsoLike />
      <YouMayLike />
    </>
  );
}

export default Dashboard;
