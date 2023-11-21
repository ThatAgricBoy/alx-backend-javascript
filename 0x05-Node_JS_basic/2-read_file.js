const fs = require('fs');

const countStudents = (path) => {
    if (!fs.existsSync(path)) {
        throw new Error('Cannot load the database');
    }
    if (!fs.statSync(path).isFile()) {
        throw new Error('Cannot load the database');
    }
    const fileLines = fs
        .readFileSync(path, 'utf8')
        .split('\n')
        .filter((line) => line.length > 0);
    const fields = {};
    const students = {};
    for (const line of fileLines) {
        const student = line.split(',');
        if (!fields.student) {
            fields.student = student;
        } else {
            const numStudent = student[student.length - 1];
            if (!students[numStudent]) {
                students[numStudent] = [];
            }
            students[numStudent].push(student.slice(0, student.length - 1));
        }
    }
