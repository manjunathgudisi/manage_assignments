sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'manageassignments/test/integration/FirstJourney',
		'manageassignments/test/integration/pages/EngagementsList',
		'manageassignments/test/integration/pages/EngagementsObjectPage'
    ],
    function(JourneyRunner, opaJourney, EngagementsList, EngagementsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('manageassignments') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEngagementsList: EngagementsList,
					onTheEngagementsObjectPage: EngagementsObjectPage
                }
            },
            opaJourney.run
        );
    }
);