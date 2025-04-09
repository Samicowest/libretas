import ExternalAnalysisCard from "./external-analysis-card";
import { ExternalAnalysis } from "@/types/signalTypes";

interface AnalysisSectionProps {
  content: string[];
  externalAnalyses: ExternalAnalysis[];
}

const AnalysisSection = ({
  content,
  externalAnalyses,
}: AnalysisSectionProps) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Analysis</h3>
      <div className="leading-7 text-[#2c3e50]">
        {content.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      {externalAnalyses.map((analysis, index) => (
        <ExternalAnalysisCard
          key={index}
          icon={analysis.icon}
          title={analysis.title}
          description={analysis.description}
        />
      ))}
    </div>
  );
};

export default AnalysisSection;
