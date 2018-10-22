jQuery(document).ready(function () { 
	'use strict'; // use strict mode
	
 // instagram plugin
    var feed = new Instafeed({
        get: 'user',
        // Instagram user id you want to list images from
        userId: 1549781111,
        // Your client id registered in Instagram developer site
        clientId: '2e5a3f8cc1754723a81d216f3d302a69',
        limit: 4,
        target: 'instagram',
        resolution: 'standard_resolution',
        after: function () {
            var el = document.getElementById('instagram');
            if (el.classList)
                el.classList.add('show');
            else
                el.className += ' ' + 'show';
        }
    });
    feed.run();
});