import ValueCard from "@/components/ValueCard";
import {
  BriefcaseIcon,
  ChartBarIcon,
  Cog8ToothIcon,
  PresentationChartLineIcon,
  PuzzlePieceIcon,
  ServerStackIcon,
  ShareIcon,
  UsersIcon
} from "@heroicons/react/24/outline";

const values = [
  {
    id: 1,
    icon: <BriefcaseIcon className="m-4 size-10" />,
    title: "Program & Project Leadership",
    description:
      "Experienced in driving cross-functional programs, managing timelines, mitigating risk, and aligning technical execution with business goals. Skilled in Agile, Scrum, and stakeholder communication.",
  },
  {
    id: 2,
    icon: <PuzzlePieceIcon className="m-4 size-10" />,
    title: "Full-Stack Application Development",
    description:
      "Builds scalable web applications using React, Next.js, Node.js, and REST APIs. Comfortable across frontend and backend with a strong focus on usability and performance.",
  },
  {
    id: 3,
    icon: <Cog8ToothIcon className="m-4 size-10" />,
    title: "Technical Problem Solving",
    description:
      "Resolves complex technical challenges through structured analysis and practical solutions. Known for balancing business priorities with clean architecture and maintainable code.",
  },
  {
    id: 4,
    icon: <UsersIcon className="m-4 size-10" />,
    title: "Team Collaboration & Communication",
    description:
      "Thrives in cross-functional teams. Adept at translating technical concepts into business language for stakeholders, and facilitating alignment across engineering, product, and operations.",
  },
  {
    id: 5,
    icon: <ChartBarIcon className="m-4 size-10" />,
    title: "Process Improvement & Automation",
    description:
      "Streamlines development and IT workflows through documentation, automation (CI/CD, cron jobs, scripts), and systems integration—reducing manual work and improving efficiency.",
  },
  {
    id: 6,
    icon: <ServerStackIcon className="m-4 size-10" />,
    title: "Tech Stack Versatility",
    description:
      "Hands-on experience with tools like TypeScript, FastAPI, GitLab CI/CD, AWS, Jira, Confluence, and more. Adaptable to new technologies and development environments.",
  },
  {
    id: 7,
    icon: <ShareIcon className="m-4 size-10" />,
    title: "Stakeholder Engagement",
    description:
      "Build trusted relationships with executives, product owners, clients, and partners. Excellent at eliciting requirements, managing expectations, and delivering solutions that align with business priorities while preserving technical integrity.",
  },
  {
    id: 8,
    icon: <PresentationChartLineIcon className="m-4 size-10" />,
    title: "System Design Thinking",
    description:
      "Design robust, scalable architectures from the ground up. Account for performance, security, data flow, and maintainability, while breaking down monoliths and envisioning microservices and APIs for evolving applications.",
  },
];

export default function Value() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
      {values.map((item) => {
        return (
          <ValueCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
}
