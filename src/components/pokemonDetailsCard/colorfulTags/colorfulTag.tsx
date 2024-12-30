import React from 'react';
import { getPokcolor } from '../../../constants/pokemon.types';
import './colorfulTags.scss';

// Define an interface for the component props
export interface ColorfulTagProps {
  text: string;
  className?: string;
  type: any; // Adjust this type if you have a more specific type for 'type'
}

const ColorfulTag: React.FC<ColorfulTagProps> = ({ text, className, type }) => {
  return (
    <div>
      <div className={className}>
        <span
          style={{
            background: getPokcolor(type),
          }}
          className="colorful-tag"
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default ColorfulTag;
