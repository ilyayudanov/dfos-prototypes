"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { ViewportControls, MobileConstraint } from "@/components/ui/viewport-controls";
import { EmailDomainSuggestions } from "@/components/ui/email-domain-suggestions";
import { OTPInput } from "@/components/ui/otp-input";

export default function SignUpFlow() {
  const [viewport, setViewport] = useState<'mobile' | 'desktop'>('mobile');
  const [currentStep, setCurrentStep] = useState<'email' | 'verification' | 'create-space' | 'profile'>('email');
  const [email, setEmail] = useState("ilya");
  const [otpCode, setOtpCode] = useState("");
  const [spaceName, setSpaceName] = useState("Daydreamer");
  const [profileName, setProfileName] = useState("Daydreamer");
  const [signMessages, setSignMessages] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const handleDomainSelect = (domain: string) => {
    setEmail(prev => prev.split('@')[0] + domain);
  };

  const handleContinueWithEmail = () => {
    console.log("Continue with email:", email);
    setCurrentStep('verification');
  };

  const handleLoginWithGoogle = () => {
    console.log("Login with Google");
    alert("Google login... (This is a prototype)");
  };

  const handleOTPComplete = (code: string) => {
    console.log("OTP completed:", code);
    setOtpCode(code);
  };

  const handleOTPContinue = () => {
    console.log("Verification complete with code:", otpCode);
    setCurrentStep('create-space');
  };

  const handlePasteCode = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const code = text.replace(/\D/g, "").slice(0, 6);
      setOtpCode(code);
    } catch (err) {
      console.error("Failed to read clipboard:", err);
      const demoCode = "123456";
      setOtpCode(demoCode);
      alert("Demo paste: " + demoCode);
    }
  };

  const handleResendCode = () => {
    console.log("Resend code to:", email);
    alert("Code resent! (This is a prototype)");
  };

  const handleUseDifferentEmail = () => {
    setCurrentStep('email');
    setOtpCode("");
  };

  const handleCreateSpace = () => {
    console.log("Creating space:", spaceName);
    setCurrentStep('profile');
  };

  const handleJoinSpace = () => {
    console.log("Joining space with invite");
    alert("Join space functionality - coming soon! (This is a prototype)");
  };

  const handleProfileComplete = () => {
    console.log("Profile complete:", { profileName, signMessages });
    alert(`Profile "${profileName}" created successfully! (This is a prototype)`);
  };

  const handleImageUpload = () => {
    console.log("Image upload clicked");
    alert("Image upload functionality - coming soon! (This is a prototype)");
  };

  const displayEmail = email.includes('@') ? email : `${email}@gmail.com`;

  // Dark steps that use phone frame on desktop
  const isDarkStep = currentStep === 'create-space' || currentStep === 'profile';

  return (
    <>
      <div className="min-h-screen overflow-hidden">
        {isDarkStep ? (
          // Create Space & Profile Steps - Phone frame for desktop, full screen for mobile
          <div className={
            viewport === 'desktop' 
              ? "w-full min-h-screen bg-black flex items-center justify-center"
              : "w-full min-h-screen"
          }>
            {viewport === 'desktop' ? (
              // Desktop: Phone frame
              <div className="w-[384px] h-[932px] bg-black rounded-2xl border border-[#656565] shadow-2xl overflow-hidden">
                <div className="relative h-full w-full bg-black flex flex-col justify-between">
                  {currentStep === 'create-space' ? (
                    <>
                      {/* Create Space Content */}
                      <div className="text-center space-y-4 pt-16 px-6">
                        <h1 className="text-3xl text-white font-normal tracking-tight" style={{ fontFamily: 'Optima, serif' }}>
                          Create a Space
                        </h1>
                        <p className="text-sm text-gray-400 font-mono leading-relaxed max-w-sm mx-auto">
                          Space is ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        </p>
                      </div>

                      <div className="flex-1 flex items-center justify-center px-6">
                        <div className="w-full max-w-sm space-y-2">
                          <Label className="text-white text-sm font-medium">Name</Label>
                          <Input
                            value={spaceName}
                            onChange={(e) => setSpaceName(e.target.value)}
                            className="bg-white/5 border-gray-700 text-white placeholder:text-gray-400 h-14 text-lg focus:border-white/20"
                            placeholder="Enter space name"
                          />
                        </div>
                      </div>

                      <div className="space-y-3 p-6">
                        <Button 
                          onClick={handleCreateSpace}
                          className="w-full h-14 bg-white hover:bg-gray-100 text-black text-base font-semibold rounded-xl"
                          disabled={!spaceName.trim()}
                        >
                          Continue
                        </Button>
                        <Button
                          onClick={handleJoinSpace}
                          variant="ghost"
                          className="w-full text-white hover:text-gray-300 text-sm font-medium h-10"
                        >
                          Have invite? Join a space.
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Profile Content */}
                      <div className="text-center space-y-4 pt-16 px-6">
                        <h1 className="text-3xl text-white font-normal tracking-tight" style={{ fontFamily: 'Optima, serif' }}>
                          Your Profile
                        </h1>
                        <p className="text-sm text-gray-400 font-mono leading-relaxed max-w-sm mx-auto">
                          This is how others see you in this space.
                        </p>
                      </div>

                      <div className="flex-1 flex items-center justify-center px-6">
                        <button
                          onClick={handleImageUpload}
                          className="w-52 h-75 bg-white/5 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2"/>
                            <polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="2"/>
                            <line x1="12" y1="8" x2="12" y2="14" stroke="currentColor" strokeWidth="2"/>
                            <line x1="9" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </button>
                      </div>

                      <div className="space-y-5 p-6">
                        <div className="space-y-2">
                          <Label className="text-white text-sm font-medium">Name</Label>
                          <Input
                            value={profileName}
                            onChange={(e) => setProfileName(e.target.value)}
                            className="bg-white/5 border-gray-700 text-white placeholder:text-gray-400 h-12 focus:border-white/20"
                            placeholder="Enter your name"
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <Label className="text-white text-sm font-medium">Sign messages</Label>
                          <Switch 
                            checked={signMessages}
                            onCheckedChange={setSignMessages}
                          />
                        </div>

                        <Button 
                          onClick={handleProfileComplete}
                          className="w-full h-14 bg-white hover:bg-gray-100 text-black text-base font-semibold rounded-xl"
                          disabled={!profileName.trim()}
                        >
                          Continue
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              // Mobile: Full screen for dark steps
              <MobileConstraint viewport={viewport}>
                <div className="relative h-screen w-full bg-black flex flex-col justify-between">
                  {currentStep === 'create-space' ? (
                    <>
                      <div className="text-center space-y-4 pt-16 px-6">
                        <h1 className="text-3xl text-white font-normal tracking-tight" style={{ fontFamily: 'Optima, serif' }}>
                          Create a Space
                        </h1>
                        <p className="text-sm text-gray-400 font-mono leading-relaxed max-w-sm mx-auto">
                          Space is ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        </p>
                      </div>

                      <div className="flex-1 flex items-center justify-center px-6">
                        <div className="w-full max-w-sm space-y-2">
                          <Label className="text-white text-sm font-medium">Name</Label>
                          <Input
                            value={spaceName}
                            onChange={(e) => setSpaceName(e.target.value)}
                            className="bg-white/5 border-gray-700 text-white placeholder:text-gray-400 h-14 text-lg focus:border-white/20"
                            placeholder="Enter space name"
                          />
                        </div>
                      </div>

                      <div className="space-y-3 p-6">
                        <Button 
                          onClick={handleCreateSpace}
                          className="w-full h-14 bg-white hover:bg-gray-100 text-black text-base font-semibold rounded-xl"
                          disabled={!spaceName.trim()}
                        >
                          Continue
                        </Button>
                        <Button
                          onClick={handleJoinSpace}
                          variant="ghost"
                          className="w-full text-white hover:text-gray-300 text-sm font-medium h-10"
                        >
                          Have invite? Join a space.
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center space-y-4 pt-16 px-6">
                        <h1 className="text-3xl text-white font-normal tracking-tight" style={{ fontFamily: 'Optima, serif' }}>
                          Your Profile
                        </h1>
                        <p className="text-sm text-gray-400 font-mono leading-relaxed max-w-sm mx-auto">
                          This is how others see you in this space.
                        </p>
                      </div>

                      <div className="flex-1 flex items-center justify-center px-6">
                        <button
                          onClick={handleImageUpload}
                          className="w-52 h-75 bg-white/5 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2"/>
                            <polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="2"/>
                            <line x1="12" y1="8" x2="12" y2="14" stroke="currentColor" strokeWidth="2"/>
                            <line x1="9" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </button>
                      </div>

                      <div className="space-y-5 p-6">
                        <div className="space-y-2">
                          <Label className="text-white text-sm font-medium">Name</Label>
                          <Input
                            value={profileName}
                            onChange={(e) => setProfileName(e.target.value)}
                            className="bg-white/5 border-gray-700 text-white placeholder:text-gray-400 h-12 focus:border-white/20"
                            placeholder="Enter your name"
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <Label className="text-white text-sm font-medium">Sign messages</Label>
                          <Switch 
                            checked={signMessages}
                            onCheckedChange={setSignMessages}
                          />
                        </div>

                        <Button 
                          onClick={handleProfileComplete}
                          className="w-full h-14 bg-white hover:bg-gray-100 text-black text-base font-semibold rounded-xl"
                          disabled={!profileName.trim()}
                        >
                          Continue
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </MobileConstraint>
            )}
          </div>
        ) : (
          // Email & Verification Steps
          <>
            <MobileConstraint viewport={viewport}>
              {/* Background with logo and imagery */}
              <div className="relative h-screen w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Logo */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
                  <Image
                    src="/images/logo.svg"
                    alt="DFOS Logo"
                    width={120}
                    height={60}
                    className="w-auto h-auto"
                    priority
                  />
                </div>

                {/* Artistic tunnel image placeholder */}
                <div className="absolute left-14 top-64 z-10">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-26 h-40 bg-gradient-to-b from-green-600 to-green-800 rounded-t-full rounded-b-lg shadow-2xl border border-white/20 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <p className="text-white font-medium text-lg text-shadow-md">
                      Get started
                    </p>
                  </div>
                </div>

                {/* Bottom overlay with dark gradient */}
                <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black/40 to-transparent z-10" />

                {/* Mobile: Bottom Sheet for Email & OTP */}
                {viewport === 'mobile' && (
                  <div className="absolute bottom-0 left-0 right-0 z-30">
                    <Card className="bg-[#fcfcfc] rounded-t-3xl border-0 shadow-2xl">
                      <div className="flex justify-center pt-4 pb-4">
                        <div className="w-25 h-2 bg-neutral-100 rounded-full" />
                      </div>

                      <div className="px-6 py-4">
                        <h1 className="text-2xl font-semibold text-black tracking-tight">
                          {currentStep === 'email' && 'Login or signup'}
                          {currentStep === 'verification' && 'Enter code'}
                        </h1>
                      </div>

                      <CardContent className="px-6 pb-8 space-y-4">
                        {currentStep === 'email' ? (
                          <>
                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-base font-medium text-neutral-950">
                                Email
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-10 text-lg bg-white border-neutral-200 shadow-sm"
                              />
                            </div>

                            <EmailDomainSuggestions 
                              onDomainSelect={handleDomainSelect}
                              className="justify-start"
                            />

                            <div className="space-y-3 pt-2">
                              <Button 
                                onClick={handleContinueWithEmail}
                                className="w-full h-14 bg-black hover:bg-black/90 text-white text-base font-medium rounded-xl"
                              >
                                Continue with Email
                              </Button>
                              
                              <Button 
                                onClick={handleLoginWithGoogle}
                                variant="outline"
                                className="w-full h-14 bg-white border-[#ebebeb] text-neutral-950 text-sm font-medium rounded-lg hover:bg-gray-50"
                              >
                                Login with Google
                              </Button>
                            </div>

                            <div className="pt-4">
                              <p className="text-sm text-center text-neutral-950 leading-relaxed">
                                By clicking continue, you agree to DFOS&apos;s{' '}
                                <span className="underline decoration-solid underline-offset-2">
                                  Terms of Use
                                </span>
                                {' '}and Privacy Policy
                              </p>
                            </div>
                          </>
                        ) : currentStep === 'verification' ? (
                          <>
                            <div className="text-center">
                              <p className="text-sm text-neutral-600 leading-5">
                                Please enter the one-time code we emailed you to{' '}
                                <span className="text-black font-medium">{displayEmail}</span>
                              </p>
                            </div>

                            <div className="flex justify-center py-2">
                              <OTPInput
                                value={otpCode}
                                onChange={setOtpCode}
                                onComplete={handleOTPComplete}
                              />
                            </div>

                            <div className="flex gap-3 justify-start">
                              <Button
                                onClick={handlePasteCode}
                                variant="outline"
                                size="sm"
                                className="bg-[rgba(255,255,255,0.1)] border-neutral-300 px-2 py-1 h-6 text-xs font-medium text-neutral-950 tracking-[0.18px] rounded"
                              >
                                📋 Paste
                              </Button>
                              <Button
                                onClick={handleResendCode}
                                variant="outline"
                                size="sm"
                                className="bg-[rgba(255,255,255,0.1)] border-neutral-300 px-2 py-1 h-6 text-xs font-medium text-neutral-950 tracking-[0.18px] rounded"
                              >
                                🔄 Resend code
                              </Button>
                            </div>

                            <div className="pt-2">
                              <Button 
                                onClick={handleOTPContinue}
                                disabled={otpCode.length !== 6}
                                className="w-full h-12 bg-neutral-900 hover:bg-neutral-800 text-neutral-50 text-sm font-medium rounded-lg disabled:bg-neutral-200 disabled:text-neutral-400"
                              >
                                Continue
                              </Button>
                            </div>

                            <div className="text-center pt-2">
                              <Button
                                onClick={handleUseDifferentEmail}
                                variant="ghost"
                                className="text-neutral-700 text-sm font-medium hover:text-neutral-900 h-8"
                              >
                                ← Use different email
                              </Button>
                            </div>
                          </>
                        ) : null}
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </MobileConstraint>

            {/* Desktop: Modal for Email & OTP */}
            {viewport === 'desktop' && (
              <div className="absolute inset-0 z-30 flex items-center justify-center">
                <Card className="bg-[#fcfcfc] rounded-2xl border-0 shadow-2xl w-[400px] relative">
                  <button
                    onClick={() => console.log('Close modal')}
                    className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-neutral-600 z-10"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <div className="px-6 py-6">
                    <h1 className="text-2xl font-semibold text-black tracking-tight">
                      {currentStep === 'email' && 'Login or signup'}
                      {currentStep === 'verification' && 'Enter code'}
                    </h1>
                  </div>

                  <CardContent className="px-6 pb-8 space-y-4">
                    {currentStep === 'email' ? (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="email-desktop" className="text-base font-medium text-neutral-950">
                            Email
                          </Label>
                          <Input
                            id="email-desktop"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-10 text-lg bg-white border-neutral-200 shadow-sm"
                          />
                        </div>

                        <EmailDomainSuggestions 
                          onDomainSelect={handleDomainSelect}
                          className="justify-start"
                        />

                        <div className="space-y-3 pt-2">
                          <Button 
                            onClick={handleContinueWithEmail}
                            className="w-full h-12 bg-black hover:bg-black/90 text-white text-base font-medium rounded-xl"
                          >
                            Label with Email
                          </Button>
                          
                          <Button 
                            onClick={handleLoginWithGoogle}
                            variant="outline"
                            className="w-full h-12 bg-white border-[#ebebeb] text-neutral-950 text-sm font-medium rounded-lg hover:bg-gray-50"
                          >
                            Use Google
                          </Button>
                        </div>

                        <div className="pt-4">
                          <p className="text-sm text-center text-neutral-950 leading-relaxed">
                            By clicking continue, you agree to DFOS&apos;s{' '}
                            <span className="underline decoration-solid underline-offset-2">
                              Terms of Use
                            </span>
                            {' '}and Privacy Policy
                          </p>
                        </div>
                      </>
                    ) : currentStep === 'verification' ? (
                      <>
                        <div className="text-center">
                          <p className="text-sm text-neutral-600 leading-5">
                            Please enter the one-time code we emailed you to{' '}
                            <span className="text-black font-medium">{displayEmail}</span>
                          </p>
                        </div>

                        <div className="flex justify-center py-2">
                          <OTPInput
                            value={otpCode}
                            onChange={setOtpCode}
                            onComplete={handleOTPComplete}
                          />
                        </div>

                        <div className="flex gap-3 justify-start">
                          <Button
                            onClick={handlePasteCode}
                            variant="outline"
                            size="sm"
                            className="bg-[rgba(255,255,255,0.1)] border-neutral-300 px-2 py-1 h-6 text-xs font-medium text-neutral-950 tracking-[0.18px] rounded"
                          >
                            📋 Paste
                          </Button>
                          <Button
                            onClick={handleResendCode}
                            variant="outline"
                            size="sm"
                            className="bg-[rgba(255,255,255,0.1)] border-neutral-300 px-2 py-1 h-6 text-xs font-medium text-neutral-950 tracking-[0.18px] rounded"
                          >
                            🔄 Resend code
                          </Button>
                        </div>

                        <div className="pt-2">
                          <Button 
                            onClick={handleOTPContinue}
                            disabled={otpCode.length !== 6}
                            className="w-full h-12 bg-neutral-900 hover:bg-neutral-800 text-neutral-50 text-sm font-medium rounded-lg disabled:bg-neutral-200 disabled:text-neutral-400"
                          >
                            Continue
                          </Button>
                        </div>

                        <div className="text-center pt-2">
                          <Button
                            onClick={handleUseDifferentEmail}
                            variant="ghost"
                            className="text-neutral-700 text-sm font-medium hover:text-neutral-900 h-8"
                          >
                            ← Use different email
                          </Button>
                        </div>
                      </>
                    ) : null}
                  </CardContent>
                </Card>
              </div>
            )}
          </>
        )}

        {/* Viewport Controls - Bottom Right Corner */}
        <ViewportControls 
          onViewportChange={setViewport}
          showInfo={showInfo}
          onInfoToggle={setShowInfo}
          showBackButton={true}
          backHref="/"
          backLabel="← Prototypes"
        />

        {/* Design System Notes - Only when info is toggled */}
        {viewport === 'desktop' && showInfo && (
          <div className="fixed bottom-20 left-4 z-40 max-w-sm">
            <Card className="bg-white/90 backdrop-blur-sm border shadow-xl">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold">Signup Components</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowInfo(false)}
                    className="h-6 w-6 p-0 text-gray-400 hover:text-gray-600"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="secondary" className="text-xs">EmailDomainSuggestions</Badge>
                  <Badge variant="secondary" className="text-xs">ViewportControls</Badge>
                  <Badge variant="secondary" className="text-xs">MobileConstraint</Badge>
                  <Badge variant="secondary" className="text-xs">OTPInput</Badge>
                  <Badge variant="secondary" className="text-xs">Switch</Badge>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <p>• <strong>Email:</strong> Domain suggestions and validation</p>
                  <p>• <strong>OTP:</strong> 6-digit verification with paste</p>
                  <p>• <strong>Create Space:</strong> Full-screen dark interface</p>
                  <p>• <strong>Profile:</strong> Image upload and settings</p>
                  <p>• <strong>Responsive:</strong> Mobile drawer, desktop modal/phone frame</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}