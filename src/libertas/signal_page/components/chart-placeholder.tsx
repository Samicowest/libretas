interface ChartPlaceholderProps {
  title: string;
  subtitle: string;
}

const ChartPlaceholder = ({ title, subtitle }: ChartPlaceholderProps) => {
  return (
    <div className="w-full h-[300px] mt-4 bg-[#f8f9fa] rounded flex items-center justify-center">
      <div className="text-[#95a5a6] text-lg text-center">
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
    </div>
  );
};

export default ChartPlaceholder;
