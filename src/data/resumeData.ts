// Resume data extracted from Kalash_Aggarwal_Resume_Updated_v2 (1).pdf
// This should be updated with actual resume content

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
  technologies?: string[];
  achievements?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  skills: string[];
  proficiency?: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
  relevantCoursework?: string[];
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const resumeData = {
  personalInfo: {
    firstName: "Kalash",
    lastName: "Aggarwal",
    title: "Full Stack Developer",
    location: "New Delhi, India",
    email: "kalashagg1234@gmail.com",
    phone: "+91 9205183067",
    website: "https://kalashaggarwal.dev",
    linkedin: "https://linkedin.com/in/kalash-aggarwal-285a3023a",
    github: "https://github.com/kalashaggarwal",
    summary: "A very passionate, young and calm individual with 3 years of experience in Full Stack Development. I have a strong background in Angular, React, JavaScript, HTML, CSS, and TypeScript. I am skilled in Python, specifically in Core Python, Numpy, Pandas, Django, Django Rest Framework, as well as MySQL, PostgreSQL, and MongoDB. I have worked on several innovative tools and have a track record of creating successful integrations and BI tools for ERP software. Recently, I've been contributing to building a recruitment platform at ScalaCode. My future goal is to become an Entrepreneur."
  },

  about: {
    bio: "I am a dedicated Full Stack Developer with 3 years of experience creating innovative web applications and ERP solutions. I specialize in Python, Django, React, and modern web technologies. My passion lies in building scalable applications that solve real-world problems, from recruitment platforms to healthcare solutions. I enjoy tackling complex challenges and turning ideas into reality through clean, efficient code.",
    highlights: [
      "3+ years Full Stack Development experience",
      "Expert in Python & Django ecosystem",
      "Strong React & Django skills",
      "ERP software integration specialist",
      "Entrepreneurial mindset"
    ],
    interests: [
      "Startup Development",
      "ERP Solutions",
      "Healthcare Technology",
      "Recruitment Tech",
      "Data Pipeline Architecture"
    ]
  },

  experience: [
    {
      id: "exp1",
      company: "ScalaCode",
      position: "Software Engineer",
      startDate: "Feb 2025",
      endDate: "Present",
      location: "Noida, India",
      description: [
        "Leading the development of a customized recruitment portal called TalentMatched aimed at streamlining hiring workflows",
        "Working across the full stack using Django Rest Framework and React, implementing dynamic job matching logic and resume parsing integrations",
        "Designing efficient data pipelines for processing and matching candidate profiles using Celery and Redis",
        "Integrating multi-tenant architecture and advanced filter logic for recruiters and jobseekers",
        "Contributing to frontend components using CoreUI, enhancing user experience with responsive dashboards and real-time updates",
        "Implementing Server-Sent Events (SSE) for real-time notifications to recruiters when new applicants are received"
      ],
      technologies: ["Django", "Django Rest Framework", "React", "Celery", "Redis", "CoreUI", "SSE"],
      achievements: [
        "Built complete recruitment platform from scratch",
        "Implemented real-time notification system",
        "Designed multi-tenant architecture"
      ]
    },
    {
      id: "exp2",
      company: "Advanced Idea Analytics",
      position: "Founding Engineer",
      startDate: "Nov 2024",
      endDate: "Jan 2025",
      location: "Remote",
      description: [
        "Designed and developed a health card system enabling users to access their medical reports and history via QR code",
        "Delivered end-to-end system architecture, development, and deployment, ensuring compliance with healthcare standards",
        "Worked with stakeholders to deliver secure, scalable digital healthcare solutions"
      ],
      technologies: ["Python", "Django", "React", "QR Code Integration", "Healthcare"],
      achievements: [
        "Built complete healthcare solution",
        "Ensured healthcare compliance standards",
        "Implemented QR-based medical record access"
      ]
    },
    {
      id: "exp3",
      company: "Hostbooks Limited",
      position: "Full Stack Developer",
      startDate: "Jun 2022",
      endDate: "Nov 2024",
      location: "Gurgaon, India",
      description: [
        "Developed and maintained software including a comprehensive reporting tool for Hostbooks accounting software",
        "Built features like balance sheet, trial balance, profit and loss statements, and pivot table reporting modules",
        "Played a key role in ERP software integrations using Django, Angular, and MySQL"
      ],
      technologies: ["Django", "Angular", "MySQL", "ERP Systems", "Reporting Tools"],
      achievements: [
        "Built comprehensive accounting reporting system",
        "Developed multiple financial statement modules",
        "Led ERP integration projects for 2+ years"
      ]
    }
  ],

  projects: [
    {
      id: "proj1",
      name: "TalentMatched - Recruitment Platform",
      description: "A comprehensive recruitment portal with dynamic job matching, resume parsing, and real-time notifications. Features multi-tenant architecture and advanced filtering for recruiters and job seekers.",
      technologies: ["Django Rest Framework", "React", "Celery", "Redis", "CoreUI", "SSE"],
      githubUrl: "https://github.com/kalashaggarwal/talentmatched",
      liveUrl: "https://talentmatched.com",
      featured: true
    },
    {
      id: "proj2",
      name: "QR Health Card System",
      description: "Digital healthcare solution enabling patients to access medical reports and history via QR codes. Built with healthcare compliance standards and secure data handling.",
      technologies: ["Django", "React", "QR Code API", "Healthcare APIs", "PostgreSQL"],
      githubUrl: "https://github.com/kalashaggarwal/health-card",
      liveUrl: "https://www.advancedideaanalytics.com/website",
      featured: false
    },
    {
      id: "proj3",
      name: "Hostbooks Reporting Suite",
      description: "Comprehensive accounting and financial reporting tool with balance sheet, P&L statements, and pivot table functionality. Integrated with ERP systems for seamless data flow.",
      technologies: ["Django", "Angular", "MySQL", "Chart.js", "PDF Generation"],
      githubUrl: "https://github.com/kalashaggarwal/hostbooks-reports",
      liveUrl: "https://hostbooks.com",
      featured: false
    }
  ],

  skills: [
    {
      category: "Frontend",
      skills: ["React.js", "Angular", "JavaScript", "TypeScript", "HTML", "CSS"],
      proficiency: 90
    },
    {
      category: "Backend",
      skills: ["Python", "Django", "Django Rest Framework", "FastAPI", "REST APIs"],
      proficiency: 95
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      proficiency: 85
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "Docker", "Celery", "Kafka"],
      proficiency: 80
    },
    {
      category: "Data & Analytics",
      skills: ["Core Python", "Pandas", "Numpy", "Data Pipelines"],
      proficiency: 85
    }
  ],

  education: [
    {
      id: "edu1",
      institution: "IGNOU, Rajdhani College",
      degree: "Bachelor's of Computer Applications",
      field: "Computer Applications",
      startDate: "2022",
      endDate: "2025 (Expected)",
      location: "New Delhi, India",
      gpa: "",
      honors: [],
      relevantCoursework: [
        "Programming Fundamentals",
        "Database Management Systems",
        "Web Technologies",
        "Software Engineering",
        "Data Structures"
      ]
    },
    {
      id: "edu2",
      institution: "GBSSS No.3 Najafgarh",
      degree: "12th Standard",
      field: "Science",
      startDate: "2021",
      endDate: "2022",
      location: "New Delhi, India",
      gpa: "",
      honors: [],
      relevantCoursework: []
    }
  ],

  contact: {
    email: "kalashagg1234@gmail.com",
    phone: "+91 9205183067",
    location: "New Delhi, India",
    linkedin: "https://linkedin.com/in/kalash-aggarwal-285a3023a",
    github: "https://github.com/kalashaggarwal",
    website: "https://kalashaggarwal.dev"
  },

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/kalashaggarwal",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/kalash-aggarwal-285a3023a",
      icon: "linkedin"
    },
    {
      platform: "Email",
      url: "mailto:kalashagg1234@gmail.com",
      icon: "mail"
    }
  ]
};
