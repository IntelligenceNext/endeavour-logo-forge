
import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FontSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const fonts = [
  "Arial, sans-serif",
  "Helvetica, sans-serif",
  "Verdana, sans-serif",
  "Trebuchet MS, sans-serif",
  "Gill Sans, sans-serif",
  "Noto Sans, sans-serif",
  "Avenir, sans-serif",
  "Futura, sans-serif",
  "Century Gothic, sans-serif",
  "Times New Roman, serif",
  "Georgia, serif",
  "Garamond, serif",
  "Courier New, monospace",
  "Roboto, sans-serif",
  "Open Sans, sans-serif",
];

const FontSelector: React.FC<FontSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>Font Family</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select font" />
        </SelectTrigger>
        <SelectContent>
          {fonts.map((font) => (
            <SelectItem key={font} value={font} style={{ fontFamily: font }}>
              {font.split(',')[0]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FontSelector;
