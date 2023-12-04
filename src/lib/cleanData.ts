const cleanData = (data: Root, city: string) => {
  const { current, forecast, location } = data;

  const {
    temp_c,
    uv: current_uv,
    wind_dir,
    wind_kph,
    last_updated,
    condition,
  } = current;
  const { icon, text } = condition;
  const { forecastday } = forecast;
  const { day, hour, astro } = forecastday[0];
  const { maxtemp_c, mintemp_c } = day;
  const { sunset, sunrise } = astro;
  const { localtime, tz_id } = location;

  // Saatlik veri için
  const hourlyData = hour.map((h) => ({
    precip_mm: h.precip_mm,
    humidity: h.humidity,
    temp_c: h.temp_c,
    uv: h.uv,
  }));

  // Geri döndürülecek veriler
  return {
    city,
    current: {
      temp_c,
      uv: current_uv,
      wind_dir,
      wind_kph,
      last_updated,
      condition: { icon, text },
    },
    daily: { maxtemp_c, mintemp_c },
    hourly: hourlyData,
    astro: { sunset, sunrise },
    location: { localtime, tz_id },
  };
};

export default cleanData;
