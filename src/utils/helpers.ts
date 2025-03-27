export function formatStepCount(count: number): string {
    return `${count} steps`;
}

export function calculateAverageSteps(steps: number[], days: number): number {
    const total = steps.reduce((acc, curr) => acc + curr, 0);
    return days > 0 ? total / days : 0;
}