import React from 'react';
import { cn } from '@/lib/utils';

interface TeamTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  primaryColor: string;
}

const TeamTabs: React.FC<TeamTabsProps> = ({ 
  activeTab, 
  onTabChange, 
  primaryColor 
}) => {
  return (
    <div className="bg-white shadow-md sticky top-16 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto no-scrollbar">
          <button
            onClick={() => onTabChange('players')}
            className={cn(
              "px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
              activeTab === 'players' 
                ? `border-[${primaryColor}] text-[${primaryColor}]` 
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
            style={{ 
              borderColor: activeTab === 'players' ? primaryColor : 'transparent',
              color: activeTab === 'players' ? primaryColor : ''
            }}
          >
            Игроки
          </button>
          
          <button
            onClick={() => onTabChange('staff')}
            className={cn(
              "px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
              activeTab === 'staff' 
                ? `border-[${primaryColor}] text-[${primaryColor}]` 
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
            style={{ 
              borderColor: activeTab === 'staff' ? primaryColor : 'transparent',
              color: activeTab === 'staff' ? primaryColor : ''
            }}
          >
            Тренерский штаб
          </button>
          
          <button
            onClick={() => onTabChange('details')}
            className={cn(
              "px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
              activeTab === 'details' 
                ? `border-[${primaryColor}] text-[${primaryColor}]` 
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
            style={{ 
              borderColor: activeTab === 'details' ? primaryColor : 'transparent',
              color: activeTab === 'details' ? primaryColor : ''
            }}
          >
            О команде
          </button>
          
          <button
            onClick={() => onTabChange('player-stats')}
            className={cn(
              "px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
              activeTab === 'player-stats' 
                ? `border-[${primaryColor}] text-[${primaryColor}]` 
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
            style={{ 
              borderColor: activeTab === 'player-stats' ? primaryColor : 'transparent',
              color: activeTab === 'player-stats' ? primaryColor : ''
            }}
          >
            Статистика игроков
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamTabs;
