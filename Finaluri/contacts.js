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
        text6:"Contact Us",
        text7:"Call Us",
        text8:"Call our hotline and receive help from one of our operators",
        text9:"Come To Our Shop",
        text10:"Addresses",
        text11:"Tbilisi Vake",
        text12:"Kutaisi Street",
        text13:"Kutaisi Street",
        text14:"Contact Us On Social Media",
        ads_lang:"Adverts",
        ip_nav:"IP"




      
    },
    geo: {
        text1: "მთავარი",
        text2: "პროდუქცია",
        text3:"კონტაქტი",
        text4:"ავტორიზაცია",
        text5:"რეგისტრაცია",
        text6:"დაგვიკავშირდით",
        text7:"დაგვირეკეთ",
        text8:"დაგვირეკეთ ცხელ ხაზზე და ჩვენი ოპერატორები აუცილებლად დაგეხმარებიან",
        text9:"მობრძანდით ჩვენს მაღაზიაში",
        text10:"მისამართები",
        text11:"ქალაქ თბილისი ვაკე-საბურთალოს",
        text12:"ქუთაისი ბესარიონ კვინიხიძის ქუჩა",
        text13:"ქუთაისი ბესარიონ კვინიხიძის ქუჩა",
        text14:"მოგვწერეთ სოციალურ ქსელებზე",
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

    contacts_header.textContent = language.eng.text6;
    call_header.textContent = language.eng.text7;
    call.textContent = language.eng.text8;
    shop.textContent = language.eng.text9;
    adress_header.textContent = language.eng.text10;
    adress1.textContent = language.eng.text11;
    adress2.textContent = language.eng.text12;
    adress3.textContent = language.eng.text13;
    social_header.textContent = language.eng.text14;
    ip_navigation.textContent=language.eng.ip_nav;
}

if (localStorage.getItem("language") === "geo") {
    mecho.textContent = language.geo.text1;
    products.textContent = language.geo.text2;
    contacts.textContent = language.geo.text3;
    login.textContent = language.geo.text4;
    registration.textContent = language.geo.text5;
    ads.textContent=language.geo.ads_lang;

    contacts_header.textContent = language.geo.text6;
    call_header.textContent = language.geo.text7;
    call.textContent = language.geo.text8;
    shop.textContent = language.geo.text9;
    adress_header.textContent = language.geo.text10;
    adress1.textContent = language.geo.text11;
    adress2.textContent = language.geo.text12;
    adress3.textContent = language.geo.text13;
    social_header.textContent = language.geo.text14;
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
    
        contacts_header.textContent = language.eng.text6;
        call_header.textContent = language.eng.text7;
        call.textContent = language.eng.text8;
        shop.textContent = language.eng.text9;
        adress_header.textContent = language.eng.text10;
        adress1.textContent = language.eng.text11;
        adress2.textContent = language.eng.text12;
        adress3.textContent = language.eng.text13;
        social_header.textContent = language.eng.text14;
        ip_navigation.textContent=language.eng.ip_nav;
    }
    
    if (localStorage.getItem("language") === "geo") {
        mecho.textContent = language.geo.text1;
        products.textContent = language.geo.text2;
        contacts.textContent = language.geo.text3;
        login.textContent = language.geo.text4;
        registration.textContent = language.geo.text5;
        ads.textContent=language.geo.ads_lang;
    
        contacts_header.textContent = language.geo.text6;
        call_header.textContent = language.geo.text7;
        call.textContent = language.geo.text8;
        shop.textContent = language.geo.text9;
        adress_header.textContent = language.geo.text10;
        adress1.textContent = language.geo.text11;
        adress2.textContent = language.geo.text12;
        adress3.textContent = language.geo.text13;
        social_header.textContent = language.geo.text14;
        ip_navigation.textContent=language.geo.ip_nav;
    
    }
}