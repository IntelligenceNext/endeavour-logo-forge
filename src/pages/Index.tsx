
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Logo from '@/components/Logo';
import ColorPicker from '@/components/ColorPicker';
import FontSelector from '@/components/FontSelector';
import RangeInput from '@/components/RangeInput';
import { exportLogo, exportLogoAsSVG } from '@/utils/exportLogo';

const Index = () => {
  // Logo state - updated to match Endeavour Sciences logo
  const [firstText, setFirstText] = useState('Endeavour');
  const [secondText, setSecondText] = useState('sciences');
  const [firstColor, setFirstColor] = useState('#FF6B00');  // Orange color
  const [secondColor, setSecondColor] = useState('#5DC400');  // Green color
  const [triangleColor, setTriangleColor] = useState('#FF6B00');  // Orange color
  const [fontSize, setFontSize] = useState(48);
  const [triangleSize, setTriangleSize] = useState(80);
  const [fontFamily, setFontFamily] = useState('Arial, sans-serif');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [showTriangle, setShowTriangle] = useState(true);

  const handleExport = () => {
    exportLogo('logo-preview', `${firstText}${secondText}-logo`);
    toast.success('Logo exported as PNG successfully!');
  };

  const handleExportSVG = () => {
    exportLogoAsSVG('logo-preview', `${firstText}${secondText}-logo`);
    toast.success('Logo exported as SVG successfully!');
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
    setShowTriangle(true);
    toast.info('Settings reset to default');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              <h1 className="text-2xl font-bold">Endeavour Sciences Logo Forge</h1>
            </div>
            <Menubar className="hidden md:flex">
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem onClick={handleExport}>Export as PNG</MenubarItem>
                  <MenubarItem onClick={handleExportSVG}>Export as SVG</MenubarItem>
                  <MenubarItem onClick={resetToDefault}>Reset to Default</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Help</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem onClick={() => toast.info('Endeavour Sciences Logo Forge v1.0')}>
                    About
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
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
                  showTriangle={showTriangle}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 justify-between">
              <Button variant="outline" onClick={resetToDefault}>Reset</Button>
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleExportSVG}>Export SVG</Button>
                <Button onClick={handleExport}>Export PNG</Button>
              </div>
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
                <div className="flex items-center space-x-2 pt-2">
                  <input
                    type="checkbox"
                    id="showTriangle"
                    checked={showTriangle}
                    onChange={(e) => setShowTriangle(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <Label htmlFor="showTriangle">Show Triangle</Label>
                </div>
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
                <CardTitle>About Endeavour Sciences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Endeavour Sciences Private Limited offers digital marketing and social media solutions, 
                  including SMM, SEO, campaign management, and lead generation. 
                  The company also provides recruitment, staffing, and business consulting services.
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
