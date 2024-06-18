//About

document.getElementById("readMoreBtn").addEventListener("click", function() {
    var moreContent1 = document.getElementById("moreContent1");
    var moreContent2 = document.getElementById("moreContent2");
    var moreContent3 = document.getElementById("moreContent3");
    var moreContent4 = document.getElementById("moreContent4");
    var moreContent5 = document.getElementById("moreContent5");
    var moreContent6 = document.getElementById("moreContent6");
    var moreContent7 = document.getElementById("moreContent7");
    if (moreContent1.style.display === "none" || moreContent1.style.display === "") {
        moreContent1.style.display = "block";
        moreContent2.style.display = "block";
        moreContent3.style.display = "block";
        moreContent4.style.display = "block";
        moreContent5.style.display = "block";
        moreContent6.style.display = "block";
        moreContent7.style.display = "block";
        this.textContent = "Read Less";
    } else {
        moreContent1.style.display = "none";
        moreContent2.style.display = "none";
        moreContent3.style.display = "none";
        moreContent4.style.display = "none";
        moreContent5.style.display = "none";
        moreContent6.style.display = "none";
        moreContent7.style.display = "none";
        this.textContent = "Read More";
    }
});