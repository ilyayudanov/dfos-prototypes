"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { EmailDomainSuggestions } from "@/components/ui/email-domain-suggestions";
import { ViewportControls } from "@/components/ui/viewport-controls";
import { OTPInput } from "@/components/ui/otp-input";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function DesignSystem() {
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
              DFOS Design System
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              A comprehensive collection of reusable components, patterns, and guidelines
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {/* Colors Section */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
              Color System
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-full h-16 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Background</p>
                <p className="text-xs text-slate-500">slate-50/900</p>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-slate-900 dark:bg-slate-100 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Foreground</p>
                <p className="text-xs text-slate-500">slate-900/100</p>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-blue-600 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Primary</p>
                <p className="text-xs text-slate-500">blue-600</p>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-slate-200 dark:bg-slate-700 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Muted</p>
                <p className="text-xs text-slate-500">slate-200/700</p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Typography Section */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
              Typography
            </h2>
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                  Heading 1 - 4xl Bold
                </h1>
                <p className="text-sm text-slate-500">Used for main page titles</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  Heading 2 - 2xl Semibold
                </h2>
                <p className="text-sm text-slate-500">Used for section headings</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-900 dark:text-slate-100">
                  Heading 3 - xl Medium
                </h3>
                <p className="text-sm text-slate-500">Used for card titles</p>
              </div>
              <div>
                <p className="text-base text-slate-700 dark:text-slate-300">
                  Body Text - base Regular
                </p>
                <p className="text-sm text-slate-500">Used for main content</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Small Text - sm Regular
                </p>
                <p className="text-sm text-slate-500">Used for secondary information</p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Components Section */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
              Components
            </h2>
            
            {/* Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">
                Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button>Primary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="destructive">Destructive Button</Button>
              </div>
            </div>

            {/* Form Elements */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">
                Form Elements
              </h3>
              <div className="max-w-sm space-y-4">
                <div>
                  <Label htmlFor="sample-input">Sample Input</Label>
                  <Input id="sample-input" placeholder="Enter text here..." />
                </div>
                <div>
                  <Label htmlFor="sample-email">Email Input</Label>
                  <Input id="sample-email" type="email" placeholder="user@example.com" />
                </div>
                <div>
                  <Label htmlFor="sample-password">Password Input</Label>
                  <Input id="sample-password" type="password" placeholder="••••••••" />
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">
                Cards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Card</CardTitle>
                    <CardDescription>
                      A simple card component with header and content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Card content goes here. This is where the main information is displayed.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Interactive Card</CardTitle>
                    <CardDescription>
                      Cards can contain interactive elements
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button size="sm" className="w-full">Action Button</Button>
                    <p className="text-xs text-slate-500">
                      Click the button above to interact
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Badges */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">
                Badges
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>

            {/* Separators */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">
                Separators
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400">Content above separator</p>
                <Separator />
                <p className="text-sm text-slate-600 dark:text-slate-400">Content below separator</p>
              </div>
            </div>

            {/* Email Domain Suggestions */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">
                Email Domain Suggestions
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Interactive email domain suggestion chips for quick domain selection
                </p>
                <EmailDomainSuggestions 
                  onDomainSelect={(domain) => console.log('Selected:', domain)}
                  className="justify-start"
                />
                <div className="mt-4">
                  <p className="text-xs text-slate-500 mb-2">Custom domains:</p>
                  <EmailDomainSuggestions 
                    domains={["@company.com", "@business.org", "@custom.net"]}
                    onDomainSelect={(domain) => console.log('Selected:', domain)}
                    className="justify-start"
                  />
                </div>
              </div>
            </div>

            {/* Viewport Controls */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">
                Viewport Controls
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Controls for switching between mobile and desktop preview modes
                </p>
                <div className="relative p-8 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <ViewportControls 
                    onViewportChange={(viewport) => console.log('Viewport changed to:', viewport)}
                    className="relative top-0 right-0"
                  />
                </div>
                <p className="text-xs text-slate-500">
                  Typically positioned fixed in top-right corner of prototype views
                </p>
              </div>
            </div>

            {/* OTP Input */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">
                OTP Input
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  One-time password input with 6 individual input fields for verification codes
                </p>
                <div className="flex justify-center p-8 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <OTPInput 
                    onChange={(value) => console.log('OTP changed:', value)}
                    onComplete={(value) => console.log('OTP completed:', value)}
                  />
                </div>
                <div className="text-xs text-slate-500 space-y-1">
                  <p>• Supports auto-focus navigation between fields</p>
                  <p>• Handles paste functionality for quick entry</p>
                  <p>• Backspace moves to previous field when current is empty</p>
                  <p>• Calls onComplete when all 6 digits are entered</p>
                </div>
              </div>
            </div>

            {/* Switch */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">
                Switch
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Toggle switches for boolean settings and preferences
                </p>
                <div className="space-y-4 p-8 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-center justify-between">
                    <Label>Enable notifications</Label>
                    <Switch 
                      onCheckedChange={(checked) => console.log('Notifications:', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Sign messages (Default: On)</Label>
                    <Switch 
                      defaultChecked
                      onCheckedChange={(checked) => console.log('Sign messages:', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Dark mode</Label>
                    <Switch 
                      disabled
                      onCheckedChange={(checked) => console.log('Dark mode:', checked)}
                    />
                  </div>
                </div>
                <div className="text-xs text-slate-500 space-y-1">
                  <p>• Accessible toggle with proper ARIA attributes</p>
                  <p>• Supports controlled and uncontrolled states</p>
                  <p>• Can be disabled for read-only display</p>
                  <p>• Integrates with form libraries</p>
                </div>
              </div>
            </div>

            {/* Avatar */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">
                Avatar
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  User profile images with fallback text for spaces and users
                </p>
                <div className="flex items-center gap-4 p-8 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/images/logo.svg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-blue-600 text-white">D</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="bg-green-600 text-white text-xs">M</AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-xs text-slate-500 space-y-1">
                  <p>• Supports image URLs with automatic fallback</p>
                  <p>• Customizable fallback text and styling</p>
                  <p>• Multiple sizes (6, 8, 12 Tailwind units)</p>
                  <p>• Accessible with proper alt attributes</p>
                </div>
              </div>
            </div>

            {/* Dropdown Menu */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">
                Dropdown Menu
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Context menus and selection dropdowns with keyboard navigation
                </p>
                <div className="p-8 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        Select Space
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>
                        <Avatar className="h-4 w-4 mr-2">
                          <AvatarFallback className="text-xs">D</AvatarFallback>
                        </Avatar>
                        Daydreamer
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Avatar className="h-4 w-4 mr-2">
                          <AvatarFallback className="text-xs">M</AvatarFallback>
                        </Avatar>
                        Metalabel
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Avatar className="h-4 w-4 mr-2">
                          <AvatarFallback className="text-xs">D</AvatarFallback>
                        </Avatar>
                        Dark Forest
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="text-xs text-slate-500 space-y-1">
                  <p>• Keyboard navigation support (arrow keys, escape)</p>
                  <p>• Automatic positioning and collision detection</p>
                  <p>• Supports icons, avatars, and complex content</p>
                  <p>• Customizable alignment and styling</p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Usage Guidelines */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
              Usage Guidelines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Consistency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Always use components from this design system to maintain visual consistency 
                    across all prototypes and final products.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    All components are built with accessibility in mind, including proper 
                    ARIA labels, keyboard navigation, and color contrast.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Responsive Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Components are designed to work across all device sizes using 
                    Tailwind CSS responsive utilities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Dark Mode</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    All components support both light and dark themes automatically 
                    based on user preference.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
