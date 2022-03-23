const content = [
    {
        name: 'Css-awards',
        paidOrFree: 'Free',
        type: 'Design',
        url: 'https://css-awards.com/',
        description: 'Awarded website designs to get inspiration from'
    },
    {
        name: 'Awwwards',
        paidOrFree: 'Free',
        type: 'Design',
        url: 'https://www.awwwards.com/',
        description: 'Awarded website designs to get inspiration from'
    },
    {
        name: 'Web.dev',
        paidOrFree: 'Free',
        type: 'Design',
        url: 'https://web.dev/',
        description: 'Design / development guide'
    },
    {
        name: 'Material',
        paidOrFree: 'Free',
        type: 'Design',
        url: 'https://material.io/',
        description: 'Design / development guide'
    },
    {
        name: 'Cssbattle',
        paidOrFree: 'Free',
        type: 'Code challenges / Interview prep',
        url: 'https://cssbattle.dev/',
        description: 'CSS code challenges'
    },
    {
        name: 'Devchallenges',
        paidOrFree: 'Free',
        type: 'Code challenges / Interview prep',
        url: 'https://devchallenges.io/',
        description: 'Full stack project challenges'
    },
    {
        name: 'Codewars',
        paidOrFree: 'Free',
        type: 'Code challenges / Interview prep',
        url: 'https://www.codewars.com/',
        description: 'Coding challenges'
    },
    {
        name: 'Hackerrank',
        paidOrFree: 'Free',
        type: 'Code challenges / Interview prep',
        url: 'https://www.hackerrank.com/',
        description: 'Coding challenges'
    },
    {
        name: 'Leetcode',
        paidOrFree: 'Free',
        type: 'Code challenges / Interview prep',
        url: 'https://www.leetcode.com/',
        description: 'Coding challenges'
    },
    {
        name: 'Algoexpert',
        paidOrFree: 'Paid',
        type: 'Code challenges / Interview prep',
        url: 'https://www.algoexpert.io/product',
        description: 'Coding challenges'
    },
    {
        name: 'Algo.monster',
        paidOrFree: 'Paid',
        type: 'Code challenges / Interview prep',
        url: 'https://algo.monster/',
        description: 'Coding challenges'
    },
    {
        name: 'Codepen',
        paidOrFree: 'Free',
        type: 'Code playground',
        url: 'https://codepen.io/',
        description: 'Code playground'
    },
    {
        name: 'Jsfiddle',
        paidOrFree: 'Free',
        type: 'Code playground',
        url: 'https://jsfiddle.net/',
        description: 'Code playground'
    },
    {
        name: 'Cssgradient',
        paidOrFree: 'Free',
        type: 'Tools',
        url: 'https://cssgradient.io/',
        description: 'CSS gradient generator'
    },
    {
        name: 'Tinypng',
        paidOrFree: 'Free',
        type: 'Tools',
        url: 'https://tinypng.com/',
        description: 'Image compressor'
    },
    {
        name: 'Pixlr',
        paidOrFree: 'Free',
        type: 'Tools',
        url: 'https://pixlr.com/',
        description: 'Image editor'
    },
    {
        name: 'Colorhunt',
        paidOrFree: 'Free',
        type: 'Tools',
        url: 'https://colorhunt.co/',
        description: 'Colors explorer'
    },
    {
        name: 'Coolors',
        paidOrFree: 'Free',
        type: 'Tools',
        url: 'https://coolors.co/',
        description: 'Colors explorer'
    },
    {
        name: 'Fontpair',
        paidOrFree: 'Free',
        type: 'Tools',
        url: 'https://fontpair.co/',
        description: 'Fonts explorer'
    },
    {
        name: 'Google fonts',
        paidOrFree: 'Free',
        type: 'Tools',
        url: 'https://fonts.google.com/',
        description: 'Fonts explorer'
    },
    {
        name: 'W3 validator',
        paidOrFree: 'Free',
        type: 'Tools',
        url: 'https://validator.w3.org/',
        description: 'Web markup validator'
    },
    {
        name: 'Brandmark',
        paidOrFree: 'Free / Paid',
        type: 'Tools',
        url: 'https://brandmark.io/',
        description: 'Logo generator'
    },
    {
        name: 'Namelix',
        paidOrFree: 'Free',
        type: 'Tools',
        url: 'https://namelix.com/',
        description: 'Name generator'
    },
    {
        name: 'Getwaves',
        paidOrFree: 'Free',
        type: 'Tools',
        url: 'https://getwaves.io/',
        description: 'SVG waves generator'
    },
    {
        name: 'Svgwave',
        paidOrFree: 'Free',
        type: 'Tools',
        url: 'https://www.svgwave.in/',
        description: 'SVG waves generator'
    },
    {
        name: 'Blobmaker',
        paidOrFree: 'Free',
        type: 'Tools',
        url: 'https://www.blobmaker.app/',
        description: 'SVG blobs generator'
    },
    {
        name: 'Shapedivider',
        paidOrFree: 'Free',
        type: 'Tools',
        url: 'https://www.shapedivider.app/',
        description: 'SVG dividers generator'
    },
    {
        name: 'Loading.io',
        paidOrFree: 'Free',
        type: 'Resources',
        url: 'https://loading.io/',
        description: 'Loading animations library'
    },
    {
        name: 'Iconify',
        paidOrFree: 'Free',
        type: 'Resources',
        url: 'https://iconify.design/',
        description: 'Free icons'
    },
    {
        name: 'Flaticon',
        paidOrFree: 'Free',
        type: 'Resources',
        url: 'https://www.flaticon.es/',
        description: 'Free icons'
    },
    {
        name: 'Freeillustrations',
        paidOrFree: 'Free',
        type: 'Resources',
        url: 'https://freeillustrations.xyz/',
        description: 'Free illustrations'
    },
    {
        name: 'Graphicburger',
        paidOrFree: 'Free',
        type: 'Resources',
        url: 'https://graphicburger.com/',
        description: 'Free illustrations'
    },
    {
        name: 'Undraw',
        paidOrFree: 'Free',
        type: 'Resources',
        url: 'https://undraw.co/',
        description: 'Free illustrations'
    },
    {
        name: 'Pixabay',
        paidOrFree: 'Free',
        type: 'Resources',
        url: 'https://pixabay.com/',
        description: 'Free images'
    },
    {
        name: 'Unsplash',
        paidOrFree: 'Free',
        type: 'Resources',
        url: 'https://unsplash.com/',
        description: 'Free images'
    },
    {
        name: 'Wunderstock',
        paidOrFree: 'Free',
        type: 'Resources',
        url: 'https://wunderstock.com/',
        description: 'Free images'
    },
    {
        name: 'Freepik',
        paidOrFree: 'Free',
        type: 'Resources',
        url: 'https://www.freepik.es/',
        description: 'Free images'
    },
    {
        name: 'Pexels',
        paidOrFree: 'Free',
        type: 'Resources',
        url: 'https://www.pexels.com/',
        description: 'Free images'
    },
    {
        name: 'Css-tricks',
        paidOrFree: 'Free',
        type: 'Content publication',
        url: 'https://css-tricks.com/',
        description: 'Articles on CSS, JS and front-end development in general'
    },
    {
        name: 'Hacker News',
        paidOrFree: 'Free',
        type: 'Content publication',
        url: 'https://news.ycombinator.com/',
        description: 'Tech news'
    },
    {
        name: 'Product hunt',
        paidOrFree: 'Free',
        type: 'Content publication',
        url: 'https://www.producthunt.com/',
        description: 'Hot newly released tech products'
    },
    {
        name: 'Mozilla docs',
        paidOrFree: 'Free',
        type: 'Documentation',
        url: 'https://developer.mozilla.org/',
        description: 'Great documentation about pretty much anything on the internet'
    },
    {
        name: 'W3schools',
        paidOrFree: 'Free',
        type: 'Documentation',
        url: 'https://www.w3schools.com/',
        description: 'Documentation about many different topics'
    },
    {
        name: 'Eloquentjavascript',
        paidOrFree: 'Free',
        type: 'Books and publications',
        url: 'https://eloquentjavascript.net',
        description: 'JS book'
    },
    {
        name: 'Javascripttutorial',
        paidOrFree: 'Free',
        type: 'Books and publications',
        url: 'https://www.javascripttutorial.net/',
        description: 'Detailed tutorials about the features of javascript as a programming language'
    },
    {
        name: 'Freecodecamp',
        paidOrFree: 'Free',
        type: 'Learn to code',
        url: 'https://www.freecodecamp.org/',
        description: 'An amazing set of free online resources to learn to code'
    },
    {
        name: 'Sololearn',
        paidOrFree: 'Free',
        type: 'Learn to code',
        url: 'https://www.sololearn.com/',
        description: 'An app to learn to code in a game, duolingo like fashion'
    },
    {
        name: 'The Odin project',
        paidOrFree: 'Free',
        type: 'Learn to code',
        url: 'https://www.theodinproject.com/',
        description: 'A compilation of free online resources to learn to code'
    },
    {
        name: 'Mimo',
        paidOrFree: 'Paid',
        type: 'Learn to code',
        url: 'https://getmimo.com/',
        description: 'An app to learn to code in a game, duolingo like fashion'
    },
    {
        name: 'Platzi',
        paidOrFree: 'Paid',
        type: 'Learn to code',
        url: 'https://platzi.com/',
        description: 'Resources to learn to code (for spanish speakers)'
    },
    {
        name: 'Codecademy',
        paidOrFree: 'Free / Paid',
        type: 'Learn to code',
        url: 'https://www.codecademy.com/',
        description: 'Resources to learn to code'
    },
    {
        name: 'Datacamp',
        paidOrFree: 'Paid',
        type: 'Learn to code',
        url: 'https://www.datacamp.com/',
        description: 'Resources to learn to code (focused on data science)'
    },
    {
        name: 'Udemy',
        paidOrFree: 'Paid',
        type: 'Learn to code',
        url: 'https://www.udemy.com/',
        description: 'Quality async online courses about many different topics and at cheap cost'
    },
    {
        name: 'Egghead',
        paidOrFree: 'Paid',
        type: 'Learn to code',
        url: 'https://egghead.io/',
        description: 'Quality async online courses about many different topics'
    },
    {
        name: 'Kentcdodds',
        paidOrFree: 'Paid',
        type: 'Learn to code',
        url: 'https://kentcdodds.com/',
        description: 'Quality async online courses about many different topics and blog articles'
    },
    {
        name: 'WebDevSimplified',
        paidOrFree: 'Free',
        type: 'Youtube channel',
        url: 'https://www.youtube.com/c/WebDevSimplified',
        description: 'Tutorials about Javascript full stack development'
    },
    {
        name: 'TraversyMedia',
        paidOrFree: 'Free',
        type: 'Youtube channel',
        url: 'https://www.youtube.com/c/TraversyMedia',
        description: 'Tutorials about Javascript full stack development'
    },
    {
        name: 'TechWithTim',
        paidOrFree: 'Free',
        type: 'Youtube channel',
        url: 'https://www.youtube.com/c/TechWithTim',
        description: 'Tutorials about a wide array of development topics'
    },
    {
        name: 'Programmingwithmosh',
        paidOrFree: 'Free',
        type: 'Youtube channel',
        url: 'https://www.youtube.com/c/programmingwithmosh',
        description: 'Tutorials about a wide array of development topics'
    },
    {
        name: 'Fireship',
        paidOrFree: 'Free',
        type: 'Youtube channel',
        url: 'https://www.youtube.com/c/Fireship',
        description: 'Tutorials about a wide array of development topics'
    },
    {
        name: 'LukeSmithxyz',
        paidOrFree: 'Free',
        type: 'Youtube channel',
        url: 'https://www.youtube.com/c/LukeSmithxyz',
        description: 'Nice tutorials and tips about Linux, Bash and terminal work in general'
    },
    {
        name: 'ZachGollwitzer',
        paidOrFree: 'Free',
        type: 'Youtube channel',
        url: 'https://www.youtube.com/c/ZachGollwitzer',
        description: 'Very nice, deep and clear tutorials about a wide array of development topics'
    },
    {
        name: 'Clément Mihailescu ',
        paidOrFree: 'Free',
        type: 'Youtube channel',
        url: 'https://www.youtube.com/channel/UCaO6VoaYJv4kS-TQO_M-N_g',
        description: 'Good for mock technical interviews'
    }
]

export default content