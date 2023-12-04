"use client";

import { Country, State } from "country-state-city";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { GlobeAltIcon } from "@heroicons/react/20/solid";

type Option = {
  value: {
    isoCode: string;
    latitude: string;
    longitude: string;
  };
  label: string;
} | null;

type CityOption = {
  value: {
    latitude?: string;
    longitude?: string;
    countryCode: string;
    name: string;
    isoCode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    isoCode: country.isoCode,
    latitude: country.latitude,
    longitude: country.longitude,
  },
  label: country.name,
}));

function CityPicker() {
  const id = Date.now().toString();
  const [selectedCountry, setSelectedCountry] = useState<Option>(null);
  const [selectedCity, setSelectedCity] = useState<CityOption>(null);

  const router = useRouter();

  const handleSelectCountry = (option: Option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleSelectCity = (option: CityOption) => {
    setSelectedCity(option);
    router.push(
      `/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`
    );
  };

  return (
    <div className="">
      <div className="">
        <div className="flex space-x-1 mb-1 text-white ">
          <GlobeAltIcon className="h-5 w-5" />
          <label>Country</label>
        </div>
        <Select
          value={selectedCountry}
          className="text-black"
          onChange={handleSelectCountry}
          id={id}
          options={options}
        />
      </div>

      {selectedCountry && (
        <div className="mt-4">
          <div className="flex space-x-1 mb-1 text-white ">
            <GlobeAltIcon className="h-5 w-5" />
            <label>City</label>
          </div>
          <Select
            value={selectedCity}
            onChange={handleSelectCity}
            id={id}
            className="text-black"
            options={State.getStatesOfCountry(
              selectedCountry.value.isoCode
            )?.map((state) => ({
              value: {
                isoCode: state.isoCode,
                countryCode: state.countryCode,
                latitude: state.latitude!,
                longitude: state.longitude!,
                name: state.name,
              },
              label: state.name,
            }))}
          />
        </div>
      )}
    </div>
  );
}

export default CityPicker;
