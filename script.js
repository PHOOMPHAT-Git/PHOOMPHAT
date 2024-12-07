document.addEventListener("DOMContentLoaded", () => {
    const categoryLinks = document.querySelectorAll(".sidebar a");
    const articles = document.querySelectorAll("article");
    const messageBox = document.getElementById("message");
  
    categoryLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const category = e.target.getAttribute("data-category");

        if (category === "all") {
          messageBox.textContent = "คุณเลือกหมวดหมู่ : แสดงทั้งหมด";
        } else if (category === "tech") {
          messageBox.textContent = "คุณเลือกหมวดหมู่ : สคริปต์";
        } else if (category === "travel") {
          messageBox.textContent = "คุณเลือกหมวดหมู่ : ชีวิต";
        }

        articles.forEach(article => {
                if (category === "all" || article.getAttribute("data-category") === category) {
                    article.style.display = "block";
                } else {
                    article.style.display = "none";
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const scriptContentElement = document.getElementById('scriptContent');
    const lifeContentElement = document.getElementById('lifeContent');

    Promise.all([
        fetch('script.txt').then(response => {
            if (!response.ok) {
                throw new Error('Could not load script.txt');
            }
            return response.text();
        }),
        fetch('life.txt').then(response => {
            if (!response.ok) {
                throw new Error('Could not load life.txt');
            }
            return response.text();
        })
    ])
    .then(([scriptData, lifeData]) => {
        scriptContentElement.innerHTML = scriptData;
        lifeContentElement.innerHTML = lifeData;
    })
    .catch(error => {
        console.error('Error:', error);
        scriptContentElement.textContent = 'ไม่สามารถโหลดข้อความได้';
        lifeContentElement.textContent = 'ไม่สามารถโหลดข้อความได้';
    });
});