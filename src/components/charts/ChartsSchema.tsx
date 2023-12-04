import Chart from "./chart";

interface Props {
  result: Root;
}

export interface ChartsFormat {
  data: object[];
  categories: string[];
  format: string;
  colors: (
    | "yellow"
    | "rose"
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
  )[];
}

const ChartsSchema = ({ result }: Props) => {
  const hours = result.forecast.forecastday[0].hour.map((each) => {
    return new Date(each.time).toLocaleString("tr-TR", {
      hour: "numeric",
      hour12: false,
    });
  });

  const dataUv = hours.map((hour, i) => ({
    time: Number(hour),
    "UV Index": result.forecast.forecastday[0].hour[i].uv,
    Temperature: result.forecast.forecastday[0].hour[i].temp_c,
  }));

  const dataRain = hours.map((hour, i) => ({
    time: Number(hour),
    "Rain Of Change": result.forecast.forecastday[0].hour[i].precip_mm,
  }));

  const dataHumidity = hours.map((hour, i) => ({
    time: Number(hour),
    Humidity: result.forecast.forecastday[0].hour[i].humidity,
  }));

  const allCharts: ChartsFormat[] = [
    {
      data: dataUv,
      format: "°C",
      categories: ["UV Index", "Temperature"],
      colors: ["yellow", "rose"],
    },
    {
      data: dataRain,
      format: "%",
      categories: ["Rain Of Change"],
      colors: ["blue"],
    },
    {
      data: dataHumidity,
      format: "%",
      categories: ["Humidity"],
      colors: ["teal"],
    },
  ];

  return (
    <>
      {allCharts.map((data) => {
        return (
          <Chart
            key={data.categories[0]}
            data={data.data}
            format={data.format}
            categories={data.categories}
            colors={data.colors}
          />
        );
      })}
    </>
  );
};

export default ChartsSchema;
