// Data for portfolio
import { Cloud, Cpu, Globe, Server, Shield, Smartphone } from 'lucide-react'
import {
  CodeigniterIcon,
  DockerIcon,
  ExpressjsIcon,
  JavaIcon,
  JavaScriptIcon,
  JenkinsIcon,
  KotlinIcon,
  LaravelIcon,
  LinuxIcon,
  NextjsIcon,
  NodejsIcon,
  PhpIcon,
  ReactIcon,
  SpringIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [  
  {
    priority: 1,
    title: 'Project Epsilon',
    shortDescription:
      'A collection of engaging coding challenges designed to help developers improve their ReactJS skills by writing functional business logic. Your task is to make it functional by writing business logic, to improve your frontend skills',
    cover:
      'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    type: 'Free 🔥',
    livePreview: 'https://example.com/epsilon',
    githubLink: 'https://github.com/example/ReactJS-Coding-Challenges',
    githubStars: '40 Stars',
    numberOfSales: '138 Sales',
  },
  {
    priority: 2,
    title: 'Ejucationzz',
    shortDescription:
      'Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed. Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed.',
    cover:
      'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'New 🔥',
    livePreview: 'https://example.com/Ejucationzz',
    siteAge: '4 months old',
    visitors: '100 Visitors',
    githubLink: '',
    earned: '',
  },
]

// Service Data
export const serviceData = [
  {
    icon: Globe,
    title: "Enterprise Application",
    shortDescription: "Designing and building scalable enterprise-grade software solutions.",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    shortDescription: "Delivering cloud-based applications with secure and reliable infrastructure.",
  },
  {
    icon: Smartphone,
    title: "Android Development",
    shortDescription: "Creating intuitive mobile applications for Android platforms.",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    shortDescription: "Integrating smart devices with cloud and mobile ecosystems.",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    shortDescription: "Building and managing reliable server, cloud, and network environments.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    shortDescription: "Implementing secure authentication, authorization, and data protection.",
  },
];

// Skill List
export const skillList = [
  {
    name: 'Java',
    icon: JavaIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'PHP',
    icon: PhpIcon,
  },
  {
    name: 'Kotlin',
    icon: KotlinIcon,
  },
  {
    name: 'Spring Framework',
    icon: SpringIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Express.js',
    icon: ExpressjsIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindCSS,
  },
  {
    name: 'Laravel',
    icon: LaravelIcon,
  },
  {
    name: 'Codeigniter',
    icon: CodeigniterIcon,
  },
  {
    name: 'Linux',
    icon: LinuxIcon,
  },
  {
    name: 'Docker',
    icon: DockerIcon,
  },
  {
    name: 'Jenkins',
    icon: JenkinsIcon,
  }
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },  
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['English', 'Indonesia']
