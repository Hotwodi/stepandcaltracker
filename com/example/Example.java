package main.java;

import java.util.Scanner;

public class Example {
    public static void main(String[] args) {
        System.out.println("Welcome to the Step Counter App!");

        Scanner scanner = new Scanner(System.in);
        int steps = 0;
        final double CALORIES_PER_STEP = 0.04;

        while (true) {
            System.out.println("Enter 'step' to simulate a step or 'exit' to quit:");
            String input = scanner.nextLine();

            if ("step".equalsIgnoreCase(input)) {
                steps++;
                double caloriesBurned = steps * CALORIES_PER_STEP;
                System.out.println("Steps counted: " + steps);
                System.out.printf("Calories burned: %.2f kcal%n", caloriesBurned);
            } else if ("exit".equalsIgnoreCase(input)) {
                double totalCaloriesBurned = steps * CALORIES_PER_STEP;
                System.out.println("Exiting the Step Counter App.");
                System.out.println("Total steps: " + steps);
                System.out.printf("Total calories burned: %.2f kcal%n", totalCaloriesBurned);
                break;
            } else {
                System.out.println("Invalid input. Please enter 'step' or 'exit'.");
            }
        }

        scanner.close();
    }
}
