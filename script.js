function joke() {
  document.getElementById("edit").innerHTML = "Nugget";
for (var i = 0; i < 1000; i = i + 5){
  bodyImg();
}
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const list = [1, 2, 3, 4]
const doSomething = async () => {
  for (const item of list) {
    await sleep(1000)
    bodyImg();
  }
}

doSomething()


var isImg1 = true;
var isImg2 = false;

function bodyImg(){
    if (isImg1 == true) {
        document.body.style.backgroundImage = "url('https://carolinanewsandreporter.cic.sc.edu/wp-content/uploads/2018/11/FallingNugget3-1.jpg')";
        //Go to img2
        isImg1 = false;
        isImg2 = true;
    }
    else if (isImg2 == true){
        document.body.style.backgroundImage = "url('https://carolinanewsandreporter.cic.sc.edu/wp-content/uploads/2018/11/FallingNug2-1.jpg')";
        //Revert to img1
        isImg1 = true;
        isImg2 = false;
    }
}
