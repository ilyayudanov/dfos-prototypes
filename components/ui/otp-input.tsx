"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OTPInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  className?: string;
}

export function OTPInput({ 
  length = 6, 
  value = "", 
  onChange, 
  onComplete, 
  className 
}: OTPInputProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(length).fill(null));

  useEffect(() => {
    if (value) {
      const otpArray = value.split("").slice(0, length);
      const paddedOtpArray = [...otpArray, ...Array(Math.max(0, length - otpArray.length)).fill("")];
      setOtp(paddedOtpArray);
    }
  }, [value, length]);

  const handleChange = (index: number, digit: string) => {
    if (digit.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    
    const newValue = newOtp.join("");
    onChange?.(newValue);
    
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    
    if (newValue.length === length) {
      onComplete?.(newValue);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    const newOtp = pastedData.split("").concat(Array(Math.max(0, length - pastedData.length)).fill(""));
    setOtp(newOtp);
    onChange?.(pastedData);
    
    if (pastedData.length === length) {
      onComplete?.(pastedData);
    }
    
    // Focus the next empty input or the last one
    const nextIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={cn("flex items-center gap-0", className)}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => { inputRefs.current[index] = el; }}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          value={digit}
          onChange={(e) => handleChange(index, e.target.value.replace(/\D/g, ""))}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className={cn(
            "h-20 w-[58px] bg-white border border-[#ebebeb] text-center text-lg font-normal text-black focus:border-black focus:outline-none focus:ring-0 shadow-sm transition-colors",
            index === 0 && "rounded-l-lg",
            index === length - 1 && "rounded-r-lg",
            index !== 0 && index !== length - 1 && "border-l-0 border-r-0"
          )}
          maxLength={1}
        />
      ))}
    </div>
  );
}
