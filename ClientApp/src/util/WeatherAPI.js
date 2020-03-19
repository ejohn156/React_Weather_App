export default {
    getForecast: async function () {
        var forecastJson = {

            "cod": "200",
            "message": 0,
            "cnt": 40,
            "list": [
                {
                    "dt": 1584651600,
                    "main": {
                        "temp": 79.23,
                        "feels_like": 76.37,
                        "temp_min": 79.23,
                        "temp_max": 79.79,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 999,
                        "humidity": 54,
                        "temp_kf": -0.31
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 1
                    },
                    "wind": {
                        "speed": 11.65,
                        "deg": 219
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-19 21:00:00"
                },
                {
                    "dt": 1584662400,
                    "main": {
                        "temp": 70.92,
                        "feels_like": 70.65,
                        "temp_min": 70.92,
                        "temp_max": 71.33,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 1000,
                        "humidity": 73,
                        "temp_kf": -0.23
                    },
                    "weather": [
                        {
                            "id": 801,
                            "main": "Clouds",
                            "description": "few clouds",
                            "icon": "02n"
                        }
                    ],
                    "clouds": {
                        "all": 20
                    },
                    "wind": {
                        "speed": 7.54,
                        "deg": 202
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-20 00:00:00"
                },
                {
                    "dt": 1584673200,
                    "main": {
                        "temp": 67.98,
                        "feels_like": 68.2,
                        "temp_min": 67.98,
                        "temp_max": 68.27,
                        "pressure": 1024,
                        "sea_level": 1024,
                        "grnd_level": 1001,
                        "humidity": 83,
                        "temp_kf": -0.16
                    },
                    "weather": [
                        {
                            "id": 801,
                            "main": "Clouds",
                            "description": "few clouds",
                            "icon": "02n"
                        }
                    ],
                    "clouds": {
                        "all": 24
                    },
                    "wind": {
                        "speed": 7.23,
                        "deg": 205
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-20 03:00:00"
                },
                {
                    "dt": 1584684000,
                    "main": {
                        "temp": 66.87,
                        "feels_like": 65.43,
                        "temp_min": 66.87,
                        "temp_max": 67.01,
                        "pressure": 1023,
                        "sea_level": 1023,
                        "grnd_level": 1000,
                        "humidity": 82,
                        "temp_kf": -0.08
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
                        "all": 62
                    },
                    "wind": {
                        "speed": 9.17,
                        "deg": 200
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-20 06:00:00"
                },
                {
                    "dt": 1584694800,
                    "main": {
                        "temp": 64.85,
                        "feels_like": 63.32,
                        "temp_min": 64.85,
                        "temp_max": 64.85,
                        "pressure": 1023,
                        "sea_level": 1023,
                        "grnd_level": 1000,
                        "humidity": 87,
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
                        "speed": 9.13,
                        "deg": 204
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-20 09:00:00"
                },
                {
                    "dt": 1584705600,
                    "main": {
                        "temp": 63.9,
                        "feels_like": 62.51,
                        "temp_min": 63.9,
                        "temp_max": 63.9,
                        "pressure": 1023,
                        "sea_level": 1023,
                        "grnd_level": 1000,
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
                        "all": 80
                    },
                    "wind": {
                        "speed": 9.31,
                        "deg": 207
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-20 12:00:00"
                },
                {
                    "dt": 1584716400,
                    "main": {
                        "temp": 72.59,
                        "feels_like": 69.15,
                        "temp_min": 72.59,
                        "temp_max": 72.59,
                        "pressure": 1023,
                        "sea_level": 1023,
                        "grnd_level": 1001,
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
                        "all": 93
                    },
                    "wind": {
                        "speed": 12.57,
                        "deg": 225
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-20 15:00:00"
                },
                {
                    "dt": 1584727200,
                    "main": {
                        "temp": 78.89,
                        "feels_like": 73.44,
                        "temp_min": 78.89,
                        "temp_max": 78.89,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 999,
                        "humidity": 48,
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
                        "all": 94
                    },
                    "wind": {
                        "speed": 13.91,
                        "deg": 223
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-20 18:00:00"
                },
                {
                    "dt": 1584738000,
                    "main": {
                        "temp": 79.79,
                        "feels_like": 75.81,
                        "temp_min": 79.79,
                        "temp_max": 79.79,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 997,
                        "humidity": 51,
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
                        "speed": 12.88,
                        "deg": 242
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-20 21:00:00"
                },
                {
                    "dt": 1584748800,
                    "main": {
                        "temp": 67.64,
                        "feels_like": 67.93,
                        "temp_min": 67.64,
                        "temp_max": 67.64,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 998,
                        "humidity": 70,
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
                        "speed": 3.71,
                        "deg": 348
                    },
                    "rain": {
                        "3h": 2
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-21 00:00:00"
                },
                {
                    "dt": 1584759600,
                    "main": {
                        "temp": 64.76,
                        "feels_like": 64.83,
                        "temp_min": 64.76,
                        "temp_max": 64.76,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 999,
                        "humidity": 76,
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
                        "speed": 3.8,
                        "deg": 287
                    },
                    "rain": {
                        "3h": 1.44
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-21 03:00:00"
                },
                {
                    "dt": 1584770400,
                    "main": {
                        "temp": 61.84,
                        "feels_like": 61.43,
                        "temp_min": 61.84,
                        "temp_max": 61.84,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 999,
                        "humidity": 82,
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
                        "speed": 4.23,
                        "deg": 340
                    },
                    "rain": {
                        "3h": 1.25
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-21 06:00:00"
                },
                {
                    "dt": 1584781200,
                    "main": {
                        "temp": 60.35,
                        "feels_like": 60.51,
                        "temp_min": 60.35,
                        "temp_max": 60.35,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 998,
                        "humidity": 83,
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
                        "speed": 2.57,
                        "deg": 131
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-21 09:00:00"
                },
                {
                    "dt": 1584792000,
                    "main": {
                        "temp": 60.49,
                        "feels_like": 60.93,
                        "temp_min": 60.49,
                        "temp_max": 60.49,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 999,
                        "humidity": 84,
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
                        "speed": 2.35,
                        "deg": 286
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-21 12:00:00"
                },
                {
                    "dt": 1584802800,
                    "main": {
                        "temp": 70,
                        "feels_like": 71.82,
                        "temp_min": 70,
                        "temp_max": 70,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 1000,
                        "humidity": 64,
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
                        "speed": 0.85,
                        "deg": 214
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-21 15:00:00"
                },
                {
                    "dt": 1584813600,
                    "main": {
                        "temp": 74.62,
                        "feels_like": 73.44,
                        "temp_min": 74.62,
                        "temp_max": 74.62,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 999,
                        "humidity": 51,
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
                        "all": 87
                    },
                    "wind": {
                        "speed": 5.03,
                        "deg": 224
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-21 18:00:00"
                },
                {
                    "dt": 1584824400,
                    "main": {
                        "temp": 75.49,
                        "feels_like": 74.73,
                        "temp_min": 75.49,
                        "temp_max": 75.49,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 997,
                        "humidity": 49,
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
                        "speed": 4.09,
                        "deg": 252
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-21 21:00:00"
                },
                {
                    "dt": 1584835200,
                    "main": {
                        "temp": 66.16,
                        "feels_like": 66.25,
                        "temp_min": 66.16,
                        "temp_max": 66.16,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 999,
                        "humidity": 72,
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
                        "all": 96
                    },
                    "wind": {
                        "speed": 3.67,
                        "deg": 354
                    },
                    "rain": {
                        "3h": 0.38
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-22 00:00:00"
                },
                {
                    "dt": 1584846000,
                    "main": {
                        "temp": 57.02,
                        "feels_like": 52.34,
                        "temp_min": 57.02,
                        "temp_max": 57.02,
                        "pressure": 1024,
                        "sea_level": 1024,
                        "grnd_level": 1001,
                        "humidity": 87,
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
                        "all": 90
                    },
                    "wind": {
                        "speed": 10.07,
                        "deg": 58
                    },
                    "rain": {
                        "3h": 0.31
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-22 03:00:00"
                },
                {
                    "dt": 1584856800,
                    "main": {
                        "temp": 53.49,
                        "feels_like": 48.25,
                        "temp_min": 53.49,
                        "temp_max": 53.49,
                        "pressure": 1024,
                        "sea_level": 1024,
                        "grnd_level": 1001,
                        "humidity": 82,
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
                        "all": 95
                    },
                    "wind": {
                        "speed": 8.59,
                        "deg": 39
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-22 06:00:00"
                },
                {
                    "dt": 1584867600,
                    "main": {
                        "temp": 50.18,
                        "feels_like": 43.39,
                        "temp_min": 50.18,
                        "temp_max": 50.18,
                        "pressure": 1025,
                        "sea_level": 1025,
                        "grnd_level": 1002,
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
                        "all": 100
                    },
                    "wind": {
                        "speed": 9.66,
                        "deg": 53
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-22 09:00:00"
                },
                {
                    "dt": 1584878400,
                    "main": {
                        "temp": 48.74,
                        "feels_like": 41.31,
                        "temp_min": 48.74,
                        "temp_max": 48.74,
                        "pressure": 1026,
                        "sea_level": 1026,
                        "grnd_level": 1003,
                        "humidity": 77,
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
                        "speed": 9.91,
                        "deg": 50
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-22 12:00:00"
                },
                {
                    "dt": 1584889200,
                    "main": {
                        "temp": 49.87,
                        "feels_like": 42.35,
                        "temp_min": 49.87,
                        "temp_max": 49.87,
                        "pressure": 1029,
                        "sea_level": 1029,
                        "grnd_level": 1006,
                        "humidity": 70,
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
                        "speed": 9.6,
                        "deg": 48
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-22 15:00:00"
                },
                {
                    "dt": 1584900000,
                    "main": {
                        "temp": 50.2,
                        "feels_like": 44.2,
                        "temp_min": 50.2,
                        "temp_max": 50.2,
                        "pressure": 1029,
                        "sea_level": 1029,
                        "grnd_level": 1005,
                        "humidity": 73,
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
                        "speed": 7.36,
                        "deg": 63
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-22 18:00:00"
                },
                {
                    "dt": 1584910800,
                    "main": {
                        "temp": 50.77,
                        "feels_like": 45.14,
                        "temp_min": 50.77,
                        "temp_max": 50.77,
                        "pressure": 1027,
                        "sea_level": 1027,
                        "grnd_level": 1004,
                        "humidity": 77,
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
                        "speed": 7.45,
                        "deg": 69
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-22 21:00:00"
                },
                {
                    "dt": 1584921600,
                    "main": {
                        "temp": 50.45,
                        "feels_like": 45.1,
                        "temp_min": 50.45,
                        "temp_max": 50.45,
                        "pressure": 1028,
                        "sea_level": 1028,
                        "grnd_level": 1005,
                        "humidity": 75,
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
                        "speed": 6.55,
                        "deg": 65
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-23 00:00:00"
                },
                {
                    "dt": 1584932400,
                    "main": {
                        "temp": 47.79,
                        "feels_like": 42.21,
                        "temp_min": 47.79,
                        "temp_max": 47.79,
                        "pressure": 1028,
                        "sea_level": 1028,
                        "grnd_level": 1005,
                        "humidity": 83,
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
                        "speed": 7,
                        "deg": 72
                    },
                    "rain": {
                        "3h": 0.56
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-23 03:00:00"
                },
                {
                    "dt": 1584943200,
                    "main": {
                        "temp": 46.74,
                        "feels_like": 42.08,
                        "temp_min": 46.74,
                        "temp_max": 46.74,
                        "pressure": 1028,
                        "sea_level": 1028,
                        "grnd_level": 1004,
                        "humidity": 89,
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
                        "speed": 5.68,
                        "deg": 39
                    },
                    "rain": {
                        "3h": 1.06
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-23 06:00:00"
                },
                {
                    "dt": 1584954000,
                    "main": {
                        "temp": 47.05,
                        "feels_like": 43.2,
                        "temp_min": 47.05,
                        "temp_max": 47.05,
                        "pressure": 1027,
                        "sea_level": 1027,
                        "grnd_level": 1002,
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
                        "speed": 4.03,
                        "deg": 26
                    },
                    "rain": {
                        "3h": 0.25
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-23 09:00:00"
                },
                {
                    "dt": 1584964800,
                    "main": {
                        "temp": 44.98,
                        "feels_like": 38.98,
                        "temp_min": 44.98,
                        "temp_max": 44.98,
                        "pressure": 1027,
                        "sea_level": 1027,
                        "grnd_level": 1003,
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
                        "speed": 7.16,
                        "deg": 20
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-23 12:00:00"
                },
                {
                    "dt": 1584975600,
                    "main": {
                        "temp": 54.45,
                        "feels_like": 51.01,
                        "temp_min": 54.45,
                        "temp_max": 54.45,
                        "pressure": 1027,
                        "sea_level": 1027,
                        "grnd_level": 1004,
                        "humidity": 73,
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
                        "speed": 4.43,
                        "deg": 40
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-23 15:00:00"
                },
                {
                    "dt": 1584986400,
                    "main": {
                        "temp": 59.13,
                        "feels_like": 57.33,
                        "temp_min": 59.13,
                        "temp_max": 59.13,
                        "pressure": 1025,
                        "sea_level": 1025,
                        "grnd_level": 1003,
                        "humidity": 70,
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
                        "speed": 3.02,
                        "deg": 147
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-23 18:00:00"
                },
                {
                    "dt": 1584997200,
                    "main": {
                        "temp": 65.57,
                        "feels_like": 65.77,
                        "temp_min": 65.57,
                        "temp_max": 65.57,
                        "pressure": 1023,
                        "sea_level": 1023,
                        "grnd_level": 1000,
                        "humidity": 59,
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
                        "speed": 0.22,
                        "deg": 158
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-23 21:00:00"
                },
                {
                    "dt": 1585008000,
                    "main": {
                        "temp": 59.09,
                        "feels_like": 57.87,
                        "temp_min": 59.09,
                        "temp_max": 59.09,
                        "pressure": 1023,
                        "sea_level": 1023,
                        "grnd_level": 1000,
                        "humidity": 79,
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
                        "speed": 3.62,
                        "deg": 198
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-24 00:00:00"
                },
                {
                    "dt": 1585018800,
                    "main": {
                        "temp": 56.14,
                        "feels_like": 55.24,
                        "temp_min": 56.14,
                        "temp_max": 56.14,
                        "pressure": 1024,
                        "sea_level": 1024,
                        "grnd_level": 1001,
                        "humidity": 86,
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
                        "speed": 2.75,
                        "deg": 179
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-24 03:00:00"
                },
                {
                    "dt": 1585029600,
                    "main": {
                        "temp": 54.48,
                        "feels_like": 54.36,
                        "temp_min": 54.48,
                        "temp_max": 54.48,
                        "pressure": 1023,
                        "sea_level": 1023,
                        "grnd_level": 1000,
                        "humidity": 89,
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
                        "speed": 1.01,
                        "deg": 164
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-24 06:00:00"
                },
                {
                    "dt": 1585040400,
                    "main": {
                        "temp": 54.73,
                        "feels_like": 53.46,
                        "temp_min": 54.73,
                        "temp_max": 54.73,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 998,
                        "humidity": 90,
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
                        "speed": 3.33,
                        "deg": 101
                    },
                    "rain": {
                        "3h": 0.25
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2020-03-24 09:00:00"
                },
                {
                    "dt": 1585051200,
                    "main": {
                        "temp": 55.09,
                        "feels_like": 52.09,
                        "temp_min": 55.09,
                        "temp_max": 55.09,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 997,
                        "humidity": 94,
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
                        "speed": 7.2,
                        "deg": 115
                    },
                    "rain": {
                        "3h": 1.13
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-24 12:00:00"
                },
                {
                    "dt": 1585062000,
                    "main": {
                        "temp": 56.64,
                        "feels_like": 52,
                        "temp_min": 56.64,
                        "temp_max": 56.64,
                        "pressure": 1019,
                        "sea_level": 1019,
                        "grnd_level": 995,
                        "humidity": 96,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 501,
                            "main": "Rain",
                            "description": "moderate rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 11.3,
                        "deg": 140
                    },
                    "rain": {
                        "3h": 7.44
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-24 15:00:00"
                },
                {
                    "dt": 1585072800,
                    "main": {
                        "temp": 58.95,
                        "feels_like": 57.83,
                        "temp_min": 58.95,
                        "temp_max": 58.95,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 994,
                        "humidity": 96,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 502,
                            "main": "Rain",
                            "description": "heavy intensity rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 6.4,
                        "deg": 180
                    },
                    "rain": {
                        "3h": 12.94
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2020-03-24 18:00:00"
                }
            ],
            "city": {
                "id": 4460243,
                "name": "Charlotte",
                "coord": {
                    "lat": 35.2271,
                    "lon": -80.8431
                },
                "country": "US",
                "population": 731424,
                "timezone": -14400,
                "sunrise": 1584617262,
                "sunset": 1584660854
            }
        }
        return await forecastJson
    }
}