import {
  Globe,
  Search,
  Users,
  Briefcase,
  ArrowRight,
  Info,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SubNavbar } from "@/utils/SubNavbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const AboutLibetras = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Use 'auto' for instant scrolling
    });
  }, [pathname]);
  return (
    <div className="min-h-screen bg-slate-50">
      <SubNavbar link="about" />
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold">Libertas Alpha</h1>
            <p className="text-xl">
              Transforming Blockchain Innovation into Sustainable Social Impact
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 bg-white">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Info className="h-8 w-8" />
            About Us
          </h2>

          <div className="space-y-8">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700">
                At Libertas Alpha, we stand at the intersection of blockchain
                innovation and societal transformation. As a pioneering
                non-governmental organization, we've reimagined how technology
                can drive sustainable social change through a unique model of
                research, endorsement, and implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To create a world where blockchain technology serves as a
                    catalyst for positive societal change, making transformative
                    solutions accessible to communities worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We identify, validate, and scale breakthrough blockchain
                    initiatives through our distinguished Board of Trustees,
                    transforming promising ideas into profitable ventures that
                    deliver measurable social impact.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Impact Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-medium">Financial Inclusion</p>
                    <p className="text-sm text-gray-600">
                      Economic Empowerment
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-medium">Transparent Governance</p>
                    <p className="text-sm text-gray-600">Systems & Solutions</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-medium">Sustainable Resources</p>
                    <p className="text-sm text-gray-600">
                      Management & Development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Board Overview */}
        <div className="mb-12">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                Board of Trustees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our distinguished Board of Trustees brings together experts in
                blockchain, finance, and social impact to carefully evaluate and
                endorse innovative ventures that align with our mission.
              </p>
            </CardContent>
          </Card>

          {/* Process Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Research
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rigorous evaluation of blockchain solutions with potential for
                  significant societal impact
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Endorsement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strategic selection and backing of promising ventures that
                  meet our criteria
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Global Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Scaling endorsed solutions for worldwide implementation and
                  social benefit
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-blue-50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Join Our Mission</h3>
                <p className="text-gray-600">
                  Whether you're a blockchain innovator, potential partner, or
                  supporter of social change, there's a place for you in our
                  ecosystem.
                </p>
              </div>
              <button className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutLibetras;
