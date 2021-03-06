if (!Kit) var Kit = {};
Kit.Tunnel = {
      model: "QuadShader",
 renderStep: {
        fragment: `  // This one copied from WikiPedia page about ShaderToy
                void main() {
                  vec2 p = (inverse(u_projection) * vec4((gl_FragCoord.xy/u_resolution.xy * 2.0 - 1.0),1.0,1.0)).xy;
                  // input: pixel coordinates
                     //vec2 p = (-iResolution.xy + 2.0*fragCoord)/iResolution.y;

                     // angle of each pixel to the center of the screen
                     float a = atan(p.y,p.x);

                     // modified distance metric
                     float r = pow( pow(p.x*p.x,4.0) + pow(p.y*p.y,4.0), 1.0/8.0 );

                     // index texture by (animated inverse) radious and angle
                     vec2 uv = vec2( 1.0/r + 0.2*u_time, a );

                     // pattern: cosines
                     float f = cos(12.0*uv.x)*cos(6.0*uv.y);

                     // color fetch: palette
                     vec3 col = 0.5 + 0.5*sin( 3.1416*f + vec3(0.0,0.5,1.0) );

                     // lighting: darken at the center
                     col = col*r;

                     // output: pixel color
                     fragColor = vec4( col, 1.0 );
                   }  `
}
}
