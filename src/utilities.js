export const drowMesh = (predictions, ctx) => {

  if (predictions.length > 0) {

    const keypoints = predictions[0].keypoints;
    const box = predictions[0].box;

    for (let i = 1; i < keypoints.length; i++) {
        const xOld = keypoints[i-1].x; //-box.xMin;
        const yOld = keypoints[i-1].y / 3; //-box.yMin;
      const x = keypoints[i].x; //-box.xMin;
      const y = keypoints[i].y / 3; //-box.yMin;

      ctx.beginPath();
      ctx.arc(x, y, 1, 0, 3 * Math.PI);
      ctx.fillStyle = "#2ecc71";
      ctx.fill();

    //   ctx.beginPath();
    //   ctx.moveTo(xOld, yOld);
    //   ctx.lineTo(x, y);
    //   ctx.fillStyle = "#2ecc71";
    //   ctx.stroke();

    }

  }
};
