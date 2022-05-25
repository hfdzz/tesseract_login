EMAIL = "ENTER_EMAIL_HERE"
PASS = "WRITE_PASS_HERE"
scTes = document.createElement('script');scTes.src = 'https://unpkg.com/tesseract.js@v2.0.0-alpha.13/dist/tesseract.min.js';document.head.appendChild(scTes);document.getElementById("user").value=EMAIL;document.getElementById("pwd").value=PASS;setTimeout(()=>{tw = new Tesseract.TesseractWorker();tw.recognize(document.getElementsByClassName('img-responsive')[0].src).then(function(dat){console.log(dat.text);res=dat.text.trim().slice(17,-1).trim().replace('x','*');res_i=eval(res);document.getElementById("captcha").value=res_i;document.getElementsByTagName("form")[0].submit.click()});
},500)
