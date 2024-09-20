document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.slide-in-image, .slide-in-text');
    
    // Áp dụng hiệu ứng cho cả ảnh và chữ
    elements.forEach((element, index) => {
        if (index % 1 === 0) {
            element.classList.add('slide-in-left'); // Chẵn: hiệu ứng từ trái sang
        } else {
            element.classList.add('slide-in-right'); // Lẻ: hiệu ứng từ phải sang
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show'); // Xóa lớp khi không còn trong viewport
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});