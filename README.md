Ilmastonmuutokseen liittyvän tiedon visualisointityökalu
Juho Soivio, Teemu Räisänen, Matti Hiltunen, Jussi Lesonen

Tämä on Oulun Ammattikorkeakoulun toisen vuoden opiskelijoiden web-sovellus projekti. Sovelluksessa käyttäjä voi rekisteröityä ja kirjautua sisään web-selaimeen, jossa käyttäjä voi selata ilmastonmuutokseen liittyviä datasettejä graafimuodossa, esimerkiksi lämpötilan muutoksia tuhansien vuosien saatossa (kuva 1).

![graafi](https://user-images.githubusercontent.com/101434481/207577907-206455bf-fcff-44f0-93aa-f7988791104f.png)

Kuva 1. graafi

Projekti on frontendin, backendin ja tietokannan yhteistyöllä toimiva web-sovellus. Sovelluksessa on frontendinä nettisivu, joka on toteutettu ReactJS sovellukseen käyttäen koodikieliä JavaScript, HTML5 sekä CSS. Backend on toteutettu käyttämällä Javaa sekä SQL:ää.
Ryhmässä on neljä henkilöä, joista Juho Soivio on suunnitellut ja toteuttanut sivujen tyylityksen ja responsiivisuuden. Matti Hiltunen on toteuttanut graafien sisällyttämisen sovellukseen sekä pääsivun muotoilun. Teemu Räisänen on käsitellyt projektissa käytettävät datasetit tietokantaan ja sovellukseen.  Jussi Lesonen on toteuttanut sovelluksen backendin ja tietokannan yhteyden muuhun sovellukseen.
Sovelluksessa olevista tietokannoista toinen on toteutettu MySQL Workbenchillä ja toinen on tehty suoraan Visual Studioon asennetulla työkalulla (kuva 2).

![tietokanta](https://user-images.githubusercontent.com/101434481/207578046-4bbd42ec-e2fe-49ff-8662-488a0ad1bc4c.png)

Kuva 2. tietokanta

Sivulla voi kuka vain rekisteröidä uuden käyttäjän, jolla hän voi kirjautua sivulle (kuva 3). Tarkoituksena oli että käyttäjä voi luoda visualisointinäkymiä, mutta ajanpuutteen vuoksi tämä jäi toteuttamatta. Sovelluksen käyttäjä voi myös poistaa luodun profiilin.

![rekisteröinti](https://user-images.githubusercontent.com/101434481/207578101-d5f69a0e-6fb5-4e40-9149-aed21e5eafa5.png)

Kuva 3. rekisteröintisivu

Sovelluksen rajapinnassa otetaan vastaan käyttäjän syöttämää tietoa, eli käyttäjänimi ja salasana, joka tallennetaan rajapintaan yhteydessä olevaan tietokantaan. Reactista tulevat kutsut käsitellään rajapinnassa ja vastaus välitetään käyttäjälle frontendiin (kuva 4).

![rajapinta](https://user-images.githubusercontent.com/101434481/207578130-35d187aa-d426-4991-89a1-5be777b5232e.png)
 
Kuva 4. rajapinta

Linkki esittelyvideoon: https://youtu.be/TQ_KYL18u9g

Projektin suunnittelu ja ryhmätyöskentely sujui ongelmitta, mutta kokemuksen sekä ajanpuutteen vuoksi projekti jäi hieman kesken. Suunnitelluista ominaisuuksista tekemättä jäi kustomoidut visualisointinäkymät, graafit 7 – 10, sekä sovelluksen julkaisu julkiseen domainiin.
