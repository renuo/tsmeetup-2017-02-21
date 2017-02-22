package ch.renuo.examples;

import java.util.ArrayList;

class Car {
    public String name;

    public void horn() {
        System.out.println("Toot from " + name);
    }
}

class Cat {
    public String name;
}

class TrafficJam {
    private ArrayList<Car> cars = new ArrayList<>();

    public void stuck(Car car) {
        cars.add(car);
    }

    public void tick() {
        for (Car car : cars) {
            car.horn();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        TrafficJam jam = new TrafficJam();

        // somewhere else in the code
        Car car = new Car();
        Cat cat = new Cat();
        jam.stuck(car);
        Object o = cat;
        jam.stuck((Car) o);

        // somewhere else in the code
        jam.tick();
    }
}

