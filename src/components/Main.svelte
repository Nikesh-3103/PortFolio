<script>
    import Step from "./Step.svelte";

    let steps = [
        // {
        //     name: "Coffee-Tracker",
        //     icon: "fa-solid fa-mug-hot",
        //     description:
        //         "Coffee-Tracker is an interactive website built with React-Js and the script is to track the caffine content in the user's blood",
        // },
        {
            name: "Daily-Does",
            icon: "fa-solid fa-list-check",
            description:
                "Test for model robustness with customized test profiles and receive exhaustive reporting on the performance and potential vulnerabilities of your model.",
        },
        {
            name: "Coloranto",
            icon: "fa-solid fa-camera-retro",
            description:
                "Image Colorization Using Deep Learning.",
        },
        {
            name: "VocalSense",
            icon: "fa-brands fa-speaker-deck",
            description:
                "Vocal emotion analysis and detection Using Deep Learning.",
        },
    ];

    let benefits = [
        {
            metric: "10x",
            name: "a knowledgable developer",
            description:
             "I'm an experienced Java programmer with a solid understanding of fundamental data structures and algorithms. From arrays and linked lists through trees, graphs, heaps, and hash maps — I code clean, efficient, and optimized code designed for practical problem-solving. Whether it's designing custom algorithms, cracking tough LeetCode-type problems, or designing scalable back-end systems, I leverage Java as my weapon of choice for crafting high-performance solutions. Clarity, time-space complexity, and modularity are the focus of my coding style.",
        },
        {
            name: "a profitable problem solver",
            description:
                "I'm not merely a programmer — I'm a problem solver. I have expertise in deconstructing difficult problems into clean, efficient, and scalable code solutions. My method integrates logical thinking, algorithmic accuracy, and optimization acumen to produce maximum output with minimal overhead. Whether debugging an old system, architecting a new feature, or optimizing performance bottlenecks, I provide value-driven solutions that make a tangible difference. I believe in code that is not just working — but working smart.",
        },
        {
            name: "an excellent communicator",
            description:
                "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
        },
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Nikesh</span> Kumar
                <br />Software
                <span class="poppins text-violet-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400"> favorite tech</span> includes Data Structures, Core java, CPP, React-JS, Machine Learning!
            </p>
            <button
    class="blueShadow mx-auto lg:mr-auto lg:ml-80 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 hover:bg-violet-400 hover:text-white transition duration-300"
>
    <a
        href="C:\Project\PortFolio\static\NIKESH KUMAR m ggl.pdf"
        download
        class="relative z-10"
    >
        <h4>Download Resume &darr;</h4>
    </a>
</button>

        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img
                src={"images/profile.png"}
                alt="Zetane Engine"
                class="object-cover z-[2] max-h-[70vh]"
            />
        </div>
        <!-- <div  class="flex p-0.5 relative max-w-[700px] w-full mx-auto">
            <div
                class="absolute inset-0 overflow-hidden rounded-md flex items-center justify-center"
            >
                <div
                    class="bg-gradient-to-r absolute inset-[-20px]  from-violet-800 to-indigo-800 specialSpin"
                />
            </div>

            <img
                src={"images/zetane-engine.jpeg"}
                alt="Zetane Engine"
                class="w-full h-full object-cover z-[2]"
            />
        </div> -->
    </section>
    <section class="py-20 lg:py-31 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-violet-400">see</span> my work?
            </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <!-- <Step step={steps[0]}>
                <p>
                    Coffee-Tracker is a cafeine calculating website made with <strong
                        class="text-violet-400"
                        >React.js.</strong
                    > It caculates the cafeine content in the user's blood using coffe consumption.
                </p>
            </Step> -->
            <Step step={{...steps[0], href: "https://dailydoes.netlify.app"}}>
                <p>
                    This is a sleek and minimal To-Do List Web App built with <strong
                        class="text-violet-400">React.js</strong
                    >. It allows users to add, complete, and delete tasks easily, with a custom fantasy-inspired CSS theme 
                    <strong class="text-violet-400">Fanta.css.</strong
                        ><br/>The app supports : Task Management, Filter Tabs, Dark Mode Support ,Local Storage and Browser notification enabled.
                </p>
            </Step>
            <Step step={{...steps[1], href: "https://github.com/Nikesh-3103/coloranto"}}>
                    <p>A Deep learning pipeline to colorize black and white images using state-of-the-art <strong
                            class="text-violet-400"
                            > CNN architectures ( ECCV16 and SIGGRAPH17 )</strong
                        >. Integrated PyTorch models to predict color channels from grayscale inputs in the LAB color space. Implemented preprocessing, model inference, and postprocessing to generate high-quality colorized outputs. Supported GPU acceleration and batch processing for performance optimization.
                    </p>
            </Step>
            <Step step={{...steps[2], href: "https://github.com/Nikesh-3103/VocalSense"}}>
                    <p>An advanced Emotion Recognition system using speech audio data. The project utilizes cutting-edge techniques in Natural Language Processing (NLP) and Deep Learning, specifically <strong
                            class="text-violet-400"
                            > CNNs(Neural-Networking) and Bi-LSTM models</strong
                        > to accurately predict emotional states from audio signals. The system processes raw speech data, extracts features using
                        <strong
                            class="text-violet-400"
                            > Wav2Vec2</strong
                        > , and classifies emotions such as happiness, anger, sadness, and more.
                    </p>
            </Step>
        </div>
    </section>
    <section  class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"id="achievements">
        <div class="flex flex-col gap-2 text-center relative">
          <h6 class="text-large sm:text-xl md:text-2xl">
            Achievements
          </h6>
          <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            One of my <span class="poppins text-violet-400">Achievements</span>
          </h3>
        </div>
      
        <!-- ⭐️ NEW FLEX CONTAINER FOR IMAGE + TEXT -->
        <div class="flex flex-col lg:flex-row items-center justify-center gap-10 px-4">
          <!-- 🖼 IMAGE -->
          <img
            src="images/prize.png"
            alt="Achievement Image"
            class="w-72 h-40 sm:w-96 sm:h-48 md:w-[28rem] md:h-[14rem] object-cover rounded shadow-lg"
          />
      
          <!-- 📄 TEXT -->
          <div class="max-w-xl text-center lg:text-left">
            <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
              Won 1st Prize in a Paper Presentation
            </h3>
            <p class="opacity-70">
                I won First Place at the Paper Presentation event – Spectra'24, organized by Kongu Engineering College, Perundurai on 29th February 2024.

                As a representative of II-AI & ML, Sri Krishna College of Technology (SKCT), it was an enriching experience – from the research and preparation of the paper to the presentation with fellow peers.
            </p>
          </div>
        </div>
      </section>
      
    
    
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <!-- <div class="flex flex-col gap-2 mx-auto">
                    <div class="flex items-end gap-4">
                        <p
                            class="poppins text-6xl sm:text-7xl md:text-8xl text-slate-500 font-medium"
                        >
                            {benefit.metric}
                        </p>
                        <p
                            class="text-xl sm:text-2xl md:text-3xl capitalize pb-2"
                        >
                            {benefit.name}
                        </p>
                    </div>
                    <p class="text-center italic">- {benefit.description}</p>
                </div> -->
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>
            The <span class="text-violet-400">Complete</span> Package
        </h5>
        <div
            class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
        >
            <table class="bg-white text-slate-700 rounded text-center">
                <thead class={"border-b border-solid border-slate-200  "}>
                    <tr class="">
                        <th />
                        <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
                        <th
                            class="bg-violet-700 text-white whitespace-nowrap p-4 px-8"
                            >Me</th
                        >
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                            >Dedication</td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                            >Critical Thought</td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                    <tr>
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                            >Interpersonal Skills</td
                        >
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                    <tr class="border-t border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                            >Progamming Ability</td
                        >
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
            <p>Scroll to see more &rarr;</p>
        </div>
        <p class="mx-auto">So why not invest?</p>
    </section>
</main>
