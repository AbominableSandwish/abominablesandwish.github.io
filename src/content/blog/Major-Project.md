---
author: Dylan von Arx
pubDatetime: 2024-09-12T12:00:00.737Z
title: Major Project (In Working)
slug: major-project
featured: false
ogImage: https://www.dylanvonarx.ch/images/sae_institute_genve_cover.jpg
tags:
  - release
description: This Bachelor’s thesis aims to explore voice control within the videogame medium, investigating the extent to which voice, compared to traditional digital peripherals, can succeed in opening up a new genre within the industry for both able-bodied and disabled players...

furtherInfo: false

info:
  - Scholar
canPlaying: false

hasVideo: false
---

# Table of contents

# Introduction

## Preface

Speech is a fundamental means of communication in society, used to convey understanding, share information, give instructions, and interact within groups. However, challenges arise when humans need to interact directly with computers. Recent developments in artificial intelligence (AI) and speech-to-text technology have significantly facilitated the interpretation of human speech, reducing the reliance on digital electronic peripherals such as keyboards, mice, and remote controls for providing instructions to computers.
AI is evolving rapidly, profoundly impacting human life with its computing power and precision. It has become central to our daily interactions, particularly through voice assistants like Siri, Cortana or Bixby, which are automatically linked to phones. These assistants have propelled the evolution of voice recognition, helping us complete administrative tasks effortlessly.

As AI continues to advance and permeate various aspects of our existence, it opens up new, unexplored horizons in industry, potentially benefiting those who may not fully enjoy certain products of our society. This could mark a turning point within the videogame industry, targeting new audiences through automatic voice recognition technology.

## Objective

This Bachelor’s thesis aims to explore voice control within the videogame medium, investigating the extent to which voice, compared to traditional digital peripherals, can succeed in opening up a new genre within the industry for both able-bodied and disabled players. It also seeks to understand how the complexity of language can affect videogame mechanics.

The thesis begins by introducing fundamental concepts to ensure a comprehensive understanding of the work involved and the complex aspects to be addressed. It briefly examines the evolution of automatic speech recognition (ASR), its societal impact, and its various applications. The goal is to understand the basics while focusing on the multifaceted uses of ASR in industry, particularly its application in videogames. The aim is also to shed light on the concepts of voice control at various levels of detail for controlling game mechanics and gameplay across multiple genres.

Building on various projects which have contributed to this community of practice, this thesis develops a protocol for testing mini-games to analyze player responsiveness and adaptability in diverse environments. These tests aim to gather data on the use of voice and conventional peripherals, with the intention of synthesizing a response on the possible future use of ASR within the videogame industry, its impact on players, and the hypothetical controls to be explored to enhance the field of speech within an interactive medium.

## Thesis Overview

This thesis is structured into three main sections, each serving a distinct purpose in exploring voice recognition control in the videogame industry.
The first section introduces key concepts essential for readers to understand the object of this study. It lays the groundwork for comprehending the practical results and drawing informed conclusions from the thesis. By providing a solid foundation in the fundamental principles of ASR and its applications, this section ensures that readers are well equipped to engage with the more complex ideas presented later.

The second section presents the media project developed for this study. It offers a detailed account of the hardware used, project limitations, structure, and fundamental systems. This practical component demonstrates the application of ASR technology in a videogame context, providing concrete examples of the challenges and opportunities in this field. The section concludes by addressing the challenges encountered during development and explaining how they were resolved, offering valuable insights into the practical implementation of voice recognition in games.

The third and final section focuses on analysis. It interprets the results of voice recognition control within the videogame industry and examines its limitations to address the study’s central question. By critically evaluating the outcomes of the media project and contextualizing them within the broader landscape of voice recognition technology, this section provides a comprehensive assessment of the potential for ASR in gaming. It concludes with a synthesis of the findings, leading to the final conclusion about the future of voice recognition in videogames.

This structure allows for a comprehensive exploration of the topic, moving from broad concepts to specific applications and analysis. It provides readers with a clear path through the research, from understanding the basics to examining practical implementations and drawing conclusions about the potential future of voice recognition in videogames. By organizing the thesis in this way, readers can follow the logical progression of ideas and gain a thorough understanding of both the theoretical and practical aspects of voice recognition in gaming.

# State of the Art

This first section is crucial for understanding ASR. It provides an overview of the technology’s history, principles, and various applications, aiming to identify the strengths and weaknesses of this technology as it has been integrated into society. The focus then narrows to the objectives of ASR and its practical implementation in a media project.

## Contextualization

The IT sector has witnessed a significant evolution in human-computer interaction over time. Initially, humans adapted to communicate with computers through hardware innovations like the mouse and ergonomic advancements such as the shift from text-based interfaces to graphical environments. However, this adaptation often excluded users with disabilities from fully interacting with digital devices.

Recently, there has been a paradigm shift towards machines adapting to human needs, largely driven by AI. AI’s capacity for autonomous learning and adaptation makes it well suited to meet industry demands, impressing current generations and likely continuing to captivate future ones.

It’s important to note that AI is not inherently linked to ASR. While some systems use machine learning to outperform statistical models, the choice of technology depends on the specific needs of the product and industry. Nevertheless, AI has brought ASR back into the spotlight, prompting society to reconsider its potential for deeper integration into daily life.
Computers operate on a formal, binary language of 0s and 1s, lacking understanding of human language nuances, intentions or emotions. They rely solely on explicit, predefined instructions to carry out simple tasks. Despite these fundamental differences, human-machine communication remains essential across various fields and continues to evolve.
The ultimate goal is to create more natural, intuitive, and effective interactions that can enhance human experiences in diverse contexts – from workplaces and educational settings to scientific research and recreational activities. These advancements are poised to transform the world around us, shaping our future interactions with technology.
Moving forward, the focus is on developing systems that can better understand and respond to human communication in all its complexity, bridging the gap between human language and machine processing. This ongoing evolution in human-machine interaction promises to make technology more accessible, efficient, and responsive to human needs across all sectors of society.

## Keywords

### Musical Instruments and Sound Effects

A musical instrument is an extension of our means of communication, offering a multitude of ways to convey information and emotion, which vary significantly from country to country. For example, some cultures use mouth or finger percussion more prominently for communication. In Southern Africa, Khoisan and Bantu languages feature an extensive use of consonant phonemes and a common practice known as click languages. However, our focus here is particularly on the voice.

### Voice

Voice is a unique living musical instrument, an integral part of the human body, whose sound production mechanisms remain challenging for most people to observe directly. The intention behind vocal expression is crucial for understanding the conveyed information. While emotion is primarily communicated through voice in many languages, its expression varies considerably based on cultural, educational, philosophical, and other societal factors which significantly influence communication styles.

For the purposes of this study, we focus mainly on phonetic segmentation and speech rate, setting aside the complex emotional aspects of voice. The mechanics of speech production involve an initial airflow generated by the lungs, causing vibrations in the vocal cords. The resulting sounds, termed phonetics, are produced by air friction and amplified through resonant cavities such as the trachea, mouth, and pharynx.
Understanding the fundamental aspects of voice production provides a crucial foundation for exploring how ASR systems interpret and process human speech. This knowledge is essential for developing more effective and nuanced voice control systems across various applications, including videogames. By focusing on the physical aspects of speech production, we can better appreciate the challenges and opportunities in creating responsive and accurate voice recognition technologies. This understanding is crucial for developing more effective and nuanced ASR systems, particularly in applications like videogames.

![asr](/images/MajorProject/asr_1.png)

### Phonetics

Phonetics, as a field, focuses on the segmented analysis of spoken sounds (phonemes) to examine their production, transmission, hearing, and evolution in human communication. This analysis contributes to the study of human language, a complex communication system that has evolved from conveying emotions for social harmony to describing concrete aspects of life for concise and objective communication.

### Human Language

Human language is a complex communication system, and analyzing its intricacies is crucial for understanding ASR. The study of audio, vibration, noise, and surrounding sounds leads to the analysis of phonemes and syllables, which are the building blocks of language codes linked to human culture and history. Initially, communication focused on conveying emotions to maintain social harmony. Over time, language has evolved to describe concrete aspects of life, enabling more concise and objective communication. This evolution reflects the increasing complexity of human societies and the need for more precise information exchange.

## Automatic Speech Recognition

ASR technology enables computers to convert spoken human language into plain text through a complex process consisting of evolving algorithms and language models. This section explores various ASR types, their core features, and the challenges they address.

## Acoustic Pretreatment

The process begins with acoustic pretreatment, capturing speech signals via microphones. These signals often include undesirable background noise.

![PreProcessing](/images/MajorProject/ASR_Function/PreProcessing.png)

Audio signals, electronic representations of sound waves, are measured in decibels, frequency, and amplitude. Acoustic pretreatment involves electronic manipulation to reduce noise, normalize volume, and remove interferences, isolating what’s needed for the algorithm search stage. The analog signal is then converted to digital data for deconstruction.

## Algorithm Search

Algorithm search is the core of ASR technology, aiming to determine the best sequence of spoken words with the lowest possible transcription error rate. System performance varies depending on specialization, search method, language model, and vocabulary size restrictions. Various linguistic analysis processes and calculation techniques refine transcription accuracy.

### Acoustic Model

An acoustic model represents the relationship between audio signals and phonemes or other linguistic units comprising speech. It’s trained using audio recordings and corresponding transcriptions, creating statistical representations of sounds to predict likely phonemes.

### Language Model

A language model is a statistical representation of symbol distribution in natural language, predicting the next word in a sequence and forecasting likely word sequences. These models are formed by observing word sequences in text corpora, with each word appearing in the pronunciation dictionary.

### Pronunciation Dictionary

The pronunciation dictionary contains word pronunciation details, including all words the ASR engine needs to recognize. It comprises records of words, some with multiple pronunciations, and is language-specific. The dictionary is manually built for the targeted language.
In practice, ASR uses various algorithms, with the choice depending on specific needs. This comprehensive approach to ASR technology enables increasingly accurate and efficient speech recognition across diverse applications and languages.

#### Performance Evaluation

The performance of an ASR system is typically measured by the word error rate, which is the ratio of misclassified words to the total number of words tested. Current research aims to minimize recognition errors to zero in real time, regardless of vocabulary size, noise, speaker characteristics or accent.

The word error rate (WER) is calculated as:

$ "WER" = (I + E + S) / N $

where $S$ is the number of substitutions, $E$ the number of elisions, $I$ the number of insertions, and $N$ the number of words in the reference transcription.

#### Word Accuracy

Word accuracy (WAcc) is another measure used to evaluate the quality of ASR systems, defined as $%"WAcc" = 100 - %"WER"$. It’s important to note that accuracy can sometimes yield negative results. The WER measure is generally considered more valuable than WAcc, and for this reason, it’s more commonly used.

### ASR History

The history of ASR spans several decades, marked by significant milestones.

- In 1952, Bell Labs created Audrey, considered the first electronic voice-recognition device. It could identify digits 0 to 9 when pronounced separately.

- A decade later, in 1962, William C. Dersch at IBM developed The Shoebox which not only identified the 10 digits but also recognized 16 English words related to mathematical operations.

![Shoebox](/images/MajorProject/History/image3.jpeg)

**Note.** A demonstration at a 1961 press conference for newspaper, national magazine and trade publication reporters
Shoebox’s small size was made possible by its advanced circuitry. It required only 31 transistors — fewer than two per recognized word. Earlier speech-recognition machines, by contrast, required as many as 200 transistors per word. Shoebox was also able to identify complete words, not just sounds or parts of words.

- 1971 saw a major advancement when the U.S. Defense Advanced Research Project Agency (DARPA) began work on Harpy, the first ASR system capable of understanding a vocabulary exceeding 1,000 words. Despite these advancements, ASR remained largely confined to specialized areas for many years.

- Around the turn of the century, manufacturers began exploring ways to integrate this technology more broadly into their products. This expansion allowed ASR to find new applications across various industries and in everyday life.

- A significant shift occurred in 1990 when Dragon Systems launched an ASR program aimed at the general public. Seven years later, the company introduced Dragon Naturally Speaking, the first recognition software capable of understanding complete sentences.

The 21st century brought rapid advancements. In 2008, Google launched an Internet search application utilizing ASR functionality. Three years later, in 2011, Apple introduced Siri on the iPhone 4S, marking a new era of virtual assistants in mobile devices.

**"Initially perceived as a novelty, SIRI has demonstrated significant potential through recent examples, suggesting its evolution into a new form of human-machine interface. This technology is poised to become as integral as keyboards, screens, mice, and touch screens in our interactions with devices."** #cite(<SiriAssistant>)

The advent of the Internet and its vast and enthusiastic player base has led to the convergence of voice recognition technology with AI, resulting in more refined and specialized versions. In just half a century, voice recognition has developed to become a fundamental part of society, adapting to various industries and applications.

### Gaussian Mixture Model (GMM)

ASR systems rely on various technologies and algorithms, often in conjunction with AI. One such model is the GMM, which parametrically estimates the distribution of random variables by modeling them as the sum of several Gaussian distributions. In speech processing, GMMs are used to model the voice spectrum generation process, capturing the complex variability in voice signals and enabling effective modeling of the underlying structure of the voice spectrum.

### Hidden Markov Model (HMM)

An HMM is based on the Markov chain model, a stochastic process that determines the probabilities of transitioning to a given state based on the current state. This fundamental property allows for predictions about future states without relying on previous states, even though the states themselves are unknown to the user.

![HiddenMarkovModel](/images/MajorProject/typeAlgorithm/HiddenMarkovModel.svg.png)

### N-Gram Model

An N-Gram model is a probabilistic linguistic model based on a Markov chain of order N-1. It analyzes sequences of n adjacent elements in a given instruction to predict the likelihood of word or phoneme combinations in sentences and speech. This approach aims to improve the accuracy of language modeling and speech recognition systems.

![N-gram](/images/MajorProject/typeAlgorithm/ngram.png)

### Neural Networks

Neural networks, primarily used for deep-learning algorithms, leverage data banks by mimicking the interconnectivity of the human brain through different layers of nodes. Each node consists of inputs, weights, a threshold, and an output. If the output value exceeds a given threshold, it activates the node, transmitting the data to the next layer of the network.

![NeuralNetwork](/images/MajorProject/typeAlgorithm/NeuralNetwork.png)

**Note.** This is the number of features your neural network uses to make its predictions. The input vector needs one input neuron per feature. For tabular data, this is the number of relevant features in your dataset. You want to carefully select these features and remove any that may contain patterns that won’t generalize beyond the training set (and cause overfitting).

Neural networks learn this mapping function through supervised learning, with adjustments based on the loss function using the gradient descent process. While neural networks tend to be more accurate than traditional language models and can handle larger datasets, this increased accuracy comes at a cost: they are often slower to train compared to traditional models, impacting overall performance.

### Speaker Diarization

Speaker Diarization enhances HMM efficiency by deconstructing audio data and identifying individual speakers, using either bottom-up or top-down clustering strategies.

Bottom-up algorithms separate all the audio content into a succession of small segments and then reassemble the parts which most closely resemble the speaker. In contrast, top-down algorithms start with a single segment containing all the data and iteratively separate them until they reach the same number of segments as there are speakers.

![Diarization](/images/MajorProject/typeAlgorithm/Diarization.png)

**Note.** (right) Alternative clustering schemas, (left) General speaker diarization architecture.

### Natural Language Processing (NLP)

NLP is a multidisciplinary field which combines linguistics, computer science, and AI. It focuses on enabling machines to understand, interpret, and generate human language in a valuable way. NLP falls within the broader domains of AI and machine learning, allowing computers to process natural language inputs and produce text-based outputs.

![NLP](/images/MajorProject/typeAlgorithm/NLP_image.png)

**Note.** You can see NLP in red.

## ASR Applications

ASR technology has found widespread applications across various industries, continuously expanding its integration.

**Virtual assistants** in smartphones and smart speakers use ASR to enable voice commands and provide user assistance.

**In terms of accessibility**, ASR helps individuals with disabilities by enabling voice control over devices and converting speech to text for those who are deaf or hard of hearing.

**Transcription services** utilize ASR to automatically document meetings, lectures, and interviews, saving time and effort.

**In customer service**, call centers employ ASR to route calls and handle inquiries through interactive voice response systems.

### Aerospace

In aerospace, ASR technology was used on the Mars Polar Lander in 1999 to record frequency spectra for subsequent analysis of information and tones on the Red Planet. @CNN1999Lander

![MarsPolarLander](/images/MajorProject/ExampleUsage/mpl-top-view-clean.JPG)

### Automatic Translation

Automatic translation aims to facilitate understanding between people regardless of language barriers, becoming essential in today’s globalized world for political, commercial, sporting, and personal interactions.

### Hands-Free Computing

Hands-free computing enables interaction without manual input or traditional digital peripherals, relying on voice commands to control user interfaces and execute instructions. This technology benefits both able-bodied and disabled users across various domains. The goal is to develop ASR systems capable of recognizing specific commands, verifying their accuracy, and transmitting instructions to the target system using voice as the sole input method.
For able-bodied users, this technology can streamline and expedite tasks in various professional settings. Engineers can manage operations more efficiently, while pilots in fighter jets #cite(<Ministere2020Table>) can execute commands without taking their hands off the controls. For individuals with disabilities, hands-free computing opens up new career opportunities in fields previously inaccessible to them.

isually impaired individuals have particularly benefited from computers adapted to their needs. This area of study focuses on developing solutions that rely solely on voice input for issuing instructions. In the medical field, this technology has enabled surgeons to take notes during operations and has improved patient monitoring and pathology research. [Source nes]
Beyond these applications, these technologies show promise as diagnostic tools for the early detection of speech pathologies associated with health conditions such as Alzheimer’s and Parkinson’s diseases. Additionally, they serve as assistive technologies aimed at enhancing the quality of daily life for many individuals. #cite(<app13116840>)

### Speech-to-Text

Transcription work is extremely arduous due to the vast amount of video content posted online. For example, in 2023, YouTube recorded an average of 500 hours of new content uploaded every minute. While communities strive to transcribe their content into different languages, the sheer volume necessitates the use of automatic transcription systems to meet this demand effectively.#cite(<Karim2022Youtube>)

### Virtual Assistant

Virtual assistants have become one of the most widely adopted technologies in our society. Found primarily in smartphones, they optimize and revolutionize administrative tasks. Users can manage their calendars, send messages to contacts, and perform various other functions with just a few spoken words, eliminating the need to physically interact with their devices. Virtual assistants like Siri, Cortana or Bixby may well replace traditional methods of device interaction in the future.

![Siri](/images/MajorProject/virtualAssistant/Apple-Siri-Logo.png)

![Google](/images/MajorProject/virtualAssistant/Google_Assistant_logo.png)

### Videogames

The videogame industry has integrated ASR technology, leveraging the diversity of genres and game mechanics to create innovative experiences. Speech-to-text functionality enables players to control game mechanics or communicate textually without interrupting their avatar’s actions. Conversely, text-to-speech and speech synthesis enhance immersion and storytelling, creating virtual worlds that foster reflection and innovation through varied environments.
This technology’s application in gaming often borders on science fiction, providing an ideal platform for designing media projects that create tailored environments for specific challenges. By seamlessly incorporating voice commands and synthesized speech, video games are pushing the boundaries of interactive storytelling and player engagement, opening up new possibilities for immersive and accessible gameplay experiences.

#### Videogame Mechanics

Media projects have been created using ASR technology integrated with videogame mechanics. Whether as a central or secondary device in gameplay, its use varies widely across different practices in the industry.

**Hey You, Pikachu!**

Hey You, Pikachu! is a 1998 Nintendo 64 game developed by Ambrella Studio, utilizing voice recognition technology. Players communicate with Pikachu using voice commands to complete quests assigned by the professor, testing the “PokéHelper” device. The game uses the Voice Recognition Unit, an audio peripheral capable of detecting 256 words in Japanese or English.

![HeyYouPikachu](/images/MajorProject/ExampleUsage/HeyPikachu.jpg)

**Life Line: Voice Action Adventure**

![LifeLineImg](/images/MajorProject/GamesExample/life_line_voice_action_adventure.jpg)

Lifeline, a 2003 PlayStation 2 survival horror action-adventure game developed by Sony Interactive Entertainment and Konami, features a unique voice-activated user interface to control the character Rio. Players dictate her actions as the plot unfolds. The game received positive reviews for its originality, with Game Informer rating it 8.75/10 and IGN 6.8/10.

**By holding down the circle button, talking, and releasing the button when you’re done, Rio will respond by performing the action requested (if she understands), proclaiming you to be a total tool (if you said something that offended her), or telling you that she didn’t hear you. As long as she understands what you’re saying, it works surprisingly well, despite some occasional, probably hardware-related, problems. Also, the game has some built-in help to make sure the you and the waitress are on the same page.** GameInformer August 19, 2004. Retrieved May 25, 2014.

**In Verbis Virtus**

In Verbis Virtus, a 2014 adventure game by Italian studio Indomitus Games, offers a first-person experience where players cast spells by vocally reciting incantations. The game blends action and puzzle elements in a fantasy setting, using the CMU Sphinx API for voice recognition.

![InVerbisVertusimg](/images/MajorProject/GamesExample/InVerbisVertus.jpg)

**Note:** Screenshot lorsque que le joueur effectuer le sort premier sort du jeux aprés avoir prononcer correctement le sort souhaité afin de résoudre l'énigme de la pièce.

Reception on Steam, the online distribution platform, has been generally positive for In Verbis Virtus, although some negative reviews highlight performance issues in action detection. Critical sites have been more favorable, with multiplayer.it awarding it 8.0 out of 10, and gamers rating it an average of 9.4 out of 10.

The game’s main appeal lies in its innovative spell-casting system, where players recite magic formulas directly into their microphones. This concept is so captivating that merely reading the game’s description evokes images of a Skyrim-esque scenario, with players shouting “FIRE BALL!” to incinerate hordes of monsters, akin to an armed and enraged version of Harry Potter.

**Minecraft**

![minecraftBubble](/images/MajorProject/ExampleUsage/chatbubblesMinecraft.jpg)

**Note:** exemple de rendu, avec l'association du mod bubble chat afin de facilité grandement la communication en sein du jeu vidéo Minecraft.

Minecraft, the world’s best-selling game, has seen a resurgence in automatic speech transcription through mods like Microphone Text Input via the VOSK Offline Speech Recognition API. These mods enable text chat communication without interrupting avatar control, enhancing realism and immersion. Speech-to-text technology allows players to focus on the game’s atmosphere while maintaining seamless communication.

#### Text-to-Speech

**Skyrim**

Text-to-speech and speech synthesis represent significant advancements in gaming, particularly exemplified by modifications to games like Skyrim. These technologies create a seamless link between ASR and AI, enabling non-player characters to hear and respond logically to player input. This development marks an impressive yet unsettling evolution in AI technology, promising to make videogames substantially more immersive in the coming years. Numerous media projects, games, and mods in older games #cite(<jdg2023mod>) demonstrate the potential of ASR technology, offering a glimpse into the future of this industry.

### Challenges

Despite its rapid advancement, ASR continues to face significant challenges in addressing the complexities of human linguistic communication and the acoustic environment. The key difficulties include:

**Accents and Pronunciations**
Managing the diversity of speaker accents and pronunciations remains a challenge. Models must be trained on speech data which encompasses a wide variety of accents to improve accuracy.

**Background Noise**
Background noise, muffled speech, and poor audio quality can severely impact transcription accuracy. Techniques such as speech enhancement are employed to mitigate these issues.

**Multiple Languages**
Supporting ASR for the thousands of languages worldwide, each with its own unique sounds, grammar, and scripts, is a monumental task. While techniques like transfer learning and multiple language models are beneficial, collecting sufficient data to train models for each language remains a challenge.

**Specialized Vocabulary**
Various use cases require different lexical fields, especially in domains like medical dictation, which involves highly specialized terminology which generic models struggle to handle. Customized models must be trained using domain-specific data to effectively manage these specialized vocabularies.

### Future Advancement

ASR technology has made significant strides in various applications, including videogames. Voice control in gaming is still evolving, with its potential for universal adoption dependent on overcoming several challenges. Currently, AI and ASR have advanced to the point where simple voice commands can control smart home devices or assist individuals with disabilities, as exemplified by Stephen Hawking’s use of technology in his groundbreaking physics work.
Various industries are eager to adopt and integrate these technologies to enhance accessibility and functionality. In the videogame industry, voice control remains one of the less explored areas due to development challenges and limitations. However, this presents an opportunity for innovation and research. As industry professionals suggest, “that’s why it’s the right time to experiment with it in art and games”. #cite(<GDC2019Experimental>)

## Voice Recognition APIs

While custom voice coding and data collection software development are always an option, several ready-to-use solutions are already available. Commercial APIs offer ASR algorithms, though they may not be easily customizable.
User-friendly APIs for collecting speech data and developing tailored software include Google Cloud’s Speech-to-Text model, IBM Watson’s Speech to Text, and Nuance’s ASR. Open-source ASR systems are also available online, enabling community exploration and deeper understanding of the technology.

Some notable tools include:

**Sphinx 3**

An evolution from Sphinx 2, it uses a continuous HMM representation for high-accuracy, non-real-time recognition. Recent advancements have made it “near-real-time”, though not yet suitable for interactive applications.

**Whisper**
An ASR system trained on over 680,000 hours of supervised multi-language, multi-task data from the Internet. Its extensive dataset enhances robustness against accents, background noise, and specialized language, facilitating multi-language transcription and translation into English.

**Microsoft Speech API (SAPI)**
Developed for Windows Vista, SAPI it uses the N-Gram model for voice commands to control computers, enabling document completion, email sending, command shortcut improvement, and web browsing.
Various fields recognize ASR’s potential, aiming to integrate it further to enhance processes, improve performance, and streamline operations. In videogames, the possibility of integrating speech-to-text technology could pave the way for new genres with unique gameplay mechanics and player experiences, though the complexity of human speech adds another layer of challenge to this exploration.

## Limitations of Media Project

### Speech-to-Text Responsiveness

To maintain a swift reaction time within the media project, we’ve eliminated all algorithm models requiring remote connections to AI for speech interpretation. This decision prioritizes interactivity and speed of interaction between the player and the media project, minimizing delays between instructions and maintaining playability comparable to that of a standard mechanical keyboard.

### Language

French has been selected as the language for the media project, given its location in the French-speaking region of Switzerland. This choice optimizes speaker comprehension within the project, as ASR often struggles with English spoken with a strong French accent.

To maximize control reactivity for each adapted gameplay, a word limit has been imposed on instructions. To ensure concise and clear understanding when analyzing transcribed speeches, negations are disregarded. Voice intonation is also ignored, as it falls outside the scope of this thesis, and the selected API doesn’t provide this information in its basic form.

Although emotion is intrinsically linked to our words and voice, altering it uniquely for each individual, this aspect isn’t considered in this media project. The focus remains on the precision of human language and word analysis.

### Statistical Model & Machine Learning

This area demands the most in-depth expertise. To produce a feasible and autonomous media project, AI-related aspects are limited mainly to developing a videogame environment which incorporates voice recognition. Given that a Bachelor’s degree is the prerequisite starting point in AI expertise, machine learning and deep learning are excluded from the outset. A statistical model has been chosen for this thesis, though exploring the issue further with AI use would be intriguing in future stages. #cite(<UniDistance2024Master>)

### Complexity Level

Several characteristics in a speaker’s words can be analyzed. To progress step-by-step and delve deeper into managing various analyzable data to alter the control of this media project, we’ve established the following levels:

#### Simple Instruction

A simple instruction aims to prove the system’s ability to account for the speaker’s speech, interpret it, and execute commands. For example: “the cube jumps”. We select an entity and give it a basic action.

#### Intermediate Instruction

An intermediate instruction aims to select an entity precisely and give a complex instruction, generally recommending arguments to contextualize the instruction and goal. For example: “the large red cube moves forward 35 meters”. We select an entity with certain characteristics and give it an action with a precise distance, detecting the number (35) and its type (meter) to create an argument.

With these limitations in place, we can now design a media project. Developing a voice-controlled videogame allows us to explore the extent to which this technology can be developed and implemented in various test environments.
