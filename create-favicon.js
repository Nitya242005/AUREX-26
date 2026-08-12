import sharp from 'sharp';
import fs from 'fs';

async function createFavicon() {
  try {
    const inputPath = 'public/aurex-logo.png';
    console.log(`Processing ${inputPath}...`);
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original Dimensions: ${metadata.width}x${metadata.height}`);
    
    // Create a 512x512 PNG favicon (standard square size)
    await sharp(inputPath)
      .trim()
      .resize({
        width: 512,
        height: 512,
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
      })
      .toFile('public/favicon.png');
      
    console.log("Successfully created public/favicon.png");
  } catch (error) {
    console.error("Error creating favicon:", error);
  }
}

createFavicon();
