interface ExternalAnalysisCardProps {
  icon: string;
  title: string;
  description: string;
}

const ExternalAnalysisCard = ({
  icon,
  title,
  description,
}: ExternalAnalysisCardProps) => {
  return (
    <div className="bg-[#f8f9fa] rounded p-4 mt-4">
      <div className="flex justify-between items-center mb-3">
        <div className="font-medium flex items-center">
          <span className="mr-2">{icon}</span>
          {title}
        </div>
        <div className="text-sm text-[#3498db] cursor-pointer">
          View Original
        </div>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default ExternalAnalysisCard;
