import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

function getFilesRecursive(directory) {
  const files = fs.readdirSync(directory);
  const allFiles = [];

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      const nestedFiles = getFilesRecursive(filePath);
      allFiles.push(...nestedFiles);
    } else {
      allFiles.push(filePath);
    }
  });

  return allFiles;
}

const sourceFolder = 'src/assets';

const destinationFolder = 'src/assets';


if (!fs.existsSync(destinationFolder)) {
  fs.mkdirSync(destinationFolder);
}

const imageFiles = getFilesRecursive(sourceFolder).filter((file) => /\.(png|jpeg|jpg)$/i.test(file));

imageFiles.forEach((file) => {
  const inputPath = file;
  const relativePath = path.relative(sourceFolder, inputPath);
  const outputPath = path.join(destinationFolder, relativePath.replace(/\.(png|jpeg|jpg)$/i, '.webp'));

  sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath, (err, info) => {
      if (err) {
        console.error(`Error while converting ${inputPath}: ${err}`);
      } else {
        console.log(`Image successfully converted: ${inputPath} -> ${outputPath}`);
      }
    });
});
