const descriptions =
    {
        synthlm1: "Over the past couple of years, there has been a decent amount of research published related to audio generation and " +
            "compression using deep learning. After coming across Google's MusicLM, I was inspired to " +
            "create my own deep learning powered software synthesizer.",
        synthlm2: "My goal with this project is to create the first text-to-sample synthesizer meant for music production. " +
            "Rather than generating entire songs like MusicLM and similar projects, my focus is on generating " +
            "short audio samples. For example, if someone was to enter the text \"metallic snare A#\", the synth should " +
            "be able to generate a tuned snare sample. To me this task seems more feasible and more useful than creating whole songs. " +
            "There is already an abundance of labeled sample packs online that can be used " +
            "for customizable training, generating samples removes the need to learn long term structure, and audio samples are much " +
            "more useful for musicians compared to entire songs.",
        synthlm3: "At the moment, I have been going through older papers that MusicLM builds on such as AudioLM, " +
            "SoundStream, and BERT. Recently, Meta also released their own audio generation model called " +
            "AudioCraft, which may be a promising option given that its open-source and would require less training than " +
            "MusicLM's multi-model, hierarchical structure. I'm hoping to get a somewhat usable model trained this summer " +
            "and am looking forward to seeing the results!"

    };
export default descriptions
