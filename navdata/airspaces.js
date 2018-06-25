function loadAirspaces() {

	// LSGG FIR
	var lsag_fir = new L.Polygon(
		[
			{lat: 46.118333, lng: 5.700833},
			{lat: 46.234722, lng: 5.134167},
			{lat: 46.700833, lng: 5.184167},
			{lat: 46.700556, lng: 5.584444},
			{lat: 46.967778, lng: 5.952222},
			{lat: 47.0675, lng: 6.299444},
			{lat: 47.070833, lng: 6.697222},
			{lat: 47.0700816437782, lng: 6.701423877902773},
			{lat: 47.07371738288262, lng: 6.704277802567544},
			{lat: 47.07386893495533, lng: 6.705930447125688},
			{lat: 47.07482128208048, lng: 6.706609217966381},
			{lat: 47.07579758857791, lng: 6.705712331791114},
			{lat: 47.07970062097958, lng: 6.707488750180081},
			{lat: 47.08176961702783, lng: 6.702639660042715},
			{lat: 47.08288134895286, lng: 6.707670305326399},
			{lat: 47.08473880042515, lng: 6.708786455609477},
			{lat: 47.08390919934754, lng: 6.710260173564286},
			{lat: 47.08652057660366, lng: 6.713708894435526},
			{lat: 47.08787387910255, lng: 6.713901016812153},
			{lat: 47.08929228965061, lng: 6.717936601283929},
			{lat: 47.08930244632583, lng: 6.722974478789114},
			{lat: 47.09209695036159, lng: 6.726526893704965},
			{lat: 47.09025896770208, lng: 6.729937476943732},
			{lat: 47.0892856661588, lng: 6.734973668124917},
			{lat: 47.09125112900213, lng: 6.742161564349942},
			{lat: 47.09467882693311, lng: 6.745930013401294},
			{lat: 47.0982263722636, lng: 6.746821165149308},
			{lat: 47.10089505926694, lng: 6.744807618396436},
			{lat: 47.10357949311977, lng: 6.741910381368808},
			{lat: 47.10761304895662, lng: 6.740264395800923},
			{lat: 47.10982533010883, lng: 6.740453735981578},
			{lat: 47.10970198449332, lng: 6.746745929718383},
			{lat: 47.11447697085222, lng: 6.752117536730717},
			{lat: 47.11522752472307, lng: 6.754492873299456},
			{lat: 47.11668833893595, lng: 6.756442012265564},
			{lat: 47.11976012387476, lng: 6.763831400498727},
			{lat: 47.12110788640766, lng: 6.768866739678363},
			{lat: 47.12135647660804, lng: 6.772298356748248},
			{lat: 47.12160347662617, lng: 6.777349858133257},
			{lat: 47.1234455284693, lng: 6.778430619316325},
			{lat: 47.12381609204594, lng: 6.781679323479408},
			{lat: 47.12762815691585, lng: 6.794681014979334},
			{lat: 47.12910550750556, lng: 6.796496627709894},
			{lat: 47.12898321206508, lng: 6.800290669168218},
			{lat: 47.13058024345891, lng: 6.806060443747491},
			{lat: 47.13168952532993, lng: 6.8071569755614},
			{lat: 47.13440192414514, lng: 6.807540281254365},
			{lat: 47.13561770476481, lng: 6.808041941122951},
			{lat: 47.1351296670754, lng: 6.814192821640271},
			{lat: 47.13623795759817, lng: 6.816547938331416},
			{lat: 47.14030820284597, lng: 6.819835932044933},
			{lat: 47.14189767168929, lng: 6.825053434645596},
			{lat: 47.14634201224443, lng: 6.82889133126964},
			{lat: 47.14633653607977, lng: 6.830687834318323},
			{lat: 47.15027495847684, lng: 6.839918946935645},
			{lat: 47.15428822738686, lng: 6.84054600967526},
			{lat: 47.1564446109754, lng: 6.850097194236731},
			{lat: 47.15877396100575, lng: 6.851345169178618},
			{lat: 47.1650707832191, lng: 6.858813040275729},
			{lat: 47.16495188083258, lng: 6.849759829674945},
			{lat: 47.16593389401431, lng: 6.844681465855318},
			{lat: 47.17048352204095, lng: 6.840506868955734},
			{lat: 47.17209117631584, lng: 6.841059927795019},
			{lat: 47.17633002694557, lng: 6.853331464381853},
			{lat: 47.18111847907376, lng: 6.865265373476284},
			{lat: 47.18499306894838, lng: 6.866525575124818},
			{lat: 47.18464977824792, lng: 6.871421715310822},
			{lat: 47.18548670607593, lng: 6.873970305851469},
			{lat: 47.1886919953479, lng: 6.873611738125238},
			{lat: 47.19350046091185, lng: 6.875803455520371},
			{lat: 47.19535403536612, lng: 6.877982327485343},
			{lat: 47.20029325627657, lng: 6.880170357320479},
			{lat: 47.20188792426495, lng: 6.884317959962854},
			{lat: 47.20362582181918, lng: 6.885264636962704},
			{lat: 47.20510691196834, lng: 6.889451202095414},
			{lat: 47.20671061951049, lng: 6.891086229709373},
			{lat: 47.21495884743823, lng: 6.907787455508485},
			{lat: 47.21831805485981, lng: 6.909849804568513},
			{lat: 47.21917683457444, lng: 6.916579998798193},
			{lat: 47.22115620805009, lng: 6.921510021025449},
			{lat: 47.22532496053458, lng: 6.92709829947048},
			{lat: 47.22798723988561, lng: 6.926873981374422},
			{lat: 47.2315476669581, lng: 6.9330335828716},
			{lat: 47.23069322046285, lng: 6.938712042217756},
			{lat: 47.23341121618081, lng: 6.942362367184593},
			{lat: 47.23740753322456, lng: 6.942988796324874},
			{lat: 47.23910375014321, lng: 6.945298151493208},
			{lat: 47.23985974394707, lng: 6.949161404646789},
			{lat: 47.24209440804872, lng: 6.951187877617358},
			{lat: 47.24259317422523, lng: 6.955034610552364},
			{lat: 47.243611, lng: 6.954444},
			{lat: 46.51, lng: 7.801944},
			{lat: 46.515, lng: 7.992222},
			{lat: 46.331111, lng: 8.224167},
			{lat: 46.32707864699946, lng: 8.229477785623459},
			{lat: 46.31944201864186, lng: 8.214014026687286},
			{lat: 46.3097580036387, lng: 8.207695530834995},
			{lat: 46.30036763740569, lng: 8.188440707938966},
			{lat: 46.29623975160053, lng: 8.160226461384205},
			{lat: 46.30150363608028, lng: 8.139516971116718},
			{lat: 46.2927159777461, lng: 8.121829464441916},
			{lat: 46.26664667139342, lng: 8.086157323679499},
			{lat: 46.25973903938958, lng: 8.080441452346394},
			{lat: 46.24755325454933, lng: 8.111715058375111},
			{lat: 46.23837175443148, lng: 8.115356853604832},
			{lat: 46.22335984191651, lng: 8.139760334307457},
			{lat: 46.19162150598481, lng: 8.154492423610488},
			{lat: 46.18175729789677, lng: 8.166020916744557},
			{lat: 46.17647805503699, lng: 8.165211215553361},
			{lat: 46.16111095914408, lng: 8.15036915086651},
			{lat: 46.14723827529097, lng: 8.156075712674625},
			{lat: 46.13520810773336, lng: 8.145352590145143},
			{lat: 46.13582939302027, lng: 8.125787555267831},
			{lat: 46.13012226139912, lng: 8.114928979124784},
			{lat: 46.11178842861394, lng: 8.11067380949957},
			{lat: 46.09976387926911, lng: 8.034572872932767},
			{lat: 46.06853532566362, lng: 8.021738440638146},
			{lat: 46.04373081136087, lng: 8.036407132880477},
			{lat: 46.03846186686724, lng: 8.021938174489225},
			{lat: 46.03135636301069, lng: 8.011559338077099},
			{lat: 46.02614376813912, lng: 8.016597708247613},
			{lat: 46.02195157412303, lng: 8.011992300845815},
			{lat: 46.01289828509191, lng: 8.01185734001059},
			{lat: 46.01146367874057, lng: 8.000025685266145},
			{lat: 45.9981256761702, lng: 7.990451877740612},
			{lat: 45.99965971474807, lng: 7.979984466179571},
			{lat: 45.99509664537951, lng: 7.909597571522},
			{lat: 45.9757358386333, lng: 7.892494100985291},
			{lat: 45.97276899850612, lng: 7.880153982345679},
			{lat: 45.96329322539155, lng: 7.881876911665813},
			{lat: 45.95863858337559, lng: 7.876891004575719},
			{lat: 45.95075083737093, lng: 7.877581176342217},
			{lat: 45.94685062734367, lng: 7.869298323466523},
			{lat: 45.93601433720159, lng: 7.866829990520565},
			{lat: 45.92579290855328, lng: 7.878202998423262},
			{lat: 45.9162125471693, lng: 7.865303513660631},
			{lat: 45.92757825231755, lng: 7.820155608763207},
			{lat: 45.92061789104453, lng: 7.801475724482274},
			{lat: 45.93671065074464, lng: 7.769832988000553},
			{lat: 45.9409878912757, lng: 7.748934881376552},
			{lat: 45.92360572613205, lng: 7.734156898075439},
			{lat: 45.92376083856875, lng: 7.720155552213106},
			{lat: 45.93265961597373, lng: 7.709130077617481},
			{lat: 45.94895586989365, lng: 7.709809275936268},
			{lat: 45.95721339158954, lng: 7.682682354274871},
			{lat: 45.97017904717858, lng: 7.672759685651327},
			{lat: 45.97590127352893, lng: 7.662649325270947},
			{lat: 45.97007732184524, lng: 7.641519884524248},
			{lat: 45.97189114681406, lng: 7.621352255202294},
			{lat: 45.9687029194044, lng: 7.609459353744629},
			{lat: 45.97104552616518, lng: 7.584408744585483},
			{lat: 45.98699479701729, lng: 7.577190402496228},
			{lat: 45.98580944086633, lng: 7.548717266908936},
			{lat: 45.97669139606803, lng: 7.542970150059016},
			{lat: 45.96005793883496, lng: 7.544973595580138},
			{lat: 45.95495724104662, lng: 7.53541584185955},
			{lat: 45.95711250898916, lng: 7.526278871616543},
			{lat: 45.96210676816262, lng: 7.517677802253848},
			{lat: 45.95943500178809, lng: 7.507444508920191},
			{lat: 45.96157475138826, lng: 7.496911274307361},
			{lat: 45.9531543657428, lng: 7.491165565813633},
			{lat: 45.95085076003315, lng: 7.473248899140614},
			{lat: 45.94369274669653, lng: 7.474019468614004},
			{lat: 45.93622831711924, lng: 7.473867800196619},
			{lat: 45.936667, lng: 7.458056},
			{lat: 45.796389, lng: 7.345833},
			{lat: 45.652778, lng: 7.208056},
			{lat: 45.458333, lng: 7.021111},
			{lat: 45.356111, lng: 7.153056},
			{lat: 44.980278, lng: 7.160000},
			{lat: 44.815278, lng: 7.127778},
			{lat: 44.800000, lng: 7.012500},
			{lat: 44.800000, lng: 6.790556},
			{lat: 44.801389, lng: 6.766111},
			{lat: 45.115000, lng: 6.593889},
			{lat: 45.389722, lng: 6.441667},
			{lat: 45.585278, lng: 6.333611},
			{lat: 45.8525, lng: 6.048611},
			{lat: 46.118333, lng: 5.700833}
		],{
			weight: 0,
			fillColor: '#000000',
			fillOpacity: 0.35,
			title: 'LSAG'
	}).addTo(LeafletMap);
	
	// TMAs
	var tma1 = new L.Polygon(
		[
			{lat: 46.528333, lng: 6.387778},
			{lat: 46.3675, lng: 6.551111},
			{lat: 45.973056, lng: 5.841111},
			{lat: 45.999444, lng: 5.803889},
			{lat: 46.085556, lng: 5.784167},
			{lat: 46.117222, lng: 5.817778},
			{lat: 46.393889, lng: 6.110833},
			{lat: 46.528333, lng: 6.387778}
		],{
			color: '#222222',
			opacity: 0.5,
			weight: 1,
			fillColor: '#666666',
			fillOpacity: 0.35,
			title: 'TMA 1 LSGG'
	}).addTo(LeafletMap);
	
	var tma2 = new L.Polygon(
		[
			{lat: 46.581944, lng: 6.499167},
			{lat: 46.415, lng: 6.666389},
			{lat: 46.304722, lng: 6.509444},
			{lat: 46.048889, lng: 6.159167},
			{lat: 45.928056, lng: 5.910833},
			{lat: 45.9202033359687, lng: 5.892937451245097},
			{lat: 45.91360493391392, lng: 5.874026700184618},
			{lat: 45.90832381788063, lng: 5.854281697459852},
			{lat: 45.90441041393383, lng: 5.833891183601211},
			{lat: 45.901902079520134, lng: 5.813049919751669},
			{lat: 45.90082275514574, lng: 5.791956867584826},
			{lat: 45.90118274130816, lng: 5.770813333908931},
			{lat: 45.90297860255712, lng: 5.749821095602614},
			{lat: 45.906193199489934, lng: 5.729180520612295},
			{lat: 45.910795848412945, lng: 5.709088700757928},
			{lat: 45.91674260732795, lng: 5.689737612043527},
			{lat: 45.92397668583589, lng: 5.671312318050025},
			{lat: 45.93242897549425, lng: 5.653989231796821},
			{lat: 45.942018696125, lng: 5.637934451189106},
			{lat: 45.95265415255115, lng: 5.623302182813279},
			{lat: 45.9642335952502, lng: 5.610233268393822},
			{lat: 45.97664617745645, lng: 5.598853827672237},
			{lat: 45.98977300033014, lng: 5.589274030801963},
			{lat: 46.00348823694733, lng: 5.581587012562822},
			{lat: 46.01766032505858, lng: 5.5758679397754145},
			{lat: 46.03215321782656, lng: 5.572173242232335},
			{lat: 46.04682768109209, lng: 5.570540016253756},
			{lat: 46.06154262514429, lng: 5.570985608616994},
			{lat: 46.0761564584949, lng: 5.5735073871038034},
			{lat: 46.09052845078672, lng: 5.578082702260014},
			{lat: 46.104520091714406, lng: 5.584669043178397},
			{lat: 46.11799643270735, lng: 5.59320438821105},
			{lat: 46.130827398130585, lng: 5.603607749510223},
			{lat: 46.1428890529036, lng: 5.615779908209511},
			{lat: 46.154064813725434, lng: 5.629604334918103},
			{lat: 46.164246591529285, lng: 5.6449482880407995},
			{lat: 46.173333, lng: 5.661667},
			{lat: 46.183056, lng: 5.681111},
			{lat: 46.117222, lng: 5.817778},
			{lat: 46.085556, lng: 5.784167},
			{lat: 45.999444, lng: 5.803889},
			{lat: 45.973056, lng: 5.841111},
			{lat: 46.3675, lng: 6.551111},
			{lat: 46.528333, lng: 6.387778},
			{lat: 46.581944, lng: 6.499167}
		],{
			color: '#222222',
			opacity: 0.5,
			weight: 1,
			fillColor: '#666666',
			fillOpacity: 0.35,
			title: 'TMA 2 LSGG'
	}).addTo(LeafletMap);
	
	var tma3 = new L.Polygon(
		[
			{lat: 46.581944, lng: 6.499167},
			{lat: 46.528333, lng: 6.387778},
			{lat: 46.393889, lng: 6.110833},
			{lat: 46.117222, lng: 5.817778},
			{lat: 46.183056, lng: 5.681111},
			{lat: 46.242222, lng: 5.801111},
			{lat: 46.374722, lng: 6.034167},
			{lat: 46.411111, lng: 6.088056},
			{lat: 46.573056, lng: 6.326389},
			{lat: 46.581944, lng: 6.499167}
		],{
			color: '#222222',
			opacity: 0.5,
			weight: 1,
			fillColor: '#666666',
			fillOpacity: 0.35,
			title: 'TMA 3 LSGG'
	}).addTo(LeafletMap);
	
	var tma4 = new L.Polygon(
		[
			{lat: 46.767778, lng: 6.44},
			{lat: 46.733333, lng: 6.557222},
			{lat: 46.573056, lng: 6.326389},
			{lat: 46.411111, lng: 6.088056},
			{lat: 46.374722, lng: 6.034444},
			{lat: 46.242222, lng: 5.801111},
			{lat: 46.312222, lng: 5.743333},
			{lat: 46.477222, lng: 5.606111},
			{lat: 46.5, lng: 5.586111},
			{lat: 46.5, lng: 5.890556},
			{lat: 46.576111, lng: 6.110833},
			{lat: 46.639722, lng: 6.210278},
			{lat: 46.683333, lng: 6.275},
			{lat: 46.767778, lng: 6.44}
		],{
			color: '#222222',
			opacity: 0.5,
			weight: 1,
			fillColor: '#666666',
			fillOpacity: 0.35,
			title: 'TMA 4 LSGG'
	}).addTo(LeafletMap);
	
	var tma5 = new L.Polygon(
		[
			{lat: 46.733333, lng: 6.557222},
			{lat: 46.676667, lng: 6.750556},
			{lat: 46.657222, lng: 6.753611},
			{lat: 46.545833, lng: 6.900556},
			{lat: 46.469167, lng: 6.801389},
			{lat: 46.437222, lng: 6.698056},
			{lat: 46.415, lng: 6.666389},
			{lat: 46.581944, lng: 6.499167},
			{lat: 46.573056, lng: 6.326389},
			{lat: 46.733333, lng: 6.557222}
		],{
			color: '#222222',
			opacity: 0.5,
			weight: 1,
			fillColor: '#666666',
			fillOpacity: 0.35,
			title: 'TMA 5 LSGG'
	}).addTo(LeafletMap);
	
	var tma6 = new L.Polygon(
		[
			{lat: 46.469167, lng: 6.801389},
			{lat: 46.430833, lng: 6.802778},
			{lat: 46.42718349894685, lng: 6.820993192999199},
			{lat: 46.39408519956542, lng: 6.805300781951482},
			{lat: 46.39263212835187, lng: 6.803234461014047},
			{lat: 46.39111822152411, lng: 6.803149839100071},
			{lat: 46.38904350922143, lng: 6.802126817601078},
			{lat: 46.38594683169367, lng: 6.801800469251134},
			{lat: 46.38459702100069, lng: 6.802989212387061},
			{lat: 46.38352052263218, lng: 6.804002462423815},
			{lat: 46.38354630342806, lng: 6.805263049427937},
			{lat: 46.38304322688334, lng: 6.806262692012986},
			{lat: 46.38182120010191, lng: 6.805755719279012},
			{lat: 46.38037875281847, lng: 6.806245172284598},
			{lat: 46.377778, lng: 6.804722},
			{lat: 46.358611, lng: 6.805278},
			{lat: 46.173333, lng: 6.416667},
			{lat: 45.987778, lng: 6.238333},
			{lat: 46.048889, lng: 6.159167},
			{lat: 46.304722, lng: 6.509444},
			{lat: 46.415, lng: 6.666389},
			{lat: 46.437222, lng: 6.698056},
			{lat: 46.469167, lng: 6.801389}
		],{
			color: '#222222',
			opacity: 0.5,
			weight: 1,
			fillColor: '#666666',
			fillOpacity: 0.35,
			title: 'TMA 6 LSGG'
	}).addTo(LeafletMap);
	
	var tma7 = new L.Polygon(
		[
			{lat: 46.358611, lng: 6.805278},
			{lat: 46.320556, lng: 6.806944},
			{lat: 46.31805592085326, lng: 6.813090353310962},
			{lat: 46.31577913002269, lng: 6.815453840002801},
			{lat: 46.31578439410001, lng: 6.817716339964441},
			{lat: 46.31578812262563, lng: 6.819876975857381},
			{lat: 46.31293887080595, lng: 6.821495861943008},
			{lat: 46.31177126477826, lng: 6.825552726591944},
			{lat: 46.30999245282035, lng: 6.826216512200203},
			{lat: 46.30596719379572, lng: 6.830098744363847},
			{lat: 46.30280160645211, lng: 6.828490263319688},
			{lat: 46.299844758339, lng: 6.830005073336352},
			{lat: 46.29952468871171, lng: 6.834713440831759},
			{lat: 46.29707374204892, lng: 6.836714548169733},
			{lat: 46.29473355852123, lng: 6.839837702889615},
			{lat: 46.29398835841032, lng: 6.844071608735294},
			{lat: 46.28977836883767, lng: 6.847212318188063},
			{lat: 46.29031677865849, lng: 6.85124443041085},
			{lat: 46.29202294724379, lng: 6.851888388350762},
			{lat: 46.29241696624448, lng: 6.854746384977641},
			{lat: 46.29058351814826, lng: 6.858947354109524},
			{lat: 46.28841344892418, lng: 6.859564449947753},
			{lat: 46.28637312078735, lng: 6.860790135653203},
			{lat: 46.28542086405039, lng: 6.862856161393531},
			{lat: 46.28365147096402, lng: 6.863751831803871},
			{lat: 46.28291594339588, lng: 6.864665525789901},
			{lat: 46.2798990734014, lng: 6.865015810574819},
			{lat: 46.27787668300812, lng: 6.86285064851262},
			{lat: 46.27625118378305, lng: 6.861101996938659},
			{lat: 46.27385656291733, lng: 6.859063068882067},
			{lat: 46.26608818936453, lng: 6.8603421828402},
			{lat: 46.26043435959545, lng: 6.856173515520103},
			{lat: 46.25973648343556, lng: 6.854929901523422},
			{lat: 46.2575, lng: 6.854444},
			{lat: 46.076667, lng: 6.479444},
			{lat: 45.873333, lng: 6.274167},
			{lat: 45.918889, lng: 6.204167},
			{lat: 45.973611, lng: 6.256667},
			{lat: 45.987778, lng: 6.238333},
			{lat: 46.173333, lng: 6.416667},
			{lat: 46.358611, lng: 6.805278}
		],{
			color: '#222222',
			opacity: 0.5,
			weight: 1,
			fillColor: '#666666',
			fillOpacity: 0.35,
			title: 'TMA 7 LSGG'
	}).addTo(LeafletMap);
	
	var tma8 = new L.Polygon(
		[
			{lat: 45.928056, lng: 5.910833},
			{lat: 46.048889, lng: 6.159167},
			{lat: 45.987778, lng: 6.238333},
			{lat: 45.973611, lng: 6.256667},
			{lat: 45.918889, lng: 6.204167},
			{lat: 45.932222, lng: 6.183611},
			{lat: 45.873611, lng: 6.129167},
			{lat: 45.828889, lng: 5.581389},
			{lat: 45.928056, lng: 5.662778},
			{lat: 45.92796541919172, lng: 5.662686851083777},
			{lat: 45.924760884992864, lng: 5.669544209639686},
			{lat: 45.92174090225142, lng: 5.676572158997075},
			{lat: 45.91890986929116, lng: 5.6837604367389325},
			{lat: 45.91627190860013, lng: 5.691098551873551},
			{lat: 45.913830860954604, lng: 5.69857579992283},
			{lat: 45.91159027994789, lng: 5.706181278287733},
			{lat: 45.90955342693097, lng: 5.7139039018702835},
			{lat: 45.907723266371555, lng: 5.721732418931361},
			{lat: 45.906102461637474, lng: 5.729655427163307},
			{lat: 45.904693371210115, lng: 5.737661389956267},
			{lat: 45.90349804533235, lng: 5.745738652837025},
			{lat: 45.9025182230957, lng: 5.75387546005898},
			{lat: 45.90175532997009, lng: 5.7620599713218255},
			{lat: 45.901210475779685, lng: 5.770280278599377},
			{lat: 45.90088445312719, lng: 5.778524423053956},
			{lat: 45.90077773626864, lng: 5.78678041201566},
			{lat: 45.90089048044026, lng: 5.795036236004811},
			{lat: 45.90122252163815, lng: 5.803279885775855},
			{lat: 45.90177337685099, lng: 5.811499369360966},
			{lat: 45.902542244745746, lng: 5.819682729091593},
			{lat: 45.90352800680514, lng: 5.8278180585762405},
			{lat: 45.90472922891577, lng: 5.835893519612765},
			{lat: 45.90614416340453, lng: 5.8438973590135195},
			{lat: 45.907770751521106, lng: 5.851817925321757},
			{lat: 45.909606626362866, lng: 5.859643685397742},
			{lat: 45.91164911623895, lng: 5.867363240853135},
			{lat: 45.91389524846876, lng: 5.874965344312287},
			{lat: 45.91634175361025, lng: 5.88243891547924},
			{lat: 45.91898507011242, lng: 5.889773056989308},
			{lat: 45.92182134938613, lng: 5.896957070024322},
			{lat: 45.9248464612865, lng: 5.903980469670735},
			{lat: 45.92805599999999, lng: 5.910833000000029},
			{lat: 45.928056, lng: 5.910833}
		],{
			color: '#222222',
			opacity: 0.5,
			weight: 1,
			fillColor: '#666666',
			fillOpacity: 0.35,
			title: 'TMA 8 LSGG'
	}).addTo(LeafletMap);
	
	var tma9 = new L.Polygon(
		[
			{lat: 45.828889, lng: 5.581389},
			{lat: 45.873611, lng: 6.129167},
			{lat: 45.843889, lng: 6.101389},
			{lat: 45.806389, lng: 6.096667},
			{lat: 45.775278, lng: 5.976944},
			{lat: 45.744722, lng: 5.701111},
			{lat: 45.796667, lng: 5.555},
			{lat: 45.828889, lng: 5.581389}
		],{
			color: '#222222',
			opacity: 0.5,
			weight: 1,
			fillColor: '#666666',
			fillOpacity: 0.35,
			title: 'TMA 9 LSGG'
	}).addTo(LeafletMap);
	
	var tma10 = new L.Polygon(
		[
			{lat: 45.796667, lng: 5.555},
			{lat: 45.744722, lng: 5.701111},
			{lat: 45.775278, lng: 5.976944},
			{lat: 45.806389, lng: 6.096667},
			{lat: 45.620556, lng: 6.087778},
			{lat: 45.632222, lng: 5.983333},
			{lat: 45.685556, lng: 5.498056},
			{lat: 45.716667, lng: 5.489444},
			{lat: 45.796667, lng: 5.555}
		],{
			color: '#222222',
			opacity: 0.5,
			weight: 1,
			fillColor: '#666666',
			fillOpacity: 0.35,
			title: 'TMA 10 LSGG'
	}).addTo(LeafletMap);
	
	var tma8lyon = new L.Polygon(
		[
			{lat: 46.363333, lng: 5.407778},
			{lat: 46.477222, lng: 5.606111},
			{lat: 46.242222, lng: 5.801111},
			{lat: 46.173333, lng: 5.661667},
			{lat: 46.17351070561006, lng: 5.661485162182704},
			{lat: 46.17104251400133, lng: 5.656601111806482},
			{lat: 46.168480849950804, lng: 5.651818702048716},
			{lat: 46.16582771515749, lng: 5.64714165540195},
			{lat: 46.163085182499835, lng: 5.642573610458945},
			{lat: 46.160255394385494, lng: 5.6381181190651715},
			{lat: 46.15734056104673, lng: 5.633778643545317},
			{lat: 46.154342958783, lng: 5.629558554006039},
			{lat: 46.15126492815198, lng: 5.625461125717059},
			{lat: 46.14810887211089, lng: 5.621489536572634},
			{lat: 46.1448772541094, lng: 5.617646864635366},
			{lat: 46.14157259613602, lng: 5.613936085764214},
			{lat: 46.13819747671922, lng: 5.610360071328469},
			{lat: 46.13475452888541, lng: 5.60692158600941},
			{lat: 46.131246438075195, lng: 5.603623285691217},
			{lat: 46.127675940019735, lng: 5.6004677154426785},
			{lat: 46.124045818578914, lng: 5.597457307591092},
			{lat: 46.12035890354331, lng: 5.594594379889709},
			{lat: 46.116618068401536, lng: 5.591881133779954},
			{lat: 46.11282622807492, lng: 5.589319652749559},
			{lat: 46.10898633662149, lng: 5.586911900787692},
			{lat: 46.105101384910824, lng: 5.584659720938021},
			{lat: 46.10117439827217, lng: 5.582564833950603},
			{lat: 46.0972084341172, lng: 5.580628837033365},
			{lat: 46.09320657953977, lng: 5.578853202703879},
			{lat: 46.08917194889436, lng: 5.577239277742021},
			{lat: 46.08510768135533, lng: 5.575788282244021},
			{lat: 46.08101693845877, lng: 5.5745013087783395},
			{lat: 46.07690290162916, lng: 5.573379321643664},
			{lat: 46.07276876969255, lng: 5.572423156229303},
			{lat: 46.0686177563784, lng: 5.571633518478105},
			{lat: 46.06445308781211, lng: 5.571010984451981},
			{lat: 46.060278, lng: 5.5705560000000105},
			{lat: 46.060278, lng: 5.570556},
			{lat: 46.237222, lng: 5.576389},
			{lat: 46.363333, lng: 5.407778}
		],{
			color: '#222222',
			opacity: 0.5,
			weight: 1,
			fillColor: '#666666',
			fillOpacity: 0.35,
			title: 'TMA 8 LFLL'
	}).addTo(LeafletMap);
	
	// CTR
	
	var ctr_lsgg = new L.Polygon(
		[
			{lat: 46.196944, lng: 5.944722},
			{lat: 46.367778, lng: 6.198056},
			{lat: 46.37101955226205, lng: 6.2034586988374665},
			{lat: 46.37388041761181, lng: 6.20929584990956},
			{lat: 46.376333066824344, lng: 6.2155113478601764},
			{lat: 46.378353895372406, lng: 6.222045421045884},
			{lat: 46.3799234522244, lng: 6.228835209089352},
			{lat: 46.38102662847461, lng: 6.235815371247653},
			{lat: 46.38165280392242, lng: 6.242918719568275},
			{lat: 46.381795950134496, lng: 6.250076870529844},
			{lat: 46.381454688957746, lng: 6.257220908657796},
			{lat: 46.38063230589709, lng: 6.264282055470983},
			{lat: 46.37933671822377, lng: 6.271192337055243},
			{lat: 46.37758039813387, lng: 6.2778852435754215},
			{lat: 46.375380251726774, lng: 6.284296374127847},
			{lat: 46.37275745501486, lng: 6.290364060499583},
			{lat: 46.36973724860355, lng: 6.29602996363614},
			{lat: 46.366348693090536, lng: 6.301239636922501},
			{lat: 46.362624387619995, lng: 6.305943050748462},
			{lat: 46.358600154387716, lng: 6.310095073253117},
			{lat: 46.35431469222272, lng: 6.313655902618807},
			{lat: 46.34980920266727, lng: 6.316591446805137},
			{lat: 46.34512699223576, lng: 6.31887364717161},
			{lat: 46.340313054754446, lng: 6.320480743025819},
			{lat: 46.335413637863226, lng: 6.321397474745052},
			{lat: 46.330475797899176, lng: 6.321615223745459},
			{lat: 46.32554694747628, lng: 6.321132088206935},
			{lat: 46.320674400129015, lng: 6.319952894096577},
			{lat: 46.31590491639615, lng: 6.318089141662336},
			{lat: 46.31128425568928, lng: 6.315558888184841},
			{lat: 46.30685673821649, lng: 6.3123865683738165},
			{lat: 46.302664821118256, lng: 6.308602754370645},
			{lat: 46.29874869282149, lng: 6.304243857866061},
			{lat: 46.295278, lng: 6.299167},
			{lat: 46.125, lng: 6.045833},
			{lat: 46.12174448652226, lng: 6.04048677528688},
			{lat: 46.11886720792945, lng: 6.03470689932589},
			{lat: 46.11639576150035, lng: 6.028548872818377},
			{lat: 46.114353848560384, lng: 6.022071798285531},
			{lat: 46.112761048788975, lng: 6.015337815496655},
			{lat: 46.111632633865675, lng: 6.008411508831803},
			{lat: 46.11097942217585, lng: 6.001359292096213},
			{lat: 46.110807675915126, lng: 5.994248776484762},
			{lat: 46.11111904154004, lng: 5.987148127528996},
			{lat: 46.111910534112795, lng: 5.98012541694656},
			{lat: 46.11317456568381, lng: 5.973247975353192},
			{lat: 46.11489901745152, lng: 5.9665817517906214},
			{lat: 46.11706735503486, lng: 5.960190685969817},
			{lat: 46.11965878579737, lng: 5.954136099028018},
			{lat: 46.12264845677158, lng: 5.948476108450376},
			{lat: 46.12600769135559, lng: 5.9432650726125615},
			{lat: 46.129704262590465, lng: 5.938553070160537},
			{lat: 46.13370270048242, lng: 5.934385419157846},
			{lat: 46.13796463050953, lng: 5.930802240600628},
			{lat: 46.142449140153275, lng: 5.9278380705270575},
			{lat: 46.14711317002111, lng: 5.925521524532858},
			{lat: 46.15191192588346, lng: 5.923875018049713},
			{lat: 46.15679930773653, lng: 5.922914545251585},
			{lat: 46.161728351825545, lng: 5.922649518927888},
			{lat: 46.16665168142301, lng: 5.923082673106014},
			{lat: 46.17152196205522, lng: 5.924210029622828},
			{lat: 46.176292356808794, lng: 5.926020929240352},
			{lat: 46.18091697733017, lng: 5.928498127280263},
			{lat: 46.18535132615369, lng: 5.931617953120904},
			{lat: 46.18955272606011, lng: 5.935350532265756},
			{lat: 46.19348073227647, lng: 5.939660069060548},
			{lat: 46.196944, lng: 5.944722}
		],{
			color: '#222222',
			opacity: 0.5,
			weight: 1,
			fillColor: '#888888',
			fillOpacity: 0.35,
			title: 'CTR LSGG'
	}).addTo(LeafletMap);
	
	// ILS
	var ecl05 = new L.Polyline(
		[
			{lat: 46.231111, lng: 6.0975},
			{lat: 45.998333, lng: 5.754722}
		],{
			color: '#888888',
			opacity: 0.5,
			weight: 1,
			title: 'Centerline Runway 05'
	}).addTo(LeafletMap);

	var ecl23 = new L.Polyline(
		[
			{lat: 46.249167, lng: 6.123889},
			{lat: 46.4825, lng: 6.466944}
		],{
			color: '#888888',
			opacity: 0.5,
			weight: 1,
			title: 'Centerline Runway 23'
	}).addTo(LeafletMap);
}