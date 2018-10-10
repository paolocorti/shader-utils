// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float drawRect(in float threshold, in vec2 st){
    // bottom-left
    vec2 bl = step(vec2(threshold),st);
    float pct = bl.x * bl.y;

    // top-right
    vec2 tr = step(vec2(threshold),1.0-st);
    pct *= tr.x * tr.y;
    
    return pct;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
	
    float pct = drawRect(sin(u_time / 10.0), st);
    color = vec3(pct);

    gl_FragColor = vec4(color,1.0);
}
