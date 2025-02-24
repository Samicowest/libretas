import TeamMemberCard from "./TeamMemberCard";
import { TeamMember } from "./types";
import Img1 from "@/assets/person1.png";
import Img2 from "@/assets/person2.png";
import Img3 from "@/assets/person3.png";
const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "John Doe",
      role: "Lead Developer",
      image: Img1,
      bio: "Full-stack developer with 8 years of experience in web development.",
      email: "john.doe@venture.com",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      projects: ["E-commerce Platform", "CRM System", "Mobile App"],
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UI/UX Designer",
      image: Img2,
      bio: "Creative designer focused on creating intuitive user experiences.",
      email: "jane.smith@venture.com",
      skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
      projects: ["Brand Redesign", "Mobile App UI", "Website Redesign"],
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Product Manager",
      image: Img3,
      bio: "Experienced product manager with a track record of successful launches.",
      email: "mike.johnson@venture.com",
      skills: ["Product Strategy", "Agile", "Data Analysis", "Team Leadership"],
      projects: ["Product Launch", "Market Research", "Team Development"],
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
