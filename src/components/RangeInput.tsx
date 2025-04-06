
import React from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';

interface RangeInputProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({ label, min, max, step, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <div className="flex items-center gap-3">
        <Slider
          min={min}
          max={max}
          step={step}
          value={[value]}
          onValueChange={(values) => onChange(values[0])}
          className="flex-1"
        />
        <Input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-20"
        />
      </div>
    </div>
  );
};

export default RangeInput;
