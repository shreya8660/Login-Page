// Simple JS Router
class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentPath = window.location.hash.substring(1) || '/';
        
        // Event listener for hash changes
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash.substring(1) || '/';
            this.loadRoute();
        });
        
        // Initial load
        this.loadRoute();
    }
    
    loadRoute() {
        const route = this.routes[this.currentPath] || this.routes['/'];
        document.getElementById('app').innerHTML = route();
        
        // Add event listeners after content is loaded
        this.addEventListeners();
    }
    
    addEventListeners() {
        // Login form submission
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                const rememberMe = document.getElementById('rememberMe').checked;
                
                console.log('Login attempt:', { username, password, rememberMe });
                // Here you would typically send this data to a server
                
                // Simulate successful login and redirect
                alert('Login successful!');
                window.location.hash = '#/dashboard';
            });
        }
        
        // Signup form submission
        const signupForm = document.getElementById('signupForm');
        if (signupForm) {
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const newUsername = document.getElementById('newUsername').value;
                const newPassword = document.getElementById('newPassword').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                
                if (newPassword !== confirmPassword) {
                    alert('Passwords do not match!');
                    return;
                }
                
                console.log('Signup attempt:', { newUsername, newPassword });
                // Here you would typically send this data to a server
                
                // Simulate successful signup and redirect to login
                alert('Account created successfully!');
                window.location.hash = '#/login';
            });
        }
    }
    
    navigate(path) {
        window.location.hash = '#' + path;
    }
}

// Define routes
const routes = {
    '/': () => loginTemplate(),
    '/login': () => loginTemplate(),
    '/signup': () => signupTemplate(),
    '/dashboard': () => dashboardTemplate(),
    '/forgot-password': () => forgotPasswordTemplate()
};

// Templates
function loginTemplate() {
    return `
        <div class="welcome-section">
            <div class="logo">
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            </div>
            <h1 class="welcome-text">Hyy Cutie!! Welcome<br>Back!</h1>
        </div>
        <div class="login-section">
            <h2 class="login-header">Login</h2>
            <p class="login-subtext">Welcome back cutie! Please login to your account.</p>
            
            <form id="loginForm">
                <div class="form-group">
                    <label for="username"> Cute User Name</label>
                    <input type="text" id="username" placeholder="Cutiename@gmail.com" required>
                </div>
                
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="••••••••" required>
                </div>
                
                <div class="form-options">
                    <div class="remember-me">
                        <input type="checkbox" id="rememberMe">
                        <label for="rememberMe">Remember Me</label>
                    </div>
                    <a href="#/forgot-password" class="forgot-password">Forgot Password?</a>
                </div>
                
                <button type="submit" class="login-button">Login</button>
            </form>
            
            <p class="signup-text">New User? <a href="#/signup" class="signup-link">Signup</a></p>
        </div>
    `;
}

function signupTemplate() {
    return `
        <div class="welcome-section">
            <div class="logo">
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            </div>
            <h1 class="welcome-text"> Heyy Cutie!!Create<br>Account!</h1>
        </div>
        <div class="login-section">
            <h2 class="login-header">Sign Up</h2>
            <p class="login-subtext">Create a new account to get started.</p>
            
            <form id="signupForm">
                <div class="form-group">
                    <label for="newUsername">Email</label>
                    <input type="email" id="newUsername" placeholder="Cutename@gmail.com" required>
                </div>
                
                <div class="form-group">
                    <label for="newPassword">Password</label>
                    <input type="password" id="newPassword" placeholder="••••••••" required>
                </div>
                
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" placeholder="••••••••" required>
                </div>
                
                <button type="submit" class="login-button">Create Account</button>
            </form>
            
            <p class="signup-text">Already have an account? <a href="#/login" class="signup-link">Login</a></p>
        </div>
    `;
}

function dashboardTemplate() {
    return `
        <div class="welcome-section">
            <div class="logo">
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            </div>
            <h1 class="welcome-text">Hello My Beauty</h1>
        </div>
        <div class="login-section">
            <h2 class="login-header">Welcome to my World Cutie!</h2>
            <p class="login-subtext">Welcome to Dashboard </p>
            
            <p style="margin-bottom: 20px;">Heyy Dumb what are you looking nothing is there you can logout its just a login page. </p>
            
            <button class="login-button" onclick="window.location.hash = '#/login'">Logout</button>
        </div>
    `;
}

function forgotPasswordTemplate() {
    return `
        <div class="welcome-section">
            <div class="logo">
                <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            </div>
            <h1 class="welcome-text">Cutie Recover<br> Your Account</h1>
        </div>
        <div class="login-section">
            <h2 class="login-header">Forgot Password</h2>
            <p class="login-subtext">Please enter your email to receive a password reset link.</p>
            
            <form id="forgotPasswordForm">
                <div class="form-group">
                    <label for="recoveryEmail">Email</label>
                    <input type="email" id="recoveryEmail" placeholder="Cutename@gmail.com" required>
                </div>
                
                <button type="submit" class="login-button">Send Reset Link</button>
            </form>
            
            <p class="signup-text">Remember your password? <a href="#/login" class="signup-link">Back to Login</a></p>
        </div>
    `;
}

// Initialize router when document is ready
document.addEventListener('DOMContentLoaded', () => {
    const router = new Router(routes);
});