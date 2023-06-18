import port1 from '../Images/PImages/port1.jpg';
import port2 from '../Images/PImages/port2.jpg';
import port3 from '../Images/PImages/port3.webp';
import port4 from '../Images/PImages/port4.webp';
import port5 from '../Images/PImages/port5_2.png';
import port6 from '../Images/PImages/port6.png';
import port7 from '../Images/PImages/port7.jpg';

import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons";
import {faChrome} from "@fortawesome/free-brands-svg-icons";
const portfolios = [
    {
        id: 8,
        category: 'Software',
        link1: 'https://github.com/Bej9038/OmnitoneV2',
        icon1: faGithub,
        description: "In recent years, there's been a ton of research on audio generation and " +
            "compression using deep learning. After coming across Google's MusicLM project, I was inspired to try and " +
            "create my own audio generating model but for a slightly different task. My goal with this project is to " +
            "create the first text to sample synthesizer meant for music creation. The difference between this ",
        title: 'SynthLM'
    },
    {
        id: 6,
        category: 'Software',
        link1: 'https://github.com/Bej9038/OmnitoneV2',
        icon1: faGithub,
        // image: port2,
        title: 'DSLabs'
    },
    {
        id: 7,
        category: 'Software',
        link1: 'https://github.com/Bej9038/OmnitoneV2',
        icon1: faGithub,
        // image: port2,
        title: 'Graph Neural Network Research Project'
    },
    {
        id: 1,
        category: 'Software',
        link1: 'http://auditoryneuro.com/Implant%20Testing%20Program/Signin/Signin.html',
        link2: 'https://github.com/Bej9038/ImplantTestingProgram',
        icon1: faChrome,
        icon2: faGithub,
        // image: port1,
        title: 'Implant Testing Program'
    },
    {
        id: 9,
        category: 'Software',
        link1: 'https://github.com/Bej9038/OmnitoneV2',
        icon1: faGithub,
        // image: port2,
        title: 'Encrypted Messenger'
    },
    {
        id: 3,
        category: 'Other',
        link1: 'https://www.youtube.com/channel/UCqztrHyJRJKGxSo5_cpzWaA',
        link2: 'https://soundcloud.com/odysymusic',
        icon1: faYoutube,
        icon2: faSoundcloud,
        // image: port3,
        title: 'Electronic Music Project'
    },
    {
        id: 4,
        category: 'Software',
        link1: 'https://github.com/Bej9038/PortfolioWebsite',
        icon1: faGithub,
        // image: port4,
        title: 'Portfolio Website'
    },
    {
        id: 5,
        category: 'Software',
        link1: 'https://github.com/Bej9038/EQ',
        icon1: faGithub,
        // image: port5,
        title: 'EQ Audio Plugin'
    },
    {
        id: 2,
        category: 'Software',
        link1: 'https://github.com/Bej9038/OmnitoneV2',
        icon1: faGithub,
        // image: port2,
        title: 'Omnitone'
    },

]

export default portfolios;
