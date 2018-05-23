import { LocationInterface } from './LocationInterface';

export default class Location implements LocationInterface {
    // please complete the implementation of the concrete class based on the interface it implements
    _longitude: string;
    _latitude: string;
	
    getLongitude(): string {
    return _longitude;
    }
	
    getLatitude(): string {
  
    return this._latitude;
    }

    setLongitude(value: string)
    {
     this._longitude = value;
    }
    
    setLatitude(value: string)
    {
     this._latitude = value;
    }
	
}
