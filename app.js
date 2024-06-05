
const badi = document.getElementById("badi").style

badi.display ="flex"
badi.justifyContent="center"
badi.alignItems="center"
badi.flexDirection="column"

const baslik = document.getElementById("baslik").style;

baslik.textAlign="center"
baslik.color="red"


const buton = document.getElementsByTagName("div")

buton[0].style.margin= "30px auto"

const ara = document.getElementById("ara")
ara.style.padding="10px 30px"
ara.style.marginRight="10px"
ara.style.border="1px solid orange"
ara.style.borderRadius="7px"
ara.style.color="orange"

const baglat = document.getElementById("baglat")
baglat.style.padding="10px 30px"
baglat.style.marginRight="10px"
baglat.style.border="1px solid blue"
baglat.style.borderRadius="7px"
baglat.style.color="blue"

const konus = document.getElementById("konus")
konus.style.padding="10px 30px"
konus.style.marginRight="10px"
konus.style.border="1px solid brown"
konus.style.borderRadius="7px"
konus.style.color="brown"

const kapat = document.getElementById("kapat")
kapat.style.padding="10px 30px"
kapat.style.marginRight="10px"
kapat.style.border="1px solid green"
kapat.style.borderRadius="7px"
kapat.style.color="green"

const resim = document.getElementById("resim")
let sesaslan = document.querySelector(".sesaslan")
let sestelefon = document.querySelector(".sestelefon")
let sesenaktar = document.querySelector(".sesenaktar")

resim.style.width="400px"
resim.style.height="400px"


resim.onmouseover = ()=>{
    resim.src = "./image/aslan1.jpeg"
}

resim.onmouseout = ()=>{
    sesaslan.play()
    sesaslan.volume = 0.4
    resim.src = "./image/aslan2.jpeg"
}

ara.onclick= () => {
    sesaslan.pause()
    sestelefon.play()
    resim.src = "./image/img.gif"
    sestelefon.volume = 0.1
}


baglat.onclick= () => {
    sestelefon.pause()
    resim.src = "./image/telbagla.gif"
}

konus.onclick= () => {
    resim.src = "./image/telefon.gif"
    sesenaktar.play()
    sesenaktar.volume = 0.3
}


kapat.onclick = () => {
    sesaslan.pause()
    sesenaktar.pause()
    sestelefon.pause()
}




