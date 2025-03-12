document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("translate-btn");

    function loadGoogleTranslate(){
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
    }

    window.googleTranslateElementInit = function (){
        new google.translate.TranslateElement(
            { pageLanguage: "en", includedLanguages: "es, en", autoDisplay: false },
            "google_translate_element"
        );
    };
    function changeLanguage(){
        let lang = document.documentElement.lang === "en" ? "es" : "en";
        document.documentElement.lang = lang;
        button.textContent = lang === "es" ? "Translate to English" : "Traducir al Español";

        setTimeout(() => {
           const select = document.querySelector(".goog-te-combo");
           if(select){
            select.value = lang;
            select.dispatchEvent(new Event("change"));
           }
        }, 500);
    }

    button.addEventListener("click", function(){
        if(!document.querySelector("goog-te-combo")){
            loadGoogleTranslate();
            setTimeout(changeLanguage, 1000);
        }else{
            changeLanguage();
        }
    });
});