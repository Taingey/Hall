public class Student {
    // Fields
    private String name;
    private int age;

    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}
