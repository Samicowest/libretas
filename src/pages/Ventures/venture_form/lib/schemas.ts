import { z } from "zod";

export const projectSchema = z.object({
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

export type ProjectFormValues = z.infer<typeof projectSchema>;
