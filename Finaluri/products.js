var session_lang=localStorage.getItem("language");
function language_switch(lang) {
    localStorage.setItem("language",lang);
    funEng();
  }

  var language = {
    eng: {
        text1:"Home",
        text2:"Products",
        text3:"Contacts",
        text4:"Autorisation",
        text5:"Registration",
        text6:"Personal Computers",
        text7:"Computer Parts",
        text8:"Peripheral Devices",
        text9:"Monitors",
        text10:"Videogames",
        text11:"Others",
        text12:"Products",
        ads_lang:"Adverts",
        ip_nav:"IP"




      
    },
    geo: {
        text1: "მთავარი",
        text2: "პროდუქცია",
        text3:"კონტაქტი",
        text4:"ავტორიზაცია",
        text5:"რეგისტრაცია",
        text6:"პერსონალური კომპიუტერები",
        text7:"კომპიუტერის ნაწილები",
        text8:"პერიფერიული მოწყობილობები",
        text9:"ეკრანები",
        text10:"ვიდეოთამაშები",
        text11:"სხვადასხვა",
        text12:"პროდუქცია",
        ads_lang:"რეკლამები",
        ip_nav:"აიპი",



    }
  }
if (localStorage.getItem("language") === "eng") {
    mecho.textContent = language.eng.text1;
    products.textContent = language.eng.text2;
    contacts.textContent = language.eng.text3;
    login.textContent = language.eng.text4;
    registration.textContent = language.eng.text5;
    ads.textContent=language.eng.ads_lang;

    pc.textContent = language.eng.text6;
    pc_parts.textContent = language.eng.text7;
    peripherals.textContent = language.eng.text8;
    monitors.textContent = language.eng.text9;
    videogames.textContent = language.eng.text10;
    misc.textContent = language.eng.text11;
    header2.textContent = language.eng.text12;
    ip_navigation.textContent=language.eng.ip_nav;
}

if (localStorage.getItem("language") === "geo") {
    mecho.textContent = language.geo.text1;
    products.textContent = language.geo.text2;
    contacts.textContent = language.geo.text3;
    login.textContent = language.geo.text4;
    registration.textContent = language.geo.text5;
    ads.textContent=language.geo.ads_lang;

    pc.textContent = language.geo.text6;
    pc_parts.textContent = language.geo.text7;
    peripherals.textContent = language.geo.text8;
    monitors.textContent = language.geo.text9;
    videogames.textContent = language.geo.text10;
    misc.textContent = language.geo.text11;
    header2.textContent = language.geo.text12;
    ip_navigation.textContent=language.geo.ip_nav;

}
  


function funEng(){
    // console.log(sessionStorage.getItem("language"))

    if (localStorage.getItem("language") === "eng") {
        mecho.textContent = language.eng.text1;
        products.textContent = language.eng.text2;
        contacts.textContent = language.eng.text3;
        login.textContent = language.eng.text4;
        registration.textContent = language.eng.text5;
        ads.textContent=language.eng.ads_lang;
    
        pc.textContent = language.eng.text6;
        pc_parts.textContent = language.eng.text7;
        peripherals.textContent = language.eng.text8;
        monitors.textContent = language.eng.text9;
        videogames.textContent = language.eng.text10;
        misc.textContent = language.eng.text11;
        header2.textContent = language.eng.text12;
        ip_navigation.textContent=language.eng.ip_nav;
    }
    
    if (localStorage.getItem("language") === "geo") {
        mecho.textContent = language.geo.text1;
        products.textContent = language.geo.text2;
        contacts.textContent = language.geo.text3;
        login.textContent = language.geo.text4;
        registration.textContent = language.geo.text5;
        ads.textContent=language.geo.ads_lang;
    
        pc.textContent = language.geo.text6;
        pc_parts.textContent = language.geo.text7;
        peripherals.textContent = language.geo.text8;
        monitors.textContent = language.geo.text9;
        videogames.textContent = language.geo.text10;
        misc.textContent = language.geo.text11;
        header2.textContent = language.geo.text12;
        ip_navigation.textContent=language.geo.ip_nav;
    
    }
      
}