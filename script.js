// Función para manejar la navegación
document.addEventListener('DOMContentLoaded', () => {
    // Manejar botones de login y register
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            window.location.href = 'register.html';
        });
    }

    // Manejar botón de logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            logout();
        });
    }

    // Mostrar información del usuario en welcome.html
    const user = firebase.auth().currentUser;
    if (user) {
        document.getElementById('user-email').textContent = user.email;
        document.getElementById('user-last-login').textContent = new Date(user.metadata.lastSignInTime).toLocaleDateString();
    }

    // Manejar formulario de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            try {
                const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
                console.log('Inicio de sesión exitoso:', userCredential.user.email);
            } catch (error) {
                console.error('Error al iniciar sesión:', error.message);
                alert('Error: ' + error.message);
            }
        });
    }

    // Manejar formulario de registro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }

            try {
                const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
                console.log('Registro exitoso:', userCredential.user.email);
            } catch (error) {
                console.error('Error al registrarse:', error.message);
                alert('Error: ' + error.message);
            }
        });
    }
});
