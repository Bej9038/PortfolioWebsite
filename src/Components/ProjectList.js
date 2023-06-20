import port1 from '../Images/PImages/port1.jpg';
import port2 from '../Images/PImages/port2.jpg';
import port3 from '../Images/PImages/port3.webp';
import port4 from '../Images/PImages/port4.webp';
import port5 from '../Images/PImages/port5_2.png';
import port6 from '../Images/PImages/port6.png';
import port7 from '../Images/PImages/port7.jpg';
import dslabs1 from "../Images/dslabs1.PNG";
import dslabs2 from "../Images/dslabs2.png";
import SynthLM3 from '../Images/SynthLM3.PNG';
import SynthLM4 from '../Images/SynthLM4.PNG';
import descriptions from "./ProjectDescriptions"

import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons";
import {faChrome} from "@fortawesome/free-brands-svg-icons";
const portfolios = [
    {
        id: 8,
        category: 'Software',
        // link1: 'https://github.com/Bej9038/OmnitoneV2',
        icon1: faGithub,
        descriptions: [descriptions.synthlm1, descriptions.synthlm2, descriptions.synthlm3],
        title: 'SynthLM',
        images: [SynthLM3, SynthLM4],
        imagecap: ["Figure 1: The structure of Google's MusicLM", "Figure 2: Some neat auto-encoder audio compression"]
    },
    {
        id: 6,
        category: 'Software',
        link1: 'https://github.com/Bej9038/OmnitoneV2',
        icon1: faGithub,
        descriptions: [descriptions.dslabs1, descriptions.dslabs2, descriptions.dslabs3],
        images: [dslabs1, dslabs2],
        imagecap: ["Figure 1: The Part-Time Parliament", "Figure 2: Probably the greatest moment of my life"],
        title: 'DSLabs - Replicated & Sharded Key-Value Store'
    },
    {
        id: 9,
        category: 'Software',
        link1: '',
        icon1: faGithub,
        descriptions: [descriptions.temp],
        // image: port2,
        title: 'Spatial Audio Evaluation'
    },
    {
        id: 1,
        category: 'Software',
        link1: 'http://auditoryneuro.com/Implant%20Testing%20Program/Signin/Signin.html',
        link2: 'https://github.com/Bej9038/ImplantTestingProgram',
        icon1: faChrome,
        icon2: faGithub,
        descriptions: [descriptions.temp],
        // image: port1,
        title: 'Implant Testing Program'
    },
    {
        id: 7,
        category: 'Software',
        link1: 'https://github.com/Bej9038/OmnitoneV2',
        icon1: faGithub,
        descriptions: [descriptions.temp],
        // image: port2,
        title: 'Graph Neural Network Research Project'
    },
    // {
    //     id: 9,
    //     category: 'Software',
    //     link1: 'https://github.com/Bej9038/OmnitoneV2',
    //     icon1: faGithub,
    //     // image: port2,
    //     title: 'Encrypted Messenger'
    // },
    {
        id: 4,
        category: 'Software',
        link1: 'https://github.com/Bej9038/PortfolioWebsite',
        icon1: faGithub,
        descriptions: [descriptions.portfolio1],
        title: 'Portfolio Website'
    },
    {
        id: 5,
        category: 'Software',
        link1: 'https://github.com/Bej9038/EQ',
        icon1: faGithub,
        descriptions: [descriptions.temp],
        // image: port5,
        title: 'EQ Audio Plugin'
    },
    {
        id: 2,
        category: 'Software',
        link1: 'https://github.com/Bej9038/OmnitoneV2',
        icon1: faGithub,
        descriptions: [descriptions.temp],
        // image: port2,
        title: 'Omnitone'
    },
    {
        id: 3,
        category: 'Other',
        link1: 'https://www.youtube.com/channel/UCqztrHyJRJKGxSo5_cpzWaA',
        link2: 'https://soundcloud.com/odysymusic',
        icon1: faYoutube,
        icon2: faSoundcloud,
        descriptions: [descriptions.temp],
        // image: port3,
        title: 'Electronic Music Project'
    },
]

export default portfolios;
