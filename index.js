// FoodItem class to represent an item in the fridge
class FoodItem {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}

// Menu class to manage fridge inventory
class Menu {
    constructor() {
        this.foodItems = []; // Array to store food items
    }

    // Method to add a new food item to the fridge
    addFoodItem() {
        let itemName = prompt("Enter food item name");
        let itemQuantity = parseInt(prompt("Enter quantity"), 10);
        if (isNaN(itemQuantity) || itemQuantity <= 0) {
            alert("Invalid quantity. Please enter a positive number.");
            return;
        }
        this.foodItems.push(new FoodItem(itemName, itemQuantity));
    }

    // Method to delete a food item from the fridge by index
    deleteFoodItem() {
        let itemIndex = parseInt(prompt("Enter food item index to DELETE"), 10);
        if (!isNaN(itemIndex) && itemIndex >= 0 && itemIndex < this.foodItems.length) {
            this.foodItems.splice(itemIndex, 1);
        } else {
            alert("Invalid index. Please enter a valid number.");
        }
    }

    // Method to view all food items in the fridge
    viewFoodItems() {
        if (this.foodItems.length === 0) {
            alert("No food items to display.");
            return;
        }

        let displayItems = '';
        for (let i = 0; i < this.foodItems.length; i++) {
            displayItems += `${i}) ${this.foodItems[i].name} - Quantity: ${this.foodItems[i].quantity}\n`;
        }

        alert(`
        Fridge Inventory:

        ${displayItems}`);
    }

    // Method to display the main menu and get user selection
    showMainMenu() {
        return prompt(`
            Main Menu:
            --------------
            0) Exit Menu
            1) Add food item
            2) Delete food item
            3) View All Food Items
        `);
    }

    // Method to start the menu loop and handle user choices
    start() {
        let selection = this.showMainMenu();
        while (selection !== "0") {
            switch (selection) {
                case "1":
                    this.addFoodItem();
                    break;
                case "2":
                    this.deleteFoodItem();
                    break;
                case "3":
                    this.viewFoodItems();
                    break;
                default:
                    alert("Invalid selection. Please choose a valid option.");
                    break;
            }
            selection = this.showMainMenu();
        }
        alert("Exiting. Bye!");
    }
}

// Initialize and start the menu
let menu = new Menu();
menu.start();
