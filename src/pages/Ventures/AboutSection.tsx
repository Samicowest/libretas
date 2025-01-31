import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>About Our Team</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">
          We are a dedicated team of professionals working together to create
          innovative solutions for our clients. Our diverse skill set and
          collaborative approach enable us to tackle complex challenges and
          deliver exceptional results.
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
