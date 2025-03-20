import React from "react";
import Select, { MultiValue } from "react-select";

interface SkillsSelectProps {
  value: string[];
  onChange: (skills: string[]) => void;
  skillsList: string[];
  onAddSkill: (skill: string) => void;
}

export const SkillsSelect: React.FC<SkillsSelectProps> = ({
  value,
  onChange,
  skillsList,
  onAddSkill,
}) => {
  return (
    <Select
      isMulti
      options={skillsList.map((skill) => ({ value: skill, label: skill }))}
      onInputChange={(inputValue) => {
        if (inputValue && !skillsList.includes(inputValue)) {
          onAddSkill(inputValue);
        }
      }}
      onChange={(
        selectedOptions: MultiValue<{ value: string; label: string }>
      ) => {
        onChange(selectedOptions.map((option) => option.value));
      }}
      value={value.map((skill) => ({ value: skill, label: skill }))}
    />
  );
};
