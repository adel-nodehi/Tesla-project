function OpenSlide(evt, SlideName,Explanation) {
    var i, video, ButtonChange,comment;
    video = document.getElementsByClassName("video");
    for (i = 0; i < video.length; i++) {
        video[i].style.display = "none";
    }
    comment = document.getElementsByClassName("comment");
    for (i = 0; i < comment.length; i++) {
        comment[i].style.display = "none";
    }
    

    ButtonChange = document.getElementsByClassName("ButtonChange");
    for (i = 0; i < ButtonChange.length; i++) {
        ButtonChange[i].className = ButtonChange[i].className.replace(" change", "");
    }

    
    document.getElementById(Explanation).style.display = "block";
    document.getElementById(SlideName).style.display = "block";

    evt.currentTarget.className += " change";
  }