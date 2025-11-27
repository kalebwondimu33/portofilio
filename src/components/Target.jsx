import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Simple geometric target using Three.js primitives
const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
      <group>
        {/* Outer ring - red */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[1.5, 0.3, 16, 32]} />
          <meshStandardMaterial color="#ff0000" metalness={0.3} roughness={0.4} />
        </mesh>
        {/* Middle ring - white */}
        <mesh position={[0, 0, 0.1]}>
          <torusGeometry args={[1.0, 0.3, 16, 32]} />
          <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0.4} />
        </mesh>
        {/* Inner ring - red */}
        <mesh position={[0, 0, 0.2]}>
          <torusGeometry args={[0.5, 0.3, 16, 32]} />
          <meshStandardMaterial color="#ff0000" metalness={0.3} roughness={0.4} />
        </mesh>
        {/* Center - yellow */}
        <mesh position={[0, 0, 0.3]}>
          <circleGeometry args={[0.3, 32]} />
          <meshStandardMaterial color="#ffff00" metalness={0.3} roughness={0.4} />
        </mesh>
        {/* Stand pole */}
        <mesh position={[0, -1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 3, 16]} />
          <meshStandardMaterial color="#8B4513" metalness={0.2} roughness={0.8} />
        </mesh>
        {/* Stand base */}
        <mesh position={[0, -3, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.2, 16]} />
          <meshStandardMaterial color="#654321" metalness={0.2} roughness={0.8} />
        </mesh>
      </group>
    </mesh>
  );
};

export default Target;
