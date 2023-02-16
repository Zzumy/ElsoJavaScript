window.addEventListener("load", init);
function init() {
  console.log("hahó");
  var valt1 = "2";
  let valt2 = 2.45;
  const VALT3 = 2; /*constans váltózó muszáj értéket adni neki, nem változtathatjuk meg az értékét a késöbbiekben NAGY betűvel kell adni neki nevet*/

  console.log("valt1", parseInt(valt1), typeof parseInt(valt1));
  console.log("valt2", parseInt(valt2), typeof parseInt(valt2));
  console.log("valt3", typeof VALT3);

  let logikai = 3 < 5;
  console.log("logikai", logikai, typeof logikai);
  let eredmeny = valt1 + valt2;
  console.log("eredmeny", eredmeny, typeof eredmeny);
  elagazasok();
}

function elagazasok() {
  console.log("Elágazások");
  var szam = 19;
  if (szam % 2 == 0 && szam % 3 == 0) {
    console.log("2-vel és 3-al is osztható.");
  } else if (szam % 2 == 0) {
    console.log("páros");
  } else if (szam % 3 == 0) {
    console.log("3-al osztható");
  } else {
    console.log("Egyikkel sem osztható");
  }

  var nap = parseInt(Math.random() * 7) + 1;
  switch (nap) {
    case 1:
      console.log("Hétfő");
      break;
    case 2:
      console.log("Kedd");
      break;
    case 3:
      console.log("Szerda");
      break;
    case 4:
      console.log("Csütörtök");
      break;
    case 5:
      console.log("Péntek");
      break;
    case 6:
      console.log("Szombat");
      break;
    case 7:
      console.log("Vasárnap");
      break;
    default:
      console.log("Ez nem egy hét napja.");
      break;
  }
}

function elagazasok() {
    for (let index = 0; index < 10; index++) {
        var vszam = parseInt(Math.random() * 401) + 100 /*100-500*/
        console.log(vszam)
    }

    do {
        var vszam = parseInt(Math.random() * 31) - 20; /*-20-10*/
        console.log(vszam)
    } while (vszam <= 0);

    var vszam = parseInt(Math.random() * 31) - 20
    while (vszam <= 0) {
        console.log(vszam)
        vszam = parseInt(Math.random() * 31) - 20
    }
}