import React from 'react';
import { motion } from 'framer-motion';
import { User as UserType } from '../App';

interface ProfileAvatarProps {
  user: UserType;
  size?: 'sm' | 'md' | 'lg';
}

function ProfileAvatar({ user, size = 'md' }: ProfileAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  const initials = user.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow-lg relative group cursor-pointer`}
    >
      {initials}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center z-10">
        {initials}
      </div>
    </motion.div>
  );
}

export default ProfileAvatar;
