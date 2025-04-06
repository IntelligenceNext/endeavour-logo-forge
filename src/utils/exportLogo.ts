
export const exportLogo = (elementId: string, fileName: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Use html2canvas to capture the element
  import('html2canvas').then((html2canvas) => {
    html2canvas.default(element, {
      backgroundColor: null,
      scale: 4,  // Higher scale for even better quality
      logging: false,
      useCORS: true,
      allowTaint: true,
    }).then((canvas) => {
      // Create a download link
      const link = document.createElement('a');
      link.download = `${fileName}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }).catch(error => {
      console.error('Error generating logo:', error);
    });
  });
};

// Function to create SVG version of the logo
export const exportLogoAsSVG = (elementId: string, fileName: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    // Get the HTML content
    const htmlContent = element.outerHTML;
    
    // Create a Blob containing the SVG data
    const blob = new Blob([htmlContent], { type: 'image/svg+xml' });
    
    // Create download link
    const link = document.createElement('a');
    link.download = `${fileName}.svg`;
    link.href = URL.createObjectURL(blob);
    link.click();
  } catch (error) {
    console.error('Error generating SVG:', error);
  }
};
