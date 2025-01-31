import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const ProjectGrid = () => {
  // Sample project data - replace with your actual data
  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description:
        "A full-featured online shopping platform built with React and Node.js",
      details:
        "This e-commerce platform includes features such as user authentication, product catalog, shopping cart, and secure payment processing. Built with modern technologies to ensure scalability and performance.",
      link: "https://example.com/ecommerce",
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A collaborative task management solution for teams",
      details:
        "Helps teams organize and track their projects with features like task assignment, progress tracking, and deadline management. Includes real-time updates and team collaboration tools.",
      link: "https://example.com/taskmanager",
    },
    {
      id: 3,
      name: "Analytics Dashboard",
      description: "Data visualization dashboard for business metrics",
      details:
        "Interactive dashboard displaying key business metrics and analytics. Features customizable widgets, real-time data updates, and export capabilities.",
      link: "https://example.com/analytics",
    },
  ];

  return (
    <div className="container mx-auto p-6 py-12">
      <h1 className="text-2xl font-bold mb-8">Our Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-gray-600">{project.description}</p>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">View Details</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{project.name}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="text-gray-600">{project.details}</p>
                    <div className="mt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Visit Project <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Visit <ExternalLink className="w-4 h-4" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
