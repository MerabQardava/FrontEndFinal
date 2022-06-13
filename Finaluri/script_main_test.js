var session_lang=localStorage.getItem("language");






var slide=0;
var slide_text0="PC შოპი";
var slide_text1="პერსონალური კომპიუტერები";
var slide_text2="კომპიუტერის ნაწილები";
var slide_text3="ომპიუტერის პერიფერიული მოწყობილობები";
var slide_text4="ვიდეო თამაშები";

  setInterval(slide_right,4000);

  

  function slide_left(){
    var img=document.getElementById("slider_img")
    var text=document.getElementById("slider_text")
    
    --slide;
    if(slide==0){
      img.src="https://media.istockphoto.com/photos/blank-front-real-black-chalkboard-background-texture-in-college-for-picture-id1201544779?k=20&m=1201544779&s=612x612&w=0&h=06wxq_-Px_sUEWPI8MmTkvqhwryW64djoALOU4mEdKk="
      text.innerHTML=slide_text0;
    }
    if(slide==1){
      img.src="http://www.velocitymicro.com/images/pre-built-gaming-pc-blog-banner.jpg"
      text.innerHTML=slide_text1;
    }
    if(slide==2){
      img.src="https://whatsabyte.com/wp-content/uploads/pc-components-2.jpg"
      text.innerHTML=slide_text2;
    }
    if(slide==3){
      img.src="https://knowtechie.com/wp-content/uploads/2020/01/pc-accessories-deal.jpg"
      text.innerHTML=slide_text3;
    }
    if(slide==4){
      img.src="https://asset.vg247.com/super-mario-bros.-(1985%2C-nes).jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/super-mario-bros.-(1985%2C-nes).jpg"
      text.innerHTML=slide_text4;
    }
    if(slide>4){
      img.src="https://media.istockphoto.com/photos/blank-front-real-black-chalkboard-background-texture-in-college-for-picture-id1201544779?k=20&m=1201544779&s=612x612&w=0&h=06wxq_-Px_sUEWPI8MmTkvqhwryW64djoALOU4mEdKk="
      text.innerHTML=slide_text0;
      slide=0;
    }
    if(slide<0){
      img.src="https://asset.vg247.com/super-mario-bros.-(1985%2C-nes).jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/super-mario-bros.-(1985%2C-nes).jpg"
      text.innerHTML=slide_text4;
      
      slide=4;
    }

  }
  function slide_right(){
    var img=document.getElementById("slider_img")
    var text=document.getElementById("slider_text")
    
    ++slide;
    if(slide==0){
      img.src="https://media.istockphoto.com/photos/blank-front-real-black-chalkboard-background-texture-in-college-for-picture-id1201544779?k=20&m=1201544779&s=612x612&w=0&h=06wxq_-Px_sUEWPI8MmTkvqhwryW64djoALOU4mEdKk="
      text.innerHTML=slide_text0;
    }
    if(slide==1){
      img.src="http://www.velocitymicro.com/images/pre-built-gaming-pc-blog-banner.jpg"
      text.innerHTML=slide_text1;
    }
    if(slide==2){
      img.src="https://whatsabyte.com/wp-content/uploads/pc-components-2.jpg"
      text.innerHTML=slide_text2;
    }
    if(slide==3){
      img.src="https://knowtechie.com/wp-content/uploads/2020/01/pc-accessories-deal.jpg"
      text.innerHTML=slide_text3;
    }
    if(slide==4){
      img.src="https://asset.vg247.com/super-mario-bros.-(1985%2C-nes).jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/super-mario-bros.-(1985%2C-nes).jpg"
      text.innerHTML=slide_text4;
    }
    if(slide>4){
      img.src="https://media.istockphoto.com/photos/blank-front-real-black-chalkboard-background-texture-in-college-for-picture-id1201544779?k=20&m=1201544779&s=612x612&w=0&h=06wxq_-Px_sUEWPI8MmTkvqhwryW64djoALOU4mEdKk="
      text.innerHTML=slide_text0;
      slide=0;
    }
    if(slide<0){
      img.src="https://asset.vg247.com/super-mario-bros.-(1985%2C-nes).jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/super-mario-bros.-(1985%2C-nes).jpg"
      text.style.color="black";
      text.innerHTML=slide_text4;
      
      slide=4;
    }

  }



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
        

        slider0:"PC Shop",
        slider1:"Personal Computers",
        slider2:"PC Parts",
        slider3:"PC Peripheral Devices",
        slider4:"Videogames",

      
    },
    geo: {
        text1: "მთავარი",
        text2: "პროდუქცია",
        text3:"კონტაქტი",
        text4:"ავტორიზაცია",
        text5:"რეგისტრაცია",
        ads_lang:"რეკლამები",

        slider0:"PС შოპი",
        slider1:"პერსონალური კომპიუტერები",
        slider2:"კომპიუტერის ნაწილები",
        slider3:"კომპიუტერის პერიფერიული მოწყობილობები",
        slider4:"ვიდეო თამაშები",
        ip_nav:"აიპი",

    }
  }
  if (session_lang=== "eng") {
    slider_text.textContent=language.eng.slider0;
    
    mecho.textContent = language.eng.text1;
    products.textContent = language.eng.text2;
    contacts.textContent = language.eng.text3;
    login.textContent = language.eng.text4;
    registration.textContent = language.eng.text5;
    ads.textContent=language.eng.ads_lang;

    slide_text0=language.eng.slider0;
    slide_text1=language.eng.slider1;
    slide_text2=language.eng.slider2;
    slide_text3=language.eng.slider3;
    slide_text4=language.eng.slider4;


    // slide_text0=language.eng.slider0;
    ip_navigation.textContent=language.eng.ip_nav;
}

if (session_lang === "geo") {
    slider_text.textContent=language.geo.slider0;
    mecho.textContent = language.geo.text1;
    products.textContent = language.geo.text2;
    contacts.textContent = language.geo.text3;
    login.textContent = language.geo.text4;
    registration.textContent = language.geo.text5;
    ads.textContent=language.geo.ads_lang;


    slide_text0=language.geo.slider0;
    slide_text1=language.geo.slider1;
    slide_text2=language.geo.slider2;
    slide_text3=language.geo.slider3;
    slide_text4=language.geo.slider4;
    ip_navigation.textContent=language.geo.ip_nav;

}


function funEng(){
  // console.log(localStorage.getItem("language"))
  var session_lang=localStorage.getItem("language");
  if (session_lang=== "eng") {
    slider_text.textContent=language.eng.slider0;
    
    mecho.textContent = language.eng.text1;
    products.textContent = language.eng.text2;
    contacts.textContent = language.eng.text3;
    login.textContent = language.eng.text4;
    registration.textContent = language.eng.text5;
    ads.textContent=language.eng.ads_lang;

    slide_text0=language.eng.slider0;
    slide_text1=language.eng.slider1;
    slide_text2=language.eng.slider2;
    slide_text3=language.eng.slider3;
    slide_text4=language.eng.slider4;


    // slide_text0=language.eng.slider0;
    ip_navigation.textContent=language.eng.ip_nav;
}

if (session_lang === "geo") {
    slider_text.textContent=language.geo.slider0;
    mecho.textContent = language.geo.text1;
    products.textContent = language.geo.text2;
    contacts.textContent = language.geo.text3;
    login.textContent = language.geo.text4;
    registration.textContent = language.geo.text5;
    ads.textContent=language.geo.ads_lang;


    slide_text0=language.geo.slider0;
    slide_text1=language.geo.slider1;
    slide_text2=language.geo.slider2;
    slide_text3=language.geo.slider3;
    slide_text4=language.geo.slider4;
    ip_navigation.textContent=language.geo.ip_nav;

}
}