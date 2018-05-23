// @flow
import axios from 'axios';

export default class WeatherApi {
    async getWeatherByGeolocation(lat: string, long: string): Promise<Object> {
        /**
         * https://darksky.net/dev/docs
         *
         * please create an account to read document and to register for an API key https://darksky.net/dev/register
         * please implement the proxy to darknet using the API key
         * 14f6e683b45aa149be749df60083b119
         */
        _url : string;

        _url  = 'https://api.darksky.net/forecast/14f6e683b45aa149be749df60083b119/ ' + lat + ',' + long;

        return axios.get(_url);
    }
}
