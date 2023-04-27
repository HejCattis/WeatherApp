import { ApiResponse } from "../interface/ApiResponse";

function ApiTest () {
    const getWeatherData = () => {
        const fakeData: ApiResponse = {
      coord: {
        lon: 0.1,
        lat: 51.5,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      base: "stations",
      main: {
        temp: 10.34,
        feels_like: 8.74,
        temp_min: 8.41,
        temp_max: 11.92,
        pressure: 1018,
        humidity: 50,
      },
      visibility: 10000,
      wind: {
        speed: 2.57,
        deg: 90,
      },
      clouds: {
        all: 0,
      },
      dt: 1682445777,
      sys: {
        type: 1,
        id: 1414,
        country: "GB",
        sunrise: 1682397823,
        sunset: 1682449872,
      },
      timezone: 3600,
      id: 7302135,
      name: "Abbey Wood",
      cod: 200,
    };
    console.log('Weather kallad')
    return fakeData;
      };

      const getForecastData = () => {
        const fakeForecast: any = {
            "cod": "200",
            "message": 0,
            "cnt": 40,
            "list": [
              {
                "dt": 1682445600,
                "main": {
                  "temp": 7.05,
                  "feels_like": 4.87,
                  "temp_min": 5.98,
                  "temp_max": 7.05,
                  "pressure": 999,
                  "sea_level": 999,
                  "grnd_level": 997,
                  "humidity": 89,
                  "temp_kf": 1.07
                },
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 75
                },
                "wind": {
                  "speed": 3.15,
                  "deg": 148,
                  "gust": 6.21
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-25 18:00:00"
              },
              {
                "dt": 1682456400,
                "main": {
                  "temp": 6.58,
                  "feels_like": 4.99,
                  "temp_min": 5.64,
                  "temp_max": 6.58,
                  "pressure": 999,
                  "sea_level": 999,
                  "grnd_level": 996,
                  "humidity": 90,
                  "temp_kf": 0.94
                },
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                  }
                ],
                "clouds": {
                  "all": 83
                },
                "wind": {
                  "speed": 2.24,
                  "deg": 149,
                  "gust": 4.87
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "n"
                },
                "dt_txt": "2023-04-25 21:00:00"
              },
              {
                "dt": 1682467200,
                "main": {
                  "temp": 6.2,
                  "feels_like": 5.38,
                  "temp_min": 5.77,
                  "temp_max": 6.2,
                  "pressure": 1000,
                  "sea_level": 1000,
                  "grnd_level": 996,
                  "humidity": 91,
                  "temp_kf": 0.43
                },
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                  }
                ],
                "clouds": {
                  "all": 91
                },
                "wind": {
                  "speed": 1.45,
                  "deg": 165,
                  "gust": 2.52
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "n"
                },
                "dt_txt": "2023-04-26 00:00:00"
              },
              {
                "dt": 1682478000,
                "main": {
                  "temp": 6.13,
                  "feels_like": 4.82,
                  "temp_min": 6.13,
                  "temp_max": 6.13,
                  "pressure": 1000,
                  "sea_level": 1000,
                  "grnd_level": 996,
                  "humidity": 91,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                  }
                ],
                "clouds": {
                  "all": 100
                },
                "wind": {
                  "speed": 1.87,
                  "deg": 236,
                  "gust": 4.14
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "n"
                },
                "dt_txt": "2023-04-26 03:00:00"
              },
              {
                "dt": 1682488800,
                "main": {
                  "temp": 5.96,
                  "feels_like": 3.59,
                  "temp_min": 5.96,
                  "temp_max": 5.96,
                  "pressure": 1000,
                  "sea_level": 1000,
                  "grnd_level": 997,
                  "humidity": 72,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 99
                },
                "wind": {
                  "speed": 3.1,
                  "deg": 243,
                  "gust": 4.89
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-26 06:00:00"
              },
              {
                "dt": 1682499600,
                "main": {
                  "temp": 9.07,
                  "feels_like": 7.6,
                  "temp_min": 9.07,
                  "temp_max": 9.07,
                  "pressure": 1001,
                  "sea_level": 1001,
                  "grnd_level": 997,
                  "humidity": 56,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 74
                },
                "wind": {
                  "speed": 2.67,
                  "deg": 218,
                  "gust": 4.3
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-26 09:00:00"
              },
              {
                "dt": 1682510400,
                "main": {
                  "temp": 8.93,
                  "feels_like": 6.98,
                  "temp_min": 8.93,
                  "temp_max": 8.93,
                  "pressure": 1001,
                  "sea_level": 1001,
                  "grnd_level": 998,
                  "humidity": 54,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 80
                },
                "wind": {
                  "speed": 3.43,
                  "deg": 238,
                  "gust": 4.6
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-26 12:00:00"
              },
              {
                "dt": 1682521200,
                "main": {
                  "temp": 8.83,
                  "feels_like": 7.14,
                  "temp_min": 8.83,
                  "temp_max": 8.83,
                  "pressure": 1002,
                  "sea_level": 1002,
                  "grnd_level": 998,
                  "humidity": 52,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 92
                },
                "wind": {
                  "speed": 2.95,
                  "deg": 216,
                  "gust": 4.37
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-26 15:00:00"
              },
              {
                "dt": 1682532000,
                "main": {
                  "temp": 5.87,
                  "feels_like": 3.53,
                  "temp_min": 5.87,
                  "temp_max": 5.87,
                  "pressure": 1003,
                  "sea_level": 1003,
                  "grnd_level": 999,
                  "humidity": 75,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                  }
                ],
                "clouds": {
                  "all": 85
                },
                "wind": {
                  "speed": 3.03,
                  "deg": 224,
                  "gust": 6.12
                },
                "visibility": 10000,
                "pop": 0.31,
                "rain": {
                  "3h": 0.37
                },
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-26 18:00:00"
              },
              {
                "dt": 1682542800,
                "main": {
                  "temp": 4.09,
                  "feels_like": 1.4,
                  "temp_min": 4.09,
                  "temp_max": 4.09,
                  "pressure": 1003,
                  "sea_level": 1003,
                  "grnd_level": 1000,
                  "humidity": 71,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                  }
                ],
                "clouds": {
                  "all": 86
                },
                "wind": {
                  "speed": 3.02,
                  "deg": 228,
                  "gust": 7.88
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "n"
                },
                "dt_txt": "2023-04-26 21:00:00"
              },
              {
                "dt": 1682553600,
                "main": {
                  "temp": 2.71,
                  "feels_like": -0.51,
                  "temp_min": 2.71,
                  "temp_max": 2.71,
                  "pressure": 1004,
                  "sea_level": 1004,
                  "grnd_level": 1001,
                  "humidity": 76,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                  }
                ],
                "clouds": {
                  "all": 44
                },
                "wind": {
                  "speed": 3.34,
                  "deg": 215,
                  "gust": 9.49
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "n"
                },
                "dt_txt": "2023-04-27 00:00:00"
              },
              {
                "dt": 1682564400,
                "main": {
                  "temp": 1.86,
                  "feels_like": -1.36,
                  "temp_min": 1.86,
                  "temp_max": 1.86,
                  "pressure": 1005,
                  "sea_level": 1005,
                  "grnd_level": 1001,
                  "humidity": 80,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "clouds": {
                  "all": 9
                },
                "wind": {
                  "speed": 3.12,
                  "deg": 206,
                  "gust": 8.84
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "n"
                },
                "dt_txt": "2023-04-27 03:00:00"
              },
              {
                "dt": 1682575200,
                "main": {
                  "temp": 4.57,
                  "feels_like": 1.48,
                  "temp_min": 4.57,
                  "temp_max": 4.57,
                  "pressure": 1006,
                  "sea_level": 1006,
                  "grnd_level": 1002,
                  "humidity": 66,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                  }
                ],
                "clouds": {
                  "all": 11
                },
                "wind": {
                  "speed": 3.76,
                  "deg": 219,
                  "gust": 7.05
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-27 06:00:00"
              },
              {
                "dt": 1682586000,
                "main": {
                  "temp": 7.23,
                  "feels_like": 4.57,
                  "temp_min": 7.23,
                  "temp_max": 7.23,
                  "pressure": 1006,
                  "sea_level": 1006,
                  "grnd_level": 1002,
                  "humidity": 53,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                  }
                ],
                "clouds": {
                  "all": 30
                },
                "wind": {
                  "speed": 4.05,
                  "deg": 209,
                  "gust": 6.28
                },
                "visibility": 10000,
                "pop": 0.2,
                "rain": {
                  "3h": 0.16
                },
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-27 09:00:00"
              },
              {
                "dt": 1682596800,
                "main": {
                  "temp": 6.92,
                  "feels_like": 4.36,
                  "temp_min": 6.92,
                  "temp_max": 6.92,
                  "pressure": 1007,
                  "sea_level": 1007,
                  "grnd_level": 1003,
                  "humidity": 60,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                  }
                ],
                "clouds": {
                  "all": 63
                },
                "wind": {
                  "speed": 3.73,
                  "deg": 224,
                  "gust": 4.85
                },
                "visibility": 9100,
                "pop": 0.29,
                "rain": {
                  "3h": 0.64
                },
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-27 12:00:00"
              },
              {
                "dt": 1682607600,
                "main": {
                  "temp": 6.24,
                  "feels_like": 3.76,
                  "temp_min": 6.24,
                  "temp_max": 6.24,
                  "pressure": 1008,
                  "sea_level": 1008,
                  "grnd_level": 1004,
                  "humidity": 63,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                  }
                ],
                "clouds": {
                  "all": 100
                },
                "wind": {
                  "speed": 3.36,
                  "deg": 240,
                  "gust": 5.25
                },
                "visibility": 10000,
                "pop": 0.62,
                "rain": {
                  "3h": 0.76
                },
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-27 15:00:00"
              },
              {
                "dt": 1682618400,
                "main": {
                  "temp": 5.12,
                  "feels_like": 3.16,
                  "temp_min": 5.12,
                  "temp_max": 5.12,
                  "pressure": 1008,
                  "sea_level": 1008,
                  "grnd_level": 1005,
                  "humidity": 67,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 99
                },
                "wind": {
                  "speed": 2.37,
                  "deg": 229,
                  "gust": 5.05
                },
                "visibility": 10000,
                "pop": 0.53,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-27 18:00:00"
              },
              {
                "dt": 1682629200,
                "main": {
                  "temp": 3.46,
                  "feels_like": 1.3,
                  "temp_min": 3.46,
                  "temp_max": 3.46,
                  "pressure": 1009,
                  "sea_level": 1009,
                  "grnd_level": 1005,
                  "humidity": 77,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                  }
                ],
                "clouds": {
                  "all": 72
                },
                "wind": {
                  "speed": 2.26,
                  "deg": 217,
                  "gust": 4.58
                },
                "visibility": 10000,
                "pop": 0.04,
                "sys": {
                  "pod": "n"
                },
                "dt_txt": "2023-04-27 21:00:00"
              },
              {
                "dt": 1682640000,
                "main": {
                  "temp": 2.15,
                  "feels_like": -0.85,
                  "temp_min": 2.15,
                  "temp_max": 2.15,
                  "pressure": 1009,
                  "sea_level": 1009,
                  "grnd_level": 1006,
                  "humidity": 90,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                  }
                ],
                "clouds": {
                  "all": 77
                },
                "wind": {
                  "speed": 2.92,
                  "deg": 261,
                  "gust": 6.83
                },
                "visibility": 10000,
                "pop": 0.04,
                "sys": {
                  "pod": "n"
                },
                "dt_txt": "2023-04-28 00:00:00"
              },
              {
                "dt": 1682650800,
                "main": {
                  "temp": 1.48,
                  "feels_like": -2.24,
                  "temp_min": 1.48,
                  "temp_max": 1.48,
                  "pressure": 1011,
                  "sea_level": 1011,
                  "grnd_level": 1007,
                  "humidity": 92,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 54
                },
                "wind": {
                  "speed": 3.67,
                  "deg": 276,
                  "gust": 7.64
                },
                "visibility": 10000,
                "pop": 0.14,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-28 03:00:00"
              },
              {
                "dt": 1682661600,
                "main": {
                  "temp": 2.9,
                  "feels_like": -0.66,
                  "temp_min": 2.9,
                  "temp_max": 2.9,
                  "pressure": 1012,
                  "sea_level": 1012,
                  "grnd_level": 1008,
                  "humidity": 89,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                  }
                ],
                "clouds": {
                  "all": 74
                },
                "wind": {
                  "speed": 3.9,
                  "deg": 302,
                  "gust": 7.12
                },
                "visibility": 10000,
                "pop": 0.3,
                "rain": {
                  "3h": 0.18
                },
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-28 06:00:00"
              },
              {
                "dt": 1682672400,
                "main": {
                  "temp": 5.27,
                  "feels_like": 2.1,
                  "temp_min": 5.27,
                  "temp_max": 5.27,
                  "pressure": 1013,
                  "sea_level": 1013,
                  "grnd_level": 1010,
                  "humidity": 68,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 98
                },
                "wind": {
                  "speed": 4.17,
                  "deg": 303,
                  "gust": 5.58
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-28 09:00:00"
              },
              {
                "dt": 1682683200,
                "main": {
                  "temp": 6.1,
                  "feels_like": 3.42,
                  "temp_min": 6.1,
                  "temp_max": 6.1,
                  "pressure": 1015,
                  "sea_level": 1015,
                  "grnd_level": 1011,
                  "humidity": 61,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 98
                },
                "wind": {
                  "speed": 3.64,
                  "deg": 299,
                  "gust": 5.58
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-28 12:00:00"
              },
              {
                "dt": 1682694000,
                "main": {
                  "temp": 7.5,
                  "feels_like": 5.53,
                  "temp_min": 7.5,
                  "temp_max": 7.5,
                  "pressure": 1015,
                  "sea_level": 1015,
                  "grnd_level": 1011,
                  "humidity": 53,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 82
                },
                "wind": {
                  "speed": 2.97,
                  "deg": 319,
                  "gust": 4.9
                },
                "visibility": 10000,
                "pop": 0.12,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-28 15:00:00"
              },
              {
                "dt": 1682704800,
                "main": {
                  "temp": 5.26,
                  "feels_like": 5.26,
                  "temp_min": 5.26,
                  "temp_max": 5.26,
                  "pressure": 1016,
                  "sea_level": 1016,
                  "grnd_level": 1012,
                  "humidity": 65,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 58
                },
                "wind": {
                  "speed": 0.66,
                  "deg": 304,
                  "gust": 1.42
                },
                "visibility": 10000,
                "pop": 0.11,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-28 18:00:00"
              },
              {
                "dt": 1682715600,
                "main": {
                  "temp": 3.46,
                  "feels_like": 3.46,
                  "temp_min": 3.46,
                  "temp_max": 3.46,
                  "pressure": 1016,
                  "sea_level": 1016,
                  "grnd_level": 1012,
                  "humidity": 73,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                  }
                ],
                "clouds": {
                  "all": 44
                },
                "wind": {
                  "speed": 0.84,
                  "deg": 207,
                  "gust": 0.89
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "n"
                },
                "dt_txt": "2023-04-28 21:00:00"
              },
              {
                "dt": 1682726400,
                "main": {
                  "temp": 2.59,
                  "feels_like": 2.59,
                  "temp_min": 2.59,
                  "temp_max": 2.59,
                  "pressure": 1016,
                  "sea_level": 1016,
                  "grnd_level": 1012,
                  "humidity": 75,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                  }
                ],
                "clouds": {
                  "all": 29
                },
                "wind": {
                  "speed": 0.42,
                  "deg": 272,
                  "gust": 0.49
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "n"
                },
                "dt_txt": "2023-04-29 00:00:00"
              },
              {
                "dt": 1682737200,
                "main": {
                  "temp": 1.99,
                  "feels_like": 1.99,
                  "temp_min": 1.99,
                  "temp_max": 1.99,
                  "pressure": 1016,
                  "sea_level": 1016,
                  "grnd_level": 1012,
                  "humidity": 78,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                  }
                ],
                "clouds": {
                  "all": 48
                },
                "wind": {
                  "speed": 0.91,
                  "deg": 80,
                  "gust": 0.92
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-29 03:00:00"
              },
              {
                "dt": 1682748000,
                "main": {
                  "temp": 5.72,
                  "feels_like": 4.01,
                  "temp_min": 5.72,
                  "temp_max": 5.72,
                  "pressure": 1015,
                  "sea_level": 1015,
                  "grnd_level": 1012,
                  "humidity": 66,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 74
                },
                "wind": {
                  "speed": 2.21,
                  "deg": 138,
                  "gust": 3.66
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-29 06:00:00"
              },
              {
                "dt": 1682758800,
                "main": {
                  "temp": 9.1,
                  "feels_like": 7.25,
                  "temp_min": 9.1,
                  "temp_max": 9.1,
                  "pressure": 1015,
                  "sea_level": 1015,
                  "grnd_level": 1011,
                  "humidity": 50,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 97
                },
                "wind": {
                  "speed": 3.31,
                  "deg": 169,
                  "gust": 4.35
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-29 09:00:00"
              },
              {
                "dt": 1682769600,
                "main": {
                  "temp": 10.54,
                  "feels_like": 8.88,
                  "temp_min": 10.54,
                  "temp_max": 10.54,
                  "pressure": 1014,
                  "sea_level": 1014,
                  "grnd_level": 1010,
                  "humidity": 47,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 97
                },
                "wind": {
                  "speed": 4.31,
                  "deg": 179,
                  "gust": 5.99
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-29 12:00:00"
              },
              {
                "dt": 1682780400,
                "main": {
                  "temp": 9.94,
                  "feels_like": 7.74,
                  "temp_min": 9.94,
                  "temp_max": 9.94,
                  "pressure": 1013,
                  "sea_level": 1013,
                  "grnd_level": 1010,
                  "humidity": 52,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 98
                },
                "wind": {
                  "speed": 4.42,
                  "deg": 220,
                  "gust": 7.27
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-29 15:00:00"
              },
              {
                "dt": 1682791200,
                "main": {
                  "temp": 7.66,
                  "feels_like": 5.58,
                  "temp_min": 7.66,
                  "temp_max": 7.66,
                  "pressure": 1013,
                  "sea_level": 1013,
                  "grnd_level": 1010,
                  "humidity": 67,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 98
                },
                "wind": {
                  "speed": 3.19,
                  "deg": 214,
                  "gust": 6.76
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-29 18:00:00"
              },
              {
                "dt": 1682802000,
                "main": {
                  "temp": 6.01,
                  "feels_like": 4.27,
                  "temp_min": 6.01,
                  "temp_max": 6.01,
                  "pressure": 1013,
                  "sea_level": 1013,
                  "grnd_level": 1009,
                  "humidity": 80,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                  }
                ],
                "clouds": {
                  "all": 99
                },
                "wind": {
                  "speed": 2.3,
                  "deg": 214,
                  "gust": 5.37
                },
                "visibility": 10000,
                "pop": 0.06,
                "sys": {
                  "pod": "n"
                },
                "dt_txt": "2023-04-29 21:00:00"
              },
              {
                "dt": 1682812800,
                "main": {
                  "temp": 6.21,
                  "feels_like": 4.51,
                  "temp_min": 6.21,
                  "temp_max": 6.21,
                  "pressure": 1012,
                  "sea_level": 1012,
                  "grnd_level": 1009,
                  "humidity": 86,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                  }
                ],
                "clouds": {
                  "all": 100
                },
                "wind": {
                  "speed": 2.29,
                  "deg": 238,
                  "gust": 5.84
                },
                "visibility": 10000,
                "pop": 0.33,
                "rain": {
                  "3h": 0.11
                },
                "sys": {
                  "pod": "n"
                },
                "dt_txt": "2023-04-30 00:00:00"
              },
              {
                "dt": 1682823600,
                "main": {
                  "temp": 5.5,
                  "feels_like": 3.13,
                  "temp_min": 5.5,
                  "temp_max": 5.5,
                  "pressure": 1011,
                  "sea_level": 1011,
                  "grnd_level": 1008,
                  "humidity": 87,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 100
                },
                "wind": {
                  "speed": 2.97,
                  "deg": 184,
                  "gust": 8.23
                },
                "visibility": 10000,
                "pop": 0.01,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-30 03:00:00"
              },
              {
                "dt": 1682834400,
                "main": {
                  "temp": 5.54,
                  "feels_like": 2.61,
                  "temp_min": 5.54,
                  "temp_max": 5.54,
                  "pressure": 1011,
                  "sea_level": 1011,
                  "grnd_level": 1007,
                  "humidity": 91,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                  }
                ],
                "clouds": {
                  "all": 100
                },
                "wind": {
                  "speed": 3.84,
                  "deg": 208,
                  "gust": 8.08
                },
                "visibility": 10000,
                "pop": 0.71,
                "rain": {
                  "3h": 2.08
                },
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-30 06:00:00"
              },
              {
                "dt": 1682845200,
                "main": {
                  "temp": 5.54,
                  "feels_like": 2.16,
                  "temp_min": 5.54,
                  "temp_max": 5.54,
                  "pressure": 1011,
                  "sea_level": 1011,
                  "grnd_level": 1008,
                  "humidity": 88,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                  }
                ],
                "clouds": {
                  "all": 100
                },
                "wind": {
                  "speed": 4.7,
                  "deg": 304,
                  "gust": 7.5
                },
                "visibility": 10000,
                "pop": 0.61,
                "rain": {
                  "3h": 0.29
                },
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-30 09:00:00"
              },
              {
                "dt": 1682856000,
                "main": {
                  "temp": 8.75,
                  "feels_like": 6.68,
                  "temp_min": 8.75,
                  "temp_max": 8.75,
                  "pressure": 1012,
                  "sea_level": 1012,
                  "grnd_level": 1008,
                  "humidity": 55,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 70
                },
                "wind": {
                  "speed": 3.57,
                  "deg": 295,
                  "gust": 6.04
                },
                "visibility": 10000,
                "pop": 0.25,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-30 12:00:00"
              },
              {
                "dt": 1682866800,
                "main": {
                  "temp": 9.64,
                  "feels_like": 7.73,
                  "temp_min": 9.64,
                  "temp_max": 9.64,
                  "pressure": 1012,
                  "sea_level": 1012,
                  "grnd_level": 1009,
                  "humidity": 42,
                  "temp_kf": 0
                },
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": {
                  "all": 51
                },
                "wind": {
                  "speed": 3.65,
                  "deg": 318,
                  "gust": 5.41
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                  "pod": "d"
                },
                "dt_txt": "2023-04-30 15:00:00"
              }
            ],
            "city": {
              "id": 2673730,
              "name": "Stockholm",
              "coord": {
                "lat": 59.3326,
                "lon": 18.0649
              },
              "country": "SE",
              "population": 1000000,
              "timezone": 7200,
              "sunrise": 1682391964,
              "sunset": 1682447109
          }
        };
        console.log('Forecast kallad')
         return fakeForecast}

      return { getWeatherData, getForecastData };
}

export default ApiTest