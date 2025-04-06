
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import Logo from '@/components/Logo';
import ColorPicker from '@/components/ColorPicker';
import FontSelector from '@/components/FontSelector';
import RangeInput from '@/components/RangeInput';
import { exportLogo } from '@/utils/exportLogo';

const Index = () => {
  // Logo state
  const [firstText, setFirstText] = useState('Endeavour');
  const [secondText, setSecondText] = useState('sciences');
  const [firstColor, setFirstColor] = useState('#FF6B00');
  const [secondColor, setSecondColor] = useState('#5DC400');
  const [triangleColor, setTriangleColor] = useState('#FF6B00');
  const [fontSize, setFontSize] = useState(48);
  const [triangleSize, setTriangleSize] = useState(80);
  const [fontFamily, setFontFamily] = useState('Arial, sans-serif');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const handleExport = () => {
    exportLogo('logo-preview', `${firstText}${secondText}-logo`);
    toast.success('Logo exported successfully!');
  };

  const resetToDefault = () => {
    setFirstText('Endeavour');
    setSecondText('sciences');
    setFirstColor('#FF6B00');
    setSecondColor('#5DC400');
    setTriangleColor('#FF6B00');
    setFontSize(48);
    setTriangleSize(80);
    setFontFamily('Arial, sans-serif');
    setBackgroundColor('#FFFFFF');
    toast.info('Settings reset to default');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-endeavour-orange rounded-full"></div>
              <h1 className="text-2xl font-bold">Endeavour Sciences Logo Forge</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* Logo Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Logo Preview</CardTitle>
              <CardDescription>See how your logo looks with the current settings</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center min-h-[300px] transition-all duration-300 relative" style={{ backgroundColor }}>
              <div id="logo-preview" className="p-8">
                <Logo
                  firstText={firstText}
                  secondText={secondText}
                  firstColor={firstColor}
                  secondColor={secondColor}
                  fontSize={fontSize}
                  triangleColor={triangleColor}
                  fontFamily={fontFamily}
                  triangleSize={triangleSize}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={resetToDefault}>Reset</Button>
              <Button onClick={handleExport}>Export Logo</Button>
            </CardFooter>
          </Card>

          {/* Controls */}
          <div className="space-y-6">
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="text">Text</TabsTrigger>
                <TabsTrigger value="colors">Colors</TabsTrigger>
                <TabsTrigger value="styling">Styling</TabsTrigger>
              </TabsList>
              
              <TabsContent value="text" className="space-y-4 p-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="firstText">First Text</Label>
                    <Input
                      id="firstText"
                      value={firstText}
                      onChange={(e) => setFirstText(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="secondText">Second Text</Label>
                    <Input
                      id="secondText"
                      value={secondText}
                      onChange={(e) => setSecondText(e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="colors" className="space-y-4 p-4">
                <ColorPicker
                  label="First Text Color"
                  value={firstColor}
                  onChange={setFirstColor}
                />
                <ColorPicker
                  label="Second Text Color"
                  value={secondColor}
                  onChange={setSecondColor}
                />
                <ColorPicker
                  label="Triangle Color"
                  value={triangleColor}
                  onChange={setTriangleColor}
                />
                <ColorPicker
                  label="Background Color"
                  value={backgroundColor}
                  onChange={setBackgroundColor}
                />
              </TabsContent>
              
              <TabsContent value="styling" className="space-y-4 p-4">
                <FontSelector
                  value={fontFamily}
                  onChange={setFontFamily}
                />
                <RangeInput
                  label="Font Size"
                  min={12}
                  max={120}
                  step={1}
                  value={fontSize}
                  onChange={setFontSize}
                />
                <RangeInput
                  label="Triangle Size"
                  min={20}
                  max={200}
                  step={1}
                  value={triangleSize}
                  onChange={setTriangleSize}
                />
              </TabsContent>
            </Tabs>

            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  This logo forge allows you to create customized logos for Endeavour Sciences Private Limited. 
                  Adjust the settings to create your perfect logo, then export it for use in your projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-6 bg-white border-t">
        <div className="container mx-auto">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Endeavour Sciences Private Limited. All rights reserved.
          </p>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
};

export default Index;
