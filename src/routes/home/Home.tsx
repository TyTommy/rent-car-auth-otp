import Cars from "../../components/cars/Cars";
import Navbar from "../../components/navbar/Navbar";
import { useGetCarsQuery } from "../../redux/api/car-api";
import mainImg1 from "./img/main-img1.svg";
import mainImg2 from "./img/main-img2.svg";

const Home = () => {
  const { data, isLoading } = useGetCarsQuery();

  return (
    <div className="w-full mx-auto flex flex-col items-center mb-5">
      <Navbar />
      <div className="w-full container mx-auto my-10">
        <div className="flex justify-around">
          <div className="home__items-top-left bg-blue-400 w-[616px] h-[360px] p-5 rounded-lg">
            <h1 className="text-3xl w-[250px] mb-5 leading-10 font-semibold text-white">
              The Best Platform for Car Rental
            </h1>
            <p className="w-[264px] mb-5 leading-6 text-base text-white">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <button className="px-[22px] hover:bg-blue-700 transition duration-280 py-[9px] bg-blue-600 rounded-lg text-white">
              Rental Car
            </button>
            <img
              className="ml-[158px] mt-[-8px]"
              src={mainImg1}
              alt="car img 1"
              width={406}
              height={116}
            />
          </div>
          <div className="home__items-top-left bg-blue-500 w-[612px] h-[360px] p-5 rounded-lg">
            <h1 className="text-3xl w-[250px] leading-10 mb-5 text-white font-semibold">
              Easy way to rent a car at a low price
            </h1>
            <p className="w-[264px] mb-5 leading-6 text-base text-white">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <button className="px-[22px] hover:bg-blue-700 transition duration-280 py-[9px] bg-blue-600 rounded-lg text-white">
              Rental Car
            </button>
            <img
              className="ml-[148px] mt-[-19px]"
              src={mainImg2}
              alt="car img 2"
              width={406}
              height={116}
            />
          </div>
        </div>
      </div>
      <Cars data={data?.payload} isLoading={isLoading} title={"Popular cars"} />
    </div>
  );
};

export default Home;
