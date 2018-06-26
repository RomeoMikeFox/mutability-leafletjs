function registerProcedures() {
	ProcDB.length = 0;
	registerStar();
	registerSid();
}

function registerStar() {
	
	//STAR
	var localDb = [
	
		// LUSAR - LIRKO
		{
			path: [
				PointDB["LUSAR"].position,
				PointDB["SAUNI"].position,
				PointDB["LIRKO"].position
			],
			runway: 99,
			type: "star"
		},
		
		// DJL - LIRKO
		{
			path: [
				PointDB["DJL"].position,
				PointDB["GG517"].position,
				PointDB["LIRKO"].position
			],
			runway: 99,
			type: "star"
		},
		
		// AKITO - LIRKO
		{
			path: [
				PointDB["AKITO"].position,
				PointDB["GG518"].position,
				PointDB["BOLGI"].position,
				PointDB["LIRKO"].position
			],
			runway: 99,
			type: "star"
		},
		
		// LIRKO - SOVAD
		{
			path: [
				PointDB["LIRKO"].position,
				PointDB["DINIG"].position,
				PointDB["SOVAD"].position
			],
			runway: 99,
			type: "star"
		},
		
		// BELUS - CBY
		{
			path: [
				PointDB["BELUS"].position,
				PointDB["RILTI"].position,
				PointDB["CBY"].position
			],
			runway: 99,
			type: "star"
		},
		
		// KINES - GOLEB
		{
			path: [
				PointDB["KINES"].position,
				PointDB["GG519"].position,
				PointDB["ROCCA"].position,
				PointDB["GOLEB"].position
			],
			runway: 99,
			type: "star"
		},
		
		// BANKO - GOLEB
		{
			path: [
				PointDB["BANKO"].position,
				PointDB["GG520"].position,
				PointDB["GOLEB"].position
			],
			runway: 99,
			type: "star"
		},
		
		// GOLEB - BIVLO
		{
			path: [
				PointDB["GOLEB"].position,
				PointDB["VALBU"].position,
				PointDB["SUVEL"].position,
				PointDB["BIVLO"].position
			],
			runway: 99,
			type: "star"
		},
		
		// BENOT - VADAR
		{
			path: [
				PointDB["BENOT"].position,
				PointDB["NEMOS"].position,
				PointDB["VADAR"].position
			],
			runway: 99,
			type: "star"
		},
		
		// ULMES - VADAR
		{
			path: [
				PointDB["ULMES"].position,
				PointDB["ESEVA"].position,
				PointDB["VADAR"].position
			],
			runway: 99,
			type: "star"
		},
		
		// NEMOS - VEROX - SPR
		{
			path: [
				PointDB["NEMOS"].position,
				PointDB["VEROX"].position,
				PointDB["SPR"].position
			],
			runway: 23,
			type: "star"
		},
		
		// VADAR - SPR
		{
			path: [
				PointDB["VADAR"].position,
				PointDB["SPR"].position
			],
			runway: 23,
			type: "star"
		},
		
		// NEMOS - GG514
		{
			path: [
				PointDB["NEMOS"].position,
				PointDB["GG514"].position
			],
			runway: 05,
			type: "star"
		},
		
		// VADAR - GG514
		{
			path: [
				PointDB["VADAR"].position,
				PointDB["GG514"].position
			],
			runway: 05,
			type: "star"
		},
		
		// VADAR - GG512
		{
			path: [
				PointDB["VADAR"].position,
				PointDB["GG512"].position
			],
			runway: 05,
			type: "star"
		},
		
		// CBY - GG502
		{
			path: [
				PointDB["CBY"].position,
				PointDB["GG502"].position
			],
			runway: 23,
			type: "star"
		},
		
		// CBY - INDIS
		{
			path: [
				PointDB["CBY"].position,
				PointDB["INDIS"].position
			],
			runway: 05,
			type: "star"
		},
	];
	
	var tempProc;
	for (var i = 0; i < localDb.length; ++i) {
		tempProc = localDb[i];
		ProcDB.push(tempProc);
	}
}

function registerSid() {
	
	//STAR
	var localDb = [
	
		// ESAPI - MEDAM
		{
			path: [
				PointDB["ESAPI"].position,
				PointDB["VANAS"].position,
				PointDB["MEDAM"].position
			],
			runway: 99,
			type: "sid"
		},
		
		// ODIKI - ROCCA
		{
			path: [
				PointDB["ODIKI"].position,
				PointDB["ROCCA"].position
			],
			runway: 99,
			type: "sid"
		},
		
		// GG605 - ODIKI
		{
			path: [
				PointDB["GG605"].position,
				PointDB["ODIKI"].position
			],
			runway: 05,
			type: "sid"
		},
		
		// GG604 - ESAPI
		{
			path: [
				PointDB["GG604"].position,
				PointDB["ESAPI"].position
			],
			runway: 05,
			type: "sid"
		},
		
		// PAS R131D6 - ODIKI
		{
			path: [
				{lat: 46.095695, lng: 6.105933},
				PointDB["ODIKI"].position
			],
			runway: 23,
			type: "sid"
		},
		
		// PAS R141D6 - ESAPI
		{
			path: [
				{lat: 46.083121, lng: 6.085777},
				PointDB["ESAPI"].position
			],
			runway: 23,
			type: "sid"
		},
		
		// PAS R181D8 - RUMIL - BALSI
		{
			path: [
				{lat: 46.030421, lng: 5.991704},
				PointDB["RUMIL"].position,
				PointDB["BEVEN"].position,
				PointDB["BALSI"].position
			],
			runway: 99,
			type: "sid"
		},
		
		// PAS R235D6 - DEPUL - LSE
		{
			path: [
				{lat: 46.106901, lng: 5.881401},
				PointDB["ARGIS"].position,
				PointDB["DEPUL"].position,
				PointDB["LSE"].position
			],
			runway: 99,
			type: "sid"
		},
		
		// CBY - BELUS
		{
			path: [
				PointDB["CBY"].position,
				PointDB["BELUS"].position
			],
			runway: 99,
			type: "sid"
		},
		
		// R049CBY - CBY
		{
			path: [
				PointDB["SALEV"].position,
				PointDB["CBY"].position
			],
			runway: 05,
			type: "sid"
		},
		
		// PAS R210D6 - CBY
		{
			path: [
				{lat: 46.077877, lng: 5.925712},
				PointDB["CBY"].position
			],
			runway: 23,
			type: "sid"
		},
		
		// DIPIR 5A
		{
			path: [
				{lat: 46.295404, lng: 5.894789},
				PointDB["KELUK"].position,
				PointDB["DIPIR"].position
			],
			runway: 23,
			type: "sid"
		},
		
		// GG603 - KONIL - SOSAL
		{
			path: [
				PointDB["GG603"].position,
				PointDB["DEREM"].position,
				PointDB["GLA"].position,
				PointDB["KONIL"].position,
				PointDB["SOSAL"].position
			],
			runway: 23,
			type: "sid"
		},
		
		// GG602 - MOLUS - SOSAL
		{
			path: [
				PointDB["GG602"].position,
				PointDB["TINAM"].position,
				PointDB["MOLUS"].position,
				PointDB["SOSAL"].position
			],
			runway: 23,
			type: "sid"
		},
		
		// PETAL - MOLUS - SOSAL
		{
			path: [
				PointDB["PETAL"].position,
				PointDB["MOLUS"].position,
				PointDB["SOSAL"].position
			],
			runway: 05,
			type: "sid"
		},
		
		// DJL R129 - SIROD
		{
			path: [
				{lat: 46.556755, lng: 6.302499},
				PointDB["KOVIM"].position,
				PointDB["SIROD"].position
			],
			runway: 05,
			type: "sid"
		},
		
		// SPR R330 - ARBOS
		{
			path: [
				{lat: 46.589486, lng: 6.350132},
				PointDB["LEGVO"].position,
				PointDB["ARBOS"].position
			],
			runway: 05,
			type: "sid"
		},
	];
	
	var tempProc;
	for (var i = 0; i < localDb.length; ++i) {
		tempProc = localDb[i];
		ProcDB.push(tempProc);
	}
}