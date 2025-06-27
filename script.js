
// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add fade-in animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .feature, .about-text, .category-card');
    animateElements.forEach(el => observer.observe(el));
    
    // Contact form handling (if exists)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Product data for dynamic content
    window.productData = {
        1: {
            name: "Premium Wireless Headphones",
            price: "₹2,999",
            image: "images/wireless-headphone.jpg",
            description: "High-quality wireless headphones with noise cancellation, premium sound quality, and long battery life. Perfect for music lovers and professionals.",
            specifications: [
                "Bluetooth 5.0 connectivity",
                "30-hour battery life",
                "Active noise cancellation",
                "Premium leather headband",
                "Built-in microphone"
            ]
        },
        2: {
            name: "Fitness Smart Watch",
            price: "₹4,599",
            image: "images/smart-watch.jpg",
            description: "Advanced fitness tracking smartwatch with heart rate monitoring, GPS, and water resistance. Stay connected and healthy.",
            specifications: [
                "Heart rate monitoring",
                "GPS tracking",
                "Water resistant (50m)",
                "7-day battery life",
                "Multiple sport modes"
            ]
        },
        3: {
            name: "Portable Bluetooth Speaker",
            price: "₹1,899",
            image: "images/bluetooth-speaker.jpg",
            description: "Compact wireless speaker with powerful sound, waterproof design, and long-lasting battery. Perfect for outdoor activities.",
            specifications: [
                "360° surround sound",
                "IPX7 waterproof",
                "12-hour playtime",
                "Bluetooth 5.0",
                "Built-in microphone"
            ]
        },
        4: {
            name: "Adjustable Laptop Stand",
            price: "₹899",
            image: "images/laptop-stand.jpg",
            description: "Ergonomic aluminum laptop stand with adjustable height and angle. Improve your posture and workspace comfort.",
            specifications: [
                "Aluminum construction",
                "Adjustable height & angle",
                "Supports laptops up to 17\"",
                "Non-slip silicone pads",
                "Foldable design"
            ]
        },
        5: {
            name: "Wireless Gaming Mouse",
            price: "₹1,299",
            image: "images/wireless-mouse.jpg",
            description: "High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons.",
            specifications: [
                "12000 DPI sensor",
                "Wireless 2.4GHz connection",
                "RGB lighting",
                "6 programmable buttons",
                "50-hour battery life"
            ]
        },
        6: {
            name: "Fast Charging Power Bank",
            price: "₹1,599",
            image: "images/powerbank.jpg",
            description: "High-capacity power bank with fast charging technology and multiple ports for all your devices.",
            specifications: [
                "20000mAh capacity",
                "Fast charging PD 18W",
                "Dual USB-A + USB-C ports",
                "LED power indicator",
                "Compact design"
            ]
        },
        7: {
            name: "UV Protection Sunglasses",
            price: "₹799",
            image: "images/sunglasses.jpg",
            description: "Stylish sunglasses with 100% UV protection and polarized lenses for clear vision.",
            specifications: [
                "UV400 protection",
                "Polarized lenses",
                "Lightweight frame",
                "Anti-glare coating",
                "Includes carrying case"
            ]
        },
        8: {
            name: "Smart LED Bulb",
            price: "₹399",
            image: "images/led-bulb.jpg",
            description: "WiFi-enabled smart LED bulb with color changing capabilities and voice control support.",
            specifications: [
                "WiFi connectivity",
                "16 million colors",
                "Voice control compatible",
                "Energy efficient LED",
                "Mobile app control"
            ]
        }
    };
    
    // Category data
    window.categoryData = {
        electronics: [
            { id: 1, name: "Premium Wireless Headphones", price: "₹2,999", image: "images/wireless-headphones.jpg" },
            { id: 2, name: "Fitness Smart Watch", price: "₹4,599", image: "images/smart-watch.jpg" },
            { id: 3, name: "Portable Bluetooth Speaker", price: "₹1,899", image: "images/bluetooth-speaker.jpg" },
            { id: 5, name: "Wireless Gaming Mouse", price: "₹1,299", image: "images/gaming-mouse.jpg" },
            { id: 6, name: "Fast Charging Power Bank", price: "₹1,599", image: "images/power-bank.jpg" }
        ],
        accessories: [
            { id: 4, name: "Adjustable Laptop Stand", price: "₹899", image: "images/laptop-stand.jpg" },
            { id: 7, name: "UV Protection Sunglasses", price: "₹799", image: "images/sunglasses.jpg" },
            { id: 9, name: "Leather Wallet", price: "₹599", image: "images/wallet.jpg" },
            { id: 10, name: "Phone Case", price: "₹299", image: "images/phone-case.jpg" }
        ],
        home: [
            { id: 8, name: "Smart LED Bulb", price: "₹399", image: "images/led-bulb.jpg" },
            { id: 11, name: "LED Desk Lamp", price: "₹1,199", image: "images/desk-lamp.jpg" },
            { id: 12, name: "Storage Organizer", price: "₹449", image: "images/organizer.jpg" },
            { id: 13, name: "Air Purifier", price: "₹3,999", image: "images/air-purifier.jpg" }
        ]
    };
});

// Category navigation function
function goToCategory(category) {
    // Redirect to categories page with hash for specific category
    window.location.href = `categories.html#${category}`;
}

// Utility functions
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
}
