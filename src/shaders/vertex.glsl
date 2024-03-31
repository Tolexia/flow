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

float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main()
{

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    float randomVal = random(modelPosition.xy);

    modelPosition.y = tan(uTime + modelPosition.x * 3.0 ) + randomVal;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    
    gl_Position = projectedPosition;

    vUv = uv;
    
}