document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const backendURL = "https://api.render.com/deploy/srv-curh5rl2ng1s73engt40?key=E0qEK3uJcOg"; // From Render/Heroku";

    
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    alert(result.message);
});
