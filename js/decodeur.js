button_submit = document.getElementById("button_submit");

function submit(){
   button_submit.disabled = true;
   console.log("button_submit");
   var text = document.getElementById("text_a_coder").value;
   console.log(text);
   var clef = document.getElementById("clef_de_chifrement").value;

   clef_de_chifrement = parseInt(clef);
   console.log(clef_de_chifrement);

   codeur(text, clef_de_chifrement);
}



function codeur(text_a_coder, clef_de_chifrement){

   console.log("codeur");
   var text = []
   var text_coder = []

   for(var i = 0; i < text_a_coder.length; i++){
      text.push(text_a_coder.charCodeAt(i) - clef_de_chifrement)
      console.log(text)
   }

   for(var i = 0; i < text.length; i++){
      text_coder.push(String.fromCharCode(text[i]))
      console.log(text_coder)
   }

   var finish = document.getElementById("finish")
   finish.value = text_coder.join("")

   button_submit.disabled = false;
}