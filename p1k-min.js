function z(){function o(o,t,r,y){var x,l,e,s,c,p,u,b,g=Array(n),d=[],m=h[o],v=h[r],M={x:(t+f[o])*h[o].x,y:(t+f[o])*h[o].y},X={x:(y+f[r])*h[r].x,y:(y+f[r])*h[r].y},s=-m.y/m.x,Y=-s*M.y+M.x,w=-v.x/v.y,z=-w*X.x+X.y,A=(w*Y+z)/(1-w*s),I=s*A+Y,P={x:I,y:A};for(c=0;n>c;c++)p=h[c],p.x||(u=p.y,p.y=p.x,p.x=u),s=-p.y/p.x,g[c]=i.floor((P.x-s*P.y)/(-s*p.y+p.x)-f[c]);for(l=t+1;l-->t-1;)for(e=y+1;e-->y-1;){for(g[o]=l,g[r]=e,b={x:0,y:0},c=n;c-->0;)b.x+=g[c]*h[c].x,b.y+=g[c]*h[c].y;d.push(b)}a.beginPath(),a.moveTo(d[0].x,d[0].y),[1,3,2].forEach(function(o){a.lineTo(d[o].x,d[o].y)}),a.globalAlpha=.6,x=.1+.8*(o+r)/(2*n-3),a.fillStyle="rgba(0,0,0,"+x+")",a.fill()}a.restore(),X=b.clientWidth,Y=window.innerHeight-4,c.width=2*X,c.height=2*Y,a.translate(X,Y),a.scale(55,55),c.style.position="absolute",c.style.top="-"+Math.floor(Y/2)+"px",c.style.left="-"+Math.floor(X/2)+"px";var t,r,y,x,l,e,f=[],i=Math,n=5+2*(0|2*Math.random()),h=[];for(l=n;l-->0;)e=i.PI*(.5+2*l/n),h.push({x:-i.sin(e),y:i.cos(e)}),f.push(i.random());for(t=n;t-->0;)for(r=n;r-->0;)if(r-t)for(y=9;y-->-8;)for(x=9;x-->-8;)o(t,y,r,x)}b.style.margin=0,z(),setInterval(z,2e4);