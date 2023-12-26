export function formatFileSize(fileSizeBytes) {
  // Define size units and their respective suffixes
  const sizeUnits = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  // Initialize variables
  let size = fileSizeBytes;
  let unitIndex = 0;

  // Convert to appropriate unit
  while (size >= 1024 && unitIndex < sizeUnits.length - 1) {
    size /= 1024.0;
    unitIndex += 1;
  }

  // Format the result with 2 decimal places
  const formattedSize = `${size.toFixed(2)} ${sizeUnits[unitIndex]}`;

  return formattedSize;
}

export function extractFileExtension(inputString) {
  // Use a regular expression to match the word after the /
  const match = inputString.match(/\/(\w+)/);

  // Check if there's a match
  if (match && match[1]) {
    // Extract the matched word and convert it to uppercase
    const extractedWordUppercase = match[1].toUpperCase();
    return extractedWordUppercase;
  } else {
    // Return null or handle the case where there is no match
    return null;
  }
}

export function addWhitespaceAfterComma(inputString) {
    // Use a regular expression to match commas and add a whitespace after each comma
    const resultString = inputString.replace(/,/g, ', ');

    return resultString;
}

export function calculateProgressPercentage(subTasks) {
  if (!subTasks || subTasks.length === 0) {
      return `${1}%`;
  }

  const totalSubTasks = subTasks.length;
  const completedSubTasks = subTasks.filter(task => task.completed).length;

  // Calculate the percentage
  const percentage = (completedSubTasks / totalSubTasks) * 100;

  return `${percentage}%`;
}