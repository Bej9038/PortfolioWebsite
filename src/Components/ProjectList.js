import dslabs1 from "../Images/dslabs1.PNG";
import dslabs2 from "../Images/dslabs2.png";
import SynthLM3 from '../Images/SynthLM3.PNG';
import SynthLM4 from '../Images/SynthLM4.PNG';
import SAE1 from "../Images/SAE1.PNG";
import SAE2 from "../Images/SAE2.PNG";
import SAE3 from "../Images/SAE3.PNG";
import SAE4 from "../Images/SAE4.PNG";
import ITP1 from "../Images/ITP1.PNG";
import ITP2 from "../Images/ITP2.PNG";
import ITP3 from "../Images/ITP3.PNG";
import ITP4 from "../Images/ITP4.PNG";
import GNN1 from "../Images/GNN1.PNG";

import descriptions from "./ProjectDescriptions"

import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons";
import {faChrome} from "@fortawesome/free-brands-svg-icons";
const portfolios = [
    {
        id: 8,
        category: ['2023'],
        // link1: 'https://github.com/Bej9038/OmnitoneV2',
        icon1: faGithub,
        descriptions: [descriptions.synthlm1, descriptions.synthlm2, descriptions.synthlm3],
        title: 'SynthLM',
        images: [SynthLM3, SynthLM4],
        imagecap: ["1. The structure of Google's MusicLM", "2. Some neat autoencoder audio compression"]
    },
    {
        id: 6,
        category: ['2023'],
        link1: 'https://github.com/Bej9038/OmnitoneV2',
        icon1: faGithub,
        descriptions: [descriptions.dslabs1, descriptions.dslabs2, descriptions.dslabs3, descriptions.dslabs4],
        images: [dslabs1, dslabs2],
        imagecap: ["1: The Part-Time Parliament", "2: The greatest moment of my life"],
        title: 'DSLabs - Sharded Key-Value Store'
    },
    {
        id: 9,
        category: ['2022'],
        link1: '',
        icon1: faGithub,
        descriptions: [descriptions.sae1, descriptions.sae2, descriptions.sae3, descriptions.sae4],
        images: [SAE4, SAE1, SAE2],
        imagecap: ["1: Part of the initial project specifications", "2: Welcome menu","3: Playing around with the controls"],
        title: 'Spatial Attributes Evaluation'
    },
    {
        id: 1,
        category: ['2020'],
        link1: 'http://auditoryneuro.com/Implant%20Testing%20Program/Signin/Signin.html',
        link2: 'https://github.com/Bej9038/ImplantTestingProgram',
        icon1: faChrome,
        icon2: faGithub,
        descriptions: [descriptions.ipt1, descriptions.ipt2, descriptions.ipt3],
        images: [ITP1, ITP3, ITP4, ITP2],
        imagecap: ["1: The main menu", "2: Inharmonicty training",
            "3: Setting the frequency ranges on the canvas's axes and creating the oscillators", "4: Speech to noise ratio selection"],
        title: 'Implant Testing Program'
    },
    {
        id: 7,
        category: ['2022'],
        link1: 'https://github.com/Bej9038/OmnitoneV2',
        icon1: faGithub,
        descriptions: [descriptions.gnn1, descriptions.gnn2],
        images: [GNN1],
        imagecap: ["1: The main menu"],
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
        category: ['2021'],
        link1: 'https://github.com/Bej9038/PortfolioWebsite',
        icon1: faGithub,
        descriptions: [descriptions.portfolio1],
        title: 'Portfolio Website'
    },
    {
        id: 5,
        category: ['2021'],
        link1: 'https://github.com/Bej9038/EQ',
        icon1: faGithub,
        descriptions: [descriptions.temp],
        // image: port5,
        title: 'EQ Audio Plugin'
    },
    {
        id: 2,
        category: ['2020'],
        link1: 'https://github.com/Bej9038/OmnitoneV2',
        icon1: faGithub,
        descriptions: [descriptions.temp],
        // image: port2,
        title: 'Omnitone'
    },
    // {
    //     id: 3,
    //     category: ['Other'],
    //     link1: 'https://www.youtube.com/channel/UCqztrHyJRJKGxSo5_cpzWaA',
    //     link2: 'https://soundcloud.com/odysymusic',
    //     icon1: faYoutube,
    //     icon2: faSoundcloud,
    //     descriptions: [descriptions.temp],
    //     // image: port3,
    //     title: 'Electronic Music Project'
    // },
]

export default portfolios;
