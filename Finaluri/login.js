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
        ip_lan:"Find Your ip",
        ads_lang:"Adverts",
        ip_nav:"IP",
        login_header:"Autorisation",
        input_email:"Please Enter Your Email",
        input_password:"Please Enter Your Password"
        
        



      
    },
    geo: {
        text1: "მთავარი",
        text2: "პროდუქცია",
        text3:"კონტაქტი",
        text4:"ავტორიზაცია",
        text5:"რეგისტრაცია",
        ip_lan:"აიპის გაგება",
        ads_lang:"რეკლამები",
        ip_nav:"აიპი",
        login_header:"ავტორიზაცია",
        input_email:"გთხოვთ შეიყვანეთ თქვენი იმეილი",
        input_password:"გთხოვთ შეიყვანეთ თქვენი პაროლი"
        


    }
  }
  if (localStorage.getItem("language") === "eng") {

    
    mecho.textContent = language.eng.text1;
    products.textContent = language.eng.text2;
    contacts.textContent = language.eng.text3;
    login.textContent = language.eng.text4;
    registration.textContent = language.eng.text5;
    ads.textContent=language.eng.ads_lang;
    ip_navigation.textContent=language.eng.ip_nav;
    login_header.textContent=language.eng.login_header;
    email_login.placeholder=language.eng.input_email;
    password_login.placeholder=language.eng.input_password;
    login_button.value=language.eng.login_header;
    

    
}

if (localStorage.getItem("language") === "geo") {
    mecho.textContent = language.geo.text1;
    products.textContent = language.geo.text2;
    contacts.textContent = language.geo.text3;
    login.textContent = language.geo.text4;
    registration.textContent = language.geo.text5;
    ads.textContent=language.geo.ads_lang;
    ip_navigation.textContent=language.geo.ip_nav;
    email_login.placeholder=language.geo.input_email;
    password_login.placeholder=language.geo.input_password;
    login_button.value=language.geo.login_header;
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
        ip_navigation.textContent=language.eng.ip_nav;
        login_header.textContent=language.eng.login_header;
        email_login.placeholder=language.eng.input_email;
        password_login.placeholder=language.eng.input_password;
        login_button.value=language.eng.login_header;
        
    
        
    }
    
    if (localStorage.getItem("language") === "geo") {
        mecho.textContent = language.geo.text1;
        products.textContent = language.geo.text2;
        contacts.textContent = language.geo.text3;
        login.textContent = language.geo.text4;
        registration.textContent = language.geo.text5;
        ads.textContent=language.geo.ads_lang;
        ip_navigation.textContent=language.geo.ip_nav;
        email_login.placeholder=language.geo.input_email;
        password_login.placeholder=language.geo.input_password;
        login_button.value=language.geo.login_header;
    }
}