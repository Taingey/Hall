public class Main {
    public static void main(String[] args) {
        Animal genericAnimal = new Animal();
        genericAnimal.makeSound(); // Output: Some generic sound

        Dog myDog = new Dog();
        myDog.makeSound(); // Output: Woof! Woof!
    }
}
