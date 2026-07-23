interface LogoProps {
  /** Sizing / colour utilities. Colour is inherited via `currentColor`,
   *  so pass a text-* class (e.g. `text-on-surface`) to recolour the mark. */
  className?: string;
}

/**
 * Fitopus wordmark — "FIT (plate) PUS".
 * Every stroke/fill uses `currentColor`, so the logo automatically takes the
 * colour of whatever it is placed on (dark on light surfaces, light on dark).
 */
export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 1886.7 402.8"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Fitopus"
      fill="currentColor"
      className={className}
    >
      <text
        transform="translate(0 300.6)"
        style={{
          fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif",
          fontSize: '350.4px',
          letterSpacing: '.2em',
        }}
      >
        <tspan x="0" y="0">FIT</tspan>
      </text>
      <text
        transform="translate(1078.3639 300.6477)"
        style={{
          fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif",
          fontSize: '350.4px',
          letterSpacing: '.2em',
        }}
      >
        <tspan x="0" y="0">PUS</tspan>
      </text>

      {/* plate */}
      <circle
        cx="873.1"
        cy="177.9"
        r="152.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="20"
        strokeMiterlimit="10"
      />

      {/* fork */}
      <path d="M803.9,92.1h-2.7c0,0,1,47.7,1,47.7h-5.1c0,0-.9-47.6-.9-47.6h-3.1v47.9h-4.5l-.4-47.9h-3.1l-.9,47.9h-4.9s1.1-47.9,1.1-47.9h-2.7s-5.6,40.6-5.6,40.6c0,0-.1,1.5-.1,2.1,0,6.9,2.6,11,6.6,15.3,14.4,15.8,4.7,34.1,4.7,38.1v74h0c0,4.4,3.4,7.9,7.7,7.9s7.7-3.4,7.7-7.7,0,0,0-.1h0v-73.9c0-4.8-7.9-24.9,5.8-39.2,0,0,0,0,0,0,2.5-2.7,5.1-6.1,5.5-13,0-.4,0-1.3,0-1.3l-6-42.8ZM805.8,92.2" />
      {/* knife */}
      <path d="M969.7,186.5c0-4.3,0-101.4,0-101.4l-2.1.2s-19.1.3-19.8,84.6c-.2,18.1,7.8,19.8,7.6,22.6-.3,4.1.3,64.4.3,64.4h0s0,0,0,.1c0,3.9,3.2,7.1,7.1,7.1s7.1-3.2,7.1-7.1c0,0,0-.1,0-.1h0s0-48.3,0-53.1v-17.4ZM969.7,203.9" />

      <rect x="848.3" y="174.6" width="55" height="19.9" />
      <rect x="908.1" y="179" width="46.8" height="13.6" transform="translate(745.6531 1117.2752) rotate(-90)" />
      <rect x="884.8" y="177.4" width="58.4" height="16.8" transform="translate(728.1776 1099.7997) rotate(-90)" />
      <rect x="796.8" y="179" width="46.8" height="13.6" transform="translate(634.3361 1005.9582) rotate(-90)" />
      <rect x="808.4" y="177.4" width="58.4" height="16.8" transform="translate(651.8116 1023.4337) rotate(-90)" />
    </svg>
  );
}
