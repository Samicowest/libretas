import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Globe, ArrowRight } from "lucide-react";
import { companiesData } from "@/utils/data";

// Define TypeScript interface for company data

const VentureSection = () => {
  // Sample company data - replace with your actual data
  const companies = companiesData;

  return (
    <section id="ventures" className="py-12 bg-gray-100 ">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl text-black pt-8 font-bold text-center mb-16">
          VENTURES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company) => (
            <Card key={company.id} className="flex flex-col">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <img
                  src={company.imageUrl}
                  alt={`${company.name} office`}
                  className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {company.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {company.industry}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-sm text-gray-600 mb-4">
                  {company.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{company.employeeCount} Team Member</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Globe className="h-4 w-4 mr-2" />
                    <span>{company.location}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-4">
                <Link to={`/ventures/${company.companyId}`} className="w-full">
                  <Button className="w-full flex items-center justify-center gap-2">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VentureSection;
