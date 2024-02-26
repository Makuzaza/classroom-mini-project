export function getNumberOfGrades(grades: number[]): number  {
    return grades.length;
}

export function getSumGrades(grades: number[]): number {
//     let sum = 0;
//     for (const grade of grades) {
//     sum += grade;
//     }
// return sum;
    return grades.reduce((sum, grade) => sum + grade, 0);
}

export function getAverageValue(grades: number[]): number {
    if (grades.length === 0) {
        return 0; 
    }
    const sum = getSumGrades(grades);
    const average = sum / grades.length;
    return parseFloat(average.toFixed(2));
}

export function getPassingGrades(grades: number[]): number[] {
    return grades.filter(grade => grade >= 10);
}


export function getFailingGrades(grades: number[]): number[] {
    return grades.filter(grade => grade < 10);
}

export function getRaisedGrades(grades: number[]): number[] {
    return grades.map(grade => Math.min(grade + 1, 20));
    
}