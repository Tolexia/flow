
void main()
{

    vec3 cyan = vec3(0.0, 1.0, 1.0);

    float strength = distance(gl_PointCoord, vec2(0.5));
    strength *= 2.0;
    strength = 1.0 - strength;
    
    vec3 color = mix(vec3(0.0), cyan, strength);
    gl_FragColor = vec4(color, 1.0);

     #include <colorspace_fragment>

}