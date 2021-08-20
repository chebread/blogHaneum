window.onscroll = function() {
     document.getElementById("progressbar").style.width = ((document.body.scrollTop || document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100) + "%";
};