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
        ip_nav:"IP"
        



      
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


    }
  }
if (localStorage.getItem("language") === "eng") {

    
    mecho.textContent = language.eng.text1;
    products.textContent = language.eng.text2;
    contacts.textContent = language.eng.text3;
    login.textContent = language.eng.text4;
    registration.textContent = language.eng.text5;
    ip_header.textContent=language.eng.ip_lan;
    ads.textContent=language.eng.ads_lang;
    ip_navigation.textContent=language.eng.ip_nav;
    ip_button.value=language.eng.ip_lan;
    

    
}

if (localStorage.getItem("language") === "geo") {
    mecho.textContent = language.geo.text1;
    products.textContent = language.geo.text2;
    contacts.textContent = language.geo.text3;
    login.textContent = language.geo.text4;
    registration.textContent = language.geo.text5;
    ip_header.textContent=language.geo.ip_lan;
    ads.textContent=language.geo.ads_lang;
    ip_navigation.textContent=language.geo.ip_nav;
    ip_button.value=language.geo.ip_lan;

}
  


function funEng(){
    // console.log(sessionStorage.getItem("language"))

    if (localStorage.getItem("language") === "eng") {

    
        mecho.textContent = language.eng.text1;
        products.textContent = language.eng.text2;
        contacts.textContent = language.eng.text3;
        login.textContent = language.eng.text4;
        registration.textContent = language.eng.text5;
        ip_header.textContent=language.eng.ip_lan;
        ads.textContent=language.eng.ads_lang;
        ip_navigation.textContent=language.eng.ip_nav;
        ip_button.value=language.eng.ip_lan;
        
    
        
    }
    
    if (localStorage.getItem("language") === "geo") {
        mecho.textContent = language.geo.text1;
        products.textContent = language.geo.text2;
        contacts.textContent = language.geo.text3;
        login.textContent = language.geo.text4;
        registration.textContent = language.geo.text5;
        ip_header.textContent=language.geo.ip_lan;
        ads.textContent=language.geo.ads_lang;
        ip_navigation.textContent=language.geo.ip_nav;
        ip_button.value=language.geo.ip_lan;
    
    }
}





test();
var ip="";


function myDisplayer(some){
    console.log(some);
    if (some=="OK"){
        document.getElementById("ip_label").innerHTML=ip;
    }else{
        document.getElementById("ip_label").innerHTML=some;
    }

}
function test(){
    var myPromise=new Promise(function(myResolve,myReject){

        var getIp = new XMLHttpRequest();
        getIp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // console.log(this.responseText)
                ip=this.responseText;
            }
        };
        getIp.open("GET","http://ip.jsontest.com/",true);
        getIp.send();
        console.log(ip);

        if (getIp.responseText!=NaN) {
            myResolve("OK");
          }else{
            myReject("Error");
        }
    });
    
    myPromise.then(
        function(value) {myDisplayer(value);},
        function(error) {myDisplayer(error);}
      );
}