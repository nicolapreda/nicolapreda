const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS_DIR = path.join(__dirname, '../public/assets');
const QUALITY = 80;
const MAX_WIDTH = 1920;

// Helper to get all files recursively
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

// Main optimization function
async function optimizeImages() {
    console.log('🚀 Starting image optimization...');
    
    if (!fs.existsSync(ASSETS_DIR)) {
        console.error('❌ Assets directory not found:', ASSETS_DIR);
        return;
    }

    const files = getAllFiles(ASSETS_DIR);
    let count = 0;

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        
        // Skip already optimized WebP files or non-image files
        if (ext === '.webp' || !['.jpg', '.jpeg', '.png'].includes(ext)) {
            continue;
        }

        const filename = path.basename(file, ext);
        const dir = path.dirname(file);
        const outputPath = path.join(dir, `${filename}.webp`);

        // Skip if WebP version already exists (optional: remove check to force regeneration)
        // if (fs.existsSync(outputPath)) continue;

        try {
            console.log(`Processing: ${path.relative(ASSETS_DIR, file)}`);
            
            // Create pipeline
            let pipeline = sharp(file);
            
            // Get metadata to check dimensions
            const metadata = await pipeline.metadata();

            // Resize if too big
            if (metadata.width > MAX_WIDTH) {
                console.log(`  -> Resizing from ${metadata.width}px to ${MAX_WIDTH}px`);
                pipeline = pipeline.resize(MAX_WIDTH);
            }

            // Convert to WebP
            await pipeline
                .webp({ quality: QUALITY })
                .toFile(outputPath);

            console.log(`  ✅ Optimized to ${path.relative(ASSETS_DIR, outputPath)}`);
            count++;
            
            // Optional: Delete original file to save space? 
            // Better to keep original as backup or manual delete.
            // fs.unlinkSync(file); 

        } catch (error) {
            console.error(`❌ Error processing ${file}:`, error.message);
        }
    }

    console.log(`\n✨ Optimization complete! Processed ${count} images.`);
}

optimizeImages();
