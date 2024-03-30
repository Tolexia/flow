// uniform mat4 projectionMatrix;
// uniform mat4 viewMatrix;
// uniform mat4 modelMatrix;
uniform vec2 uFrequency;
uniform float uTime;

// attribute vec3 position;
attribute float aRandom;
// attribute vec2 uv;

// varying float vRandom;
varying vec2 vUv;
varying float vElevation;

void main()
{

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y = tan(uTime + modelPosition.x);

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    
    gl_Position = projectedPosition;
    
}