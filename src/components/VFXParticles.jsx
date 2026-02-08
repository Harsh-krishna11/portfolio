// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { useMemo, useRef } from "react";
// import * as THREE from "three";

// function BackgroundParticles() {
//   const ref = useRef();
//   const { viewport } = useThree();
//   const COUNT = 900;

//   // screen-space positions
//   const positions = useMemo(() => {
//     const arr = new Float32Array(COUNT * 3);
//     for (let i = 0; i < COUNT; i++) {
//       arr[i * 3] = (Math.random() - 0.5) * viewport.width;
//       arr[i * 3 + 1] = (Math.random() - 0.5) * viewport.height;
//       arr[i * 3 + 2] = 0; // flat
//     }
//     return arr;
//   }, [viewport]);

//   // slow ambient drift (NO accumulation)
//   useFrame(() => {
//     if (!ref.current) return;
//     const pos = ref.current.geometry.attributes.position.array;

//     for (let i = 0; i < COUNT; i++) {
//       pos[i * 3] += 0.001;
//       pos[i * 3 + 1] += 0.001;

//       if (pos[i * 3] > viewport.width / 2) pos[i * 3] = -viewport.width / 2;
//       if (pos[i * 3 + 1] > viewport.height / 2)
//         pos[i * 3 + 1] = -viewport.height / 2;
//     }

//     ref.current.geometry.attributes.position.needsUpdate = true;
//   });

//   return (
//     <points ref={ref}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           array={positions}
//           count={positions.length / 3}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         size={1.5}
//         color="#00eaff"
//         opacity={0.6}
//         transparent
//         blending={THREE.AdditiveBlending}
//         depthWrite={false}
//       />
//     </points>
//   );
// }

// export default function VFXParticles() {
//   return (
//     <Canvas
//       orthographic
//       camera={{ zoom: 80, position: [0, 0, 10] }}
//       gl={{ alpha: true }}
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 9999,
//       }}
//     >
//       <BackgroundParticles />
//     </Canvas>
//   );
// }


import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// very light pseudo-noise (fast + no lib)
function noise(x, y, t) {
  return Math.sin(x * 0.6 + t) + Math.cos(y * 0.6 + t);
}

function BackgroundParticles() {
  const ref = useRef();
  const { viewport } = useThree();
  const COUNT = 900;

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * viewport.width;
      arr[i * 3 + 1] = (Math.random() - 0.5) * viewport.height;
      arr[i * 3 + 2] = 0;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.elapsedTime * 0.15;
    const pos = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      const x = pos[ix];
      const y = pos[ix + 1];

      // FLOW FIELD DIRECTION
      const angle = noise(x * 0.05, y * 0.05, t);
      const vx = Math.cos(angle) * 0.015;
      const vy = Math.sin(angle) * 0.015;

      pos[ix] += vx;
      pos[ix + 1] += vy;

      // wrap screen
      if (pos[ix] > viewport.width / 2) pos[ix] = -viewport.width / 2;
      if (pos[ix] < -viewport.width / 2) pos[ix] = viewport.width / 2;
      if (pos[ix + 1] > viewport.height / 2) pos[ix + 1] = -viewport.height / 2;
      if (pos[ix + 1] < -viewport.height / 2) pos[ix + 1] = viewport.height / 2;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.5} // 🔑 smaller = elegant
        color="#00eaff"
        opacity={1}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function VFXParticles() {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 90, position: [0, 0, 10] }}
      gl={{ alpha: true }}
      dpr={[1, 1.5]}
    >
      <BackgroundParticles />
    </Canvas>
  );
}
