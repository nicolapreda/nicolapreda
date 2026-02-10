const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const projects = [
  { id: "ssa-agency", url: "https://ssaagency.it/" },
  { id: "domora", url: "https://domoraimmobiliare.it/" },
  { id: "sun-fai", url: "https://www.sun-fai.org/" },
  { id: "galacticos", url: "https://galacticosvb.it/" },
  { id: "predanicola", url: "https://predanicola.it/" }
];

const outputDir = path.join(__dirname, '../public/assets/projects');

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch();
  
  console.log(`Starting capture of ${projects.length} projects...`);

  for (const project of projects) {
    try {
        console.log(`Capturing ${project.id} (${project.url})...`);
        const page = await browser.newPage();
        
        // Set a reasonable desktop viewport
        await page.setViewport({ width: 1440, height: 900 });

        // Navigate to URL and wait for load
        await page.goto(project.url, { waitUntil: 'networkidle0', timeout: 60000 });
        
        // Wait a bit more for animations or lazy loads
        await new Promise(r => setTimeout(r, 2000));

        const outputPath = path.join(outputDir, `${project.id}.jpg`);
        
        await page.screenshot({ 
            path: outputPath, 
            type: 'jpeg', 
            quality: 80,
            fullPage: false // Capturing just the fold/hero area usually looks better for previews, but let's stick to viewport
        });

        console.log(`Saved to ${outputPath}`);
        await page.close();
    } catch (e) {
        console.error(`Failed to capture ${project.id}:`, e.message);
    }
  }

  await browser.close();
  console.log('All captures finished.');
})();
