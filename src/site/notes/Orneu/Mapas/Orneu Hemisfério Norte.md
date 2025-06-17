---
{"dg-publish":true,"permalink":"/orneu/mapas/orneu-hemisferio-norte/"}
---


<div style="display:flex;justify-content:center;align-items:center;height:100vh;overflow:hidden;touch-action:none;cursor:grab;"><img id="orneu-svg" src="Orneu/Mapas/Orneu Hemisfério Norte.svg" style="max-width:80%;max-height:80%;transform-origin:center center;transition:transform 0.3s;user-select:none;pointer-events:auto;" draggable="false" onmousedown="const img=this;img.style.cursor='grabbing';let startX=event.clientX,endX,startY=event.clientY,endY;let matrix=img.style.transform.match(/matrix\(([^)]+)\)/);let scale=1,offsetX=0,offsetY=0;if(matrix){const vals=matrix[1].split(',');scale=parseFloat(vals[0]);offsetX=parseFloat(vals[4]);offsetY=parseFloat(vals[5]);}function onMove(e){e.preventDefault();endX=e.clientX;endY=e.clientY;const dx=endX-startX;const dy=endY-startY;img.style.transform=`matrix(${scale},0,0,${scale},${offsetX+dx},${offsetY+dy})`; }function onUp(e){img.style.cursor='grab';document.removeEventListener('mouseup',onUp);document.removeEventListener('mousemove',onMove);}document.addEventListener('mousemove',onMove);document.addEventListener('mouseup',onUp);return false;" onclick="const img=this;let matrix=img.style.transform.match(/matrix\(([^)]+)\)/);let scale=1,offsetX=0,offsetY=0;if(matrix){const vals=matrix[1].split(',');scale=parseFloat(vals[0]);offsetX=parseFloat(vals[4]);offsetY=parseFloat(vals[5]);}scale=scale===2?1:2;img.style.transform=`matrix(${scale},0,0,${scale},${offsetX},${offsetY})`;"></div>


