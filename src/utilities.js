export const drowMesh = (predictions, ctx) => {

  if (predictions.length > 0) {

    const keypoints = predictions[0].keypoints;
    const box = predictions[0].box;

    for (let i = 1; i < keypoints.length; i++) {
        const xOld = keypoints[i-1].x; 
        const yOld = keypoints[i-1].y / 3; 
      const x = keypoints[i].x; 
      const y = keypoints[i].y / 3; 

      ctx.beginPath();
      ctx.arc(x, y, 1, 0, 3 * Math.PI);
      ctx.fillStyle = "#03045e";
      ctx.fill();
    }

  }
};
