uniform float uTime;

void main()
{

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    modelPosition.y = tan(uTime + position.x );

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    
    gl_Position = projectedPosition;
    gl_PointSize = 5.5;
    gl_PointSize *= (1.0 / - viewPosition.z);

}