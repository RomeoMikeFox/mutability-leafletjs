function registerNavaidsFixes() {
	// ------------------------------------------------
	//           NAVAID/FIXES DEFINITION
	// ------------------------------------------------

	var localDb = [
		// Fixes
		
		{
			position: {lat: 46.024444, lng: 5.797000},
			type: "fix",
			title: 'INDIS',
			runway: 05
		},

		{
			position: {lat: 46.061231, lng: 5.850456},
			type: "fix",
			title: 'BELKA',
			runway: 05
		},

		{
			position: {lat: 46.368083, lng: 6.300278},
			type: "fix",
			title: 'PETAL',
			runway: 99
		},

		{
			position: {lat: 46.668889, lng: 5.179444},
			type: "fix",
			title: 'LUSAR',
			runway: 99
		},

		{
			position: {lat: 46.623611, lng: 5.477778},
			type: "fix",
			title: 'SAUNI',
			runway: 99
		},

		{
			position: {lat: 46.570944, lng: 5.814306},
			type: "fix",
			title: 'LIRKO',
			runway: 99
		},

		{
			position: {lat: 46.495278, lng: 5.890556},
			type: "fix",
			title: 'DINIG',
			runway: 99
		},

		{
			position: {lat: 46.337472, lng: 6.048444},
			type: "fix",
			title: 'SOVAD',
			runway: 99
		},

		{
			position: {lat: 47.213333, lng: 6.648750},
			type: "fix",
			title: 'AKITO',
			runway: 99
		},

		{
			position: {lat: 46.667778, lng: 5.938333},
			type: "fix",
			title: 'BOLGI',
			runway: 99
		},

		{
			position: {lat: 45.675278, lng: 5.593889},
			type: "fix",
			title: 'BELUS',
			runway: 99
		},

		{
			position: {lat: 45.758361, lng: 5.659417},
			type: "fix",
			title: 'RILTI',
			runway: 99
		},

		{
			position: {lat: 45.331389, lng: 6.755278},
			type: "fix",
			title: 'KINES',
			runway: 99
		},

		{
			position: {lat: 45.745278, lng: 6.645556},
			type: "fix",
			title: 'ROCCA',
			runway: 99
		},

		{
			position: {lat: 46.051667, lng: 6.562500},
			type: "fix",
			title: 'GOLEB',
			runway: 99
		},

		{
			position: {lat: 46.086111, lng: 6.489722},
			type: "fix",
			title: 'VALBU',
			runway: 99
		},

		{
			position: {lat: 46.151389, lng: 6.351111},
			type: "fix",
			title: 'SUVEL',
			runway: 99
		},

		{
			position: {lat: 46.197222, lng: 6.253889},
			type: "fix",
			title: 'BIVLO',
			runway: 99
		},

		{
			position: {lat: 45.820000, lng: 7.054722},
			type: "fix",
			title: 'BANKO',
			runway: 99
		},
		
		{
			position: {lat: 47.057694, lng: 7.172806},
			type: "fix",
			title: 'BENOT',
			runway: 99
		},
		
		{
			position: {lat: 46.911944, lng: 6.906556},
			type: "fix",
			title: 'NEMOS',
			runway: 99
		},
		
		{
			position: {lat: 46.727500, lng: 6.573333},
			type: "fix",
			title: 'VEROX',
			runway: 23
		},
		
		{
			position: {lat: 46.955028, lng: 7.292639},
			type: "fix",
			title: 'ULMES',
			runway: 99
		},
		
		{
			position: {lat: 46.802111, lng: 7.014667},
			type: "fix",
			title: 'ESEVA',
			runway: 99
		},
		
		{
			position: {lat: 46.657222, lng: 6.753611},
			type: "fix",
			title: 'VADAR',
			runway: 99
		},
		
		{
			position: {lat: 45.890000, lng: 6.290278},
			type: "fix",
			title: 'ESAPI',
			runway: 99
		},
		
		{
			position: {lat: 45.457167, lng: 6.746861},
			type: "fix",
			title: 'VANAS',
			runway: 99
		},
		
		{
			position: {lat: 45.264444, lng: 6.940000},
			type: "fix",
			title: 'MEDAM',
			runway: 99
		},
		
		{
			position: {lat: 45.942222, lng: 6.343611},
			type: "fix",
			title: 'ODIKI',
			runway: 99
		},
		
		{
			position: {lat: 45.861944, lng: 5.981389},
			type: "fix",
			title: 'RUMIL',
			runway: 99
		},
		
		{
			position: {lat: 45.817139, lng: 5.980028},
			type: "fix",
			title: 'LINNA',
			runway: 05
		},
		
		{
			position: {lat: 45.688611, lng: 5.972778},
			type: "fix",
			title: 'BEVEN',
			runway: 99
		},
		
		{
			position: {lat: 45.477389, lng: 5.960750},
			type: "fix",
			title: 'BALSI',
			runway: 99
		},
		
		{
			position: {lat: 46.025000, lng: 5.711111},
			type: "fix",
			title: 'TOKDO',
			runway: 99
		},
		
		{
			position: {lat: 45.971111, lng: 5.599167},
			type: "fix",
			title: 'ARGIS',
			runway: 99
		},
		
		{
			position: {lat: 45.925000, lng: 5.494444},
			type: "fix",
			title: 'DEPUL',
			runway: 99
		},
		
		{
			position: {lat: 46.235306, lng: 5.899297},
			type: "fix",
			title: 'KERAD',
			runway: 05
		},
		
		{
			position: {lat: 46.094722, lng: 6.101944},
			type: "fix",
			title: 'PITOM',
			runway: 05
		},
		
		{
			position: {lat: 46.073889, lng: 6.065833},
			type: "fix",
			title: 'SALEV',
			runway: 99
		},
		
		{
			position: {lat: 45.985447, lng: 5.925958},
			type: "fix",
			title: 'PINOT',
			runway: 99
		},
		
		{
			position: {lat: 46.555556, lng: 5.685556},
			type: "fix",
			title: 'KELUK',
			runway: 23
		},
		
		{
			position: {lat: 46.669167, lng: 5.593056},
			type: "fix",
			title: 'DIPIR',
			runway: 23
		},
		
		{
			position: {lat: 46.360000, lng: 6.530556},
			type: "fix",
			title: 'TINAM',
			runway: 23
		},
		
		{
			position: {lat: 46.443889, lng: 6.679444},
			type: "fix",
			title: 'MOLUS',
			runway: 99
		},
		
		{
			position: {lat: 46.558056, lng: 6.884444},
			type: "fix",
			title: 'SOSAL',
			runway: 99
		},
		
		{
			position: {lat: 46.356639, lng: 6.176250},
			type: "fix",
			title: 'DEREM',
			runway: 23
		},
		
		{
			position: {lat: 46.568444, lng: 6.458361},
			type: "fix",
			title: 'KONIL',
			runway: 23
		},
		
		{
			position: {lat: 46.614611, lng: 6.206333},
			type: "fix",
			title: 'KOVIM',
			runway: 05
		},
		
		{
			position: {lat: 46.726944, lng: 6.019444},
			type: "fix",
			title: 'SIROD',
			runway: 05
		},
		
		{
			position: {lat: 46.667928, lng: 6.285567},
			type: "fix",
			title: 'LEGVO',
			runway: 05
		},
		
		{
			position: {lat: 46.984167, lng: 6.026389},
			type: "fix",
			title: 'ARBOS',
			runway: 05
		},

		{
			position: {lat: 46.302500, lng: 5.879722},
			type: "fix",
			title: 'MILPA',
			runway: 99
		},

		{
			position: {lat: 46.230028, lng: 5.576028},
			type: "fix",
			title: 'KUDUP',
			runway: 99
		},

		{
			position: {lat: 46.182556, lng: 5.379500},
			type: "fix",
			title: 'AMKEN',
			runway: 99
		},

		{
			position: {lat: 46.729444, lng: 6.528889},
			type: "fix",
			title: 'LORBU',
			runway: 99
		},

		{
			position: {lat: 46.908667, lng: 6.585028},
			type: "fix",
			title: 'FLORY',
			runway: 99
		},
		
		// Waypoints
		
		{
			position: {lat: 46.939667, lng: 5.439458},
			type: "wpt",
			title: 'GG517',
			runway: 99
		},
		
		{
			position: {lat: 46.907133, lng: 6.248978},
			type: "wpt",
			title: 'GG518',
			runway: 99
		},
		
		{
			position: {lat: 45.527356, lng: 6.702028},
			type: "wpt",
			title: 'GG519',
			runway: 99
		},
		
		{
			position: {lat: 45.956361, lng: 6.768267},
			type: "wpt",
			title: 'GG520',
			runway: 99
		},
		
		{
			position: {lat: 45.953825, lng: 5.899058},
			type: "wpt",
			title: 'GG502',
			runway: 99
		},
		
		{
			position: {lat: 46.095711, lng: 5.696886},
			type: "wpt",
			title: 'GG503',
			runway: 05
		},

		{
			position: {lat: 46.397153, lng: 6.549031},
			type: "wpt",
			title: 'GG512',
			runway: 99
		},

		{
			position: {lat: 46.540206, lng: 6.346911},
			type: "wpt",
			title: 'GG514',
			runway: 99
		},

		{
			position: {lat: 46.298203, lng: 6.402228},
			type: "wpt",
			title: 'GG525',
			runway: 23
		},

		{
			position: {lat: 46.440847, lng: 6.199875},
			type: "wpt",
			title: 'GG507',
			runway: 23
		},

		{
			position: {lat: 46.116328, lng: 6.067169},
			type: "wpt",
			title: 'GG602',
			runway: 23
		},

		{
			position: {lat: 46.268611, lng: 6.057778},
			type: "wpt",
			title: 'GG603',
			runway: 23
		},

		{
			position: {lat: 46.201864, lng: 6.308756},
			type: "wpt",
			title: 'GG604',
			runway: 05
		},

		{
			position: {lat: 45.975892, lng: 6.291633},
			type: "wpt",
			title: 'GG605',
			runway: 05
		},

		// Navaids
		
		{
			position: {lat: 46.253917, lng: 6.132222},
			type: "vordme",
			title: 'GVA',
			runway: 99
		},

		{
			position: {lat: 46.468694, lng: 6.448056},
			type: "vordme",
			title: 'SPR',
			runway: 99
		},

		{
			position: {lat: 46.163694, lng: 5.999917},
			type: "vordme",
			title: 'PAS',
			runway: 99
		},

		{
			position: {lat: 45.881889, lng: 5.757306},
			type: "vordme",
			title: 'CBY',
			runway: 99
		},

		{
			position: {lat: 46.777583, lng: 7.2235},
			type: "vordme",
			title: 'FRI',
			runway: 99
		},

		{
			position: {lat: 46.408694, lng: 6.24425},
			type: "ndb",
			title: 'GLA',
			runway: 23
		},

		{
			position: {lat: 45.744806, lng: 5.091444},
			type: "vordme",
			title: 'LSE',
			runway: 99
		},

		{
			position: {lat: 45.488972, lng: 5.439056},
			type: "vordme",
			title: 'LTP',
			runway: 99
		},

		{
			position: {lat: 47.270778, lng: 5.097333},
			type: "vordme",
			title: 'DJL',
			runway: 99
		},

		{
			position: {lat: 47.083667, lng: 6.793889},
			type: "ndb",
			title: 'LPS',
			runway: 99
		},

		{
			position: {lat: 45.861639, lng: 6.020333},
			type: "ndb",
			title: 'AT',
			runway: 99
		},

		{
			position: {lat: 46.215500, lng: 7.288778},
			type: "vordme",
			title: 'SIO',
			runway: 99
		},
		
		// Airports
		
		{
			position: {lat: 46.191944, lng: 6.268333},
			type: "apt",
			title: 'LFLI',
			qfu: 116,
			runway: 99,
		},

		{
			position: {lat: 46.545278, lng: 6.616667},
			type: "apt",
			title: 'LSGL',
			qfu: 002,
			runway: 99
		},

		{
			position: {lat: 46.406389, lng: 6.258056},
			type: "apt",
			title: 'LSGP',
			qfu: 041,
			runway: 99
		},

		{
			position: {lat: 45.639167, lng: 5.880000},
			type: "apt",
			title: 'LFLB',
			qfu: 355,
			runway: 99
		},

		{
			position: {lat: 45.930833, lng: 6.106389},
			type: "apt",
			title: 'LFLP',
			qfu: 037,
			runway: 99
		},

		{
			position: {lat: 45.725556, lng: 5.081111},
			type: "apt",
			title: 'LFLL',
			qfu: 354,
			runway: 99
		},

		{
			position: {lat: 46.278611, lng: 5.666389},
			type: "apt",
			title: 'LFLK',
			qfu: 036,
			runway: 99
		},

		{
			position: {lat: 45.560556, lng: 5.975833},
			type: "apt",
			title: 'LFLE',
			qfu: 143,
			runway: 99
		},

		{
			position: {lat: 45.363056, lng: 5.332778},
			type: "apt",
			title: 'LFLS',
			qfu: 089,
			runway: 99
		},

		{
			position: {lat: 46.219167, lng: 7.326944},
			type: "apt",
			title: 'LSGS',
			qfu: 072,
			runway: 99
		},
	];
	
	var tempPoint;
	for (var i = 0; i < localDb.length; ++i) {
		tempPoint = localDb[i];
		
		PointDB[tempPoint.title] = tempPoint;
	}
	
	// ------------------------------------------------
	//         END OF NAVAID/FIXES DEFINITION
	// ------------------------------------------------
}