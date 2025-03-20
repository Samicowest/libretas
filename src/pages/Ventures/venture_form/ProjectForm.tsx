import React, { useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { TeamMemberForm } from "./utils/TeamMemberForm";
import { DEFAULT_SKILLS } from "./lib/constant";

// Define the schema for the project form
const projectSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  projectDescription: z.string().min(1, "Project description is required"),
  projectLink: z.string().url("Invalid URL"),
  projectImages: z.array(z.instanceof(File)).optional(),
  teamMembers: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email"),
      description: z.string().min(1, "Description is required"),
      role: z.string().min(1, "Role is required"),
      image: z.instanceof(File).optional(),
      skills: z.array(z.string()).min(1, "At least one skill is required"),
    })
  ),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

const ProjectFormOrig: React.FC = () => {
  const [skillsList, setSkillsList] = useState<string[]>(DEFAULT_SKILLS);

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectName: "",
      projectDescription: "",
      projectLink: "",
      projectImages: [],
      teamMembers: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "teamMembers",
  });

  const onSubmit: SubmitHandler<ProjectFormValues> = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Form submitted successfully!");
  };

  // Define the type for the onAddSkill function
  const onAddSkill = (skill: string) => {
    if (!skillsList.includes(skill)) {
      setSkillsList((prevSkills) => [...prevSkills, skill]);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Project Name */}
        <FormField
          control={form.control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <Label>Project Name</Label>
              <FormControl>
                <Input placeholder="Enter project name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Project Description */}
        <FormField
          control={form.control}
          name="projectDescription"
          render={({ field }) => (
            <FormItem>
              <Label>Project Description</Label>
              <FormControl>
                <Textarea placeholder="Enter project description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Project Link */}
        <FormField
          control={form.control}
          name="projectLink"
          render={({ field }) => (
            <FormItem>
              <Label>Project Link</Label>
              <FormControl>
                <Input placeholder="Enter project link" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Project Images */}
        <FormField
          control={form.control}
          name="projectImages"
          render={({ field }) => (
            <FormItem>
              <Label>Upload Project Images</Label>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []);
                    field.onChange(files);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {fields.map((field, index) => (
          <TeamMemberForm
            key={field.id}
            index={index}
            skillsList={skillsList}
            onAddSkill={onAddSkill}
            onRemove={() => remove(index)}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ProjectFormOrig;
