function isValidDateFormat(dateString) {
    // Attempt to create a new Date object from the dateString
    const date = new Date(dateString);
    
    // Check if the date object is valid
    // and if all components (year, month, day, hour, minute, second) are parsed correctly
    return !isNaN(date.getTime()) && /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(dateString);
}

export default isValidDateFormat
