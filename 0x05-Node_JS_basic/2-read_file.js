const fs = require('fs');

const countStudents = (path) => {
    if (!fs.existsSync(path)) {
        throw new Error('Cannot load the database');
    }
    if (fs.existsSync(path)) {
        let data = fs.readFileSync(path, 'utf8');
        data = data.split('\n');
        data = data.slice(1, data.length - 1);
        console.log(`Number of students: ${data.length}`);
        const fields = {};
        for (const row of data) {
            const student = row.split(',');
            if (!fields[student[3]]) {
                fields[student[3]] = [];
            }
            fields[student[3]].push(student[0]);
        }
        for (const field in fields) {
            if (field) {
                const list = fields[field];
                console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
            }
        }
    }
}
