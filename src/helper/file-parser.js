export function makeFileObjects(file, thumbnail) {
    const files = [
        new File([file], file.name),
        new File([thumbnail], thumbnail.name),
    ];
    return files;
}
