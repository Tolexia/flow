// precision mediump float;

uniform vec3 uColor;
uniform sampler2D uTexture;

// varying float vRandom;
varying vec2 vUv;
varying float vElevation;


void main()
{

    // vec4 textureColor = texture2D(uTexture, vUv);
    // textureColor.rgb *= vElevation * 1.5 + 0.75;
    vec4 cyan = vec4(0.0, 1.0, 1.0, 1.0);
    
    gl_FragColor = cyan;
    // gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);

}