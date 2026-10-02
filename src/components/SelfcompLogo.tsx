import React from 'react';

interface SelfcompLogoProps {
  variant?: 'orange' | 'white' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
  className?: string;
}

export const SelfcompLogo: React.FC<SelfcompLogoProps> = ({
  variant = 'auto',
  size = 'md',
  showSlogan = false,
  className = '',
}) => {
  // Height scale in px
  const heightMap = {
    sm: 18,
    md: 26,
    lg: 36,
    xl: 48,
  };

  const height = heightMap[size];
  // The pixel grid is 5 units tall
  // Let's compute width based on pixel layout:
  // Each letter is defined on a grid with a pixel size of 1 unit.
  // S: 3 units + 1 gap
  // E: 4 units + 1 gap
  // L: 4 units + 1 gap
  // F: 4 units + 1 gap
  // C: 4 units + 1 gap
  // O: 4 units + 1 gap
  // M: 5 units + 1 gap
  // P: 4 units
  // Total width in units ≈ 38 units. Height is 5 units.
  
  // Exact pixel definitions (x, y) coordinates for each letter
  // Grid: y from 0 to 4 (5 rows)
  const pixels: [number, number][] = [
    // S (offset x = 0, width = 3)
    // Row 0: x = 1, 2
    [1, 0], [2, 0],
    // Row 1: x = 0
    [0, 1],
    // Row 2: x = 0, 1
    [0, 2], [1, 2],
    // Row 3: x = 2
    [2, 3],
    // Row 4: x = 0, 1
    [0, 4], [1, 4],

    // E (offset x = 5, width = 4)
    [5, 0], [6, 0], [7, 0], [8, 0],
    [5, 1],
    [5, 2], [6, 2], [7, 2],
    [5, 3],
    [5, 4], [6, 4], [7, 4], [8, 4],

    // L (offset x = 11, width = 4)
    [11, 0],
    [11, 1],
    [11, 2],
    [11, 3],
    [11, 4], [12, 4], [13, 4], [14, 4],

    // F (offset x = 17, width = 4)
    [17, 0], [18, 0], [19, 0], [20, 0],
    [17, 1],
    [17, 2], [18, 2], [19, 2],
    [17, 3],
    [17, 4],

    // C (offset x = 23, width = 4)
    [24, 0], [25, 0], [26, 0],
    [23, 1],
    [23, 2], [25, 2],
    [23, 3],
    [24, 4], [25, 4], [26, 4],

    // O (offset x = 29, width = 4)
    [30, 0], [31, 0],
    [29, 1], [32, 1],
    [29, 2], [32, 2],
    [29, 3], [32, 3],
    [30, 4], [31, 4],

    // M (offset x = 35, width = 5)
    [35, 0], [39, 0],
    [35, 1], [36, 1], [38, 1], [39, 1],
    [35, 2], [37, 2], [39, 2],
    [35, 3], [39, 3],
    [35, 4], [39, 4],

    // P (offset x = 42, width = 4)
    [42, 0], [43, 0], [44, 0],
    [42, 1], [45, 1],
    [42, 2], [43, 2], [44, 2],
    [42, 3],
    [42, 4],
  ];

  const totalWidth = 47;
  const totalHeight = 5;

  // Determine fill color
  let fillColor = '#E65616';
  if (variant === 'orange') {
    fillColor = '#E65616';
  } else if (variant === 'white') {
    fillColor = '#FFFFFF';
  } else if (variant === 'dark') {
    fillColor = '#18191A';
  } else {
    // auto: orange in both or matching current color
    fillColor = '#E65616';
  }

  const calculatedWidth = (height / totalHeight) * totalWidth;

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={calculatedWidth}
        height={height}
        viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        className="shrink-0 transition-transform duration-200 hover:scale-[1.02]"
        style={{ shapeRendering: 'crispEdges' }}
        aria-label="Selfcomp Logo"
      >
        <g fill={fillColor}>
          {pixels.map(([x, y], idx) => (
            <rect key={idx} x={x} y={y} width="1" height="1" />
          ))}
        </g>
      </svg>

      {showSlogan && (
        <span className="hidden sm:inline-block text-xs font-medium tracking-normal text-[#8A8D93] dark:text-[#8A8D93] border-l border-[#35373B] dark:border-[#35373B] pl-2.5">
          Tecnologia que gera resultados
        </span>
      )}
    </div>
  );
};
