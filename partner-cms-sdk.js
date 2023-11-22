window.CmsSdk = {
    isOnLoginPage: function() {
        // Deteksi melalui URL
        if (window.location.href.includes('/login') || window.location.href.includes('/signin')) {
            console.log('Anda berada di halaman login (deteksi melalui URL).');
            return true;
        }
    
        // Deteksi melalui title halaman
        if (document.title.toLowerCase().includes('login')) {
            console.log('Anda berada di halaman login (deteksi melalui title halaman).');
            return true;
        }
    
        // Deteksi melalui elemen HTML khusus
        if (document.getElementById('loginForm') || document.querySelector('.login-container')) {
            console.log('Anda berada di halaman login (deteksi melalui elemen HTML khusus).');
            return true;
        }
    
        // Deteksi melalui isi elemen HTML
        if (document.body.textContent.toLowerCase().includes('masuk')) {
            console.log('Anda berada di halaman login (deteksi melalui isi elemen HTML).');
            return true;
        }
    
        // Deteksi melalui formulir login
        const loginForms = document.querySelectorAll('form[action*="/login"]');
        if (loginForms.length > 0) {
            console.log('Anda berada di halaman login (deteksi melalui formulir login).');
            return true;
        }
    
        console.log('Anda mungkin tidak berada di halaman login.');
        return false;
    }
};

console.log('CMS SDK loaded...');
