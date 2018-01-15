var letters = ["a", "ą", "b", "c", "ć", "d", "e", "ę", "f", "g", "h", "i", "j", "k", "l", "ł", "m", "n", "ń", "o", "ó", "p", "r",
 "s", "ś", "t", "u", "w", "y", "z", "ź", "ż"];
 for (i = 0; i<letters.length; i++){
 	letters[i] = letters[i].toUpperCase();
 }
var dzwiekPoprawnej = new Audio("sounds/click.mp3");
var dzwiekZlej = new Audio("sounds/no.wav")
var slowo = [""];
var losowaLiczba;
var wylosowaneSlowo;
var kliknietaKategoria = 0;
function wywolywanieResztyKategorii(){
	 losowaLiczba = Math.floor(Math.random() * slowo.length);
	wylosowaneSlowo = slowo[losowaLiczba];
	kliknietaKategoria = 1;
	wypiszHaslo();
}
//losowanie kategorii i słów do nich//
function przyslowie(nr){
	while(kliknietaKategoria == 0){
	slowo = ["BEZ PRACY NIE MA KOŁACZY", "APETYT ROŚNIE W MIARĘ JEDZENIA", "CEL UŚWIĘCA ŚRODKI", "CISZA JAK MAKIEM ZASIAŁ", "CO KRAJ TO OBYCZAJ", "DO WESELA SIĘ ZAGOI", "JAK KUBA BOGU TAK BÓG KUBIE", "KTO PYTANIE NIE BŁĄDZI", "LEPSZY RYDZ NIŻ NIC", "PIENIĄDZE SZCZĘŚCIA NIE DAJĄ", "WYSZŁO SZYDŁO Z WORKA", "ZŁEGO DIABLI NIE BIORĄ", "W MARCU JAK W GARCU", "KUJ ŻELAZO PÓKI GORĄCE", "KŁAMSTWO MA KRÓTKIE NOGI", "JAK KAMIEŃ W WODĘ", "CO DWIE GŁOWY TO NIE JEDNA", "GŁUPI MA ZAWSZE SZCZĘŚCIE", "MĄDRY POLAK PO SZKODZIE", "PIERWSZE KOTY ZA PŁOTY", "PRAWDA W OCZY KOLE", "ZŁEGO DIABLI NIE BIORĄ"];
	wywolywanieResztyKategorii();
	document.querySelector("#kategoria").innerHTML = "Kategoria: " + document.querySelectorAll("button")[nr].textContent;
}
}
function panstwa(nr){
	while(kliknietaKategoria == 0){
	slowo = ["ARABIA SAUDYJSKA", "AFGANISTAN", "AUSTRALIA", "AZERBEJDŻAN", "BANGLADESZ", "BIAŁORUŚ", "BOŚNIA I HERCEGOWINA", "BUŁGARIA", "CHORWACJA", "DOMINIKANA", "ESTONIA", "ETIOPIA", "FINLANDIA", "GWINEA RÓWNIKOWA", "GRECJA", "HISZPANIA", "HOLANDIA", "IZRAEL", "JAPONIA", "KAZACHSTAN", "KOREA POŁUDNIOWA", "LUKSEMBURG", "LITWA", "MEKSYK", "MAURETANIA", "MOŁDAWIA", "NIEMCY", "NORWEGIA", "NOWA ZELANDIA", "POLSKA", "PORTUGALIA", "PAKISTAN", "PARAGWAJ", "REPUBLIKA ZIELONEGO PRZYLĄDKA", "RUMUNIA", "SAN MARINO", "SIERRA LEONE", "STANY ZJEDNOCZONE", "SRI LANKA", "SZWAJCARIA", "TADŻYKISTAN", "TURCJA", "UZBEKISTAN", "WIELKA BRYTANIA", "ZIMBABWE", "ZAMBIA", "ZJEDNOCZONE EMIRATY ARABSKIE"];
	wywolywanieResztyKategorii();
	document.querySelector("#kategoria").innerHTML = "Kategoria: " + document.querySelectorAll("li")[nr].textContent;
}
}
function morza(nr){
	while(kliknietaKategoria == 0){
	slowo = ["BERINGA", "BAŁTYCKIE", "BISMARCKA", "JAPOŃSKIE", "KORALOWE", "OCHOCKIE", "SALOMONA", "WSCHODNIOCHIŃSKIE", "ŻÓŁTE", "ADRIATYCKIE", "CZARNE", "EGEJSKIE", "KARAIBSKIE", "JOŃSKIE", "NORWESKIE", "PÓŁNOCNE", "SARGASSOWE", "ŚRÓDZIEMNE", "TYRREŃSKIE", "ARABSKIE", "CZERWONE", "BEAUFORTA", "BIAŁE", "GRENLANDZKIE", "KARSKIE", "ŁAPTIEWÓW", "WSCHODNIOSYBERYJSKIE", "AMUNDSENA", "KOSMONAUTÓW", "MAWSONA", "WEDDELLA", "WSPÓLNOTY"];
	wywolywanieResztyKategorii();
	document.querySelector("#kategoria").innerHTML = "Kategoria: " + document.querySelectorAll("li")[nr].textContent;
}
}
function stolice(nr){
	while(kliknietaKategoria == 0){
	slowo = ["CANBERRA", "BUENOS AIRES", "WIEDEŃ", "ALGIER", "BRIDGETOWN", "NASSAU", "BRUKSELA", "MIŃSK", "SARAJEWO", "WAGADUGU", "SANTIAGO", "PEKIN", "ZAGRZEB", "WARSZAWA", "PRAGA", "KOPENHAGA", "SANTO DOMINGO", "DŻIBUTI", "ADDIS ABEBA", "MANILA", "HELSINKI", "PARYŻ", "ATENY", "BISSAU", "MADRYT", "NEW DELHI", "BAGDAD", "TEHERAN", "TOKIO", "OTTAWA", "ASTANA", "BISZKEK", "BOGOTA", "SEUL", "PJONGJANG", "HAWANA", "KUWEJT", "TRYPOLIS", "WILNO", "LUKSEMBURG", "LILONGWE", "KUALA LUMPUR", "PORT LOUIS", "MEKSYK", "KISZYNIÓW", "UŁAN BATOR", "BERLIN", "OSLO", "PANAMA", "LIZBONA", "MOSKWA", "BUKARESZT", "SAN MARINO", "DAKAR", "BELGRAD", "SINGAPUR", "MOGADISZU", "WASZYNGTON", "DAMASZEK", "KIJÓW", "WATYKAN", "LONDYN", "RZYM", "BUDAPESZT", "ABU ZABI", "PRISZTINA"];
	wywolywanieResztyKategorii();
	document.querySelector("#kategoria").innerHTML = "Kategoria: " + document.querySelectorAll("li")[nr].textContent;
}
}
function parkiNarodowe(nr){
	while(kliknietaKategoria == 0){
	slowo = ["BABIOGÓRSKI", "BIAŁOWIESKI", "BIEBRZAŃSKI", "BIESZCZADZKI", "BORY TUCHOLSKI", "DRAWIEŃSKI", "GORCZAŃSKI", "GÓR STOŁOWYCH", "KAMPINOSKI", "KARKONOSKI", "MAGURSKI", "NARWIAŃSKI", "OJCOWSKI", "PIENIŃSKI", "POLESKI", "ROZTOCZAŃSKI", "SŁOWIŃSKI", "ŚWIĘTOKRZYSKI", "TATRZAŃSKI", "UJŚCIE WARTY", "WIELKOPOLSKI", "WIGIERSKI", "WOLIŃSKI"];
	wywolywanieResztyKategorii();
	document.querySelector("#kategoria").innerHTML = "Kategoria: " + document.querySelectorAll("li")[nr].textContent;
}
}
function wojewodztwa(nr){
	while(kliknietaKategoria == 0){
	slowo = ["DOLNOŚLĄSKIE", "KUJAWSKO POMORSKIE", "LUBELSKIE", "LUBUSKIE", "ŁÓDZKIE", "MAŁOPOLSKIE", "MAZOWIECKIE", "OPOLSKIE", "PODKARPACKIE", "PODLASKIE", "POMORSKIE", "ŚLĄSKIE", "ŚWIĘTOKRZYSKE", "WARMIŃSKO MAZURSKIE", "WIELKOPOLSKE", "ZACHODNIOPOMORSKIE"];
	wywolywanieResztyKategorii();
	document.querySelector("#kategoria").innerHTML = "Kategoria: " + document.querySelectorAll("li")[nr].textContent;
}
}
function pierwiastki(nr){
	while(kliknietaKategoria == 0){
	slowo = ["WODÓR", "HEL", "LIT", "BERYL", "BOR", " WĘGIEL", "AZOT", "TLEN", "FLUOR", "NEON", "SÓD", "MAGNEZ", "GLIN", "KRZEM", "FOSFOR", "SIARKA", "CHLOR", "ARGON", "POTAS", "WAPŃ", "SKAND", "TYTAN", "WANAD", "CHROM", "MANGAN", "ŻELAZO", "KOBALT", "NIKIEL", "MIEDŹ", "CYNK", "GAL", "GERMAN", "ARSEN", "SELEN", "BROM", "KRYPTON", "RUBID", "STRONT", "CYRKON", "MOLIBDEN", "ROD", "PALLAD", "SREBRO", "KADM", "CYNA", "ANTYMON", "JOD", "KSENON", "BAR", "NEODYM", "EUROP", "TANTAL", "WOLFRAM", "IRYD", "PLATYNA", "RTĘĆ", "ZŁOTO", "OŁÓW", "BIZMUT", "POLON", "RADON", "URAN", "AMERYK", "EINSTEIN", "MENDELEW", "NOBEL", "BOHR", "KOPERNIK"];
	wywolywanieResztyKategorii();
	document.querySelector("#kategoria").innerHTML = "Kategoria: " + document.querySelectorAll("li")[nr].textContent;
}
}
function sprzetLabo(nr){
	while(kliknietaKategoria == 0){
	slowo = ["AMPUŁA LABORATORYJNA", "NACZYNIE SCHLENKA", "CYLINDER MIAROWY", "CYLINDER NESSLERA", "EKSYKATOR", "KOLBA ERLENMAEYERA", "KOLBA STOŻKOWA", "KOLBA MIAROWA", "KOLBA SSAWKOWA", "KRYSTALIZATOR", "NACZYNKO WAGOWE", "PAROWNICZKA", "PROBÓWKA", "ROZDZIELACZ", "WKRAPLACZ", "WYMRAŻACZ", "ZLEWKA", "BAGIETKA", "KOREK SZLIFOWY", "KRÓWKA DESTYLACYJNA", "LEJEK BUCHNERA", "ŁĄCZNIK DESTYLACYJNY", "ŁYŻECZKA DO SPALAŃ", "PIPETA", "PŁUCZKA", "RETORTA", "SZALKA PETRIEGO", "SZKIEŁKO ZEGAROWE", "OLIWKA LABORATORYJNA", "TYGIEL", "ŁAPA LABORATORYJNA", "PALNIK", "POMPA PRÓŻNIOWA", "SĄCZEL LABORATORYJNY", "SZPATUŁKA", "TRYSKAWKA", "EWAPORATOR"];
	wywolywanieResztyKategorii();
	document.querySelector("#kategoria").innerHTML = "Kategoria: " + document.querySelectorAll("li")[nr].textContent;
}
}
function markaAut(nr){
	while(kliknietaKategoria == 0){
	slowo = ["VOLKSWAGEN", "AUDI", "BMW", "OPEL", "MERCEDES", "ACURA", "AIXAM", "ALFA ROMEO", "ARO", "ASIA", "ASTON MARTIN", "AUSTIN", "AUTOBIANCHI", "BENTLEY", "BRILLIANCE", "BUICK", "CADILLC", "CHATENET", "CHEWROLET", "CHRYSLER", "CITROEN", "DACIA", "DAEWOO", "DODGE", "FERRARI", "DE LOREAN", "FIAT", "FORD", "GMC", "HONDA", "HYUNDAI", "INFINITI", "ISUZU", "JAGUAR", "JEEP", "KIA", "LADA", "LAMBORGHINI", "LANCIA", "LAND ROVER", "LEXUS", "LINCOLN", "MASERATI", "MAYBACH", "MAZDA", "MCLAREN", "MG", "MINI", "MITSUBISHI", "NISSAN", "NYSA", "OLDSMOBILE", "PEUGEOT", "PIAGGIO", "PLYMOUTH", "POLONEZ", "PORSCHE", "RENAULT", "ROLLS ROYCE", "SAAB", "SEAT", "SKODA", "SMART", "SSANGYONG", "SUBARU", "SUZUKI", "SYRENA", "TATA", "TESLA", "TOYOTA", "WOŁGA"];
	wywolywanieResztyKategorii();
	document.querySelector("#kategoria").innerHTML = "Kategoria: " + document.querySelectorAll("li")[nr].textContent;
}
}
function modelAut(nr){
	while(kliknietaKategoria == 0){
	slowo = ["GOLF", "PASSAT", "POLO", "LUPO", "ASTRA", "CORSA", "OMEGA", "INSIGNIA", "AMG GT", "SPRINTER", "GIULIA", "GIULIETTA", "SPIDER", "CONTINENTAL GT", "BENTAYGA", "ELDORADO", "MUSTANG", "CAMARO", "BERLINGO", "LOGAN", "MATIZ", "TICO", "LANOS", "CHALLENGER", "CHARGER", "STRATUS", "PANDA", "ALBEA", "SEICENTO", "PUNTO", "FOCUS", "FIESTA", "MONDEO", "TRANSIT", "CITY", "LEGEND", "NSX", "PRELUDE", "COUGAR", "PUMA", "DIABLO", "GALLARDO", "HURACAN", "MURCIELAGO", "DELTA", "PREMACY", "TRIBUTE", "MAKSIMA", "ALMERA", "PRIMERA", "MICRA", "GTR", "GALLANT", "LANCER", "PARTNER", "RCZ", "PANAMERA", "MEGANE", "CLIO", "LAGUNA", "KOLEOS", "IBIZA", "LEON", "TOLEDO", "FABIA", "IMPREZA", "YARIS", "CELICA", "SUPRA", "COROLLA", "PRIUS"];
	wywolywanieResztyKategorii();
	document.querySelector("#kategoria").innerHTML = "Kategoria: " + document.querySelectorAll("li")[nr].textContent;
}
}
function kosci(nr){
	while(kliknietaKategoria == 0){
	slowo = ["OBOJCZYK", "RĘKOJEŚĆ MOSTKA", "ŁOPATKA", "MOSTEK", "ŻEBRA", "RAMIENNA", "ŁOKCIOWA", "PROMIENIOWA", "MIEDNICA", "OGONOWA", "KRZYŻOWA", "NADGARSTWA", "ŚRÓDRĘCZA", "PALCÓW DŁONI", "UDOWA", "RZEPKA", "PISZCZELOWA", "STRZEŁKOWA", "STĘPU", "SRÓDSTOPIA", "PALCÓW STOPY", "PIĘTOWA", "DŹWIGACZ", "RZUCHWA", "CZOŁOWA", "CIEMIENIOWA", "NOSOWA", "SITOWA", "ŁZOWA", "KLINOWA", "POTYLICZNA", "SKRONIOWA", "JARZMOWA", "SZCZĘKA", "LEMIESZ", "MŁOTECZEK", "KOWADEŁKO", "STRZEMIĄCZKO", "WYROSTEK MIECZYKOWATY", "KCIUK", "BIODROWA", "KULSZOWA", "ŁONOWA", "SKOKOWA", "PALUCH"];
	wywolywanieResztyKategorii();
	document.querySelector("#kategoria").innerHTML = "Kategoria: " + document.querySelectorAll("li")[nr].textContent;
}
}
function miesnie(nr){
	while(kliknietaKategoria == 0){
	slowo = ["SKLEPIENIA CZASZKI", "OTOCZENIA SZPARY POWIEK", "OTOCZENIA SZPARY UST", "JĘZYK", "SZEROKI SZYI", "ŻUCHWOWO GNYKOWY", "DŁUGI SZYI", "PIERSIOWY WIĘKSZY", "PODOBOJCZYKOWY", "ZĘBATY PRZEDNI", "MIĘDZYŻEBROWE", "POPRZECZNY KLATKI PIERSIOWEJ", "PRZEPONA", "CZWOROBOCZNY", "NAJSZERSZY GRZBIETU", "RÓWNOLEGŁOBOCZNY", "DŹWIGACZ ŁOPATKI", "ZĘBATE TYLNIE", "KRZYŻOWO GRZBIETOWY", "KOLCOWY", "KRZYŻOWO GUZICZNY", "MIĘDZYPOPRZECZNE", "SKOŚNY GÓRNY GŁOWY", "SKOŚNY ZEWNĘTRZNY", "SKOŚNY WEWNĘTRZNY", "POPRZECZNY BRZUCHA", "PROSTY BRZUCHA", "PIRAMIDOWY", "CZWOROBOCZNY LĘDŹWI", "KRUCZO RAMIENNY", "PODGRZEBIENIOWY", "PODŁOPATKOWY", "OBŁY WIĘKSZY", "ZGINACZ DŁUGI KCIUKA", "RAMIENNO PROMIENIOWY", "ODWRACACZ", "PROSTOWNIK PALCÓW", "ODWODZICIEL DŁUGI KCIUKA", "GLISTOWATE", "POŚLADKOWY WIELKI", "GRUSZKOWATY", "CZWOROBOCZNY UDA", "STAWOWY KOLANA", "CZWOROGŁOWY UDA", "PRZYWODZICIEL", "DWUGŁOWY UDA", "PODKOLANOWY", "WYNIOSŁOŚCI POŚREDNIEJ"];
	wywolywanieResztyKategorii();
	document.querySelector("#kategoria").innerHTML = "Kategoria: " + document.querySelectorAll("li")[nr].textContent;
}
}


var losowaLiczba = Math.floor(Math.random() * slowo.length);
var wylosowaneSlowo = slowo[losowaLiczba];
var divLitery = " ";
var haslo = "";
var wrongAnswer = 0;
document.getElementById("szubienica").innerHTML = '<img src="images/s'+wrongAnswer+'.jpg"></img>'

function wypiszLitery(){
	for (i = 0; i < letters.length; i++){
		var element = "lit" + i;
		divLitery = divLitery + '<input type="submit" onclick="check('+i+')" id='+element+' value="'+letters[i]+'">';
	}
	document.getElementById("litery").innerHTML = divLitery;

	wypiszHaslo();
}

function wypiszHaslo(){
	for (var i = 0; i < wylosowaneSlowo.length; i++){
		if (wylosowaneSlowo[i] == " ") {
			haslo = haslo + " " ;
		}
		else
			haslo = haslo + "-";
	}
	document.getElementById("losowaneslowo").innerHTML = haslo;
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function check(nr) {

	var trafiona = false;

	for (var i = 0; i < wylosowaneSlowo.length; i++){
		if (wylosowaneSlowo.charAt(i) == letters[nr]) {
			haslo = haslo.ustawZnak(i, letters[nr]);
			trafiona = true;
			document.getElementById("losowaneslowo").innerHTML = haslo;
		}
	}

	if (trafiona == true) {
		dzwiekPoprawnej.play();
		document.querySelectorAll("input")[nr].classList.add("goodanswer");
		
	}
	else if (trafiona == false){
		dzwiekZlej.play();
		document.querySelectorAll("input")[nr].classList.add("wronganswer");
		document.querySelectorAll("input")[nr].setAttribute("onclick", ";");
		wrongAnswer++;
		document.getElementById("szubienica").innerHTML = '<img src="images/s'+wrongAnswer+'.jpg"></img>'

	}

	if (haslo == wylosowaneSlowo){
		document.getElementById("litery").classList.add("win");
		document.getElementById("litery").innerHTML = '<p>Gratulacje wygrałeś!</p><button onclick="location.reload()">Zagraj jeszcze raz!</button>';
		document.querySelectorAll(".container")[1].style.background = "rgba(30,120,22,0.6)";
	}
	if (wrongAnswer == 9) {
		document.getElementById("losowaneslowo").innerHTML = wylosowaneSlowo;
		document.querySelectorAll(".container")[1].style.background = "rgba(79,13,18,0.6)";
		document.getElementById("litery").classList.add("win");
		document.getElementById("litery").innerHTML = '<p>Niestety przegrałeś</p><button onclick="location.reload()">Zagraj jeszcze raz!</button>';
	}
}
