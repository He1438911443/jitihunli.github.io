// 获取 Canvas 和上下文
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
const numStars = 150; // 星星数量

// 初始化星星
for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        alpha: Math.random(),
        speed: Math.random() * 0.05 + 0.01,
    });
}

// 绘制星星
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
    }
}

// 更新星星位置
function updateStars() {
    for (let star of stars) {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) {
            star.speed *= -1;
        }
    }
}

// 动画循环
function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate);
}
animate();

// 名字生成按钮逻辑
document.getElementById("generateFont").addEventListener("click", () => {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;

    if (name1 && name2) {
        document.getElementById(
            "outputText"
        ).textContent = `星辰体：${name1} ❤️ ${name2}`;
    } else {
        document.getElementById("outputText").textContent = "请输入完整名字！";
    }
});

// 动态调整爱心按钮位置
function adjustHeartButtonPosition() {
    const animationContainer = document.getElementById("animation-container");
    const heartButton = document.getElementById("heart-button");

    if (animationContainer && heartButton) {
        // 获取动图容器的位置和宽度
        const rect = animationContainer.getBoundingClientRect();

        // 动态设置按钮的位置
        heartButton.style.position = "absolute";
        heartButton.style.top = `${rect.top + rect.height / 2 - heartButton.offsetHeight / 2}px`; // 垂直居中
        heartButton.style.left = `${rect.right + 20}px`; // 动图右侧 20px
    }
}

// 初始调整按钮位置和监听窗口大小变化
window.addEventListener("resize", adjustHeartButtonPosition);
document.addEventListener("DOMContentLoaded", adjustHeartButtonPosition);

// 添加点击跳转逻辑
document.getElementById("heart-button").addEventListener("click", () => {
    window.location.href = "your-next-page.html"; // 替换为你的目标页面 URL
});
