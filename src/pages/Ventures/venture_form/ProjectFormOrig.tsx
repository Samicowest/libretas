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
import Select, { MultiValue } from "react-select";
import RegHeader from "@/libertas/RegHeader";

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

const ProjectForm: React.FC = () => {
  const [skillsList, setSkillsList] = useState<string[]>([
    "React",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "Python",
  ]);

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
    console.log("Form Data Submitted:", data); // Log the submitted data
    alert("Form submitted successfully!"); // Display a success message
  };

  return (
    <div className="max-w-xl mx-auto pt-32 p-4">
      <RegHeader />
      <div className="shadow-blue-300 p-4 shadow-md ">
        <h2 className="text-3xl font-bold text-center text-primary my-4 md:my-8">
          VENTURE REGISTRATION
        </h2>
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
                    <Textarea
                      placeholder="Enter project description"
                      {...field}
                    />
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

            {/* Team Members */}
            <div className="space-y-4">
              {fields.map((field, index) => (
                <div key={field.id} className="border p-4 rounded-lg">
                  <FormField
                    control={form.control}
                    name={`teamMembers.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Name</Label>
                        <FormControl>
                          <Input placeholder="Enter name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`teamMembers.${index}.email`}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Email</Label>
                        <FormControl>
                          <Input placeholder="Enter email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`teamMembers.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Description</Label>
                        <FormControl>
                          <Textarea
                            placeholder="Enter description"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`teamMembers.${index}.role`}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Role</Label>
                        <FormControl>
                          <Input placeholder="Enter role" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`teamMembers.${index}.image`}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Upload Image</Label>
                        <FormControl>
                          <Input
                            type="file"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              field.onChange(file);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`teamMembers.${index}.skills`}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Skills</Label>
                        <FormControl>
                          <Select
                            isMulti
                            options={skillsList.map((skill) => ({
                              value: skill,
                              label: skill,
                            }))}
                            onInputChange={(inputValue: string) => {
                              if (
                                inputValue &&
                                !skillsList.includes(inputValue)
                              ) {
                                setSkillsList([...skillsList, inputValue]);
                              }
                            }}
                            onChange={(
                              selectedOptions: MultiValue<{
                                value: string;
                                label: string;
                              }>
                            ) => {
                              field.onChange(
                                selectedOptions.map((option) => option.value)
                              );
                            }}
                            value={field.value.map((skill: string) => ({
                              value: skill,
                              label: skill,
                            }))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="button" onClick={() => remove(index)}>
                    Remove Team Member
                  </Button>
                </div>
              ))}

              <Button
                type="button"
                onClick={() =>
                  append({
                    name: "",
                    email: "",
                    description: "",
                    role: "",
                    image: undefined,
                    skills: [],
                  })
                }
              >
                Add Team Member
              </Button>
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProjectForm;
