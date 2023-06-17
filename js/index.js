console.log("index.js loaded");

var count = 0;

function Button_switch(){
       console.log('Button_switch');
       var page = document.getElementById("content-page");
       var Button_page_left = document.getElementById("button_page_left");
       var Button_page_right = document.getElementById("button_page_right");
       var Button_left = document.getElementById("BLeft");
       var Button_right = document.getElementById("BRight");
       var phrase_left = document.getElementById("PLeft");
       var phrase_right = document.getElementById("PRight");
       count++;
       if (count == 2){
              count = 0
              console.log("reset count");
       }
       console.log(count);
       if (count == 0){
              page.classList.remove("page-right");
              page.classList.add("page-left");
              Button_left.classList.add("hidden");
              Button_right.classList.remove("hidden");
              Button_left.classList.remove("visible-button");
              Button_right.classList.add("visible-button");
              Button_page_left.classList.remove("hidden-btn");
              Button_page_right.classList.add("hidden-btn");
              phrase_left.classList.remove("hidden");
              phrase_right.classList.add("hidden");
       }else if (count == 1){
              page.classList.add("page-right");
              page.classList.remove("page-left");
              Button_left.classList.remove("hidden");
              Button_right.classList.add("hidden");
              Button_left.classList.add("visible-button");
              Button_right.classList.remove("visible-button");
              Button_page_left.classList.add("hidden-btn");
              Button_page_right.classList.remove("hidden-btn");
              phrase_left.classList.add("hidden");
              phrase_right.classList.remove("hidden");
       }else{
              console.log("error count");
       }
}