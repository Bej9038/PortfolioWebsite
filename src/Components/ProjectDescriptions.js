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
            "also guarantees that consensus can be reached during periods of synchrony. Lab 3 involved a bit too many hours " +
            "of grinding in order to debug the system, but I'm proud to say that we eventually passed all of the test cases. " +
            "Finally, Lab 4 added on multi-key transactions and sharding. This allows the system to process operations " +
            "in parallel thus increasing performance proportional to the number of server groups. We also had to implement two" +
            " phase commit for agreement between server groups during transactions. On its own 2PC is susceptible to failures, " +
            "but when paired with paxos provides agreement without major availability issues.",


        portfolio1: "This Website! During quarantine I wanted to give React a try, so I started with a tutorial I found online and " +
            "made some changes to it. I recently did a re-design as well. I haven't done a ton of web dev since it was " +
            "never a part of my coursework, but I've always found designing and styling websites to be pretty enjoyable.",
        portfolio2: "If you're interested, you can check out the code on my GitHub.",

        temp: "Content coming soon..."


    };
export default descriptions
