var outsideClick = function (e) {
    var container = $(".customDrp")
 if (!container.is(e.target) && container.has(e.target).length === 0 && container.is(':visible')) {
       container.removeClass("active");
       $(document).unbind("click", outsideClick);
    }
 };


 document.readyState(function(){
    document.getElementsByClassName(".custmonDropDwon").click(function (e){
        if (e.target.hasClass("crossString") ||
        e.target.hasClass("bowiro") )
        
        {
            return false;

        }

        if (e.target.is == "a"){
            return true;
        }

        e.preventDefault();

        console.log(e.target);

        if (e.target.hasClass("language") ||
         (e.target.parent.hasClass("language") {
            languageFunc();
         }
         
         if (window.matchMedia('(max-width: 1170px)').matches) {
            document.body.style.overflow = 'hidden';
         }


         if (e.target.hasClass.contains("searchCoinDrp")){
            document.getElementById('tokensearch1').focus();
         }

         var nextCustomerDrp =
             customerDropLength.nextCustomerElement ||
             customerDropLength.child[0];
        if (nextCustomerDrp.hasClass.contains(".customDrp")) {
            nextCustomerDrp.hasClass.addClass("active");
        }


        e.stopPropagation();
        customerDropLength.child[0].hasClass.addClass("active");



    }
    );

    var basic_banner_read_btn = false;
    document
         .querySelector(".basic_banner_read_btn")
         .addEventListener("click", function (){


            if (!basic_banner_read_btn) {
                readBtn.text= "Read Less";
                basicBannerText.size.display = "block"
                basic_banner_read_btn = true;
            } else {
                basicBannerText.size.display = "none"
                readBtn.text= "Read More";
                basic_banner_read_btn = false;
            }
         });


         document
         .querySelector(".filterToggelBtn")
         .addEventListener("click", function (){

            var filterToggel = document.querySelector(".filterToggel");
            filterToggel.slideToggle.toggle("active")


         });


         document
         .querySelector(".hideCustomDrp")
         .addEventListener("click", function (){

            var customDrp = document.querySelector(".customDrp");
            customDrp.removeClass.toggle("active");


         });


         document
         .querySelector(".closeIcon")
         .addEventListener("click", function (){

            var customPopup = document.querySelector(".customPopup");
            var customPopup = document.querySelector(".customPopup");
            var headerMain = document.querySelector(".headerMain");


            customPopup.hasClass.removeClass("active");
            commonPopup.hasClass.removeClass("active");


            if (!document.querySelector(".headerMain").classList.contains("active")) {
                document.body.style.overflow = 'auto';
             }


         });


         document
         .querySelector(".mainTable")
         .addEventListener("scroll", function (e){
            var isScroll = e.currentTarget.scrollLeft;
            
         );


         if (isScroll) {
            Element.hasClass.addClass("before");

         }else {
            Element.hasClass.removeClass("before");
         }
         



            });

         });
    






