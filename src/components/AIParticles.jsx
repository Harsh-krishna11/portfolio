import Particles from "react-tsparticles";

function AIParticles({
  density = 40,
  speed = 0.4,
  opacity = 0.25,
  color = "#00eaff",
}) {
  return (
    <Particles
      className="ai-particles"
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        particles: {
          number: { value: density },
          color: { value: color },
          opacity: { value: opacity },
          size: { value: 2 },
          move: {
            enable: true,
            speed: speed,
          },
          links: {
            enable: true,
            distance: 140,
            color: color,
            opacity: opacity * 0.6,
          },
        },
      }}
    />
  );
}

export default AIParticles;
