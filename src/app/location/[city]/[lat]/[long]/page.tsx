import CallOutCard from "@/components/CallOutCard";
import { getClient } from "../../../../../../apollo-client";
import fetchWeatherQuery from "../../../../../../graphql/queries/fetchWeatherQueries";
import StatCard from "@/components/StatCard";
import SidePanel from "@/components/SidePanel";
import TempChart from "@/components/charts/ChartsSchema";
import getBasePath from "@/lib/getBasePath";
import cleanData from "@/lib/cleanData";

export const revalidate = 60;

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function weatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();
  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      alerts: "no",
      aqi: "no",
      days: "1",
      key: process.env.WEATHER_API_KEY,
      q: city,
    },
  });

  const result: Root = data.myQuery;

  //POST data to ChatGPT to GET summary
  const dataToSend = cleanData(result, city);
  const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      weatherData: dataToSend,
    }),
  });

  console.log(res);
  const GPTdata = await res.json();
  console.log(GPTdata);
  const { content } = GPTdata;

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <SidePanel result={result} lat={lat} long={long} city={city} />
      <div className="flex-1 p-5 lg:p-10">
        <div className="pb-5">
          <h2 className="text-xl font-bold">Todays Overview</h2>
          <p className="text-sm text-gray-400">
            Last update at: {""}
            {result.current.last_updated}
          </p>
        </div>
        <div>
          <CallOutCard message={content} />
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatCard
            metric={result.forecast.forecastday[0].day.mintemp_c.toString()}
            color="green"
            title="Min Temperatur"
          />
          <StatCard
            metric={result.forecast.forecastday[0].day.maxtemp_c.toString()}
            color="yellow"
            title="Max Temperatur"
          />
          <div>
            <StatCard
              metric={result.current.uv.toString()}
              color="red"
              title="UV Index"
            />
            {result.current.uv > 7 ? (
              <CallOutCard warning message="U might use sun cream!" />
            ) : null}
          </div>
          <div className="flex flex-row gap-4">
            <StatCard
              metric={result.current.wind_kph.toString()}
              color="sky"
              title="Wind km/h"
            />
            <StatCard
              metric={result.current.wind_dir}
              color="orange"
              title="Wind Direction"
            />
          </div>
        </div>

        <div>
          <TempChart result={result} />
        </div>
      </div>
    </div>
  );
}

export default weatherPage;
