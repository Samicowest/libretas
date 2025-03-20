import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const AboutSection = () => {
  return (
    <Card className="mb-8 mt-4">
      <CardHeader>
        <CardTitle>About Project</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">
          We are a dedicated team of professionals working together to create
          innovative solutions for our clients. Our diverse skill set and
          collaborative approach enable us to tackle complex challenges and
          deliver exceptional results.
        </p>
        <div className="py-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Visit <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
