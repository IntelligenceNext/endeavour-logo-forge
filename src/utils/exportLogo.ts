
export const exportLogo = (elementId: string, fileName: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Use html2canvas to capture the element
  import('html2canvas').then((html2canvas) => {
    html2canvas.default(element, {
      backgroundColor: null,
      scale: 3,  // Higher scale for better quality
    }).then((canvas) => {
      // Create a download link
      const link = document.createElement('a');
      link.download = `${fileName}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  });
};
