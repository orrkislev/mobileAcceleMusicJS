if (window.DeviceMotionEvent != undefined) {
	window.ondevicemotion = function(e) {
		ax = event.accelerationIncludingGravity.x * 5;
		ay = event.accelerationIncludingGravity.y * 5;
		document.getElementById("accelerationX").innerHTML = e.accelerationIncludingGravity.x;
		document.getElementById("accelerationY").innerHTML = e.accelerationIncludingGravity.y;
		document.getElementById("accelerationZ").innerHTML = e.accelerationIncludingGravity.z;
    }
    
    if ( e.rotationRate ) {
		document.getElementById("rotationAlpha").innerHTML = e.rotationRate.alpha;
		document.getElementById("rotationBeta").innerHTML = e.rotationRate.beta;
		document.getElementById("rotationGamma").innerHTML = e.rotationRate.gamma;
	}		
}