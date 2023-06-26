const descriptions =
    {
        synthlm1: "Over the past couple of years, there's been a good deal of research published related to audio generation and " +
            "compression using deep learning. After coming across Google's MusicLM, I was inspired to " +
            "create my own deep learning powered software synthesizer.",
        synthlm2: "My goal with this project is to create the first text-to-sample synthesizer meant for music production. " +
            "Rather than generating entire songs like MusicLM, my focus is on generating " +
            "short audio samples. For example, if someone were to enter the text \"metallic snare A#\", the synth should " +
            "be able to generate a single tuned snare sample. To me this task seems more feasible and more useful than creating whole songs. " +
            "There's already an abundance of labeled sample packs online that can be used " +
            "for personalized training, focusing on samples removes the need to learn long term structure, and audio samples are " +
            "more useful for musicians compared to entire songs.",
        synthlm3: "At the moment, I've been going through older papers that MusicLM builds on such as AudioLM, " +
            "SoundStream, and BERT. Meta also released their own audio generation model called " +
            "AudioCraft, which may be a promising option given that its open-source and would require less training than " +
            "MusicLM's multi-model, hierarchical structure. I'm hoping to get a usable model trained this summer " +
            "and am looking forward to seeing the results!",

        dslabs1: "DSLabs was a semester long project that I completed while taking Cornell's CS5414 " +
            "(Distributed Computing) with Lorenzo Alvisi. This class was easily one of the most challenging, rewarding, " +
            "and well designed courses I have ever taken. The project itself consisted of a framework that allows " +
            "students to create and test distributed systems, along with four major labs where we were tasked with " +
            "implementing a system similar in functionality to Google's Spanner.",
        dslabs2: "Lab 1 involved implementing an \"at-most-once\" key-value store (duplicate commands will only execute once), along" +
            " with a basic client and server. Lab2 consisted of adding primary-backup replication to" +
            " lab 1 using an all-knowing view service that decides on primary backup configurations. This allows for state replication and consistency, " +
            "but it also leaves us with a single point of failure. ",
        dslabs3: "Lab 3 fixes this problem using Paxos. Paxos " +
            "is an amazing algorithm that allows a group of servers to be fault tolerant as long as less than a majority fail. It " +
            "also guarantees that consensus can be reached during periods of synchrony. This part involved a bit too many hours " +
            "of grinding in order to debug the system, but I'm proud to say that we eventually passed all of the test cases.",
        dslabs4: "Lab 4 added on multi-key transactions and sharding. This allows the system to process operations " +
            "in parallel thus increasing performance proportional to the number of server groups. We also had to implement two" +
            " phase commit for agreement between server groups during transactions. On its own 2PC is susceptible to failures, " +
            "but when paired with paxos provides agreement without major availability issues.",

        sae1: "After working as an intern for Professor Sungyoung Kim at RIT for a year in 2020, I was rehired as a part-" +
            "time developer during my last semester of undergrad. During this semester, my task was to write a program " +
            "that would allow Dr. Kim to collect data on how listeners interpret the spatial characteristics of audio. " +
            "This was quite an enjoyable project because I was given a general overview of what to build, but every " +
            "aspect of design and implementation was left up to me.",
        sae2: "The main feature of this program is an interactive 3D visual that is supposed to represent audio and its spacial " +
            "characteristics. Users hear a series of songs, and then adjust a set of four attribute sliders " +
            "(width, depth, immersion, and clarity) to morph the 3D visual until it best describes each song.",
        sae3: "Given that this project was a website, I decided to use Angular to get some more " +
            "experience with it. I really like Angular + Typescript because of the OOP style, and because it helps me keep my " +
            "projects organized. As for the 3D visual, I used a library called three.js. This was " +
            "easily the most challenging part of the project since it was my first time doing anything related to " +
            "graphics, but I learned a lot! I created a custom shader that morphed based on the music's volume and the attribute slider values. ",
        sae4: "For the overall design of the software, I added my basic components such as the attribute sliders, " +
            "a view component to hold the three.js canvas, a singular audio service that controlled everything sound related " +
            "and could injected into any component, and a singular session values service, that was used to maintain " +
            "important values during each instance of the program (such as the current round number for example). " +
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

        gnn1:"For the final project in my ML course at RIT, we were tasked with researching a deep learning " +
            "architecture that we didn't cover in class, proposing an experiment, and then putting together a " +
            "final paper and presentation to describe our findings. After doing some searching online, I found an architecture " +
            "known as graph neural networks and decided to experiment with the GraphSAGE architecture specifically.",
        gnn2:"GraphSAGE operates by randomly sampling a nodes neighbors, and then combining those neighbor embeddings " +
            "with an aggregation function to represent the context of the original node. One way you can think of this " +
            "is as a generalization of convolution for graph data, which is the basic principle behind GNN architectures. " +
            "Implementations",
        gnn3:"For the experiment, I proposed that if we methodically select which type of aggregation function " +
            "is used for a given layer, then we would will get better results than by simply using a single type of " +
            "aggregation for all layers. For the code used to test this theory out, I used the Cora dataset (the mnist for GNNs) " +
            "along with a PyTorch implementation of GraphSAGE. I implemented max and mean aggregation functions on top " +
            "of the already implemented repository.",
        gnn4: "The results showed that the proposed combination of aggregation layers did in fact result in an " +
            "increase in F1 score, although this experiment was at such a small scale that testing on a larger " +
                "dataset and model would need to be done to make any conclusions. This turned out to be a great topic because I was in the process of finishing up one of my favorite math classes, " +
                "graph theory, so graphs concepts were fresh in my mind. It was also cool to study GNNs " +
                "given that they aren't discussed as much as other modalities of deep learning.",
        eq1: "As an avid user of music production software, I always wondered how these tools were created " +
            "and how digital audio processing worked. I also wanted to brush up on my C++ skills. Therefore, " +
            "to kill two birds with one stone I decided to dive in and make an EQ (a commonly used audio effect) myself.",
        eq2: "At first, I looked into writing VST3s (the format of an audio plugin) myself. However, it became " +
            "apparent that this wasn't a simple feat for someone starting out. I ended up using an excellent C++ " +
            "framework called JUCE that had libraries for both audio processing and UI elements.",
        eq3: "My final EQ consisted of 2 notch filters for middle frequencies, a low pass filter to cut high frequencies, " +
            "and a high pass filter to cut low frequencies. The inner workings of the program involved routing input " +
            "audio through the four filters, and connecting the knobs on the UI I created to the filter parameters. " +
            "I also ended up editing the code/math for one of the built in JUCE library filters in order to allow the user " +
            "to select different filter slope values.",
        eq4: "Although not the worlds flashiest audio plugin, I am very happen I got everything working inside " +
            "my own music production software. Now that I have more experience behind my belt, I can tackle more " +
            "interesting ideas that I have.",

        omni1: "While working on the cochlear implant testing software during my internship " +
            "with Professor Kim, in my off time from working on that program, I was also given " +
            "the task of fleshing out another VR/AR idea that the professor had.",
        omni2: "This program was designed to take in a dry audio sample, and play the audio back is if it was " +
            "in one of two rooms from any perspective in the room. The final result ended up working surprisingly well." +
            "The way it was done was by recording room impulses, which are essentially loud reverb tails, inside a room " +
            "using an ambisonic microphone. Then I created a program that took those files as input, and combined " +
            "them in such a way (the equation for this was given to me by the professor) such that they create a new 4 channel" +
            "spatial audio format.",
        omni3: "These ambisonic B format audio files were then converted to stereo by a library called Omnitone. " +
            "In the final program, users can rotate their position in the room using the VR viewer. Users " +
            "can also select different sound source and listener positions, and mic setups using the controls " +
            "on the bottom.",


        portfolio1: "This Website! During quarantine I wanted to give React a try, so I started with a tutorial I found online and " +
            "made some changes to it. I recently did a re-design as well. I haven't done a ton of web dev since it was " +
            "never a part of my coursework, but I've always found designing and styling websites to be pretty enjoyable.",
        portfolio2: "If you're interested, you can check out the code on my GitHub.",

        temp: "Content coming soon..."


    };
export default descriptions