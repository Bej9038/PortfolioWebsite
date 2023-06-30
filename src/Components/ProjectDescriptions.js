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

        sae1: "After working for Professor Sungyoung Kim at RIT in 2020, I was rehired as a part-" +
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

        ipt1: "This project was created during my internship in 2020 with Professor Sungyoung Kim. In collaboration with " +
            "a team from University of Iowa, " +
            "we attempted to evaluate the effectiveness of hearing devices called hybrid cochlear implants. " +
            "The team was also interested in people's ability to understand speech depending on background noise level. " +
            "I was given the task of independently creating a website that would allow the researchers to test participants hearing abilities " +
            "and collect data. This ended up being a great opportunity because it was the largest project I had ever" +
            " worked on, I got to learn about web development, and the team successfully published research using the data" +
            " collected with the software. It's a good feeling when the software you make is used for something important.",
        ipt2:"The website contains 5 unique testing modules. The Inharmonicity Training and Speech-In-Noise tests have " +
            "2 and 3 different modes respectively. All tests heavily rely on the Javascript Web Audio API to generate " +
            "and process sound at various frequencies and levels. The website is connected to a backend SQL database to " +
            "store data for each user.",
        ipt3:"The main focus of the program was the Inharmonicity Training. In this module, users are presented with a " +
            "box that produces a tone as their mouse hovers over it. The tone changes depending on the location of the" +
            " mouse within the box. This tone consists of a group of low frequency oscillators and a group of " +
            "high frequency oscillators set with precise frequency ratios. The goal is for the user to move their mouse " +
            "inside the box until the tone sounds most \"harmonic\". After selecting a point, a gradient appears on the " +
            "box that shows the user how correct their guess was. This gradient is calculated based on final mouse " +
            "position and the randomized frequency ranges of the box's x and y axes set before each trial.",
        ipt4: "As part of a separate research question, I also added a speech-in-noise test that played a series " +
            "of words alongside background noise. The user just has to guess which word was spoken.",

        gnn1:"For the final research project in my ML course at RIT, we were tasked with researching a deep learning " +
            "architecture that we didn't cover in class, proposing an experiment, and then putting together a " +
            "final paper and presentation. After doing some searching online, I found graph neural networks and " +
            "decided to experiment on the GraphSAGE architecture specifically.",
        gnn2:"GraphSAGE works by randomly sampling the neighbors of a node in a graph (nodes which are directly connected to another), " +
            "and combining those neighbors' embeddings using an aggregation function. One way you can think of this " +
            "is as a generalization of convolution for graph data, which is the basic principle behind most GNN architectures. " +
            "Its also similar to the idea of sentence embeddings in NLP.",
        gnn3:"For the experiment portion of the project, I proposed that if we methodically select which type of aggregation function " +
            "is used for a given layer, then we will get better results out of our model than by simply using a single " +
            "function for all layers (like all current GNN architectures do). This is because some aggregators," +
            " such as the mean aggregator, may be better at summarizing earlier layers of " +
            "embeddings than max aggregators for example. For the code used to test this theory out, " +
            "I used the CORA dataset (the MNIST for GNNs) along with a PyTorch implementation of GraphSAGE. " +
            "I implemented max and mean aggregation functions to go along with the GraphSAGE code I downloaded.",
        gnn4: "The results showed that the proposed combination of aggregation layers (mean in earlier layers, and max in later layers) " +
            "did in fact result in an increase in F1 score. However, this experiment was at such a small scale that testing on a larger " +
                "dataset and model would need to be done to make any conclusions.",
        gnn5: "Overall, this turned out to be a great choice for my project. " +
            "I was in the process of finishing up one of my favorite math classes, graph theory, " +
            "so graphs concepts were fresh in my mind. It was also cool to study GNNs given that they " +
            "aren't discussed nearly as much as other modalities of deep learning. Lastly, it was a good experience " +
            "to learn a little more about the research process, writing a proposal, and creating and analyzing an experiment." +
            " Although it was challenging doing such a project on a new subject in a little over a month, " +
            "I'm glad I went through it.",

        eq1: "As an avid user of music production software, I always wondered how the tools I was using were created " +
            "and how they worked. I also wanted to brush up on my C++ skills. Therefore, " +
            "to kill two birds with one stone I decided to dive in and make a parametric EQ (a common audio effect).",
        eq2: "At first, I looked into writing VST3s (the standard format of an audio plugin) from scratch. However, it became " +
            "apparent that this wasn't a simple feat for someone starting out. I ended up using an excellent C++ " +
            "framework called JUCE that has libraries for both audio processing and UI elements.",
        eq3: "My final EQ consisted of 2 notch filters for middle frequencies, a low pass filter to cut high frequencies, " +
            "and a high pass filter to cut low frequencies. Each filter has a small bypass button above it. " +
            "Writing the program involved routing audio input " +
            "through the four filters, and connecting the UI knobs to the filter parameters. " +
            "I also created a real-time frequency analyzer that sits behind a visualization of the EQ curve (the orange line). " +
            "Lastly, I edited the code/math for one of the built in JUCE filters to allow the user " +
            "to select different slope values for the high and low pass filters.",
        eq4: "Although not the worlds flashiest audio plugin, I am very satisfied that I got it working inside " +
            "my own music production software. Now that I have more experience behind my belt, I can hopefully tackle more " +
            "interesting ideas that I have.",

        omni1: "Alongside the implant testing software I created while working with Professor Kim, I was also given " +
            "the task of fleshing out another VR/AR project idea in my free time. This project was created " +
            "in an attempt to preserve the aural characteristics of historical buildings.",
        omni2: "The software is designed to take in a dry audio sample, and play the audio back is if it was " +
            "inside a room from any position in the room. The final result ended up working surprisingly well! " +
            "The way something like this is done is by recording room impulses, which are essentially isolated reverb " +
            "tails, inside a room using an ambisonic 4 channel microphone. Then you convolve the " +
            "source file with those impulse recordings, and combine the resulting 4 audio files in such a way such that they create " +
            "B format ambisonic files.",
        omni3: "These B format files can then be converted to stereo using a library called Omnitone. " +
            "In the program, users can rotate their position in the room using the VR viewer. Users " +
            "can also select different sound source and listening locations, and change which microphone is being used " +
            "with the controls on the bottom.",

        fv1: "This is a small program that came about as I was working on a project for my internship. I was looking " +
            "into how interpretable one could make deep CNNs, and I came across a Stanford YouTube lecture on " +
            "visualization for computer vision. One of the topics briefly discussed in the lecture was called gradient ascent, " +
            "and it was originally from the paper 'Understanding Neural Networks Through Deep Visualization'.",
        fv2: "A similar idea is known as saliency maps. Saliency maps are created by inputting an " +
            "image into a network, and visualizing which pixels are most responsible for the prediction made. " +
            "Gradient ascent aims to generate an image that maximally activates a given output feature or class. " +
            "The paper mentioned above talks about how to make the results of gradient ascent into more interpretable, natural looking images.",
        fv3: "I tried implementing this algorithm myself using PyTorch, and after a little bit of fooling " +
            "around with hyperparameters, I was able to get some cool images! I did it by taking a pre-trained PyTorch ResNet50 (trained on ImageNet1K), " +
            "creating a blank image and passing it to the optimizer, and then performing gradient descent on the image pixels until the image fit " +
            "a specified class in the model. Following the advice of the paper, I also added gaussian blurring, L2 regularization, and gradient " +
            "clipping which helped make the images much cleaner once I found the right values. I also made it so the images could be created in parallel. " +
            "This way, one could potentially generate visualizations for all output features in a given layer in one run.",
        fv4: "I ended up seeing some very interesting things in my testing. First, this technique does not appear to work " +
            "with transformer architectures. The resulting images look like a bunch of small squares with random patterns " +
            "stitched together. This is presumably due to the way images are chopped up before being fed into a transformer. " +
            "I also found it to be really cool how the visualizations that showed up in my images showed up in different " +
            "spots, shapes, and sizes depending on hyperparameter and image initialization. however, they all still maintained " +
            "the characteristics of the feature/class that they represented. I think this is a great example " +
            "of how CNNs can pick out specific features of an image regardless of location or other factors.",
        fv5: "The last thing I wanted to mention was how much faster the image generation got when running it on a GPU. I recently" +
            "bought an NVIDIA 4070 for myself, and was amazed at the difference in time it took when I ran it at my house. " +
            "On a CPU, it took 108s to generate 5 images in parallel. On my GPU, it took 3.6s. That's 30x faster.",


        portfolio1: "This Website! During quarantine I wanted to give React a try, so I started with a tutorial I found online and " +
            "made some changes to it. I recently did a re-design as well. I haven't done a ton of web dev since it was " +
            "never a part of my coursework, but I've always found designing and styling websites to be relaxing " +
            "(other than when trying to figure out how to center a div).",
        portfolio2: "If you're interested, you can check out the code on my GitHub.",

        conv1: "didnt work for transformers, really cool how results are different depending on initialization, regulation",
        conv2: "",

        temp: "Content coming soon..."


    };
export default descriptions