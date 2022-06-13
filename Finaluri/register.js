var date=document.getElementById("date_input");
today();

function today(){
    var date=document.getElementById("date_input");
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth()+1; 
    var year = today.getFullYear();

    today = month+'/'+day+'/'+year;
    date.value=today;
}

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
        ip_nav:"IP",
        register_lang:"Register",
        email_lang:"Email",
        password_lang:"Password",
        password_lang2:"Check Password",
        name_lang:"Name",
        country_lang:"Country",
        city_lang:"City",
        number_lang:"Number",




      
    },
    geo: {
        text1: "მთავარი",
        text2: "პროდუქცია",
        text3:"კონტაქტი",
        text4:"ავტორიზაცია",
        text5:"რეგისტრაცია",
        ads_lang:"რეკლამები",
        ip_nav:"აიპი",
        register_lang:"რეგისტრაცია",
        email_lang:"იმეილი",
        password_lang:"პაროლი",
        password_lang2:"დაადასტურეთ პაროლი",
        name_lang:"სახელი",
        country_lang:"ქვეყანა",
        city_lang:"ქალაქი",
        number_lang:"ნომერი",



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
    register_header.textContent=language.eng.register_lang
    email.placeholder=language.eng.email_lang
    password1.placeholder=language.eng.password_lang
    password2.placeholder=language.eng.password_lang2
    input_name.placeholder=language.eng.name_lang
    country.placeholder=language.eng.country_lang
    city.placeholder=language.eng.city_lang
    number.placeholder=language.eng.number_lang

}

if (localStorage.getItem("language") === "geo") {
    mecho.textContent = language.geo.text1;
    products.textContent = language.geo.text2;
    contacts.textContent = language.geo.text3;
    login.textContent = language.geo.text4;
    registration.textContent = language.geo.text5;
    ads.textContent=language.geo.ads_lang;
    ip_navigation.textContent=language.geo.ip_nav;
    register_header.textContent=language.geo.register_lang
    email.placeholder=language.geo.email_lang
    password1.placeholder=language.geo.password_lang
    password2.placeholder=language.geo.password_lang2
    input_name.placeholder=language.geo.name_lang
    country.placeholder=language.geo.country_lang
    city.placeholder=language.geo.city_lang
    number.placeholder=language.geo.number_lang

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
        register_header.textContent=language.eng.register_lang
        email.placeholder=language.eng.email_lang
        password1.placeholder=language.eng.password_lang
        password2.placeholder=language.eng.password_lang2
        input_name.placeholder=language.eng.name_lang
        country.placeholder=language.eng.country_lang
        city.placeholder=language.eng.city_lang
        number.placeholder=language.eng.number_lang
    
    }
    
    if (localStorage.getItem("language") === "geo") {
        mecho.textContent = language.geo.text1;
        products.textContent = language.geo.text2;
        contacts.textContent = language.geo.text3;
        login.textContent = language.geo.text4;
        registration.textContent = language.geo.text5;
        ads.textContent=language.geo.ads_lang;
        ip_navigation.textContent=language.geo.ip_nav;
        register_header.textContent=language.geo.register_lang
        email.placeholder=language.geo.email_lang
        password1.placeholder=language.geo.password_lang
        password2.placeholder=language.geo.password_lang2
        input_name.placeholder=language.geo.name_lang
        country.placeholder=language.geo.country_lang
        city.placeholder=language.geo.city_lang
        number.placeholder=language.geo.number_lang
    
    }
      
      
      
}







function register_button(){
    var email_test=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    var email=document.getElementById("email").value;
    var firstPassword = document.getElementById("password1").value;
    var characters=/[a-z]/g;
    var characters_upper=/[A-Z]/g;
    var numbers=/[0-9]/g;
    var symbols=/[#*+&’!%@?{^}”']/g;
    var password_alert=document.getElementById("password_alert");
    var email_alert=document.getElementById("email_alert");
    var password1=document.getElementById("password1").value;
    var password2=document.getElementById("password2").value;
    var text=document.getElementById("alert");
    if(password1!=password2){
        text.style.display="block"
        text.innerText="პაროლები არ ემთხვევა";
    }else{
        text.style.display="none";
    }
    if((firstPassword.match(characters))&&(firstPassword.match(numbers)&&(firstPassword.match(characters_upper)&&(firstPassword.match(symbols))))){
        password_alert.innerHTML="პაროლი ძალიან ძლიერია";
    }
    else if((firstPassword.match(characters))&&(firstPassword.match(numbers)&&(firstPassword.match(characters_upper)))){
        password_alert.innerHTML="პაროლი ძლიერია";
    }else if((firstPassword.match(characters))&&(firstPassword.match(numbers))){
        password_alert.innerHTML="პაროლი საშუალოა";
    }else if(firstPassword.match(characters)){
        password_alert.innerHTML="პაროლი სუსტია";
        // 
    }

    if(!email.match(email_test)){
        email_alert.innerHTML="ემაილი არასწორ ფორმატშია"
        // console.log("ki")  
    }

    

}




