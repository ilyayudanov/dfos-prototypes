import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const prototypes = [
    {
      title: "Sign Up Flow",
      description: "Complete user registration and onboarding experience",
      href: "/prototypes/signup",
      status: "In Progress",
      features: ["Multi-step form", "Email verification", "Profile setup"]
    },
    {
      title: "Dashboard",
      description: "Main user interface and navigation system",
      href: "/prototypes/dashboard",
      status: "Planning",
      features: ["Data visualization", "Quick actions", "Navigation"]
    },
    {
      title: "User Profile",
      description: "Profile management and settings interface",
      href: "/prototypes/profile",
      status: "Planning",
      features: ["Profile editing", "Settings", "Preferences"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            DFOS Prototypes
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Product Development & Design System
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/design-system">
                View Design System
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/components">
                Browse Components
              </Link>
            </Button>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Prototypes Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
            Current Prototypes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prototypes.map((prototype) => (
              <Card key={prototype.title} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{prototype.title}</CardTitle>
                    <Badge 
                      variant={prototype.status === "In Progress" ? "default" : "secondary"}
                    >
                      {prototype.status}
                    </Badge>
                  </div>
                  <CardDescription>{prototype.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      {prototype.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={prototype.href}>
                      View Prototype
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Design System Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Design System
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            All UI components and design patterns used across prototypes are documented 
            and maintained in our design system for consistency and reusability.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/design-system">
                Explore Design System
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/design-system/tokens">
                Design Tokens
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/design-system/guidelines">
                Guidelines
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
