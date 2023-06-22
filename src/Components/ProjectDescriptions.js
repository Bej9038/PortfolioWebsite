const descriptions =
    {
        synthlm1: "Over the past couple of years, there's been a decent amount of research published related to audio generation and " +
            "compression using deep learning. After coming across Google's MusicLM, I was inspired to " +
            "create my own deep learning powered software synthesizer.",
        synthlm2: "My goal with this project is to create the first text-to-sample synthesizer meant for music production. " +
            "Rather than generating entire songs like MusicLM and similar projects, my focus is on generating " +
            "short audio samples. For example, if someone was to enter the text \"metallic snare A#\", the synth should " +
            "be able to generate a tuned snare sample. To me this task seems more feasible and more useful than creating whole songs. " +
            "There is already an abundance of labeled sample packs online that can be used " +
            "for customizable training, generating samples removes the need to learn long term structure, and audio samples are much " +
            "more useful for musicians compared to entire songs.",
        synthlm3: "At the moment, I've been going through older papers that MusicLM builds on such as AudioLM, " +
            "SoundStream, and BERT. Recently, Meta also released their own audio generation model called " +
            "AudioCraft, which may be a promising option given that its open-source and would require less training than " +
            "MusicLM's multi-model, hierarchical structure. I'm hoping to get a somewhat usable model trained this summer " +
            "and am looking forward to seeing the results!",

        dslabs1: "DSLabs was a semester long project that I completed while taking Cornell's CS5414 " +
            "(Distributed Computing) with Lorenzo Alvisi. This class was easily one of the most challenging, rewarding, " +
            "and well put together courses I have ever taken. The project itself consisted of a framework that allows " +
            "students to create, test, and debug distributed systems, and four major labs where we were tasked with " +
            "implementing and checking distributed systems similar in functionality to Google's Spanner.",
        dslabs2: "Lab 1 involved implementing an \"at-most-once\" key-value store (duplicate commands will only execute once), along" +
            " with a basic client and server. Lab2 consisted of adding primary-backup replication to" +
            " lab 1 using an all knowing view service that decides on primary backup configurations. This allows for state replication and therefore consistency, " +
            "but it also leaves us with a single point of failure. ",
        dslabs3: "Lab 3 fixes this issue using Paxos. Paxos " +
            "is an amazing algorithm that allows a group of servers to be fault tolerant as long as f <= (n-1)/2. It " +
            "also guarantees that consensus can be reached during periods of synchrony. This part involved a bit too many hours " +
            "of grinding in order to debug the system, but I'm proud to say that we eventually passed all of the test cases.",
        dslabs4: "Lab 4 added on multi-key transactions and sharding. This allows the system to process operations " +
            "in parallel thus increasing performance proportional to the number of server groups. We also had to implement two" +
            " phase commit for agreement between server groups during transactions. On its own 2PC is susceptible to failures, " +
            "but when paired with paxos provides agreement without major availability issues.",

        sae1: "After working for Professor Sungyoung Kim at RIT for over a year starting in 2020, I was rehired as a part-" +
            "time developer during my last semester of undergrad. During this semester, my task was to write a program " +
            "that would allow Dr. Kim to collect data on how listeners interpret the spatial characteristics of audio. " +
            "This was quite an enjoyable project because I was given a general overview of what to build, but every " +
            "aspect of design and implementation was left up to me.",
        sae2: "The main feature of this program was an interactive 3D visual that is supposed to represent audio and its spacial " +
            "characteristics. Users will hear a series of songs, and then adjust a set of four attribute sliders " +
            "(width, depth, immersion, and clarity) to morph the 3D visual until it best describes each song. " +
            "Users can also use their mouse to adjust the camera's perspective of the 3D visual.",
        sae3: "Given that this project was supposed to be a website, I decided to use Angular just to get some more " +
            "experience with it. I really like Angular + Typescript because of the OOP style, and because it helps me keep my " +
            "projects organized. As for the 3D visual, I used a well-known library called three.js. This was " +
            "easily the most challenging part of the project since it was my first time doing anything related to " +
            "computer graphics, but I learned a lot! I created a custom shader in order to have an " +
            "animation that changed based on the music's volume and the attribute sliders. ",
        sae4: "For the overall structure of the software, I added my basic components such as the attribute sliders, " +
            "a view component to hold the three.js canvas, a singular audio service that controlled everything sound related " +
            "and could injected into any component, and a singular session values service, that was used to maintain " +
            "important values during a instance of the program (such as the current round number, whether light or dark mode is on). " +
            "This service was injected into the slider components and the view component, so both the sliders and the 3D graphic could " +
            "have realtime access to the values of the attribute sliders.",

        ipt1: "This project was created during my internship in 2020 with Professor Sungyoung Kim. In collaboration with a team from University of Iowa, " +
            "we were attempting to evaluate the effectiveness of hearing devices called hybrid cochlear implants. " +
            "The team was also interested in people's ability to understand speech depending on background noise level. " +
            "In short, I was given the task of independently creating a website that would allow the researchers to test participants hearing abilities " +
            "and collect data. This ended up being a great project because it was the largest project I had ever" +
            " worked on, I got to learn about web development, and the team successfully published research using the data" +
            " collected from trials done with the software. Its a good feeling when the software you make is used for something important.",
        ipt2:"The website contains 5 unique testing modules. The Inharmonicity Training and Speech-In-Noise tests have " +
            "2 and 3 difficulty levels respectively. All tests heavily use the Javascript Web Audio API to generate " +
            "and process sound at various frequencies and levels. The website is connected to a backend SQL database to " +
            "store data for each user.",
        ipt3:"The main focus of the program was the Inharmonicity Training. In this module, users are presented with a " +
            "box that produces a tone as their mouse hovers over it. The tone changes depending on the location of the" +
            " mouse within the box. This tone consists of a group of low frequency oscillators and a group of " +
            "high frequency oscillators set at precise frequency ratios. The goal is for the user to move their mouse " +
            "inside the box until the tone sounds most \"harmonic\". After selecting a point, a gradient appears on the " +
            "box that shows the user how correct their guess was. This is calculated based on the randomized frequency " +
            "ranges of the box set before each trial.",

        portfolio1: "This Website! During quarantine I wanted to give React a try, so I started with a tutorial I found online and " +
            "made some changes to it. I recently did a re-design as well. I haven't done a ton of web dev since it was " +
            "never a part of my coursework, but I've always found designing and styling websites to be pretty enjoyable.",
        portfolio2: "If you're interested, you can check out the code on my GitHub.",

        temp: "Content coming soon..."


    };
export default descriptions
