import { Divider } from "@tremor/react";
import CityPicker from "./CityPicker";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

type Props = {
  city: string;
  lat: string;
  long: string;
  result: Root;
};

const SidePanel = ({ city, lat, long, result }: Props) => {
  return (
    <div className="bg-gradient-to-br from-[#394f68] to-[#183b7e] text-white px-5 py-10">
      <div className="mb-5">
        <h1
          className={
            "font-extrabold uppercase " +
            (city.length < 11 ? "text-6xl" : "text-4xl")
          }
        >
          {decodeURI(city)}
        </h1>
        <p className="text-xs text-gray-400">
          Long/Lat: {long}, {lat}
        </p>
      </div>
      <CityPicker />
      <Divider className="mt-10 mb-10" />
      <div className="flex flex-row justify-between items-center space-x-4">
        <div>
          <p className="">{result.location.localtime}</p>
          <p className="font-extralight">Timezone: {result.location.tz_id}</p>
        </div>
      </div>
      <Divider className="mt-10 mb-10" />
      <div>
        <Image
          src={"https:" + result.current.condition.icon}
          alt={result.current.condition.text}
          width={65}
          height={65}
        />
        <div className="flex flex-row items-center justify-between">
          <p className="text-6xl font-semibold">
            {result.forecast.forecastday[0].day.maxtemp_c.toString()}°C
          </p>

          <p>{result.current.condition.text}</p>
        </div>
      </div>
      <div className="space-y-2 mt-2">
        <div className="flex items-center space-x-2 px-4 py-3 border border-[#6f90cd] rounded-md bg-[#405885]">
          <SunIcon className="w-10 h-10 text-gray-400" />
          <p className="font-extralight">Sunrise</p>
          <p>{result.forecast.forecastday[0].astro.sunrise}</p>
        </div>
        <div className="flex items-center space-x-2 px-4 py-3 border border-[#6f90cd] rounded-md bg-[#405885]">
          <MoonIcon className="w-10 h-10 text-gray-400" />
          <p className="font-extralight">Sunset</p>
          <p>{result.forecast.forecastday[0].astro.sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
