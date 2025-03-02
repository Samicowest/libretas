import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TeamMember } from "./types";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <CardTitle className="text-lg">{member.name}</CardTitle>
            <p className="text-gray-500">{member.role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-primary2">View Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] z-[999999]">
            <DialogHeader>
              <DialogTitle>{member.name}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h4 className="font-semibold mb-2">About</h4>
              <p className="text-gray-600 mb-4">{member.bio}</p>

              <h4 className="font-semibold mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-2 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h4 className="font-semibold mb-2">Projects</h4>
              <ul className="list-disc list-inside text-gray-600">
                {member.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>

              <div className="mt-4">
                <p className="text-gray-600">
                  Contact:{" "}
                  <a href={`mailto:${member.email}`} className="text-blue-500">
                    {member.email}
                  </a>
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
