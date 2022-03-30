import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class NetworkserviceService {

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllMobile() {
    let no=Math.floor(Math.random() * 3)
    if (no == 0) {
      const getAllMobile = 'https://mobilecoffeeserver7.herokuapp.com/detail';
      return this.httpClient.get<any>(getAllMobile);
    }
    if (no == 1) {
      const getAllMobile = 'https://mobilecoffeeserver8.herokuapp.com/detail';
      return this.httpClient.get<any>(getAllMobile);
    }
    if (no == 2) {
      const getAllMobile = 'https://mobilecoffeeserver6.herokuapp.com/detail';
      return this.httpClient.get<any>(getAllMobile);
    }
  }

  getAllMobileLess() {
    let no=Math.floor(Math.random() * 3)
    if (no == 0) {
      const getAllMobileLess = 'https://mobilecoffeeserver6.herokuapp.com/detailLess';
      return this.httpClient.get<any>(getAllMobileLess);
    }
    if (no == 1) {
      const getAllMobileLess = 'https://mobilecoffeeserver7.herokuapp.com/detailLess';
      return this.httpClient.get<any>(getAllMobileLess);
    }
    if (no == 2) {
      const getAllMobileLess = 'https://mobilecoffeeserver8.herokuapp.com/detailLess';
      return this.httpClient.get<any>(getAllMobileLess);
    }

  }

  getMobile(data): Observable<any> {
    let no=Math.floor(Math.random() * 3)
    if (no == 0) {
      const getMobileAPI = `https://mobilecoffeeserver7.herokuapp.com/detail/${data}`;
      return this.httpClient.get(getMobileAPI)
    }
    if (no == 1) {
      const getMobileAPI = `https://mobilecoffeeserver6.herokuapp.com/detail/${data}`;
      return this.httpClient.get(getMobileAPI)
    }
    if (no == 2) {
      const getMobileAPI = `https://mobilecoffeeserver8.herokuapp.com/detail/${data}`;
      return this.httpClient.get(getMobileAPI)
    }

  }

  getAirPod(): Observable<any> {
    let no=Math.floor(Math.random() * 3)
    if (no == 0) {
      const getAirPodAPI = `https://mobilecoffeeserver7.herokuapp.com/airpod`;
      return this.httpClient.get(getAirPodAPI)
    }
    if (no == 1) {
      const getAirPodAPI = `https://mobilecoffeeserver6.herokuapp.com/airpod`;
      return this.httpClient.get(getAirPodAPI)
    }
    if (no == 2) {
      const getAirPodAPI = `https://mobilecoffeeserver8.herokuapp.com/airpod`;
      return this.httpClient.get(getAirPodAPI)
    }

  }

  getIpad(): Observable<any> {
    let no=Math.floor(Math.random() * 3)
    if (no == 0) {
      const getIpadAPI = `https://mobilecoffeeserver8.herokuapp.com/ipad`;
      return this.httpClient.get(getIpadAPI)
    }
    if (no == 1) {
      const getIpadAPI = `https://mobilecoffeeserver6.herokuapp.com/ipad`;
      return this.httpClient.get(getIpadAPI)
    }
    if (no == 2) {
      const getIpadAPI = `https://mobilecoffeeserver7.herokuapp.com/ipad`;
      return this.httpClient.get(getIpadAPI)
    }

  }

  getAppleWatch(): Observable<any> {
    let no=Math.floor(Math.random() * 3)
    if (no == 0) {
      const getAppleWatchAPI = `https://mobilecoffeeserver6.herokuapp.com/applewatch`;
      return this.httpClient.get(getAppleWatchAPI)
    }
    if (no == 1) {
      const getAppleWatchAPI = `https://mobilecoffeeserver8.herokuapp.com/applewatch`;
      return this.httpClient.get(getAppleWatchAPI)
    }
    if (no == 2) {
      const getAppleWatchAPI = `https://mobilecoffeeserver7.herokuapp.com/applewatch`;
      return this.httpClient.get(getAppleWatchAPI)
    }

  }

  getMacbook(): Observable<any> {
    let no=Math.floor(Math.random() * 3)
    if (no == 0) {
      const getMacbookAPI = `https://mobilecoffeeserver6.herokuapp.com/macbook`;
      return this.httpClient.get(getMacbookAPI)
    }
    if (no == 1) {
      const getMacbookAPI = `https://mobilecoffeeserver8.herokuapp.com/macbook`;
      return this.httpClient.get(getMacbookAPI)
    }
    if (no == 2) {
      const getMacbookAPI = `https://mobilecoffeeserver7.herokuapp.com/macbook`;
      return this.httpClient.get(getMacbookAPI)
    }

  }

  getMacbookPro(): Observable<any> {
    let no=Math.floor(Math.random() * 3)
    if (no == 0) {
      const getMacbookProAPI = `https://mobilecoffeeserver6.herokuapp.com/macbookpro`;
      return this.httpClient.get(getMacbookProAPI)
    }
    if (no == 1) {
      const getMacbookProAPI = `https://mobilecoffeeserver7.herokuapp.com/macbookpro`;
      return this.httpClient.get(getMacbookProAPI)
    }
    if (no == 2) {
      const getMacbookProAPI = `https://mobilecoffeeserver8.herokuapp.com/macbookpro`;
      return this.httpClient.get(getMacbookProAPI)
    }

  }

  getSimData(): Observable<any> {
    let no=Math.floor(Math.random() * 3)
    if (no == 0) {
      const getSimDataAPI = `https://mobilecoffeeserver7.herokuapp.com/simdata`;
      return this.httpClient.get(getSimDataAPI)
    }
    if (no == 1) {
      const getSimDataAPI = `https://mobilecoffeeserver8.herokuapp.com/simdata`;
      return this.httpClient.get(getSimDataAPI)
    }
    if (no == 2) {
      const getSimDataAPI = `https://mobilecoffeeserver6.herokuapp.com/simdata`;
      return this.httpClient.get(getSimDataAPI)
    }

  }

  getDienthoaicu(): Observable<any> {
    let no=Math.floor(Math.random() * 3)
    if (no == 0) {
      const getDienthoaicuAPI = `https://mobilecoffeeserver7.herokuapp.com/dienthoaicu`;
      return this.httpClient.get(getDienthoaicuAPI)
    }
    if (no == 1) {
      const getDienthoaicuAPI = `https://mobilecoffeeserver8.herokuapp.com/dienthoaicu`;
      return this.httpClient.get(getDienthoaicuAPI)
    }
    if (no == 2) {
      const getDienthoaicuAPI = `https://mobilecoffeeserver6.herokuapp.com/dienthoaicu`;
      return this.httpClient.get(getDienthoaicuAPI)
    }

  }

  getIphone(): Observable<any> {
    let no=Math.floor(Math.random() * 3)
    if (no == 0) {
      const getIphoneAPI = `https://mobilecoffeeserver7.herokuapp.com/iphone`;
      return this.httpClient.get(getIphoneAPI)
    }
    if (no == 1) {
      const getIphoneAPI = `https://mobilecoffeeserver8.herokuapp.com/iphone`;
      return this.httpClient.get(getIphoneAPI)
    }
    if (no == 2) {
      const getIphoneAPI = `https://mobilecoffeeserver6.herokuapp.com/iphone`;
      return this.httpClient.get(getIphoneAPI)
    }

  }

  getPhukien(): Observable<any> {
    let no=Math.floor(Math.random() * 3)
    if (no == 0) {
      const getPhukienAPI = `https://mobilecoffeeserver6.herokuapp.com/phukien`;
      console.log('getPhukien4',this.httpClient.get(getPhukienAPI))
      return this.httpClient.get(getPhukienAPI)
    
    }
    if (no == 1) {
      const getPhukienAPI = `https://mobilecoffeeserver8.herokuapp.com/phukien`;
      console.log('getPhukien3',this.httpClient.get(getPhukienAPI))
      return this.httpClient.get(getPhukienAPI)
    }
    if (no == 2) {
      const getPhukienAPI = `https://mobilecoffeeserver7.herokuapp.com/phukien`;
      console.log('getPhukien',this.httpClient.get(getPhukienAPI))
      return this.httpClient.get(getPhukienAPI)
    }

  }

  getAndroid(): Observable<any> {
    let no=Math.floor(Math.random() * 3)
    if (no == 0) {
      const getAndroidAPI = `https://mobilecoffeeserver7.herokuapp.com/android`;
      return this.httpClient.get(getAndroidAPI)
    }
    if (no == 1) {
      const getAndroidAPI = `https://mobilecoffeeserver8.herokuapp.com/android`;
      return this.httpClient.get(getAndroidAPI)
    }
    if (no == 2) {
      const getAndroidAPI = `https://mobilecoffeeserver6.herokuapp.com/android`;
      return this.httpClient.get(getAndroidAPI)
    }

  }

  getSanphamkhac(): Observable<any> {
    let no=Math.floor(Math.random() * 3)
    if (no == 0) {
      const getSanphamkhacAPI = `https://mobilecoffeeserver7.herokuapp.com/sanphamkhac`;
      return this.httpClient.get(getSanphamkhacAPI)
    }
    if (no == 1) {
      const getSanphamkhacAPI = `https://mobilecoffeeserver8.herokuapp.com/sanphamkhac`;
      return this.httpClient.get(getSanphamkhacAPI)
    }
    if (no == 2) {
      const getSanphamkhacAPI = `https://mobilecoffeeserver6.herokuapp.com/sanphamkhac`;
      return this.httpClient.get(getSanphamkhacAPI)
    }

  }



  // ////mobilecoffeeserver3

  // getAllMobile3() {
  //   const getAllMobile = 'https://mobilecoffeeserver3.herokuapp.com/detail';
  //   return this.httpClient.get<any>(getAllMobile);
  // }

  // getAllMobileLess3() {
  //   const getAllMobileLess = 'https://mobilecoffeeserver3.herokuapp.com/detailLess';
  //   return this.httpClient.get<any>(getAllMobileLess);
  // }

  // getMobile3(data): Observable<any> {
  //   const getMobileAPI = `https://mobilecoffeeserver3.herokuapp.com/detail/${data}`;
  //   return this.httpClient.get(getMobileAPI)
  // }

  // getAirPod3(): Observable<any> {
  //   const getAirPodAPI = `https://mobilecoffeeserver3.herokuapp.com/airpod`;
  //   return this.httpClient.get(getAirPodAPI)
  // }

  // getIpad3(): Observable<any> {
  //   const getIpadAPI = `https://mobilecoffeeserver3.herokuapp.com/ipad`;
  //   return this.httpClient.get(getIpadAPI)
  // }

  // getAppleWatch3(): Observable<any> {
  //   const getAppleWatchAPI = `https://mobilecoffeeserver3.herokuapp.com/applewatch`;
  //   return this.httpClient.get(getAppleWatchAPI)
  // }

  // getMacbook3(): Observable<any> {
  //   const getMacbookAPI = `https://mobilecoffeeserver3.herokuapp.com/macbook`;
  //   return this.httpClient.get(getMacbookAPI)
  // }

  // getMacbookPro3(): Observable<any> {
  //   const getMacbookProAPI = `https://mobilecoffeeserver3.herokuapp.com/macbookpro`;
  //   return this.httpClient.get(getMacbookProAPI)
  // }

  // getSimData3(): Observable<any> {
  //   const getSimDataAPI = `https://mobilecoffeeserver3.herokuapp.com/simdata`;
  //   return this.httpClient.get(getSimDataAPI)
  // }

  // getDienthoaicu3(): Observable<any> {
  //   const getDienthoaicuAPI = `https://mobilecoffeeserver3.herokuapp.com/dienthoaicu`;
  //   return this.httpClient.get(getDienthoaicuAPI)
  // }

  // getIphone3(): Observable<any> {
  //   const getIphoneAPI = `https://mobilecoffeeserver3.herokuapp.com/iphone`;
  //   return this.httpClient.get(getIphoneAPI)
  // }

  // getPhukien3(): Observable<any> {
  //   const getPhukienAPI = `https://mobilecoffeeserver3.herokuapp.com/phukien`;
  //   return this.httpClient.get(getPhukienAPI)
  // }

  // getAndroid3(): Observable<any> {
  //   const getAndroidAPI = `https://mobilecoffeeserver3.herokuapp.com/android`;
  //   return this.httpClient.get(getAndroidAPI)
  // }

  // getSanphamkhac3(): Observable<any> {
  //   const getSanphamkhacAPI = `https://mobilecoffeeserver3.herokuapp.com/sanphamkhac`;
  //   return this.httpClient.get(getSanphamkhacAPI)
  // }


  // ////mobilecoffeeserver4

  // getAllMobile4() {
  //   const getAllMobile = 'https://mobilecoffeeserver4.herokuapp.com/detail';
  //   return this.httpClient.get<any>(getAllMobile);
  // }

  // getAllMobileLess4() {
  //   const getAllMobileLess = 'https://mobilecoffeeserver4.herokuapp.com/detailLess';
  //   return this.httpClient.get<any>(getAllMobileLess);
  // }

  // getMobile4(data): Observable<any> {
  //   const getMobileAPI = `https://mobilecoffeeserver4.herokuapp.com/detail/${data}`;
  //   return this.httpClient.get(getMobileAPI)
  // }

  // getAirPod4(): Observable<any> {
  //   const getAirPodAPI = `https://mobilecoffeeserver4.herokuapp.com/airpod`;
  //   return this.httpClient.get(getAirPodAPI)
  // }

  // getIpad4(): Observable<any> {
  //   const getIpadAPI = `https://mobilecoffeeserver4.herokuapp.com/ipad`;
  //   return this.httpClient.get(getIpadAPI)
  // }

  // getAppleWatch4(): Observable<any> {
  //   const getAppleWatchAPI = `https://mobilecoffeeserver4.herokuapp.com/applewatch`;
  //   return this.httpClient.get(getAppleWatchAPI)
  // }

  // getMacbook4(): Observable<any> {
  //   const getMacbookAPI = `https://mobilecoffeeserver4.herokuapp.com/macbook`;
  //   return this.httpClient.get(getMacbookAPI)
  // }

  // getMacbookPro4(): Observable<any> {
  //   const getMacbookProAPI = `https://mobilecoffeeserver4.herokuapp.com/macbookpro`;
  //   return this.httpClient.get(getMacbookProAPI)
  // }

  // getSimData4(): Observable<any> {
  //   const getSimDataAPI = `https://mobilecoffeeserver4.herokuapp.com/simdata`;
  //   return this.httpClient.get(getSimDataAPI)
  // }

  // getDienthoaicu4(): Observable<any> {
  //   const getDienthoaicuAPI = `https://mobilecoffeeserver4.herokuapp.com/dienthoaicu`;
  //   return this.httpClient.get(getDienthoaicuAPI)
  // }

  // getIphone4(): Observable<any> {
  //   const getIphoneAPI = `https://mobilecoffeeserver4.herokuapp.com/iphone`;
  //   return this.httpClient.get(getIphoneAPI)
  // }

  // getPhukien4(): Observable<any> {
  //   const getPhukienAPI = `https://mobilecoffeeserver4.herokuapp.com/phukien`;
  //   return this.httpClient.get(getPhukienAPI)
  // }

  // getAndroid4(): Observable<any> {
  //   const getAndroidAPI = `https://mobilecoffeeserver4.herokuapp.com/android`;
  //   return this.httpClient.get(getAndroidAPI)
  // }

  // getSanphamkhac4(): Observable<any> {
  //   const getSanphamkhacAPI = `https://mobilecoffeeserver4.herokuapp.com/sanphamkhac`;
  //   return this.httpClient.get(getSanphamkhacAPI)
  // }
}
