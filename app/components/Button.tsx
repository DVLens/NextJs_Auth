"use client";

import React from 'react'
/**
 * Button props.
 */
interface LoginButtonProps {  
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;  
}

/**
 * General button.
 * @param params LoginButton
 * @returns 
 */
const Button = (params: LoginButtonProps) => {
  return (
    <button
      type="button"
      className={params.className}
      onClick={params.onClick}>
      {params.children}
    </button>
  )
}

export default Button