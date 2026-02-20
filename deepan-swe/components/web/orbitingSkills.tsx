"use client"
import React, { useEffect, useState, memo } from 'react';

// --- Type Definitions ---
type IconType = 'python' | 'java' | 'typescript' | 'react' | 'azure' | 'aws';

type GlowColor = 'cyan' | 'purple';

interface SkillIconProps {
    type: IconType;
}

interface SkillConfig {
    id: string;
    orbitRadius: number;
    size: number;
    speed: number;
    iconType: IconType;
    phaseShift: number;
    glowColor: GlowColor;
    label: string;
}

interface OrbitingSkillProps {
    config: SkillConfig;
    angle: number;
}

interface GlowingOrbitPathProps {
    radius: number;
    glowColor?: GlowColor;
    animationDelay?: number;
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
    python: {
        component: () => (
            <svg viewBox="0 0 48 48" fill="currentColor" className="w-full h-full">
                <path
                    fill="#0277BD"
                    d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                />
                <path
                    fill="#FFC107"
                    d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                />
            </svg>
        ),
        color: '#3776AB'
    },
    java: {
        component: () => (
            <svg viewBox="0 0 48 48" fill="currentColor" className="w-full h-full">
                <path
                    fill="#F44336"
                    d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
                />
                <path
                    fill="#F44336"
                    d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
                />
                <g>
                    <path
                        fill="#1565C0"
                        d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                    />
                    <path
                        fill="#1565C0"
                        d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                    />
                    <path
                        fill="#1565C0"
                        d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                    />
                    <path
                        fill="#1565C0"
                        d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                    />
                    <path
                        fill="#1565C0"
                        d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                    />
                </g>
            </svg>
        ),
        color: '#F44336'
    },

    typescript: {
        component: () => (
            <svg viewBox="0 0 48 48" fill="currentColor" className="w-full h-full">
                <rect width="36" height="36" x="6" y="6" fill="#1976d2" />
                <polygon
                    fill="#fff"
                    points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                />
                <path
                    fill="#fff"
                    d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                />
            </svg>
        ),
        color: '#1976D2'
    },

    react: {
        component: () => (
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <g stroke="#61DAFB" strokeWidth="1" fill="none">
                    <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
                </g>
            </svg>
        ),
        color: '#61DAFB'
    },
    azure: {
        component: () => (
            <svg viewBox="0 0 48 48" fill="currentColor" className="w-full h-full">
                <path
                    fill="#2979ff"
                    d="M32.66,7H15.34c-0.715,0-1.375,0.381-1.732,1l-8.66,15c-0.357,0.619-0.357,1.381,0,2l8.66,15c0.357,0.619,1.018,1,1.732,1H32.66c0.715,0,1.375-0.381,1.732-1l8.66-15c0.357-0.619,0.357-1.381,0-2l-8.66-15C34.035,7.381,33.375,7,32.66,7z"
                />
                <path
                    fill="#ffffff"
                    d="M36 31.2L26.9 15.301 23.35 22.45 29.6 29.694 18 31.011zM18.05 19.299L12 29.506 17.15 28.989 26.2 12.478z"
                />
            </svg>
        ),
        color: '#2979FF'
    },

    aws: {
        component: () => (
            <svg viewBox="0 0 48 48" fill="currentColor" className="w-full h-full">
                <path
                    fill="#252f3e"
                    d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161
                c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677
                c-0.144,0.097-0.287,0.145-0.415,0.145c-0.16,0-0.319-0.081-0.479-0.226
                c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951
                c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096
                c0-1.37,0.479-2.483,1.453-3.321s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129
                s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58
                c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21
                c-0.591,0.145-1.165,0.322-1.724,0.548c-0.255,0.113-0.447,0.177-0.559,0.21
                c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79
                c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339
                c0.559-0.29,1.229-0.532,2.012-0.726c0.782-0.21,1.612-0.306,2.49-0.306
                c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z"
                />
                <path
                    fill="#f90"
                    d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998
                c-9.195,0-17.481-3.434-23.739-9.142c-0.495-0.451-0.048-1.064,0.543-0.709
                c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741
                C43.508,32.364,44.258,33.347,43.396,33.992z
                M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21
                c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806
                c0.575,0.726-0.16,5.708-2.969,8.094c-0.431,0.371-0.846,0.177-0.655-0.306
                C44.833,35.927,46.254,32.331,45.583,31.477z"
                />
            </svg>
        ),
        color: '#FF9900'
    },

};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
    const IconComponent = iconComponents[type]?.component;
    return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
    // Inner Orbit
    {
        id: 'python',
        orbitRadius: 100,
        size: 40,
        speed: 1,
        iconType: 'python',
        phaseShift: 0,
        glowColor: 'cyan',
        label: 'Python'
    },
    {
        id: 'java',
        orbitRadius: 100,
        size: 45,
        speed: 1,
        iconType: 'java',
        phaseShift: (2 * Math.PI) / 3,
        glowColor: 'cyan',
        label: 'Java'
    },
    {
        id: 'typescript',
        orbitRadius: 100,
        size: 40,
        speed: 1,
        iconType: 'typescript',
        phaseShift: (4 * Math.PI) / 3,
        glowColor: 'cyan',
        label: 'Typescript'
    },
    // Outer Orbit
    {
        id: 'react',
        orbitRadius: 180,
        size: 50,
        speed: -0.6,
        iconType: 'react',
        phaseShift: 0,
        glowColor: 'purple',
        label: 'React'
    },
    {
        id: 'azure',
        orbitRadius: 180,
        size: 45,
        speed: -0.6,
        iconType: 'azure',
        phaseShift: (2 * Math.PI) / 3,
        glowColor: 'purple',
        label: 'Azure'
    },
    {
        id: 'aws',
        orbitRadius: 180,
        size: 40,
        speed: -0.6,
        iconType: 'aws',
        phaseShift: (4 * Math.PI) / 3,
        glowColor: 'purple',
        label: 'AWS'
    },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const { orbitRadius, size, iconType, label } = config;

    const x = Math.cos(angle) * orbitRadius;
    const y = Math.sin(angle) * orbitRadius;

    return (
        <div
            className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                zIndex: isHovered ? 20 : 10,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
                style={{
                    boxShadow: isHovered
                        ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
                        : undefined
                }}
            >
                <SkillIcon type={iconType} />
                {isHovered && (
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
                        {label}
                    </div>
                )}
            </div>
        </div>
    );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
    const glowColors = {
        cyan: {
            primary: 'rgba(6, 182, 212, 0.4)',
            secondary: 'rgba(6, 182, 212, 0.2)',
            border: 'rgba(6, 182, 212, 0.3)'
        },
        purple: {
            primary: 'rgba(147, 51, 234, 0.4)',
            secondary: 'rgba(147, 51, 234, 0.2)',
            border: 'rgba(147, 51, 234, 0.3)'
        }
    };

    const colors = glowColors[glowColor] || glowColors.cyan;

    return (
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                animationDelay: `${animationDelay}s`,
            }}
        >
            {/* Glowing background */}
            <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                    background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
                    boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
                    animation: 'pulse 4s ease-in-out infinite',
                    animationDelay: `${animationDelay}s`,
                }}
            />

            {/* Static ring for depth */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    border: `1px solid ${colors.border}`,
                    boxShadow: `inset 0 0 20px ${colors.secondary}`,
                }}
            />
        </div>
    );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main App Component ---
export default function OrbitingSkills() {
    const [time, setTime] = useState(0);


    useEffect(() => {


        let animationFrameId: number;
        let lastTime = performance.now();

        const animate = (currentTime: number) => {
            const deltaTime = (currentTime - lastTime) / 1000;
            lastTime = currentTime;

            setTime(prevTime => prevTime + deltaTime);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
        { radius: 100, glowColor: 'cyan', delay: 0 },
        { radius: 180, glowColor: 'purple', delay: 1.5 }
    ];

    return (
        <main className="w-full flex items-center justify-center overflow-hidden">

            <div
                className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[450px] md:h-[450px] flex items-center justify-center"

            >

                {/* Central "Code" Icon with enhanced glow */}
                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
                    <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse"></div>
                    <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#06B6D4" />
                                    <stop offset="100%" stopColor="#9333EA" />
                                </linearGradient>
                            </defs>
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                    </div>
                </div>

                {/* Render glowing orbit paths */}
                {orbitConfigs.map((config) => (
                    <GlowingOrbitPath
                        key={`path-${config.radius}`}
                        radius={config.radius}
                        glowColor={config.glowColor}
                        animationDelay={config.delay}
                    />
                ))}

                {/* Render orbiting skill icons */}
                {skillsConfig.map((config) => {
                    const angle = time * config.speed + (config.phaseShift || 0);
                    return (
                        <OrbitingSkill
                            key={config.id}
                            config={config}
                            angle={angle}
                        />
                    );
                })}
            </div>
        </main>
    );
}