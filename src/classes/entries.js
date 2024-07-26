import blogImage from '../assets/images/blog.png';
import travelImage from '../assets/images/travel.jpeg';
import projectsImage from '../assets/images/projects.jpeg';
import blogPosts from './blog-posts'

const entries = [
    {
      id: 1,
      type: 'contact',
      title: "Contact Me🖱️",
      contactLinks: [
        { name: "Email", url: "n0ne.official.author@gmail.com" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/adam-pylanski/" },
      ]
    },
    {
      id: 2,
      type: 'image',
      image: blogImage,
      title: "Web3 Philosophical Blog🖱️",
      description: "Posts about meaning.",
      link: "https://mirror.xyz/0xEDC1fdbD19744685BCB4d04Be98CaD15f31e5b23/j3_wgoGZjCT61xRh5aS7R9JROICCJyjqRO9lKisDXsA"
    },
    {
      id: 3,
      type: 'image',
      image: travelImage,
      title: "Personal Travel Blog🖱️",
      description: "It is not simple to travel meaningfully so here I explore what those travels actually mean to me.",
      link: "https://www.instagram.com/eigenwerter/"
    },
    {
      id: 4,
      type: 'description',
      title: "Tech skils",
      description: "C/C++ dev, 3 years exp \n(multithreaded Linux, telecom)\n+Java Jenkins CI/CD\n+SEI CERT secure practices\n+GoF Design Patterns",
    },
    {
      id: 5,
      type: 'description',
      title: "Scientific skills",
      description: "*AI Accelerators (developing a new brain-inspired latency &bandwidth hardrware optimization), *Template Metaprogramming &related C++ Optimizations, *Brain-inspired non-von-Neumann architectures, *Human brain modeling based on Neuralink Data, *Deep Learning for Medical Images decision-making",
    },
    {
        id: 6,
        type: 'image',
        title: 'Date me',
        description: 'hmu. email/ln/x/dc/signal PS fyi I change countries often until the end of Phd',
        image: projectsImage
    },
    {
        id: 7,
        type: 'description',
        title: "Game Design",
        description: "Open World low-budged Open Source 3D MMO RPG with infinite possibilities (the whole world is an evolutionary algorithm so skills, factions and NPC levels emerge naturally). Thus far: ✓client<-2D positions of NPCs->server (TCP/IP soc), setup for render (directly from GPU)",
      },
      {
        id: 9,
        type: 'description',
        title: "Project: this webpage🖱️",
        description: "Took me 1 day, w React. I now have a much better idea for the UI - just using the Banner as tiles!",
        link: 'https://github.com/pylNeuralNet/portfolio-github-pages'
      },
      ...blogPosts.map(post => ({
        id: post.id,
        type: 'blog',
        title: post.title,
        excerpt: post.excerpt,
        slug: post.slug,
        image: post.image
      }))
    ];

  export default entries;
