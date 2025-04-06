
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const EmployeeHRMS = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16 min-h-[70vh]">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Employee HRMS Portal</CardTitle>
              <CardDescription className="text-center">
                Sign in to access your employee portal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="employee-id">Employee ID</label>
                  <Input id="employee-id" type="text" placeholder="EMP12345" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="password">Password</label>
                  <Input id="password" type="password" required />
                </div>
                <div className="flex justify-end">
                  <a href="#" className="text-sm text-endeavour-orange hover:underline">
                    Need help?
                  </a>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-endeavour-orange hover:bg-endeavour-orange/90">
                Access Portal
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EmployeeHRMS;
