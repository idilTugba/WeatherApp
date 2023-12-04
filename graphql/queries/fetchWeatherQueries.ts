import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query myQuery(
    $alerts: String
    $aqi: String
    $days: String
    $key: String
    $q: String
  ) {
    myQuery(alerts: $alerts, aqi: $aqi, days: $days, key: $key, q: $q) {
      current {
        cloud
        feelslike_c
        feelslike_f
        gust_kph
        gust_mph
        humidity
        is_day
        last_updated
        last_updated_epoch
        precip_in
        precip_mm
        pressure_in
        pressure_mb
        temp_c
        temp_f
        uv
        vis_km
        vis_miles
        wind_degree
        wind_dir
        wind_kph
        wind_mph
        condition {
          code
          icon
          text
        }
      }
      location {
        country
        lat
        localtime
        localtime_epoch
        lon
        name
        region
        tz_id
      }
      forecast {
        forecastday {
          day {
            avghumidity
            avgtemp_c
            avgtemp_f
            avgvis_km
            avgvis_miles
            daily_chance_of_rain
            daily_chance_of_snow
            daily_will_it_rain
            daily_will_it_snow
            maxtemp_c
            maxtemp_f
            uv
            totalsnow_cm
            totalprecip_mm
            totalprecip_in
            mintemp_f
            mintemp_c
            maxwind_mph
            maxwind_kph
          }
          hour {
            condition {
              code
              icon
              text
            }
            chance_of_rain
            chance_of_snow
            cloud
            dewpoint_c
            dewpoint_f
            feelslike_c
            feelslike_f
            gust_kph
            heatindex_c
            gust_mph
            heatindex_f
            humidity
            is_day
            precip_in
            precip_mm
            pressure_in
            pressure_mb
            temp_c
            temp_f
            time_epoch
            time
            uv
            vis_km
            vis_miles
            will_it_rain
            will_it_snow
            wind_degree
            wind_dir
            wind_kph
            wind_mph
            windchill_c
            windchill_f
          }
          astro {
            is_moon_up
            is_sun_up
            moon_illumination
            moon_phase
            moonrise
            moonset
            sunrise
            sunset
          }
          date
          date_epoch
        }
      }
    }
  }
`;

export default fetchWeatherQuery;
