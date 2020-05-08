

function check() {
    const ergebnisse = document.getElementById("ergebnisse");
    const cityName = document.getElementById("bundeslandInfo").value;

    switch(cityName)
    {
        /* wenn  eingeschreibn*/
        case "Baden-Württemberg":
            ergebnisse.innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
            break;
            
         case "Bayern":
                ergebnisse.innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
                break;
         case "Berlin":
                ergebnisse.innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
                break;
         case "Brandenburg":
                ergebnisse.innerHTML = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
             
                break;
         case "Bremen":
                ergebnisse.innerHTML ="Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";

                break;
        
         case "Hamburg":
                ergebnisse.innerHTML ="Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";

                break;
        
         case "Hessen":
                ergebnisse.innerHTML ="Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";

                break;
        
         case "Mecklenburg-Vorpommern":
                ergebnisse.innerHTML ="Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";

                break;
        
         case "Niedersachsen":
                ergebnisse.innerHTML = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";

                break;
         case "Nordrhein-Westfalen":
                ergebnisse.innerHTML ="Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";

                break;
         case "Rheinland-Pfalz":
                ergebnisse.innerHTML = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";

                break;
         case "Saarland":
                ergebnisse.innerHTML = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";

                break;
         case "Sachsen":
                ergebnisse.innerHTML = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";

                break;
         case "Sachsen-Anhalt":
                ergebnisse.innerHTML = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";

                break;
         case "Schleswig-Holstein":
                ergebnisse.innerHTML ="Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";

                break;
         case "Thüringen":
                ergebnisse.innerHTML ="Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";

                default:
                    ergebnisse.innerHTML= "That name is not defined";
       
    }

}


