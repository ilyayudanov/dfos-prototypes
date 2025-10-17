"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Components() {
  const components = [
    {
      name: "Button",
      description: "Interactive buttons with multiple variants",
      path: "/components/ui/button.tsx",
      variants: ["default", "outline", "secondary", "ghost", "destructive"]
    },
    {
      name: "Card",
      description: "Flexible content containers",
      path: "/components/ui/card.tsx",
      variants: ["basic", "with-header", "interactive"]
    },
    {
      name: "Input",
      description: "Form input fields with validation support",
      path: "/components/ui/input.tsx",
      variants: ["text", "email", "password", "number"]
    },
    {
      name: "Label",
      description: "Accessible form labels",
      path: "/components/ui/label.tsx",
      variants: ["default"]
    },
    {
      name: "Badge",
      description: "Small status indicators and tags",
      path: "/components/ui/badge.tsx",
      variants: ["default", "secondary", "outline", "destructive"]
    },
    {
      name: "Separator",
      description: "Visual dividers for content sections",
      path: "/components/ui/separator.tsx",
      variants: ["horizontal", "vertical"]
    },
    {
      name: "Form",
      description: "Form handling with validation",
      path: "/components/ui/form.tsx",
      variants: ["basic", "with-validation"]
    },
    {
      name: "EmailDomainSuggestions",
      description: "Interactive email domain suggestion chips",
      path: "/components/ui/email-domain-suggestions.tsx",
      variants: ["default", "custom-domains"]
    },
    {
      name: "ViewportControls",
      description: "Mobile/desktop preview mode switcher",
      path: "/components/ui/viewport-controls.tsx",
      variants: ["fixed", "relative"]
    },
    {
      name: "OTPInput",
      description: "One-time password input with 6 individual fields",
      path: "/components/ui/otp-input.tsx",
      variants: ["default", "custom-length"]
    },
    {
      name: "Switch",
      description: "Toggle switches for boolean settings",
      path: "/components/ui/switch.tsx",
      variants: ["default", "disabled"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-4">
            <Link href="/">← Back to Prototypes</Link>
          </Button>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Component Library
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Browse all available UI components for DFOS prototypes
            </p>
            <Button asChild>
              <Link href="/design-system">
                View Full Design System
              </Link>
            </Button>
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <Card key={component.name} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{component.name}</CardTitle>
                  <Badge variant="outline">{component.variants.length} variants</Badge>
                </div>
                <CardDescription>{component.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Variants:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {component.variants.map((variant) => (
                      <Badge key={variant} variant="secondary" className="text-xs">
                        {variant}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    File Location:
                  </h4>
                  <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    {component.path}
                  </code>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/design-system">
                    View Examples
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>ShadCN UI Components</CardTitle>
              <CardDescription>
                All components are built on top of ShadCN UI with Tailwind CSS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                These components are fully customizable, accessible, and follow modern design principles. 
                They can be easily extended or modified to meet specific project requirements.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                    ShadCN UI Docs
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                    Tailwind CSS Docs
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
