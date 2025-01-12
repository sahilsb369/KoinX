import about1 from "./assets/about1.svg";
import about2 from "./assets/about2.svg";
import sidearrow from "./assets/sidearrow.svg";
const About = () => {
  return (
    <div className='bg-white p-6 mt-3 rounded-md shadow-md'>
      <h1 className='text-2xl font-semibold'>About</h1>
      <h2 className='text-lg font-semibold mt-3'>What is Bitcoin?</h2>
      <p className='mt-1 text-[#3E424A]'>
        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>
      <div className='h-[1px] bg-gray-200 w-full mt-2'></div>
      <h2 className='text-lg font-semibold mt-3'>Lorem ipsum dolor sit amet</h2>
      <p className='mt-1 text-[#3E424A]'>
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus.
      </p>
      <p className='mt-2 text-[#3E424A]'>
        Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam
        scelerisque fermentum sapien morbi sodales odio sed rhoncus. Diam
        praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae
        pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis
        pellentesque interdum. Odio cursus phasellus velit in senectus enim dui.
        Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget
        eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa
        turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
      </p>
      <p className='mt-2 text-[#3E424A]'>
        {" "}
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
      <div className='h-[1px] bg-gray-200 w-full mt-4'></div>
      <h1 className='text-2xl font-semibold mt-4'>Already Holding Bitcoin?</h1>
      <div className='flex flex-col lg:flex-row gap-8 mt-4'>
        <div
          className='flex flex-row lg:w-1/2 p-3 gap-6 rounded-lg'
          style={{
            background: "linear-gradient(135deg, #79F1A4 0%, #0E5CAD 100%)",
          }}
        >
          <img src={about1} alt='about' className='w-28 h-28 ' />
          <div className='flex flex-col p-2'>
            <p className='text-xl font-semibold w-3/4 text-white'>
              Calculate your Profits
            </p>
            <div className='flex flex-row items-center bg-white rounded-md w-3/4 p-1 md:gap-2 mt-2'>
              <div className='text-base font-semibold'>Check Now</div>
              <img src={sidearrow} />
            </div>
          </div>
        </div>
        <div
          className='flex flex-row lg:w-1/2 p-3 gap-6 rounded-lg'
          style={{
            background:
              "linear-gradient(135.73deg, #FF9865 0%, #EF3031 110.55%)",
          }}
        >
          <img src={about2} alt='about' className='w-28 h-28 ' />
          <div className='flex flex-col p-2'>
            <p className='text-xl font-semibold w-full md:w-3/4 text-white'>
              Calculate your tax liability
            </p>
            <div className='flex flex-row items-center bg-white rounded-md w-3/4 p-1 md:gap-2 mt-2'>
              <div className='text-base font-semibold'>Check Now</div>
              <img src={sidearrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
