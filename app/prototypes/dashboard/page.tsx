"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ViewportControls } from "@/components/ui/viewport-controls";

interface Space {
  id: string;
  name: string;
  avatar: string;
  notifications: number;
  isActive?: boolean;
}

interface FloatingCard {
  id: string;
  title: string;
  icon: string;
  position: { top: string; left: string; rotate: string };
  content?: string;
}

export default function Dashboard() {
  const [viewport, setViewport] = useState<'mobile' | 'desktop'>('desktop');
  const [selectedSpace, setSelectedSpace] = useState("daydreamer");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const spaces: Space[] = [
    {
      id: "daydreamer",
      name: "Daydreamer", 
      avatar: "/images/logo.svg",
      notifications: 5,
      isActive: selectedSpace === "daydreamer"
    },
    {
      id: "metalabel", 
      name: "Metalabel",
      avatar: "/images/logo.svg", 
      notifications: 2,
      isActive: selectedSpace === "metalabel"
    },
    {
      id: "dark-forest",
      name: "Dark Forest Collective",
      avatar: "/images/logo.svg",
      notifications: 55,
      isActive: selectedSpace === "dark-forest"
    }
  ];

  const floatingCards: FloatingCard[] = [
    {
      id: "posts",
      title: "Posts",
      icon: "👤",
      position: { top: "20%", left: "15%", rotate: "-15deg" },
    },
    {
      id: "messages", 
      title: "Messages",
      icon: "💬",
      position: { top: "35%", left: "75%", rotate: "5deg" },
    },
    {
      id: "readme",
      title: "Readme", 
      icon: "📄",
      position: { top: "65%", left: "65%", rotate: "-8deg" },
      content: "To unite as a collective to elevate each member's solo career while representing the strength"
    }
  ];

  const handleSpaceSelect = (spaceId: string) => {
    setSelectedSpace(spaceId);
    console.log("Selected space:", spaceId);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const getSelectedSpaceName = () => {
    return spaces.find(s => s.id === selectedSpace)?.name || "Daydreamer";
  };

  const handleNewSpace = () => {
    console.log("Create new space");
    alert("New space creation - coming soon! (This is a prototype)");
  };

  const handleCardClick = (cardId: string) => {
    console.log("Card clicked:", cardId);
    alert(`${cardId} functionality - coming soon! (This is a prototype)`);
  };

  return (
    <>      
      <div className="h-screen bg-black overflow-hidden">
        <div className="flex h-full">
          {/* Left Sidebar - Collapsible */}
          <div className={`${sidebarCollapsed ? 'w-16' : 'w-[355px]'} bg-black border-r border-gray-800 flex flex-col transition-all duration-300`}>
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-center justify-between mb-6">
                {!sidebarCollapsed && (
                  <h2 className="text-xl font-semibold text-white tracking-tight">
                    Spaces
                  </h2>
                )}
                <Button 
                  onClick={toggleSidebar}
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-white h-7 w-7 p-0"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="6" height="6" rx="1"/>
                    <rect x="15" y="3" width="6" height="6" rx="1"/>
                    <rect x="3" y="15" width="6" height="6" rx="1"/>
                    <rect x="15" y="15" width="6" height="6" rx="1"/>
                  </svg>
                </Button>
              </div>
            </div>

            {/* Spaces List */}
            <div className="flex-1 p-4 space-y-2">
              {spaces.map((space) => (
                <button
                  key={space.id}
                  onClick={() => handleSpaceSelect(space.id)}
                  className={`w-full p-2 rounded-lg flex items-center gap-3 text-left hover:bg-gray-800/50 transition-colors ${
                    space.isActive ? 'bg-gray-800/80' : ''
                  }`}
                  title={sidebarCollapsed ? space.name : undefined}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={space.avatar} alt={space.name} />
                    <AvatarFallback className="bg-white text-black text-xs font-medium">
                      {space.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  
                  {!sidebarCollapsed && (
                    <>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white truncate">
                          {space.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {space.notifications} notification{space.notifications !== 1 ? 's' : ''}
                        </p>
                      </div>
                      
                      {space.notifications > 0 && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </>
                  )}
                </button>
              ))}
            </div>

            {/* New Space Button */}
            <div className="p-4 border-t border-gray-800">
              {sidebarCollapsed ? (
                <Button 
                  onClick={handleNewSpace}
                  variant="outline"
                  size="sm"
                  className="w-full bg-white/5 border-gray-700 text-white hover:bg-white/10 h-8 p-0"
                  title="New space"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5v14"/>
                  </svg>
                </Button>
              ) : (
                <Button 
                  onClick={handleNewSpace}
                  variant="outline"
                  className="w-full bg-white/5 border-gray-700 text-white hover:bg-white/10 h-9"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                    <path d="M5 12h14M12 5v14"/>
                  </svg>
                  New space
                </Button>
              )}
            </div>

            {/* User Profile */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/images/logo.svg" alt="Yancey" />
                  <AvatarFallback className="bg-white text-black text-xs font-medium">
                    Y
                  </AvatarFallback>
                </Avatar>
                
                {!sidebarCollapsed && (
                  <>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white">
                        Yancey
                      </p>
                      <p className="text-xs text-gray-400">
                        online
                      </p>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white h-7 w-7 p-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Main Content Area - Framed Desktop Experience */}
          <div className="flex-1 relative">
            {/* Background - Black */}
            <div className="absolute inset-0 bg-black" />

            {/* Framed Content Area */}
            <div className="absolute inset-6">
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                {/* Background Image */}
                <Image
                  src="/images/bg.jpg"
                  alt="Background"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20" />

                {/* Header with Space Title (No Dropdown) */}
                <div className="relative z-10 p-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                    <h1 className="text-xl font-semibold text-black tracking-tight text-center">
                      {getSelectedSpaceName()}
                    </h1>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute inset-0 z-0">
                  {floatingCards.map((card) => (
                    <div
                      key={card.id}
                      className="absolute transform cursor-pointer"
                      style={{
                        top: card.position.top,
                        left: card.position.left,
                        transform: `rotate(${card.position.rotate}) translate(-50%, -50%)`,
                      }}
                    >
                      <Card 
                        className="bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-32 h-32"
                        onClick={() => handleCardClick(card.id)}
                      >
                        <CardContent className="p-4 flex flex-col items-center justify-center h-full text-center">
                          <div className="text-2xl mb-2">{card.icon}</div>
                          <h3 className="text-lg font-medium text-black mb-2">{card.title}</h3>
                          {card.content && (
                            <p className="text-xs text-gray-600 leading-tight line-clamp-3">
                              {card.content}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Navigation */}
        <div className="fixed top-4 left-4 z-50">
          <Button asChild variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
            <Link href="/">← Back to Prototypes</Link>
          </Button>
        </div>

        {/* Viewport Controls - Bottom Right Corner */}
        <div className="fixed bottom-4 right-4 z-50">
          <ViewportControls onViewportChange={setViewport} />
        </div>

        {/* Mobile Responsive Message */}
        {viewport === 'mobile' && (
          <div className="fixed bottom-20 left-4 right-4 z-50">
            <Card className="bg-amber-50 border border-amber-200">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-amber-800 mb-2">
                  📱 Dashboard is optimized for desktop experience
                </p>
                <p className="text-xs text-amber-700">
                  Switch to desktop mode for the best experience
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Design System Notes - Desktop only */}
        {viewport === 'desktop' && (
          <div className="fixed bottom-20 left-4 z-40 max-w-sm">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-4">
                <h3 className="text-sm font-semibold mb-2">Dashboard Components</h3>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">CollapsibleSidebar</Badge>
                  <Badge variant="secondary" className="text-xs">Avatar</Badge>
                  <Badge variant="secondary" className="text-xs">SpaceSelection</Badge>
                  <Badge variant="secondary" className="text-xs">FloatingCards</Badge>
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  Foldable sidebar • Space switching • Framed content
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}
