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
        ads_lang:"Adverts",
        ip_nav:"IP"
        



      
    },
    geo: {
        text1: "მთავარი",
        text2: "პროდუქცია",
        text3:"კონტაქტი",
        text4:"ავტორიზაცია",
        text5:"რეგისტრაცია",
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
    header_reklama2.textContent=language.eng.ads_lang;
    ads.textContent=language.eng.ads_lang;
    ip_navigation.textContent=language.eng.ip_nav;

    
}

if (localStorage.getItem("language") === "geo") {
    mecho.textContent = language.geo.text1;
    products.textContent = language.geo.text2;
    contacts.textContent = language.geo.text3;
    login.textContent = language.geo.text4;
    registration.textContent = language.geo.text5;
    header_reklama2.textContent=language.geo.ads_lang;
    ads.textContent=language.geo.ads_lang;
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
        header_reklama2.textContent=language.eng.ads_lang;
        ads.textContent=language.eng.ads_lang;
        ip_navigation.textContent=language.eng.ip_nav;
    
        
    }
    
    if (localStorage.getItem("language") === "geo") {
        mecho.textContent = language.geo.text1;
        products.textContent = language.geo.text2;
        contacts.textContent = language.geo.text3;
        login.textContent = language.geo.text4;
        registration.textContent = language.geo.text5;
        header_reklama2.textContent=language.geo.ads_lang;
        ads.textContent=language.geo.ads_lang;
        ip_navigation.textContent=language.geo.ip_nav;
    
    }
}