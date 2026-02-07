let homeworks = JSON.parse(localStorage.getItem('hw_tasks')) || [];

function showPage(p) {
    document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    document.getElementById('page-' + p).classList.add('active');
    document.getElementById('m-' + p).classList.add('active');
}

function handleSave() {
    const task = {
        id: Date.now(),
        subject: document.getElementById('subject').value,
        detail: document.getElementById('detail').value,
        start: document.getElementById('start-date').value,
        end: document.getElementById('end-date').value
    };

    if(!task.detail || !task.end) return alert("กรุณากรอกข้อมูลให้ครบถ้วนนะครับ");

    homeworks.push(task);
    localStorage.setItem('hw_tasks', JSON.stringify(homeworks));
    render();
    showPage('list');
}

function render() {
    const grid = document.getElementById('task-grid');
    grid.innerHTML = homeworks.map(t => `
        <div class="task-card">
            <span style="color: #4a90e2; font-size: 12px; font-weight: 700;">${t.subject}</span>
            <h3>${t.detail}</h3>
            <p>สั่งเมื่อ: ${t.start || '-'}</p>
            <p style="color: #e74c3c; font-weight: 700;">กำหนดส่ง: ${t.end}</p>
            <button onclick="removeTask(${t.id})" style="margin-top:20px; border:none; background:none; color:#bdc3c7; cursor:pointer; font-size:12px;">ลบรายการนี้</button>
        </div>
    `).join('');
    document.getElementById('total-count').innerText = `มีงานทั้งหมด ${homeworks.length} รายการ`;
}

function removeTask(id) {
    homeworks = homeworks.filter(x => x.id !== id);
    localStorage.setItem('hw_tasks', JSON.stringify(homeworks));
    render();
}

window.onload = render;