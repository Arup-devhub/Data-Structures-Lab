#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 5  // Matching the web UI layout limits

int stack[MAX_SIZE];
int top = -1; // -1 means the stack is empty

// Condition Check: Is the stack full?
int isFull() {
    return top == MAX_SIZE - 1;
}

// Condition Check: Is the stack empty?
int isEmpty() {
    return top == -1;
}

// Push operation to insert an element
void push(int value) {
    if (isFull()) {
        printf("🚨 STACK OVERFLOW! Cannot push %d. Memory allocation full.\n", value);
        return;
    }
    top++;
    stack[top] = value;
    printf("[Success] Pushed %d onto the stack. Top pointer is now index %d.\n", value, top);
}

// Pop operation to remove the top element
int pop() {
    if (isEmpty()) {
        printf("🚨 STACK UNDERFLOW! Structure is empty. Cannot pop.\n");
        return -1;
    }
    int poppedValue = stack[top];
    top--;
    printf("[Success] Popped %d off the stack. New top pointer index is %d.\n", poppedValue, top);
    return poppedValue;
}

// Display current stack state in the terminal
void displayStack() {
    if (isEmpty()) {
        printf("Stack Status: Empty\n\n");
        return;
    }
    printf("--- Current Stack (Top to Bottom) ---\n");
    for (int i = top; i >= 0; i--) {
        if (i == top) {
            printf("| %3d | <-- TOP\n", stack[i]);
        } else {
            printf("| %3d |\n", stack[i]);
        }
    }
    printf("-------------------------------------\n\n");
}

int main() {
    printf("🔬 Native C Stack Engine Initialized\n\n");
    
    // Simulating exactly what a user might click in your web app:
    push(10);
    push(20);
    push(30);
    displayStack();
    
    pop();
    displayStack();
    
    push(40);
    push(50);
    push(60); 
    push(70); // This one will trigger the Stack Overflow warning!
    displayStack();
    
    return 0;
}