sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'empui/test/integration/FirstJourney',
		'empui/test/integration/pages/EmpDataList',
		'empui/test/integration/pages/EmpDataObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmpDataList, EmpDataObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('empui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmpDataList: EmpDataList,
					onTheEmpDataObjectPage: EmpDataObjectPage
                }
            },
            opaJourney.run
        );
    }
);