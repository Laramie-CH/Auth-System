// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxAvQtiW8yIN3B75z8iAs7EIme4GrF4AM",
    authDomain: "fir-projects-c8009.firebaseapp.com",
    projectId: "fir-projects-c8009",
    storageBucket: "fir-projects-c8009.firebasestorage.app",
    messagingSenderId: "735284825938",
    appId: "1:735284825938:web:b1b91ab0c8d1209da7748b",
    measurementId: "G-3FNM5GPW76"
};

// Verificar si Firebase ya está inicializado
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

// Función para manejar el estado de autenticación
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('Usuario autenticado:', user.email);
        // Redirigir a welcome.html si está en login o register
        if (window.location.pathname.includes('login.html') || window.location.pathname.includes('register.html')) {
            window.location.href = 'welcome.html';
        }
    } else {
        console.log('No hay usuario autenticado');
        // Redirigir a login si está en welcome
        if (window.location.pathname.includes('welcome.html')) {
            window.location.href = 'login.html';
        }
    }
});

// Función para cerrar sesión
function logout() {
    auth.signOut().then(() => {
        console.log('Sesión cerrada');
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error('Error al cerrar sesión:', error);
        alert('Error al cerrar sesión: ' + error.message);
    });
}

// Función para cerrar sesión
function logout() {
    auth.signOut().then(() => {
        console.log('Sesión cerrada');
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error('Error al cerrar sesión:', error);
    });
}
