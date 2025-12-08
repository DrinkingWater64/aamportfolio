
export const cvData = {
    personalInfo: {
        name: "ABDULLAH AL MUTI",
        location: "Rampura, Dhaka",
        phone: "+8801713713405",
        email: "aamuti64@gmail.com",
        links: {
            linkedin: "https://www.linkedin.com/in/abdullah-al-muti-26104b1b9/",
            github: "https://github.com/DrinkingWater64"
        }
    },
    experience: [
        {
            company: "Streams Tech, Ltd.",
            role: "Associate Software Engineer",
            period: "August 2024 – Present",
            description: "Primarily worked as a backend developer, contributed to multiple projects and RnDs.",
            projects: [
                {
                    name: "SpendPlan",
                    url: "https://www.spendplan.com/",
                    details: [
                        "Engineered a custom type-safe RedisJSON query engine by translating LINQ expressions to JSONPath at runtime.",
                        "Improved query response time by introducing caching in the query custom engine.",
                        "Eliminated raw string queries, achieving compile-time safety and faster query development.",
                        "Improved maintainability significantly by refactoring legacy backend modules."
                    ]
                },
                {
                    name: "Flat Suite",
                    url: "https://flatsuite.com/",
                    details: [
                        "Architected and implemented core backend features (C# .NET 8, PostgreSQL, Redis).",
                        "Built pluggable AWS S3/local media storage using Factory pattern and reusable rate-limited SMS OTP service.",
                        "Developed Blazor Server admin panel for subscription and coupon management.",
                        "Prototyped AI-driven universal data importer for legacy migration using OpenAI, Deepseek, and Landing AI."
                    ]
                }
            ]
        }
    ],
    education: [
        {
            institution: "Islamic University of Technology (IUT)",
            location: "Gazipur, Bangladesh",
            degree: "B.Sc. in Software Engineering",
            period: "January 2020 – June 2024"
        }
    ],
    projects: [
        {
            name: "ProjViz – Real-Time 3D Room Color Visualizer",
            type: "Solo R&D project",
            description: "Demonstrating high-performance WebGL capabilities.",
            details: [
                "Built a photorealistic browser-based visualizer with instant material/color changes using Three.js.",
                "Achieved constant 60 FPS on laptops and smooth performance on mobile devices."
            ]
        },
        {
            name: "DSE Stock Scraper – Real-Time Bangladesh Stock Market Data Pipeline",
            type: "Personal project",
            description: "Forked & modernized an outdated scraper.",
            details: [
                "Updated and migrated legacy Node.js scraper to latest Node 20+ LTS and modern async/await patterns.",
                "Dockerized the entire pipeline for reproducible, one-command deployment."
            ]
        },
        {
            name: "Spana – Static Code Metrics Analyzer for C#",
            type: "University term project",
            details: [
                "Developed a Roslyn Source Generator tool that automatically computes Cyclomatic Complexity, LOC, DIT, CBO, LCOM, God Methods, and God Classes.",
                "Delivered per-class and project-wide reports via console output."
            ]
        }
    ],
    skills: {
        programming: ["C#", "Java", "JavaScript", "Node.js", "Python", "GO", "SQL"],
        backend: [".NET 8", "ASP.NET Core", "EF Core", "Redis", "PostgreSQL", "Blazor"],
        tools: ["Docker", "Git", "Linux"]
    }
};
