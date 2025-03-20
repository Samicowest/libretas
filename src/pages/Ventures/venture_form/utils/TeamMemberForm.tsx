import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { SkillsSelect } from "./SkillsSelect";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface TeamMemberFormProps {
  index: number;
  skillsList: string[];
  onAddSkill: (skill: string) => void;
  onRemove: () => void;
}

export const TeamMemberForm: React.FC<TeamMemberFormProps> = ({
  index,
  skillsList,
  onAddSkill,
  onRemove,
}) => {
  const { control, register, setValue } = useFormContext(); // Access form context

  // Use useWatch to watch the skills field
  const skills = useWatch({
    control,
    name: `teamMembers.${index}.skills`,
  });

  return (
    <div className="border p-4 rounded-lg">
      {/* Name */}
      <div>
        <Label>Name</Label>
        <Input {...register(`teamMembers.${index}.name`)} />
      </div>

      {/* Email */}
      <div>
        <Label>Email</Label>
        <Input {...register(`teamMembers.${index}.email`)} />
      </div>

      {/* Description */}
      <div>
        <Label>Description</Label>
        <Textarea {...register(`teamMembers.${index}.description`)} />
      </div>

      {/* Role */}
      <div>
        <Label>Role</Label>
        <Input {...register(`teamMembers.${index}.role`)} />
      </div>

      {/* Skills */}
      <div>
        <Label>Skills</Label>
        <SkillsSelect
          value={skills || []}
          onChange={(selectedSkills) =>
            setValue(`teamMembers.${index}.skills`, selectedSkills)
          }
          skillsList={skillsList}
          onAddSkill={onAddSkill}
        />
      </div>

      {/* Remove Button */}
      <button type="button" onClick={onRemove}>
        Remove Team Member
      </button>
    </div>
  );
};
