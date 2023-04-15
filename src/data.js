// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaPython,
  FaRust,
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiScikitlearn, 
  SiTensorflow,
  SiPytorch,
  SiOpslevel,
  SiAzuredevops
} from "react-icons/si";
import { 
  GiArtificialIntelligence
} from "react-icons/gi";
import { 
  MdOutlineScience,
  MdAnalytics,
} from "react-icons/md";
import { 
  HiOutlineDatabase
} from "react-icons/hi";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "PeterHinge";

// Add your LinkedIn URL (string - "linkedInURL") below.
export const linkedInURL = "https://www.linkedin.com/in/peter-hinge-denmark";

// Add your resume URL (string - "resumeURL") below.
export const resumeURL = "https://docs.google.com/presentation/d/103N4MJnaIeKy4P0aaYxM_4yuVHTyq-BH337qM_c_LB4/edit?usp=sharing";

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I thoroughly enjoy broadening my horizons and always seek to keep up with contemporary technological research, while also being results oriented. I am tech stack agnostic and a fast learner.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <GiArtificialIntelligence className="display-4" />,
    name: "Artificial Intelligence",
  },
  {
    id: 2,
    skill: <MdAnalytics className="display-4" />,
    name: "Data Analytics",
  },
  {
    id: 3,
    skill: <SiAzuredevops className="display-4" />,
    name: "Dev/ML Ops",
  },
  {
    id: 4,
    skill: <MdOutlineScience className="display-4" />,
    name: "Data Science",
  },
  {
    id: 5,
    skill: <HiOutlineDatabase className="display-4" />,
    name: "Big Data",
  },
  {
    id: 6,
    skill: <SiOpslevel className="display-4" />,
    name: "Blockchain",
  }
  /*
  {
    id: 1,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 3,
    skill: <FaRust className="display-4" />,
    name: "Rust",
  },
  {
    id: 4,
    skill: <SiScikitlearn className="display-4" />,
    name: "ScikitLearn",
  },
  {
    id: 5,
    skill: <SiTensorflow className="display-4" />,
    name: "TensorFlow",
  },
  {
    id: 6,
    skill: <SiPytorch className="display-4" />,
    name: "Pytorch",
  },
  */
];

// Website link (string - "https://YourWebSiteUrl")
export const webSiteURL = "https://www.peterhinge.com";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["cfd_data_science_deployment", "SortGrapher", "Bouncy_Ball-NEAT-"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/

export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
